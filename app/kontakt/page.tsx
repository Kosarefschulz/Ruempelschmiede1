'use client'
import { useState, useEffect } from 'react';
import Icon from '../components/Icon';
import { useRecaptcha } from '../hooks/useRecaptcha';
import { trackContactFormSubmit } from '../components/GoogleAnalytics';

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    urgency: 'normal',
    propertySize: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [currentMonth, setCurrentMonth] = useState('');
  const [timeLeft, setTimeLeft] = useState(900);
  const [selectedQuickOption, setSelectedQuickOption] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
    const now = new Date();
    setCurrentMonth(months[now.getMonth()]);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { executeRecaptchaWithAction } = useRecaptcha();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Get reCAPTCHA token
      const recaptchaToken = await executeRecaptchaWithAction('contact_form');

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setFormSubmitted(true);
        trackContactFormSubmit(formData.service);
        
        setTimeout(() => {
          const successElement = document.getElementById('success-message');
          if (successElement) {
            successElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
      } else {
        setSubmitError(data.error || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
      }
    } catch (error) {
      setSubmitError('Ein Netzwerkfehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const quickEstimates = [
    { size: '1-Zimmer', price: '690€', icon: 'zimmer' },
    { size: '2-Zimmer', price: '990€', icon: 'zimmer' },
    { size: '3-Zimmer', price: '1.490€', icon: 'zimmer' },
    { size: '4+ Zimmer', price: 'ab 1.990€', icon: 'zimmer' },
  ];

  const trustSignals = [
    { number: '50.000+', text: 'Erfolgreiche Entrümpelungen', icon: 'award' },
    { number: '4.9/5', text: 'Sterne Bewertung', icon: 'star' },
    { number: '24h', text: 'Reaktionszeit garantiert', icon: 'blitz' },
    { number: '100%', text: 'Festpreisgarantie', icon: 'shield' },
  ];

  const contactMethods = [
    {
      icon: 'telefon',
      title: 'Sofort-Beratung',
      subtitle: 'Rufen Sie jetzt an',
      value: '015 755854945',
      href: 'tel:+4915755854945',
      bgColor: 'bg-gradient-to-br from-[#C73E3A] to-[#B02E2A]',
      popular: true,
      badge: 'Beliebteste Option',
      subtext: 'Kostenlose Erstberatung'
    },
    {
      icon: 'video',
      title: 'Video-Beratung',
      subtitle: 'Live-Besichtigung',
      value: 'Termin buchen',
      href: '#video-beratung',
      bgColor: 'bg-gradient-to-br from-[#2C4F5E] to-[#1E3A47]',
      popular: false,
      badge: 'NEU',
      subtext: 'Zoom, WhatsApp, FaceTime'
    },
    {
      icon: 'whatsapp',
      title: 'WhatsApp',
      subtitle: 'Schnell & einfach',
      value: 'Chat starten',
      href: 'https://wa.me/4952112000510?text=Hallo,%20ich%20interessiere%20mich%20für%20eine%20Entrümpelung',
      bgColor: 'bg-gradient-to-br from-green-600 to-green-700',
      popular: false,
      subtext: 'Antwort in < 30 Min'
    },
    {
      icon: 'email',
      title: 'E-Mail',
      subtitle: 'Detaillierte Anfrage',
      value: 'info@ruempelschmiede.de',
      href: 'mailto:info@ruempelschmiede.de',
      bgColor: 'bg-gradient-to-br from-gray-500 to-gray-600',
      popular: false,
      subtext: 'Mit Bildern möglich'
    }
  ];

  return (
    <div className="bg-gray-50 text-gray-700 overflow-x-hidden">
      {/* Emotionale Aktion Bar */}
      <div className="bg-gradient-to-r from-[#C73E3A] to-[#B02E2A] text-white py-2 text-center sticky top-0 z-40">
        <p className="text-sm font-medium px-4">
          <Icon name="blitz" size={20} className="inline-block mr-2" color="white" />
          <strong>{currentMonth}-Aktion:</strong> <strong>15% Rabatt</strong> auf alle Entrümpelungen! 
          Nur noch <span className="font-mono font-bold bg-white/20 px-2 py-1 rounded">{formatTime(timeLeft)}</span> verfügbar
        </p>
      </div>

      {/* Hero Section - Emotional & Trust-Building */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#1a2b36] via-[#2C4F5E] to-[#1E3A47]">
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-6 py-2 mb-6 text-sm font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
              IHR VERTRAUENSPARTNER SEIT 2009
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Wir sind <span className="text-[#C73E3A]">persönlich</span> für Sie da<br />
              
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Eine Entrümpelung ist mehr als nur das Ausräumen von Gegenständen. 
              Wir verstehen Ihre Situation und begleiten Sie mit Einfühlungsvermögen und Professionalität.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {trustSignals.map((signal, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center transform hover:scale-105 transition-all"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <Icon name={signal.icon} size={24} color="white" />
                  </div>
                  <div className="text-2xl font-bold text-[#C73E3A]">{signal.number}</div>
                  <div className="text-sm text-white/80">{signal.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hauptkontaktbereich */}
      <section className="py-16 md:py-20 -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Kontaktmethoden */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-center text-[#2C4F5E] mb-4">
              So erreichen Sie uns am schnellsten
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Wählen Sie den Weg, der für Sie am bequemsten ist. 
              Wir sind auf allen Kanälen für Sie erreichbar.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className={`relative ${method.bgColor} text-white rounded-2xl p-6 text-center transform hover:scale-105 transition-all shadow-lg group`}
                >
                  {(method.popular || method.badge === 'NEU') && (
                    <span className={`absolute -top-3 left-1/2 transform -translate-x-1/2 ${method.badge === 'NEU' ? 'bg-green-500' : 'bg-yellow-400'} text-gray-800 px-4 py-1 rounded-full text-xs font-bold`}>
                      {method.badge}
                    </span>
                  )}
                  
                  <div className="w-16 h-16 bg-white/20 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={method.icon} size={32} color="white" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{method.title}</h3>
                  <p className="text-sm opacity-90 mb-2">{method.subtitle}</p>
                  <p className="text-lg font-semibold">{method.value}</p>
                  <p className="text-xs opacity-80 mt-2">{method.subtext}</p>
                  
                  {method.popular && (
                    <div className="mt-3">
                      <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs animate-pulse">
                        Am schnellsten zum Angebot →
                      </span>
                    </div>
                  )}
                </a>
              ))}
            </div>

            {/* Öffnungszeiten */}
            <div className="mt-8 text-center bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-[#2C4F5E] mb-2">Unsere Erreichbarkeit</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-semibold">Mo-Fr:</span> 7:00 - 19:00 Uhr
                </div>
                <div>
                  <span className="font-semibold">Samstag:</span> 8:00 - 16:00 Uhr
                </div>
                <div>
                  <span className="font-semibold">Notfälle:</span> 24/7 erreichbar
                </div>
              </div>
            </div>
          </div>

          {/* Formular und Seitenleiste */}
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Kontaktformular */}
            <div className="lg:col-span-7">
              <div id="contact-form-section" className="bg-white rounded-3xl shadow-xl p-8 transition-all duration-300">
                {/* Emotionaler Einstieg */}
                <div className="mb-8 text-center">
                  <h2 className="text-3xl font-bold text-[#2C4F5E] mb-3">
                    Lassen Sie uns gemeinsam eine Lösung finden
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Jede Situation ist einzigartig. Erzählen Sie uns von Ihrem Anliegen - 
                    wir finden den besten Weg für Sie. Keine Verpflichtungen, nur ehrliche Beratung.
                  </p>
                </div>

                {/* Progress Steps */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    {[
                      { step: 1, label: 'Kontakt' },
                      { step: 2, label: 'Details' },
                      { step: 3, label: 'Fertig' }
                    ].map((item) => (
                      <div key={item.step} className={`flex items-center ${item.step < 3 ? 'flex-1' : ''}`}>
                        <div className={`w-10 h-10 ${currentStep >= item.step ? 'bg-[#C73E3A]' : 'bg-gray-300'} text-white rounded-full flex items-center justify-center font-bold transition-colors`}>
                          {item.step}
                        </div>
                        <span className={`ml-2 ${currentStep >= item.step ? 'text-[#2C4F5E] font-semibold' : 'text-gray-500'}`}>
                          {item.label}
                        </span>
                        {item.step < 3 && (
                          <div className={`flex-1 h-1 mx-3 ${currentStep > item.step ? 'bg-[#C73E3A]' : 'bg-gray-200'} transition-colors`}></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trust Signal */}
                <div className="bg-[#C73E3A]/10 rounded-lg p-4 mb-6 flex items-center">
                  <div className="flex -space-x-2 mr-4">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-10 h-10 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">
                        {['MK', 'TB', 'SH', 'RM'][i-1]}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-700">
                    <strong>127 Personen</strong> haben heute bereits angefragt
                  </p>
                </div>

                {formSubmitted ? (
                  <div id="success-message" className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center transform transition-all duration-500">
                    <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Icon name="check" size={40} color="#166534" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-800 mb-2">
                      Vielen Dank für Ihr Vertrauen!
                    </h3>
                    <p className="text-green-700 mb-4">
                      Wir haben Ihre Anfrage erhalten und melden uns innerhalb der nächsten 2 Stunden bei Ihnen.
                    </p>
                    <div className="bg-white rounded-lg p-4 text-left">
                      <p className="font-semibold text-gray-800 mb-2">Was passiert als nächstes?</p>
                      <ol className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start">
                          <Icon name="check" size={16} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Wir prüfen Ihre Anfrage und erstellen ein erstes Angebot</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="check" size={16} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Ein Experte ruft Sie zur Terminvereinbarung an</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="check" size={16} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Kostenlose Besichtigung vor Ort</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="check" size={16} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Verbindliches Festpreisangebot ohne versteckte Kosten</span>
                        </li>
                      </ol>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {/* Schnellkalkulation */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Für eine erste Einschätzung: Wie groß ist Ihre Immobilie?
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {quickEstimates.map((estimate) => (
                          <button
                            key={estimate.size}
                            type="button"
                            onClick={() => {
                              setSelectedQuickOption(estimate.size);
                              setFormData({ ...formData, propertySize: estimate.size });
                            }}
                            className={`p-4 rounded-lg border-2 transition-all ${
                              selectedQuickOption === estimate.size
                                ? 'border-[#C73E3A] bg-[#C73E3A]/10'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className="w-8 h-8 bg-gray-200 rounded mx-auto mb-1 flex items-center justify-center">
                              <Icon name={estimate.icon} size={20} color="#4B5563" />
                            </div>
                            <div className="font-semibold text-sm">{estimate.size}</div>
                            <div className="text-xs text-[#C73E3A] font-bold">ab {estimate.price}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Formular Felder */}
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Ihr Name*
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#C73E3A] focus:border-transparent transition-all"
                            required
                            placeholder="Max Mustermann"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Telefonnummer*
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#C73E3A] focus:border-transparent transition-all"
                            required
                            placeholder="0170 123456"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          E-Mail-Adresse*
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#C73E3A] focus:border-transparent transition-all"
                          required
                          placeholder="ihre@email.de"
                        />
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                          Welche Leistung benötigen Sie?*
                        </label>
                        <select
                          name="service"
                          id="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#C73E3A] focus:border-transparent transition-all"
                          required
                        >
                          <option value="">Bitte wählen...</option>
                          <option value="Haushaltsauflösung">Haushaltsauflösung</option>
                          <option value="Wohnungsauflösung">Wohnungsauflösung</option>
                          <option value="Nachlassentrümpelung">Nachlassentrümpelung</option>
                          <option value="Messie-Wohnung">Messie-Wohnung</option>
                          <option value="Gewerbeauflösung">Gewerbeauflösung</option>
                          <option value="Kellerentrümpelung">Keller/Dachboden</option>
                          <option value="Express-Service">Express (48h)</option>
                          <option value="Sonstiges">Sonstiges</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                          Wie dringend ist Ihr Anliegen?
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { value: 'normal', label: 'Flexibel', desc: 'In 2-4 Wochen' },
                            { value: 'dringend', label: 'Dringend', desc: 'Diese Woche' },
                            { value: 'sofort', label: 'Sofort!', desc: 'Innerhalb 48h', highlight: true }
                          ].map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => setFormData({ ...formData, urgency: option.value })}
                              className={`p-3 rounded-lg border-2 transition-all ${
                                formData.urgency === option.value
                                  ? 'border-[#C73E3A] bg-[#C73E3A]/10'
                                  : 'border-gray-200 hover:border-gray-300'
                              } ${option.highlight ? 'relative' : ''}`}
                            >
                              {option.highlight && (
                                <span className="absolute -top-2 -right-2 bg-[#C73E3A] text-white text-xs px-2 py-1 rounded-full">
                                  24/7
                                </span>
                              )}
                              <div className="font-semibold">{option.label}</div>
                              <div className="text-xs text-gray-600">{option.desc}</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Ihre Nachricht (optional)
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={3}
                          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#C73E3A] focus:border-transparent transition-all"
                          placeholder="Erzählen Sie uns mehr über Ihre Situation..."
                        />
                      </div>

                      {submitError && (
                        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                          {submitError}
                        </div>
                      )}
                      
                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-[#C73E3A] to-[#B02E2A] text-white py-4 px-6 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                          <span className="flex items-center justify-center">
                            {isSubmitting ? (
                              <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Wird gesendet...
                              </>
                            ) : (
                              <>
                                Jetzt kostenloses Angebot erhalten
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                              </>
                            )}
                          </span>
                        </button>
                        
                        <div className="flex items-center justify-center mt-3 space-x-4 text-xs text-gray-500">
                          <span className="flex items-center">
                            <span className="w-4 h-4 bg-gray-300 rounded mr-1"></span>
                            SSL-verschlüsselt
                          </span>
                          <span className="flex items-center">
                            <span className="w-4 h-4 bg-gray-300 rounded mr-1"></span>
                            100% kostenlos
                          </span>
                          <span className="flex items-center">
                            <span className="w-4 h-4 bg-gray-300 rounded mr-1"></span>
                            Unverbindlich
                          </span>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Seitenleiste */}
            <div className="lg:col-span-5 space-y-8">
              {/* Garantien */}
              <div className="bg-gradient-to-br from-[#2C4F5E] to-[#1E3A47] text-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Unsere Versprechen an Sie
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: 'euro', title: '100% Festpreisgarantie', desc: 'Keine versteckten Kosten' },
                    { icon: 'blitz', title: '24h Rückmeldung', desc: 'Garantierte schnelle Antwort' },
                    { icon: 'shield', title: 'Voll versichert', desc: 'Bis 5 Mio. Euro Deckung' },
                    { icon: 'leaf', title: 'Umweltgerecht', desc: 'Zertifizierte Entsorgung' },
                    { icon: 'eye', title: 'Diskret & vertraulich', desc: 'Absolute Verschwiegenheit' }
                  ].map((guarantee, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={guarantee.icon} size={20} color="white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{guarantee.title}</h4>
                        <p className="text-sm opacity-80">{guarantee.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kundenstimmen */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-[#2C4F5E] mb-6">
                  Das sagen unsere Kunden
                </h3>
                <div className="space-y-4">
                  {[
                    { name: 'Maria K.', time: 'vor 2 Tagen', text: 'Sehr einfühlsam und professionell. Haben mir in einer schweren Zeit sehr geholfen.' },
                    { name: 'Thomas B.', time: 'vor 5 Tagen', text: 'Nach dem Tod meiner Mutter haben sie alles diskret und respektvoll geregelt.' },
                    { name: 'Sabine M.', time: 'vor 1 Woche', text: 'Trotz Messie-Situation kein Urteil, nur Verständnis und professionelle Hilfe.' }
                  ].map((review, index) => (
                    <div key={index} className="border-l-4 border-[#C73E3A] pl-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold">{review.name}</span>
                        <span className="text-xs text-gray-500">{review.time}</span>
                      </div>
                      <div className="flex mb-1">
                        {[1, 2, 3, 4, 5].map(star => (
                          <Icon key={star} name="star" size={16} className="mr-1" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 italic">"{review.text}"</p>
                    </div>
                  ))}
                </div>
                <a href="/bewertungen" className="block text-center text-[#C73E3A] font-semibold mt-4 hover:underline">
                  Alle 2.847 Bewertungen ansehen <Icon name="arrow-right" size={16} className="inline-block ml-1" />
                </a>
              </div>

              {/* Notfall-Hotline */}
              <div className="bg-gradient-to-br from-[#C73E3A] to-[#B02E2A] text-white rounded-3xl p-6 shadow-xl text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <Icon name="telefon" size={32} color="white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Notfall-Hotline 24/7</h3>
                <p className="text-3xl font-bold mb-2">015 755854945</p>
                <p className="text-sm opacity-90">Für dringende Fälle sind wir rund um die Uhr erreichbar</p>
              </div>

              {/* Video-Beratung */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-6 shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-200 rounded-lg mr-3 flex items-center justify-center">
                    <Icon name="video" size={24} color="#166534" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">NEU: Video-Besichtigung</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Sparen Sie Zeit! Zeigen Sie uns Ihre Räume per Video und erhalten Sie sofort eine Einschätzung.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <Icon name="check" size={16} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Keine Anfahrt nötig</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="check" size={16} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Sofortige Preiseinschätzung</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="check" size={16} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Flexibel auch abends</span>
                  </li>
                </ul>
                <button className="inline-block mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-all transform hover:scale-105 w-full">
                  Jetzt Video-Termin buchen <Icon name="arrow-right" size={16} className="inline-block ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#2C4F5E] mb-12">
            Häufig gestellte Fragen
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Ist die Anfrage wirklich kostenlos und unverbindlich?',
                a: 'Ja, absolut! Die Anfrage, Beratung und auch die Vor-Ort-Besichtigung sind komplett kostenlos. Sie gehen keine Verpflichtung ein.'
              },
              {
                q: 'Wie schnell können Sie mit der Entrümpelung beginnen?',
                a: 'In dringenden Fällen können wir innerhalb von 48 Stunden beginnen. Normalerweise vereinbaren wir einen Termin innerhalb von 3-7 Tagen.'
              },
              {
                q: 'Was passiert mit meinen persönlichen Daten?',
                a: 'Ihre Daten werden streng vertraulich behandelt und nur zur Bearbeitung Ihrer Anfrage verwendet. Wir geben keine Daten an Dritte weiter.'
              },
              {
                q: 'Arbeiten Sie auch am Wochenende?',
                a: 'Ja, wir sind flexibel und arbeiten auch samstags. In Notfällen sind wir sogar sonntags für Sie da.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-lg text-[#2C4F5E] mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Abschluss CTA */}
      <section className="py-16 bg-gradient-to-br from-[#2C4F5E] to-[#1E3A47] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Sie sind nicht allein - wir sind für Sie da
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Egal ob Nachlass, Umzug oder schwierige Lebenssituation - 
            wir begleiten Sie mit Verständnis und Professionalität.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+4915755854945" className="bg-white text-[#2C4F5E] hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
              <span className="flex items-center justify-center">
                <Icon name="telefon" size={24} className="mr-2" />
                Jetzt anrufen: 015 755854945
              </span>
            </a>
            <a href="#contact-form-section" className="bg-[#C73E3A] hover:bg-[#B02E2A] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
              Zum Kontaktformular <Icon name="arrow-right" size={16} className="inline-block ml-1 rotate-[-90deg]" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}