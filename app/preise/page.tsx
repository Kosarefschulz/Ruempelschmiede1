'use client';

import { useState, useEffect, useRef } from 'react';

const BASE_PRICE_PER_CUBIC_METER = 85;
const DISCOUNT_PERCENTAGE = 15;

interface BuildingType {
  id: string;
  name: string;
  iconPlaceholder: string;
  description: string;
  estimatedM3: number;
  popular?: boolean;
}

interface FurnitureItem {
  name: string;
  m3: number;
  iconPlaceholder: string;
  popular?: boolean;
  category: string;
}

interface CustomerData {
  name: string;
  email: string;
  phone: string;
  urgency: string;
  message?: string;
}

const buildingTypes: BuildingType[] = [
  { 
    id: 'wohnung', 
    name: 'Wohnung', 
    iconPlaceholder: 'Wohnung Icon', 
    description: 'Komplette Wohnungsauflösung', 
    estimatedM3: 15,
    popular: true 
  },
  { 
    id: 'haus', 
    name: 'Haus', 
    iconPlaceholder: 'Haus Icon', 
    description: 'Haushaltsauflösung inkl. Keller', 
    estimatedM3: 30,
    popular: true 
  },
  { 
    id: 'keller', 
    name: 'Keller/Dachboden', 
    iconPlaceholder: 'Keller Icon', 
    description: 'Einzelne Räume', 
    estimatedM3: 8 
  },
  { 
    id: 'buero', 
    name: 'Büro/Gewerbe', 
    iconPlaceholder: 'Büro Icon', 
    description: 'Geschäftsauflösung', 
    estimatedM3: 20 
  },
];

const furnitureData: FurnitureItem[] = [
  // Große Möbel
  { name: 'Sofa/Couch', m3: 2.0, iconPlaceholder: 'Sofa Icon', popular: true, category: 'Möbel' },
  { name: 'Bett (komplett)', m3: 2.5, iconPlaceholder: 'Bett Icon', popular: true, category: 'Möbel' },
  { name: 'Kleiderschrank', m3: 2.0, iconPlaceholder: 'Schrank Icon', popular: true, category: 'Möbel' },
  { name: 'Esstisch mit Stühlen', m3: 2.0, iconPlaceholder: 'Tisch Icon', category: 'Möbel' },
  { name: 'Schrankwand/Regal', m3: 2.5, iconPlaceholder: 'Regal Icon', category: 'Möbel' },
  
  // Elektrogeräte
  { name: 'Kühlschrank', m3: 0.8, iconPlaceholder: 'Kühlschrank Icon', popular: true, category: 'Elektro' },
  { name: 'Waschmaschine', m3: 0.6, iconPlaceholder: 'Waschmaschine Icon', popular: true, category: 'Elektro' },
  { name: 'Fernseher/Elektronik', m3: 0.3, iconPlaceholder: 'TV Icon', category: 'Elektro' },
  
  // Kleinmöbel
  { name: 'Kommode/Sideboard', m3: 0.8, iconPlaceholder: 'Kommode Icon', category: 'Kleinmöbel' },
  { name: 'Schreibtisch', m3: 1.0, iconPlaceholder: 'Schreibtisch Icon', category: 'Kleinmöbel' },
  { name: 'Sessel/Stuhl', m3: 0.5, iconPlaceholder: 'Stuhl Icon', category: 'Kleinmöbel' },
  { name: 'Nachttisch', m3: 0.3, iconPlaceholder: 'Nachttisch Icon', category: 'Kleinmöbel' },
  
  // Sonstiges
  { name: 'Umzugskartons (10 Stk)', m3: 1.0, iconPlaceholder: 'Karton Icon', popular: true, category: 'Sonstiges' },
  { name: 'Matratze', m3: 0.8, iconPlaceholder: 'Matratze Icon', category: 'Sonstiges' },
  { name: 'Teppiche/Böden', m3: 0.5, iconPlaceholder: 'Teppich Icon', category: 'Sonstiges' },
  { name: 'Gartengeräte/Werkzeug', m3: 1.0, iconPlaceholder: 'Werkzeug Icon', category: 'Sonstiges' },
  { name: 'Fahrrad/Sportgeräte', m3: 0.8, iconPlaceholder: 'Fahrrad Icon', category: 'Sonstiges' },
  { name: 'Sperrmüll/Diverses', m3: 2.0, iconPlaceholder: 'Sperrmüll Icon', popular: true, category: 'Sonstiges' },
];

