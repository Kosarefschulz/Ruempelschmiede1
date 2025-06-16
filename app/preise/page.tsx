'use client';

import { useState } from 'react';
import Icon from '../components/Icon';

// ERWT Preistabelle in EUR
const priceTable = {
  wohnung: {
    '<50': { '1/4': 1170, '1/2': 1560, '3/4': 1690, 'voll': 1950, 'boden': 65, 'decken': 65 },
    '50-70': { '1/4': 1560, '1/2': 1950, '3/4': 2145, 'voll': 2405, 'boden': 104, 'decken': 104 },
    '70-90': { '1/4': 1950, '1/2': 2210, '3/4': 2470, 'voll': 2730, 'boden': 156, 'decken': 156 },
    '90-110': { '1/4': 2275, '1/2': 2535, '3/4': 2860, 'voll': 3250, 'boden': 195, 'decken': 195 },
    '>110': { '1/4': 2860, '1/2': 3250, '3/4': 3575, 'voll': 3900, 'boden': 260, 'decken': 260 }
  },
  haus: {
    einstöckig: {
      '<100': { '1/4': 2470, '1/2': 2730, '3/4': 2990, 'voll': 3250, 'boden': 156, 'decken': 156 },
      '>100': { '1/4': 2730, '1/2': 2990, '3/4': 3250, 'voll': 3510, 'boden': 195, 'decken': 195 }
    },
    '1.5stöckig': {
      '<100': { '1/4': 2990, '1/2': 3250, '3/4': 3510, 'voll': 3770, 'boden': 234, 'decken': 234 },
      '>100': { '1/4': 3250, '1/2': 3510, '3/4': 3770, 'voll': 4030, 'boden': 260, 'decken': 260 }
    },
    '2stöckig': {
      '<100': { '1/4': 3510, '1/2': 3770, '3/4': 4030, 'voll': 4290, 'boden': 286, 'decken': 286 },
      '>100': { '1/4': 3770, '1/2': 4160, '3/4': 4550, 'voll': 4940, 'boden': 325, 'decken': 325 }
    }
  },
  sondergebäude: {
    keller: {
      '<15': { '1/4': 130, '1/2': 195, '3/4': 260, 'voll': 325 },
      '>15': { '1/4': 195, '1/2': 260, '3/4': 325, 'voll': 390 }
    },
    dachboden: {
      '<20': { '1/4': 195, '1/2': 260, '3/4': 325, 'voll': 390 },
      '>20': { '1/4': 325, '1/2': 455, '3/4': 585, 'voll': 780 }
    },
    garage: {
      '<20': { '1/4': 195, '1/2': 260, '3/4': 325, 'voll': 455 },
      '>20': { '1/4': 260, '1/2': 455, '3/4': 520, 'voll': 650 }
    }
  }
};

