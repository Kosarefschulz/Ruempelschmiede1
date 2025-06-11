# Deployment Instructions - Rümpelschmiede

## Environment Variables

Kopieren Sie `.env.local.example` zu `.env.local` und füllen Sie alle erforderlichen Werte aus:

```bash
cp .env.local.example .env.local
```

### Erforderliche Environment Variables:

1. **Email Service (Resend)**
   - `RESEND_API_KEY`: API-Schlüssel von [Resend](https://resend.com)
   - `CONTACT_EMAIL`: E-Mail-Adresse für Kontaktformular (Standard: info@ruempelschmiede.de)

2. **Google reCAPTCHA v3**
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`: Site Key von Google reCAPTCHA
   - `RECAPTCHA_SECRET_KEY`: Secret Key von Google reCAPTCHA

3. **Google Analytics**
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Google Analytics 4 Measurement ID (Format: G-XXXXXXXXXX)

4. **Site Configuration**
   - `NEXT_PUBLIC_SITE_URL`: Haupt-Domain (https://ruempelschmiede.de)

## Multi-Domain Setup

Die Website unterstützt 4 Domains:
- ruempelschmiede.de (Haupt-Domain)
- ruempelschmiede.com
- rümpel-schmiede.de
- rümpel-schmiede.com

### Vercel Deployment für Multi-Domain:

1. **Domain Setup in Vercel:**
   ```
   1. Gehen Sie zu Ihrem Projekt in Vercel
   2. Settings → Domains
   3. Fügen Sie alle 4 Domains hinzu
   4. Setzen Sie ruempelschmiede.de als Primary Domain
   ```

2. **DNS Konfiguration:**
   - Für jede Domain: A-Record oder CNAME zu Vercel
   - Vercel handled automatisch SSL-Zertifikate

3. **Redirects konfigurieren (vercel.json):**
   ```json
   {
     "redirects": [
       {
         "source": "/:path*",
         "has": [
           {
             "type": "host",
             "value": "ruempelschmiede.com"
           }
         ],
         "destination": "https://ruempelschmiede.de/:path*",
         "permanent": true
       },
       {
         "source": "/:path*",
         "has": [
           {
             "type": "host",
             "value": "rümpel-schmiede.de"
           }
         ],
         "destination": "https://ruempelschmiede.de/:path*",
         "permanent": true
       },
       {
         "source": "/:path*",
         "has": [
           {
             "type": "host",
             "value": "rümpel-schmiede.com"
           }
         ],
         "destination": "https://ruempelschmiede.de/:path*",
         "permanent": true
       }
     ]
   }
   ```

## Build & Deployment

### Lokaler Build:
```bash
npm install
npm run build
```

### Vercel Deployment:
```bash
vercel --prod
```

### Wichtige Hinweise:

1. **Sitemap Generation:**
   - Die Sitemap wird automatisch beim Build erstellt
   - Enthält alle 4 Domains als alternate refs
   - Verfügbar unter: /sitemap.xml

2. **Robots.txt:**
   - Wird automatisch generiert
   - Enthält Links zu allen Domain-Sitemaps

3. **SEO Optimierungen:**
   - Strukturierte Daten (JSON-LD) für LocalBusiness
   - OpenGraph und Twitter Cards konfiguriert
   - Meta Tags mit dynamischem Title Template

4. **Performance Optimierungen:**
   - Next.js Image Component für alle Bilder
   - Lazy Loading für Bilder
   - Google Analytics mit Web Vitals Tracking

5. **Cookie Consent:**
   - DSGVO-konform mit Opt-in für Analytics
   - Cookies werden nur nach Zustimmung gesetzt

## Testing vor Go-Live

1. **Funktionalität testen:**
   - [ ] Kontaktformular mit echten Daten
   - [ ] reCAPTCHA funktioniert
   - [ ] WhatsApp Button öffnet Chat
   - [ ] Cookie Banner funktioniert
   - [ ] Alle Seiten laden korrekt

2. **SEO Check:**
   - [ ] Sitemap erreichbar unter /sitemap.xml
   - [ ] Robots.txt erreichbar unter /robots.txt
   - [ ] Meta Tags korrekt auf allen Seiten
   - [ ] Strukturierte Daten validieren mit [Google's Tool](https://search.google.com/test/rich-results)

3. **Performance:**
   - [ ] Lighthouse Score > 90
   - [ ] Alle Bilder optimiert
   - [ ] Core Web Vitals im grünen Bereich

## Support & Wartung

Bei Problemen oder Fragen:
- Logs in Vercel Dashboard prüfen
- Environment Variables überprüfen
- Build-Fehler in der Konsole analysieren