'use client';

import { useState, useEffect, useRef } from 'react';

const BASE_PRICE_PER_CUBIC_METER = 85;
const DISCOUNT_PERCENTAGE = 15;

interface BuildingType {
  id: string;
  name: string;
  icon: string;
  description: string;
  estimatedM3: number;
}

interface FurnitureItem {
  name: string;
  m3: number;
  icon: string;
  popular?: boolean;
}

interface CustomerData {
  name: string;
  email: string;
  phone: string;
  urgency: string;
}

const buildingTypes: BuildingType[] = [
  { id: 'wohnung', name: 'Wohnung', icon: '🏠', description: 'Komplette Wohnungsauflösung', estimatedM3: 15 },
  { id: 'haus', name: 'Haus', icon: '🏡', description: 'Haushaltsauflösung inkl. Keller', estimatedM3: 30 },
  { id: 'keller', name: 'Keller/Dachboden', icon: '🧱', description: 'Einzelne Räume', estimatedM3: 8 },
  { id: 'buero', name: 'Büro/Gewerbe', icon: '🏢', description: 'Geschäftsauflösung', estimatedM3: 20 },
];

// Reduzierte, intuitivere Möbelauswahl
const furnitureData: FurnitureItem[] = [
  // Große Möbel (meist ausgewählt)
  { name: 'Sofa/Couch', m3: 2.0, icon: '🛋️', popular: true },
  { name: 'Bett (komplett)', m3: 2.5, icon: '🛏️', popular: true },
  { name: 'Kleiderschrank', m3: 2.0, icon: '🚪', popular: true },
  { name: 'Esstisch mit Stühlen', m3: 2.0, icon: '🪑' },
  { name: 'Schrankwand/Regal', m3: 2.5, icon: '📚' },
  
  // Elektrogeräte
  { name: 'Kühlschrank', m3: 0.8, icon: '❄️', popular: true },
  { name: 'Waschmaschine', m3: 0.6, icon: '🌊', popular: true },
  { name: 'Fernseher/Elektronik', m3: 0.3, icon: '📺' },
  
  // Kleinmöbel
  { name: 'Kommode/Sideboard', m3: 0.8, icon: '🗄️' },
  { name: 'Schreibtisch', m3: 1.0, icon: '💻' },
  { name: 'Sessel/Stuhl', m3: 0.5, icon: '🪑' },
  { name: 'Nachttisch', m3: 0.3, icon: '🛏️' },
  
  // Sonstiges
  { name: 'Umzugskartons (10 Stk)', m3: 1.0, icon: '📦', popular: true },
  { name: 'Matratze', m3: 0.8, icon: '🛏️' },
  { name: 'Teppiche/Böden', m3: 0.5, icon: '🏠' },
  { name: 'Gartengeräte/Werkzeug', m3: 1.0, icon: '🔧' },
  { name: 'Fahrrad/Sportgeräte', m3: 0.8, icon: '🚲' },
  { name: 'Sperrmüll/Diverses', m3: 2.0, icon: '♻️', popular: true },
];