export default function PreiseSeite() {
  const [propertyType, setPropertyType] = useState('');
  const [propertySize, setPropertySize] = useState('');
  const [houseType, setHouseType] = useState('');
  const [fillLevel, setFillLevel] = useState('');
  const [additionalServices, setAdditionalServices] = useState({
    boden: false,
    decken: false
  });
  const [specialBuildings, setSpecialBuildings] = useState({
    keller: { selected: false, size: '', fillLevel: '' },
    dachboden: { selected: false, size: '', fillLevel: '' },
    garage: { selected: false, size: '', fillLevel: '' }
  });
  const [showPrice, setShowPrice] = useState(false);

  const calculatePrice = () => {
    let totalPrice = 0;

    // Hauptobjekt Preis
    if (propertyType === 'wohnung' && propertySize && fillLevel) {
      const wohnungPrices = priceTable.wohnung as any;
      const priceData = wohnungPrices[propertySize];
      if (priceData) {
        totalPrice += priceData[fillLevel] || 0;
        if (additionalServices.boden) totalPrice += priceData.boden || 0;
        if (additionalServices.decken) totalPrice += priceData.decken || 0;
      }
    } else if (propertyType === 'haus' && houseType && propertySize && fillLevel) {
      const hausPrices = priceTable.haus as any;
      const houseTypePrices = hausPrices[houseType];
      if (houseTypePrices) {
        const priceData = houseTypePrices[propertySize];
        if (priceData) {
          totalPrice += priceData[fillLevel] || 0;
          if (additionalServices.boden) totalPrice += priceData.boden || 0;
          if (additionalServices.decken) totalPrice += priceData.decken || 0;
        }
      }
    }

    // Sondergebäude
    Object.entries(specialBuildings).forEach(([building, data]) => {
      if (data.selected && data.size && data.fillLevel) {
        const sonderPrices = priceTable.sondergebäude as any;
        const buildingPrices = sonderPrices[building];
        if (buildingPrices) {
          const priceData = buildingPrices[data.size];
          if (priceData) {
            totalPrice += priceData[data.fillLevel] || 0;
          }
        }
      }
    });

    return totalPrice;
  };

  const handleCalculate = () => {
    setShowPrice(true);
  };

  const resetCalculator = () => {
    setPropertyType('');
    setPropertySize('');
    setHouseType('');
    setFillLevel('');
    setAdditionalServices({ boden: false, decken: false });
    setSpecialBuildings({
      keller: { selected: false, size: '', fillLevel: '' },
      dachboden: { selected: false, size: '', fillLevel: '' },
      garage: { selected: false, size: '', fillLevel: '' }
    });
    setShowPrice(false);
  };

  const finalPrice = calculatePrice();
  const discountedPrice = Math.round(finalPrice * 0.81); // 19% Rabatt

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2C4F5E] to-[#1E3A47] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Entrümpelungs-Preisrechner
          </h1>
          <p className="text-xl text-center opacity-90">
            Berechnen Sie Ihre Entrümpelungskosten nach der offiziellen ERWT-Tabelle
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {!showPrice ? (
            <>
              {/* Step 1: Property Type */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#2C4F5E] mb-4">
                  1. Art der Immobilie
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => {
                      setPropertyType('wohnung');
                      setHouseType('');
                    }}
                    className={`p-6 rounded-lg border-2 transition-all ${
                      propertyType === 'wohnung'
                        ? 'border-[#C73E3A] bg-[#C73E3A]/10'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Icon name="haus" size={32} className="mx-auto mb-2" />
                    <p className="font-semibold">Wohnung</p>
                  </button>
                  <button
                    onClick={() => setPropertyType('haus')}
                    className={`p-6 rounded-lg border-2 transition-all ${
                      propertyType === 'haus'
                        ? 'border-[#C73E3A] bg-[#C73E3A]/10'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Icon name="haus" size={32} className="mx-auto mb-2" />
                    <p className="font-semibold">Haus</p>
                  </button>
                </div>
              </div>

              {/* Step 2: Size */}
              {propertyType && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#2C4F5E] mb-4">
                    2. Größe (m²)
                  </h2>
                  {propertyType === 'wohnung' ? (
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      {['<50', '50-70', '70-90', '90-110', '>110'].map(size => (
                        <button
                          key={size}
                          onClick={() => setPropertySize(size)}
                          className={`p-4 rounded-lg border-2 transition-all ${
                            propertySize === size
                              ? 'border-[#C73E3A] bg-[#C73E3A]/10'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          {size} m²
                        </button>
                      ))}
                    </div>
                  ) : (
                    <>
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        {['einstöckig', '1.5stöckig', '2stöckig'].map(type => (
                          <button
                            key={type}
                            onClick={() => setHouseType(type)}
                            className={`p-4 rounded-lg border-2 transition-all ${
                              houseType === type
                                ? 'border-[#C73E3A] bg-[#C73E3A]/10'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                      {houseType && (
                        <div className="grid grid-cols-2 gap-3">
                          {['<100', '>100'].map(size => (
                            <button
                              key={size}
                              onClick={() => setPropertySize(size)}
                              className={`p-4 rounded-lg border-2 transition-all ${
                                propertySize === size
                                  ? 'border-[#C73E3A] bg-[#C73E3A]/10'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              {size} m²
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}

              {/* Step 3: Fill Level */}
              {((propertyType === 'wohnung' && propertySize) || 
                (propertyType === 'haus' && houseType && propertySize)) && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#2C4F5E] mb-4">
                    3. Füllgrad
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { value: '1/4', label: '1/4 voll' },
                      { value: '1/2', label: '1/2 voll' },
                      { value: '3/4', label: '3/4 voll' },
                      { value: 'voll', label: 'Voll' }
                    ].map(level => (
                      <button
                        key={level.value}
                        onClick={() => setFillLevel(level.value)}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          fillLevel === level.value
                            ? 'border-[#C73E3A] bg-[#C73E3A]/10'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {level.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Additional Services */}
              {fillLevel && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#2C4F5E] mb-4">
                    4. Zusätzliche Leistungen
                  </h2>
                  <div className="space-y-3">
                    <label className="flex items-center p-4 rounded-lg border-2 border-gray-200 hover:border-gray-300 cursor-pointer">
                      <div className="relative mr-3">
                        <input
                          type="checkbox"
                          checked={additionalServices.boden}
                          onChange={e => setAdditionalServices({...additionalServices, boden: e.target.checked})}
                          className="w-6 h-6 appearance-none border-2 border-[#2C4F5E] rounded cursor-pointer checked:bg-[#C73E3A] checked:border-[#C73E3A] transition-all"
                        />
                        {additionalServices.boden && (
                          <svg className="absolute top-0.5 left-0.5 w-5 h-5 text-white pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <span className="font-medium">Bodenentfernung</span>
                    </label>
                    <label className="flex items-center p-4 rounded-lg border-2 border-gray-200 hover:border-gray-300 cursor-pointer">
                      <div className="relative mr-3">
                        <input
                          type="checkbox"
                          checked={additionalServices.decken}
                          onChange={e => setAdditionalServices({...additionalServices, decken: e.target.checked})}
                          className="w-6 h-6 appearance-none border-2 border-[#2C4F5E] rounded cursor-pointer checked:bg-[#C73E3A] checked:border-[#C73E3A] transition-all"
                        />
                        {additionalServices.decken && (
                          <svg className="absolute top-0.5 left-0.5 w-5 h-5 text-white pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <span className="font-medium">Deckenentfernung</span>
                    </label>
                  </div>
                </div>
              )}

              {/* Step 5: Special Buildings */}
              {fillLevel && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#2C4F5E] mb-4">
                    5. Sondergebäude (optional)
                  </h2>
                  {Object.entries(specialBuildings).map(([building, data]) => (
                    <div key={building} className="mb-4">
                      <label className="flex items-center mb-2">
                        <div className="relative mr-3">
                          <input
                            type="checkbox"
                            checked={data.selected}
                            onChange={e => setSpecialBuildings({
                              ...specialBuildings,
                              [building]: { ...data, selected: e.target.checked }
                            })}
                            className="w-6 h-6 appearance-none border-2 border-[#2C4F5E] rounded cursor-pointer checked:bg-[#C73E3A] checked:border-[#C73E3A] transition-all"
                          />
                          {data.selected && (
                            <svg className="absolute top-0.5 left-0.5 w-5 h-5 text-white pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <span className="font-medium capitalize">{building}</span>
                      </label>
                      {data.selected && (
                        <div className="ml-8 grid grid-cols-2 gap-3">
                          <select
                            value={data.size}
                            onChange={e => setSpecialBuildings({
                              ...specialBuildings,
                              [building]: { ...data, size: e.target.value }
                            })}
                            className="p-3 border-2 border-[#2C4F5E] rounded-lg focus:border-[#C73E3A] focus:outline-none bg-white"
                          >
                            <option value="">Größe wählen</option>
                            {building === 'keller' && (
                              <>
                                <option value="<15">&lt; 15 m²</option>
                                <option value=">15">&gt; 15 m²</option>
                              </>
                            )}
                            {(building === 'dachboden' || building === 'garage') && (
                              <>
                                <option value="<20">&lt; 20 m²</option>
                                <option value=">20">&gt; 20 m²</option>
                              </>
                            )}
                          </select>
                          <select
                            value={data.fillLevel}
                            onChange={e => setSpecialBuildings({
                              ...specialBuildings,
                              [building]: { ...data, fillLevel: e.target.value }
                            })}
                            className="p-3 border-2 border-[#2C4F5E] rounded-lg focus:border-[#C73E3A] focus:outline-none bg-white"
                          >
                            <option value="">Füllgrad wählen</option>
                            <option value="1/4">1/4 voll</option>
                            <option value="1/2">1/2 voll</option>
                            <option value="3/4">3/4 voll</option>
                            <option value="voll">Voll</option>
                          </select>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Calculate Button */}
              <button
                onClick={handleCalculate}
                disabled={!fillLevel}
                className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
                  fillLevel
                    ? 'bg-[#C73E3A] text-white hover:bg-[#B02E2A]'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Preis berechnen
              </button>
            </>
          ) : (
            /* Price Display */
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#2C4F5E] mb-6">
                Ihr Entrümpelungspreis
              </h2>
              
              <div className="bg-gray-50 rounded-xl p-8 mb-8">
                <p className="text-gray-600 mb-2">Normalpreis:</p>
                <p className="text-2xl text-gray-500 line-through mb-4">
                  {finalPrice.toLocaleString('de-DE')} €
                </p>
                
                <p className="text-gray-600 mb-2">Ihr Preis (inkl. 19% Rabatt):</p>
                <p className="text-5xl font-bold text-[#C73E3A] mb-4">
                  {discountedPrice.toLocaleString('de-DE')} €
                </p>
                
                <p className="text-green-600 font-semibold">
                  Sie sparen {(finalPrice - discountedPrice).toLocaleString('de-DE')} €!
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center justify-center">
                  <Icon name="check" size={20} color="#16a34a" className="mr-2" />
                  <span>Festpreis-Garantie</span>
                </div>
                <div className="flex items-center justify-center">
                  <Icon name="check" size={20} color="#16a34a" className="mr-2" />
                  <span>Alles inklusive</span>
                </div>
                <div className="flex items-center justify-center">
                  <Icon name="check" size={20} color="#16a34a" className="mr-2" />
                  <span>Keine versteckten Kosten</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <a
                  href="/kontakt"
                  className="bg-[#C73E3A] text-white py-4 px-6 rounded-lg font-bold hover:bg-[#B02E2A] transition-all"
                >
                  Jetzt anfragen
                </a>
                <button
                  onClick={resetCalculator}
                  className="bg-gray-200 text-gray-700 py-4 px-6 rounded-lg font-bold hover:bg-gray-300 transition-all"
                >
                  Neue Berechnung
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#2C4F5E] mb-6 text-center">
            Über unseren Preisrechner
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-3">ERWT-Richtwerttabelle</h3>
              <p className="text-gray-600">
                Unsere Preise basieren auf der offiziellen Entrümpelungsrichtwerttabelle (ERWT), 
                die faire und transparente Preise für alle Entrümpelungsarten gewährleistet.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Alles inklusive</h3>
              <p className="text-gray-600">
                Die angezeigten Preise enthalten bereits alle Leistungen: Anfahrt, Arbeitszeit, 
                Entsorgung und alle anfallenden Gebühren. Keine versteckten Kosten!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}