'use client';

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { motion, AnimatePresence } from 'framer-motion';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = Cookies.get('cookie-consent');
    const savedPreferences = Cookies.get('cookie-preferences');
    
    if (!consent) {
      setShowBanner(true);
    } else if (savedPreferences) {
      const prefs = JSON.parse(savedPreferences);
      setPreferences(prefs);
      applyPreferences(prefs);
    }
  }, []);

  const applyPreferences = (prefs: CookiePreferences) => {
    // Enable/disable Google Analytics based on preferences
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: prefs.analytics ? 'granted' : 'denied',
        ad_storage: prefs.marketing ? 'granted' : 'denied',
      });
    }
  };

  const acceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    setPreferences(allAccepted);
    Cookies.set('cookie-consent', 'all', { expires: 365 });
    Cookies.set('cookie-preferences', JSON.stringify(allAccepted), { expires: 365 });
    applyPreferences(allAccepted);
    setShowBanner(false);
  };

  const acceptSelected = () => {
    Cookies.set('cookie-consent', 'selected', { expires: 365 });
    Cookies.set('cookie-preferences', JSON.stringify(preferences), { expires: 365 });
    applyPreferences(preferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const rejectAll = () => {
    const rejected = { necessary: true, analytics: false, marketing: false };
    setPreferences(rejected);
    Cookies.set('cookie-consent', 'rejected', { expires: 365 });
    Cookies.set('cookie-preferences', JSON.stringify(rejected), { expires: 365 });
    applyPreferences(rejected);
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-2xl border-t border-gray-200"
        >
          <div className="max-w-7xl mx-auto p-4 sm:p-6">
            {!showSettings ? (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-[#2C4F5E] mb-1">
                    Diese Website verwendet Cookies
                  </h3>
                  <p className="text-sm text-gray-600">
                    Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und unsere Dienste zu optimieren.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  <button
                    onClick={acceptAll}
                    className="px-6 py-2 bg-[#C73E3A] text-white rounded-lg hover:bg-[#B02E2A] transition-colors font-medium"
                  >
                    Alle akzeptieren
                  </button>
                  <button
                    onClick={rejectAll}
                    className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                  >
                    Nur notwendige
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="px-6 py-2 border-2 border-[#2C4F5E] text-[#2C4F5E] rounded-lg hover:bg-[#2C4F5E] hover:text-white transition-colors font-medium"
                  >
                    Einstellungen
                  </button>
                </div>
              </div>
            ) : (
              <div className="max-w-4xl mx-auto">
                <h3 className="text-xl font-semibold text-[#2C4F5E] mb-4">
                  Cookie-Einstellungen
                </h3>
                
                <div className="space-y-4 mb-6">
                  {/* Necessary Cookies */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-[#2C4F5E]">Notwendige Cookies</h4>
                      <div className="text-sm text-gray-500">Immer aktiv</div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
                    </p>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-[#2C4F5E]">Analyse-Cookies</h4>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.analytics}
                          onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#C73E3A]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C73E3A]"></div>
                      </label>
                    </div>
                    <p className="text-sm text-gray-600">
                      Helfen uns zu verstehen, wie Besucher mit unserer Website interagieren (Google Analytics).
                    </p>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-[#2C4F5E]">Marketing-Cookies</h4>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.marketing}
                          onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#C73E3A]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C73E3A]"></div>
                      </label>
                    </div>
                    <p className="text-sm text-gray-600">
                      Werden verwendet, um Werbung relevanter zu gestalten und die Effektivität von Kampagnen zu messen.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 justify-end">
                  <button
                    onClick={() => setShowSettings(false)}
                    className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors font-medium"
                  >
                    Abbrechen
                  </button>
                  <button
                    onClick={acceptSelected}
                    className="px-6 py-2 bg-[#C73E3A] text-white rounded-lg hover:bg-[#B02E2A] transition-colors font-medium"
                  >
                    Auswahl bestätigen
                  </button>
                </div>
              </div>
            )}

            <div className="mt-4 text-center">
              <a
                href="/datenschutz"
                className="text-xs text-gray-500 hover:text-gray-700 underline"
              >
                Datenschutzerklärung
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}