export default function EntruempelungsRechner() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedBuildingType, setSelectedBuildingType] = useState('');
  const [selectedFurniture, setSelectedFurniture] = useState<Record<string, number>>({});
  const [totalM3, setTotalM3] = useState(0);
  const [customerData, setCustomerData] = useState<CustomerData>({
    name: '',
    email: '',
    phone: '',
    urgency: 'normal'
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [timeLeft, setTimeLeft] = useState(900);
  const containerRef = useRef<HTMLDivElement>(null);

  // Timer für Rabatt
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

  // Calculate total m3
  useEffect(() => {
    const total = Object.entries(selectedFurniture).reduce((sum, [itemName, quantity]) => {
      const item = furnitureData.find(f => f.name === itemName);
      return sum + (item ? item.m3 * quantity : 0);
    }, 0);
    setTotalM3(Math.round(total * 100) / 100);
  }, [selectedFurniture]);

  // Price calculation with discount
  const basePrice = totalM3 * BASE_PRICE_PER_CUBIC_METER;
  const distanceSurcharge = 60;
  const regularPrice = basePrice + distanceSurcharge;
  const discountAmount = regularPrice * (DISCOUNT_PERCENTAGE / 100);
  const finalPrice = regularPrice - discountAmount;

  const handleBuildingSelect = (building: BuildingType) => {
    setSelectedBuildingType(building.id);
    // Pre-fill with estimated items
    const prefilledItems: Record<string, number> = {};
    if (building.estimatedM3 > 20) {
      prefilledItems['Sofa/Couch'] = 1;
      prefilledItems['Bett (komplett)'] = 1;
      prefilledItems['Kleiderschrank'] = 1;
      prefilledItems['Umzugskartons (10 Stk)'] = 2;
    }
    setSelectedFurniture(prefilledItems);
    setCurrentStep(2);
    scrollToTop();
  };

  const handleFurnitureChange = (itemName: string, delta: number) => {
    setSelectedFurniture(prev => {
      const currentQuantity = prev[itemName] || 0;
      const newQuantity = Math.max(0, currentQuantity + delta);
      
      if (newQuantity === 0) {
        const { [itemName]: removed, ...rest } = prev;
        return rest;
      }
      return { ...prev, [itemName]: newQuantity };
    });
  };

  const scrollToTop = () => {
    containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const proceedToStep3 = () => {
    if (totalM3 === 0) {
      alert('Bitte wählen Sie mindestens einen Gegenstand aus.');
      return;
    }
    setCurrentStep(3);
    scrollToTop();
  };

  const handleSubmit = () => {
    if (!customerData.name || !customerData.email || !customerData.phone) {
      alert('Bitte füllen Sie alle Pflichtfelder aus.');
      return;
    }
    setShowSuccess(true);
    scrollToTop();
  };

  const resetCalculator = () => {
    setCurrentStep(1);
    setSelectedBuildingType('');
    setSelectedFurniture({});
    setCustomerData({ name: '', email: '', phone: '', urgency: 'normal' });
    setShowSuccess(false);
    scrollToTop();
  };

  return (
    <div className="bg-gray-50 min-h-screen" ref={containerRef}>
      {/* Sticky Discount Banner */}
      <div className="bg-gradient-to-r from-[#C73E3A] to-[#B02E2A] text-white py-2 text-center sticky top-0 z-40">
        <p className="text-sm font-medium">
          🔥 Sonderaktion: <strong>{DISCOUNT_PERCENTAGE}% Rabatt</strong> auf alle Entrümpelungen! 
          Nur noch <span className="font-mono font-bold">{formatTime(timeLeft)}</span> verfügbar
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a2b36] via-[#2C4F5E] to-[#1E3A47] text-white py-16 md:py-20">
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-6 py-2 mb-6 text-sm font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            KOSTENLOSER PREISRECHNER - KEINE VERSTECKTEN KOSTEN
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            In <span className="text-[#C73E3A]">60 Sekunden</span> zum<br />
            transparenten Festpreis
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto mb-8">
            Berechnen Sie sofort Ihre Entrümpelungskosten - 
            mit {DISCOUNT_PERCENTAGE}% Online-Rabatt!
          </p>

          {/* Progress Steps */}
          <div className="flex justify-center items-center space-x-8 mt-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                  currentStep >= step 
                    ? 'bg-[#C73E3A] text-white' 
                    : 'bg-white/20 text-white/60'
                }`}>
                  {currentStep > step ? '✓' : step}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-1 ml-2 transition-all ${
                    currentStep > step ? 'bg-[#C73E3A]' : 'bg-white/20'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="max-w-4xl mx-auto">
          {/* Step 1: Building Type */}
          {currentStep === 1 && (
            <div className="bg-white rounded-3xl shadow-2xl p-8 transform transition-all duration-500">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#2C4F5E] mb-4">
                  Was möchten Sie entrümpeln?
                </h2>
                <p className="text-gray-600">
                  Wählen Sie den Objekttyp für eine erste Preisschätzung
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {buildingTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => handleBuildingSelect(type)}
                    className="group relative p-8 rounded-2xl border-2 border-gray-200 hover:border-[#C73E3A] hover:shadow-xl transform hover:scale-105 transition-all bg-white"
                  >
                    <span className="text-5xl mb-4 block group-hover:scale-110 transition-transform">
                      {type.icon}
                    </span>
                    <h3 className="text-xl font-bold text-[#2C4F5E] mb-2">{type.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{type.description}</p>
                    <p className="text-xs text-[#C73E3A] font-semibold">
                      Durchschnittlich: {type.estimatedM3} m³
                    </p>
                  </button>
                ))}
              </div>

              <div className="mt-8 bg-blue-50 rounded-xl p-6 text-center">
                <p className="text-blue-800 font-semibold mb-2">
                  💡 Tipp: Keine Sorge vor der genauen Auswahl!
                </p>
                <p className="text-blue-700 text-sm">
                  Im nächsten Schritt können Sie die Menge individuell anpassen.
                </p>
              </div>
            </div>
          )}

          {/* Step 2: Simplified Furniture Selection */}
          {currentStep === 2 && (
            <div className="bg-white rounded-3xl shadow-2xl p-8 transform transition-all duration-500">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#2C4F5E] mb-4">
                  Was soll entsorgt werden?
                </h2>
                <p className="text-gray-600 mb-6">
                  Passen Sie die Mengen nach Ihrem Bedarf an
                </p>

                {/* Live Volume Display */}
                <div className="bg-gradient-to-r from-[#C73E3A] to-[#B02E2A] text-white p-6 rounded-2xl inline-block">
                  <p className="text-sm opacity-90">Geschätztes Volumen</p>
                  <p className="text-4xl font-bold">{totalM3} m³</p>
                  {totalM3 > 0 && (
                    <p className="text-xs mt-2 opacity-80">
                      ≈ {Math.round(totalM3 * 1.5)} Umzugskartons
                    </p>
                  )}
                </div>
              </div>

              {/* Quick Add Popular Items */}
              <div className="mb-8 bg-yellow-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                  <span className="text-2xl mr-2">⚡</span> 
                  Häufig entsorgte Gegenstände - Klicken zum Hinzufügen
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {furnitureData.filter(item => item.popular).map(item => {
                    const quantity = selectedFurniture[item.name] || 0;
                    return (
                      <button
                        key={item.name}
                        onClick={() => handleFurnitureChange(item.name, 1)}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          quantity > 0 
                            ? 'border-[#C73E3A] bg-[#C73E3A]/10' 
                            : 'border-yellow-300 bg-white hover:border-yellow-400'
                        }`}
                      >
                        <span className="text-2xl block mb-1">{item.icon}</span>
                        <span className="text-sm font-medium">{item.name}</span>
                        {quantity > 0 && (
                          <span className="block text-xs text-[#C73E3A] font-bold mt-1">
                            {quantity}x ausgewählt
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* All Items Grid */}
              <div className="mb-8">
                <h3 className="font-bold text-gray-800 mb-4">Alle Gegenstände</h3>
                <div className="grid gap-3 max-h-96 overflow-y-auto pr-2">
                  {furnitureData.map(item => {
                    const quantity = selectedFurniture[item.name] || 0;
                    return (
                      <div 
                        key={item.name} 
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{item.icon}</span>
                          <div>
                            <p className="font-medium text-gray-800">{item.name}</p>
                            <p className="text-xs text-gray-500">{item.m3} m³ pro Stück</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => handleFurnitureChange(item.name, -1)}
                            className="w-10 h-10 bg-white border-2 border-gray-300 text-gray-600 rounded-full hover:bg-red-50 hover:border-red-300 hover:text-red-600 transition-all font-bold text-lg"
                            disabled={quantity === 0}
                          >
                            −
                          </button>
                          <span className="font-bold text-lg w-8 text-center">{quantity}</span>
                          <button
                            onClick={() => handleFurnitureChange(item.name, 1)}
                            className="w-10 h-10 bg-[#C73E3A] text-white rounded-full hover:bg-[#B02E2A] transition-all font-bold text-lg"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  ← Zurück
                </button>
                <button
                  onClick={proceedToStep3}
                  disabled={totalM3 === 0}
                  className={`px-8 py-4 rounded-xl font-bold text-lg shadow-lg transform transition-all ${
                    totalM3 > 0
                      ? 'bg-gradient-to-r from-[#C73E3A] to-[#B02E2A] text-white hover:shadow-xl hover:scale-105'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Weiter zum Angebot →
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Price & Contact */}
          {currentStep === 3 && !showSuccess && (
            <div className="bg-white rounded-3xl shadow-2xl p-8 transform transition-all duration-500">
              <div className="text-center mb-8">
                <span className="inline-flex items-center justify-center w-20 h-20 bg-green-500 text-white rounded-full text-3xl font-bold mb-4 animate-bounce">
                  ✓
                </span>
                <h2 className="text-3xl font-bold text-[#2C4F5E] mb-4">
                  Ihr persönliches Angebot ist fertig!
                </h2>
                <p className="text-gray-600">
                  Mit {DISCOUNT_PERCENTAGE}% Online-Rabatt für Sie reserviert
                </p>
              </div>

              {/* Price Display */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-8">
                <div className="text-center mb-6">
                  <p className="text-gray-600 mb-2">Ihr Preis mit Online-Rabatt:</p>
                  <div className="mb-3">
                    <p className="text-lg text-gray-500 line-through mb-1">
                      {regularPrice.toFixed(0)}€
                    </p>
                    <p className="text-5xl font-bold text-[#C73E3A]">
                      {finalPrice.toFixed(0)}€
                    </p>
                  </div>
                  <p className="text-sm text-green-600 font-semibold mt-2">
                    Sie sparen {discountAmount.toFixed(0)}€!
                  </p>
                </div>

                <div className="border-t pt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Objekttyp:</span>
                    <span className="font-medium">{buildingTypes.find(b => b.id === selectedBuildingType)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Volumen:</span>
                    <span className="font-medium">{totalM3} m³</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Inkl. Anfahrt & Entsorgung</span>
                    <span className="text-green-600 font-medium">✓</span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#2C4F5E] mb-4">
                  Jetzt Angebot sichern - 100% unverbindlich
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Ihr Name*"
                    value={customerData.name}
                    onChange={(e) => setCustomerData({...customerData, name: e.target.value})}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C73E3A] focus:border-transparent"
                  />
                  <input
                    type="tel"
                    placeholder="Telefonnummer*"
                    value={customerData.phone}
                    onChange={(e) => setCustomerData({...customerData, phone: e.target.value})}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C73E3A] focus:border-transparent"
                  />
                </div>

                <input
                  type="email"
                  placeholder="E-Mail-Adresse*"
                  value={customerData.email}
                  onChange={(e) => setCustomerData({...customerData, email: e.target.value})}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C73E3A] focus:border-transparent"
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Wie dringend ist Ihr Anliegen?
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: 'normal', label: 'Flexibel', desc: 'In 2-4 Wochen' },
                      { value: 'dringend', label: 'Dringend', desc: 'Diese Woche' },
                      { value: 'sofort', label: 'Sofort!', desc: 'Innerhalb 48h', hot: true }
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setCustomerData({...customerData, urgency: option.value})}
                        className={`relative p-4 rounded-lg border-2 transition-all ${
                          customerData.urgency === option.value
                            ? 'border-[#C73E3A] bg-[#C73E3A]/10'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {option.hot && (
                          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                            HOT
                          </span>
                        )}
                        <div className="font-semibold">{option.label}</div>
                        <div className="text-xs text-gray-600">{option.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-4 flex items-center">
                  <span className="text-2xl mr-3">🛡️</span>
                  <div>
                    <p className="font-semibold text-blue-800">100% Festpreis-Garantie</p>
                    <p className="text-sm text-blue-600">Keine versteckten Kosten - der Preis bleibt wie vereinbart!</p>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-[#C73E3A] to-[#B02E2A] text-white py-5 px-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all"
                >
                  Jetzt kostenloses Angebot anfordern →
                </button>

                <p className="text-center text-xs text-gray-500">
                  🔒 SSL-verschlüsselt • 100% kostenlos & unverbindlich
                </p>
              </div>

              <button
                onClick={() => setCurrentStep(2)}
                className="w-full mt-4 text-gray-600 hover:text-gray-800 transition-colors text-center"
              >
                ← Zurück zur Auswahl
              </button>
            </div>
          )}

          {/* Success Message */}
          {showSuccess && (
            <div className="bg-white rounded-3xl shadow-2xl p-8 transform transition-all duration-500">
              <div className="text-center">
                <span className="inline-flex items-center justify-center w-24 h-24 bg-green-500 text-white rounded-full text-5xl mb-6">
                  🎉
                </span>
                <h2 className="text-3xl font-bold text-green-800 mb-4">
                  Geschafft! Ihre Anfrage ist bei uns.
                </h2>
                <p className="text-gray-600 mb-8">
                  Wir melden uns innerhalb der nächsten 2 Stunden bei Ihnen.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 text-left mb-8">
                  <h3 className="font-bold text-gray-800 mb-4">Was passiert als nächstes?</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3">✓</span>
                      <div>
                        <p className="font-medium">Schritt 1: Angebot erstellen</p>
                        <p className="text-sm text-gray-600">Wir prüfen Ihre Anfrage und erstellen ein detailliertes Angebot</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3">✓</span>
                      <div>
                        <p className="font-medium">Schritt 2: Persönlicher Kontakt</p>
                        <p className="text-sm text-gray-600">Ein Experte ruft Sie zur Terminvereinbarung an</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3">✓</span>
                      <div>
                        <p className="font-medium">Schritt 3: Kostenlose Besichtigung</p>
                        <p className="text-sm text-gray-600">Bei Bedarf besichtigen wir das Objekt kostenlos vor Ort</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <a
                    href="tel:+4952199999900"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 text-center"
                  >
                    📞 Jetzt anrufen
                  </a>
                  <button
                    onClick={resetCalculator}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-4 px-6 rounded-xl transition-all text-center"
                  >
                    Neue Berechnung
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl mb-3">⭐</div>
              <h3 className="font-bold text-[#2C4F5E]">4.9/5 Sterne</h3>
              <p className="text-sm text-gray-600">500+ Bewertungen</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="font-bold text-[#2C4F5E]">Voll versichert</h3>
              <p className="text-sm text-gray-600">Bis 5 Mio. Euro</p>
            </div>
            <div>
              <div className="text-4xl mb-3">♻️</div>
              <h3 className="font-bold text-[#2C4F5E]">Umweltgerecht</h3>
              <p className="text-sm text-gray-600">Zertifizierte Entsorgung</p>
            </div>
            <div>
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold text-[#2C4F5E]">24h Service</h3>
              <p className="text-sm text-gray-600">Schnelle Ausführung</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}