import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy_key_for_build');

// Rate limiting map
const rateLimitMap = new Map();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5;

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, []);
  }

  const requests = rateLimitMap.get(ip);
  const recentRequests = requests.filter((timestamp: number) => now - timestamp < windowMs);
  
  if (recentRequests.length >= maxRequests) {
    return false;
  }

  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);
  return true;
}

export async function POST(request: Request) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'anonymous';
    
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, message, service, recaptchaToken } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Bitte füllen Sie alle Pflichtfelder aus.' },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA
    if (recaptchaToken) {
      const recaptchaResponse = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
        { method: 'POST' }
      );

      const recaptchaData = await recaptchaResponse.json();

      if (!recaptchaData.success || recaptchaData.score < 0.5) {
        return NextResponse.json(
          { error: 'reCAPTCHA-Verifizierung fehlgeschlagen.' },
          { status: 400 }
        );
      }
    }

    // Prepare email content
    const emailHtml = `
      <h2>Neue Kontaktanfrage von ruempelschmiede.de</h2>
      
      <h3>Kontaktdaten:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>E-Mail:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${phone || 'Nicht angegeben'}</p>
      ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
      
      <h3>Nachricht:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
      
      <hr>
      <p style="color: #666; font-size: 12px;">
        Diese Nachricht wurde automatisch von der Webseite ruempelschmiede.de gesendet.
      </p>
    `;

    // Send email
    const { data, error } = await resend.emails.send({
      from: 'Rümpelschmiede Webseite <onboarding@resend.dev>', // This will be changed to info@ruempelschmiede.de after domain verification
      to: process.env.CONTACT_EMAIL || 'info@ruempelschmiede.de',
      replyTo: email,
      subject: `Neue Anfrage von ${name} - ${service || 'Allgemeine Anfrage'}`,
      html: emailHtml,
    });

    if (error) {
      console.error('Email send error:', error);
      return NextResponse.json(
        { error: 'Fehler beim Senden der E-Mail. Bitte versuchen Sie es später erneut.' },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    const confirmationHtml = `
      <h2>Vielen Dank für Ihre Anfrage!</h2>
      
      <p>Sehr geehrte/r ${name},</p>
      
      <p>wir haben Ihre Anfrage erhalten und werden uns schnellstmöglich bei Ihnen melden.</p>
      
      <p>In der Regel antworten wir innerhalb von 24 Stunden.</p>
      
      <h3>Ihre Anfrage:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
      
      <p>Mit freundlichen Grüßen<br>
      Ihr Rümpelschmiede Team</p>
      
      <hr>
      <p style="color: #666; font-size: 12px;">
        Rümpelschmiede<br>
        Tel: 0521 / 1200 510<br>
        E-Mail: info@ruempelschmiede.de<br>
        Web: www.ruempelschmiede.de
      </p>
    `;

    await resend.emails.send({
      from: 'Rümpelschmiede <onboarding@resend.dev>',
      to: email,
      subject: 'Ihre Anfrage bei Rümpelschmiede',
      html: confirmationHtml,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns schnellstmöglich bei Ihnen!' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Ein unerwarteter Fehler ist aufgetreten.' },
      { status: 500 }
    );
  }
}