// Get current month for dynamic discount display
const getCurrentMonth = () => {
  const months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 
                  'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  return months[new Date().getMonth()];
};

export default function EntruempelungsRechner() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedBuildingType, setSelectedBuildingType] = useState('');
  const [selectedFurniture, setSelectedFurniture] = useState<Record<string, number>>({});
  const [totalM3, setTotalM3] = useState(0);
  const [customerData, setCustomerData] = useState<CustomerData>({
    name: '',
    email: '',
    phone: '',
    urgency: 'normal',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [timeLeft, setTimeLeft] = useState(900);
  const [activeCategory, setActiveCategory] = useState('all');
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
    // Pre-fill with smart suggestions based on building type
    const prefilledItems: Record<string, number> = {};
    
    if (building.id === 'wohnung') {
      prefilledItems['Sofa/Couch'] = 1;
      prefilledItems['Bett (komplett)'] = 1;
      prefilledItems['Kleiderschrank'] = 1;
      prefilledItems['Umzugskartons (10 Stk)'] = 3;
    } else if (building.id === 'haus') {
      prefilledItems['Sofa/Couch'] = 2;
      prefilledItems['Bett (komplett)'] = 2;
      prefilledItems['Kleiderschrank'] = 2;
      prefilledItems['Umzugskartons (10 Stk)'] = 5;
      prefilledItems['Gartengeräte/Werkzeug'] = 1;
    } else if (building.id === 'keller') {
      prefilledItems['Umzugskartons (10 Stk)'] = 2;
      prefilledItems['Sperrmüll/Diverses'] = 1;
    } else if (building.id === 'buero') {
      prefilledItems['Schreibtisch'] = 3;
      prefilledItems['Umzugskartons (10 Stk)'] = 4;
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
    // Scroll to the calculator section, not the very top
    const calculatorSection = document.querySelector('.calculator-section');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
    setCustomerData({ name: '', email: '', phone: '', urgency: 'normal', message: '' });
    setShowSuccess(false);
    setActiveCategory('all');
    scrollToTop();
  };

  // Filter furniture by category
  const filteredFurniture = activeCategory === 'all' 
    ? furnitureData 
    : furnitureData.filter(item => item.category === activeCategory);

  return (
    <div className="bg-gray-50 min-h-screen" ref={containerRef}>
      {/* Sticky Discount Banner - Monatsbezogen */}
      <div className="bg-gradient-to-r from-[#C73E3A] to-[#B02E2A] text-white py-3 text-center sticky top-0 z-40 shadow-lg">
        <p className="text-sm md:text-base font-medium px-4">
          🎉 <strong>{getCurrentMonth()}-Aktion:</strong> {DISCOUNT_PERCENTAGE}% Rabatt auf alle Entrümpelungen! 
          <span className="hidden sm:inline">Nur noch</span> <span className="font-mono font-bold bg-white/20 px-2 py-1 rounded ml-2">{formatTime(timeLeft)}</span>
        </p>
      </div>

      {/* Hero Section - Kompakter */}
      <section className="relative bg-gradient-to-br from-[#1a2b36] via-[#2C4F5E] to-[#1E3A47] text-white py-12 md:py-16">
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            <span className="text-[#C73E3A]">3 Schritte</span> zum Festpreis
          </h1>
          
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Berechnen Sie in nur 60 Sekunden Ihre Entrümpelungskosten
          </p>

          {/* Progress Steps - Visueller */}
          <div className="flex justify-center items-center space-x-4 md:space-x-8 mt-8">
            {[
              { step: 1, label: 'Objekt wählen' },
              { step: 2, label: 'Menge anpassen' },
              { step: 3, label: 'Angebot erhalten' }
            ].map((item, index) => (
              <div key={item.step} className="flex items-center">
                <div className="text-center">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-sm md:text-lg transition-all ${
                    currentStep >= item.step 
                      ? 'bg-[#C73E3A] text-white scale-110' 
                      : 'bg-white/20 text-white/60'
                  }`}>
                    {currentStep > item.step ? '✓' : item.step}
                  </div>
                  <p className={`text-xs mt-2 hidden md:block ${
                    currentStep >= item.step ? 'text-white' : 'text-white/60'
                  }`}>
                    {item.label}
                  </p>
                </div>
                {index < 2 && (
                  <div className={`w-8 md:w-16 h-0.5 ml-2 transition-all ${
                    currentStep > item.step ? 'bg-[#C73E3A]' : 'bg-white/20'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Content */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 -mt-6 relative z-20 calculator-section">
        <div className="max-w-5xl mx-auto">
          
          {/* Step 1: Building Type Selection */}
          {currentStep === 1 && (
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 transform transition-all duration-500">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#2C4F5E] mb-3">
                  Was möchten Sie entrümpeln lassen?
                </h2>
                <p className="text-gray-600">
                  Wählen Sie den Objekttyp - wir schlagen passende Gegenstände vor
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {buildingTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => handleBuildingSelect(type)}
                    className="group relative p-6 md:p-8 rounded-2xl border-2 border-gray-200 hover:border-[#C73E3A] hover:shadow-xl transform hover:scale-105 transition-all bg-white"
                  >
                    {type.popular && (
                      <span className="absolute -top-2 -right-2 bg-[#C73E3A] text-white text-xs px-2 py-1 rounded-full">
                        Beliebt
                      </span>
                    )}
                    <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C73E3A]/10 transition-colors">
                      <span className="text-xs text-gray-500">{type.iconPlaceholder}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-[#2C4F5E] mb-2">{type.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{type.description}</p>
                    <p className="text-xs text-[#C73E3A] font-semibold">
                      ca. {type.estimatedM3} m³
                    </p>
                  </button>
                ))}
              </div>

              <div className="mt-8 bg-blue-50 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-xs">Info</span>
                  </div>
                  <p className="text-blue-800 font-semibold">
                    Keine Sorge - im nächsten Schritt können Sie alles anpassen!
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Furniture Selection - Verbesserte UX */}
          {currentStep === 2 && (
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 transform transition-all duration-500">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#2C4F5E] mb-4">
                  Was soll entsorgt werden?
                </h2>
                
                {/* Live Volume Display - Prominenter */}
                <div className="inline-block bg-gradient-to-r from-[#C73E3A] to-[#B02E2A] text-white p-4 md:p-6 rounded-2xl shadow-lg">
                  <p className="text-sm opacity-90">Geschätztes Volumen</p>
                  <p className="text-3xl md:text-4xl font-bold">{totalM3} m³</p>
                  {totalM3 > 0 && (
                    <div className="mt-2">
                      <p className="text-xs opacity-80">
                        ≈ {Math.round(totalM3 * 1.5)} Umzugskartons
                      </p>
                      <p className="text-sm mt-1 font-semibold">
                        ca. {finalPrice.toFixed(0)}€ <span className="text-xs font-normal">(inkl. Rabatt)</span>
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6 flex flex-wrap justify-center gap-2">
                {['all', 'Möbel', 'Elektro', 'Kleinmöbel', 'Sonstiges'].map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      activeCategory === category
                        ? 'bg-[#C73E3A] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category === 'all' ? 'Alle anzeigen' : category}
                  </button>
                ))}
              </div>

              {/* Quick Add Popular Items */}
              <div className="mb-8 bg-yellow-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center mr-2">
                    <span className="text-xs">⚡</span>
                  </div>
                  Schnellauswahl - Häufig entsorgte Gegenstände
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {furnitureData.filter(item => item.popular).map(item => {
                    const quantity = selectedFurniture[item.name] || 0;
                    return (
                      <button
                        key={item.name}
                        onClick={() => handleFurnitureChange(item.name, 1)}
                        className={`p-3 md:p-4 rounded-xl border-2 transition-all ${
                          quantity > 0 
                            ? 'border-[#C73E3A] bg-[#C73E3A]/10' 
                            : 'border-yellow-300 bg-white hover:border-yellow-400 hover:shadow-md'
                        }`}
                      >
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <span className="text-xs text-gray-500">{item.iconPlaceholder}</span>
                        </div>
                        <span className="text-sm font-medium block">{item.name}</span>
                        {quantity > 0 && (
                          <span className="block text-xs text-[#C73E3A] font-bold mt-1">
                            {quantity}x
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* All Items List - Bessere Organisation */}
              <div className="mb-8">
                <h3 className="font-bold text-gray-800 mb-4">Detaillierte Auswahl</h3>
                <div className="space-y-2 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                  {filteredFurniture.map(item => {
                    const quantity = selectedFurniture[item.name] || 0;
                    return (
                      <div 
                        key={item.name} 
                        className={`flex items-center justify-between p-4 rounded-xl transition-all ${
                          quantity > 0 ? 'bg-[#C73E3A]/5 border-2 border-[#C73E3A]/20' : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                            <span className="text-xs text-gray-500">{item.iconPlaceholder}</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">{item.name}</p>
                            <p className="text-xs text-gray-500">{item.m3} m³ • {(item.m3 * BASE_PRICE_PER_CUBIC_METER).toFixed(0)}€</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleFurnitureChange(item.name, -1)}
                            className="w-8 h-8 bg-white border-2 border-gray-300 text-gray-600 rounded-lg hover:bg-red-50 hover:border-red-300 hover:text-red-600 transition-all font-bold disabled:opacity-50"
                            disabled={quantity === 0}
                          >
                            −
                          </button>
                          <span className="font-bold text-lg w-8 text-center">{quantity}</span>
                          <button
                            onClick={() => handleFurnitureChange(item.name, 1)}
                            className="w-8 h-8 bg-[#C73E3A] text-white rounded-lg hover:bg-[#B02E2A] transition-all font-bold"
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
                  className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors font-medium"
                >
                  ← Zurück
                </button>
                <button
                  onClick={proceedToStep3}
                  disabled={totalM3 === 0}
                  className={`px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg shadow-lg transform transition-all ${
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

          {/* Step 3: Contact & Price - Optimiert */}
          {currentStep === 3 && !showSuccess && (
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 transform transition-all duration-500">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 animate-bounce">
                  ✓
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#2C4F5E] mb-3">
                  Ihr persönliches Angebot ist fertig!
                </h2>
                <p className="text-gray-600">
                  Sichern Sie sich jetzt Ihren {getCurrentMonth()}-Rabatt
                </p>
              </div>

              {/* Price Display - Übersichtlicher */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 md:p-8 mb-8">
                <div className="text-center mb-6">
                  <p className="text-gray-600 mb-2">Ihr Preis mit {getCurrentMonth()}-Rabatt:</p>
                  <div className="flex flex-col items-center">
                    <p className="text-lg text-gray-500 line-through mb-1">
                      {regularPrice.toFixed(0)}€
                    </p>
                    <p className="text-4xl md:text-5xl font-bold text-[#C73E3A]">
                      {finalPrice.toFixed(0)}€
                    </p>
                    <p className="text-sm text-green-600 font-semibold mt-2">
                      Sie sparen {discountAmount.toFixed(0)}€!
                    </p>
                  </div>
                  <div className="mt-4 bg-white rounded-xl p-4 inline-block">
                    <p className="text-sm text-gray-600">Volumen</p>
                    <p className="text-2xl font-bold text-[#2C4F5E]">{totalM3} m³</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-green-600">✓</span>
                    </div>
                    <span>Anfahrt inklusive</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-green-600">✓</span>
                    </div>
                    <span>Entsorgung inklusive</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-green-600">✓</span>
                    </div>
                    <span>Festpreis-Garantie</span>
                  </div>
                </div>
              </div>

              {/* Contact Form - Vereinfacht */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#2C4F5E] mb-4">
                  Jetzt {getCurrentMonth()}-Rabatt sichern
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
                    Wann soll die Entrümpelung stattfinden?
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: 'normal', label: 'Flexibel', desc: '2-4 Wochen' },
                      { value: 'dringend', label: 'Dringend', desc: 'Diese Woche' },
                      { value: 'sofort', label: 'Express', desc: '48 Stunden', hot: true }
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setCustomerData({...customerData, urgency: option.value})}
                        className={`relative p-3 md:p-4 rounded-lg border-2 transition-all ${
                          customerData.urgency === option.value
                            ? 'border-[#C73E3A] bg-[#C73E3A]/10'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {option.hot && (
                          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                            +20€
                          </span>
                        )}
                        <div className="font-semibold text-sm md:text-base">{option.label}</div>
                        <div className="text-xs text-gray-600">{option.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <textarea
                  placeholder="Besondere Hinweise (optional)"
                  value={customerData.message}
                  onChange={(e) => setCustomerData({...customerData, message: e.target.value})}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C73E3A] focus:border-transparent"
                  rows={3}
                />

                <div className="bg-blue-50 rounded-xl p-4 flex items-start">
                  <div className="w-8 h-8 bg-blue-200 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-xs">🛡️</span>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-800">100% Festpreis-Garantie</p>
                    <p className="text-sm text-blue-600">Keine versteckten Kosten - der Preis bleibt wie angezeigt!</p>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-[#C73E3A] to-[#B02E2A] text-white py-4 md:py-5 px-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all"
                >
                  Jetzt kostenloses Angebot anfordern →
                </button>

                <p className="text-center text-xs text-gray-500">
                  🔒 SSL-verschlüsselt • 100% kostenlos & unverbindlich • Antwort in 2h
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

          {/* Success Message - Optimiert */}
          {showSuccess && (
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 transform transition-all duration-500">
              <div className="text-center">
                <div className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center text-5xl mx-auto mb-6 animate-bounce">
                  🎉
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
                  Vielen Dank für Ihre Anfrage!
                </h2>
                <p className="text-gray-600 mb-8">
                  Wir melden uns innerhalb von 2 Stunden bei Ihnen.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="font-bold text-gray-800 mb-4">So geht es weiter:</h3>
                  <div className="space-y-4 text-left">
                    {[
                      { 
                        icon: '📧', 
                        title: 'E-Mail-Bestätigung', 
                        desc: 'Sie erhalten sofort eine Bestätigung per E-Mail'
                      },
                      { 
                        icon: '📞', 
                        title: 'Persönlicher Anruf', 
                        desc: 'Ein Experte meldet sich bei Ihnen (Mo-Fr 8-18 Uhr)'
                      },
                      { 
                        icon: '🏠', 
                        title: 'Termin vereinbaren', 
                        desc: 'Kostenlose Besichtigung oder direkte Terminvereinbarung'
                      }
                    ].map((step, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-xl">{step.icon}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">{step.title}</p>
                          <p className="text-sm text-gray-600">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <a
                    href="tel:+4952199999900"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 flex items-center justify-center"
                  >
                    <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center mr-2">
                      <span className="text-xs">📞</span>
                    </div>
                    Jetzt anrufen
                  </a>
                  <button
                    onClick={resetCalculator}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-4 px-6 rounded-xl transition-all"
                  >
                    Neue Berechnung
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Trust Section - Kompakter */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: 'Star', value: '4.9/5', label: '500+ Bewertungen' },
              { icon: 'Shield', value: '100%', label: 'Versichert' },
              { icon: 'Recycle', value: 'Zertifiziert', label: 'Entsorgung' },
              { icon: 'Clock', value: '24h', label: 'Notfall-Service' }
            ].map((item, index) => (
              <div key={index}>
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-xs text-gray-500">{item.icon}</span>
                </div>
                <h3 className="font-bold text-[#2C4F5E]">{item.value}</h3>
                <p className="text-sm text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #C73E3A;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #B02E2A;
        }
      `}</style>
    </div>
  );
}