import { notFound } from 'next/navigation';
import { articlesData } from '../data';
import ArticleStructuredData from '../../components/ArticleStructuredData';
import Breadcrumb from '../../components/Breadcrumb';

// Helper function to parse German dates
function parseGermanDate(dateStr: string): Date {
  const months: { [key: string]: number } = {
    'Januar': 0, 'Februar': 1, 'März': 2, 'April': 3,
    'Mai': 4, 'Juni': 5, 'Juli': 6, 'August': 7,
    'September': 8, 'Oktober': 9, 'November': 10, 'Dezember': 11
  };
  
  const match = dateStr.match(/(\d{1,2})\.\s*(\w+)\s*(\d{4})/);
  if (!match) return new Date(); // fallback to current date
  
  const day = parseInt(match[1]);
  const month = months[match[2]];
  const year = parseInt(match[3]);
  
  if (month === undefined) return new Date(); // fallback if month not found
  
  return new Date(year, month, day);
}

interface Props {
  params: {
    slug: string;
  };
}

// Generate metadata for this page
export async function generateMetadata({ params }: Props) {
  const article = articlesData.find(a => a.id === params.slug);
  
  if (!article) {
    return {
      title: 'Artikel nicht gefunden',
      description: 'Der angeforderte Artikel konnte nicht gefunden werden.'
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    keywords: `${article.category}, Entrümpelung, Bielefeld, OWL, Steinhagen, Haushaltsauflösung`,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: parseGermanDate(article.date).toISOString(),
      authors: ['Rümpel Schmiede'],
      tags: [article.category, 'Entrümpelung', 'Bielefeld', 'Ratgeber'],
      images: [
        {
          url: `https://ruempelschmiede.de${article.image}`,
          width: 1200,
          height: 630,
          alt: article.title,
        }
      ],
      siteName: 'Rümpel Schmiede',
      locale: 'de_DE',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [`https://ruempelschmiede.de${article.image}`],
      creator: '@ruempelschmiede',
    },
    alternates: {
      canonical: `https://ruempelschmiede.de/artikel/${article.id}`,
    },
  };
}

export default function ArticlePage({ params }: Props) {
  const article = articlesData.find(a => a.id === params.slug);
  
  if (!article) {
    notFound();
  }

  // Convert markdown-style content to HTML with proper heading hierarchy and internal linking
  const formatContent = (content: string) => {
    // Internal linking keywords and their target articles
    const internalLinks = {
      'Haushaltsauflösung': '/artikel/haushaltsaufloesung-kosten',
      'Haushaltsauflösung Kosten': '/artikel/haushaltsaufloesung-kosten',
      'Wohnungsauflösung': '/artikel/haushaltsaufloesung-kosten',
      'Büroauflösung': '/artikel/bueroaufloesung-planung-kosten-guide',
      'Gewerbeauflösung': '/artikel/bueroaufloesung-planung-kosten-guide',
      'Garageentrümpelung': '/artikel/garage-entruempelung-guide',
      'Garage entrümpeln': '/artikel/garage-entruempelung-guide',
      'Sperrmüll entsorgen': '/artikel/sperrmuell-richtig-entsorgen-guide',
      'Sperrmüll-Entsorgung': '/artikel/sperrmuell-richtig-entsorgen-guide',
      'Entrümpelung vor Umzug': '/artikel/entruempelung-vor-umzug-checkliste',
      'Umzug Entrümpelung': '/artikel/entruempelung-vor-umzug-checkliste',
      'DIY Entrümpelung': '/artikel/professionell-vs-diy-entruempelung-vergleich',
      'professionelle Entrümpelung': '/artikel/professionell-vs-diy-entruempelung-vergleich',
      'Entrümpelung Bielefeld': '/artikel/entruempelung-bielefeld-lokaler-guide'
    };
    
    let formattedContent = content
      .replace(/^# (.+)$/gm, '<h2 class="text-4xl font-bold text-[#2C4F5E] mb-6 mt-8">$1</h2>')
      .replace(/^## (.+)$/gm, '<h3 class="text-2xl font-bold text-[#2C4F5E] mb-4 mt-8">$1</h3>')
      .replace(/^### (.+)$/gm, '<h4 class="text-xl font-semibold text-[#2C4F5E] mb-3 mt-6">$1</h4>')
      .replace(/^#### (.+)$/gm, '<h5 class="text-lg font-semibold text-[#2C4F5E] mb-2 mt-4">$1</h5>')
      .replace(/^##### (.+)$/gm, '<h6 class="text-base font-semibold text-[#2C4F5E] mb-2 mt-4">$1</h6>')
      .replace(/^\*\*(.+)\*\*$/gm, '<div class="font-bold text-[#2C4F5E] mb-2">$1</div>')
      .replace(/^• (.+)$/gm, '<li class="mb-1">$1</li>')
      .replace(/^([^#•\*\n].+)$/gm, '<p class="mb-4 text-gray-700 leading-relaxed">$1</p>')
      .replace(/(<li.*?>.*?<\/li>)/g, '<ul class="list-disc pl-6 mb-4 space-y-1">$1</ul>')
      .replace(/<\/ul>\s*<ul[^>]*>/g, '');
    
    // Add internal links to relevant keywords (only first occurrence per keyword)
    const addedLinks = new Set();
    Object.entries(internalLinks).forEach(([keyword, url]) => {
      if (!addedLinks.has(keyword) && formattedContent.includes(keyword)) {
        // Only link the first occurrence and avoid linking within existing links or headings
        const regex = new RegExp(
          `(?<!<[^>]*>)\\b(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\b(?![^<]*</a>)(?![^<]*</h[1-6]>)`,
          'i'
        );
        if (regex.test(formattedContent)) {
          formattedContent = formattedContent.replace(regex, 
            `<a href="${url}" class="text-[#C73E3A] hover:text-[#B02E2A] underline font-medium transition-colors" title="Mehr über ${keyword}">$1</a>`
          );
          addedLinks.add(keyword);
        }
      }
    });
    
    return formattedContent;
  };

  return (
    <>
      <ArticleStructuredData 
        title={article.title}
        description={article.excerpt}
        datePublished={article.date}
        slug={article.id}
      />
      
      <div className="bg-gray-50 min-h-screen">
        {/* Breadcrumb Navigation */}
        <Breadcrumb 
          items={[
            { label: 'Startseite', href: '/' },
            { label: 'Ratgeber', href: '/artikel' }
          ]}
          currentPage={article.title}
        />
        
        {/* Mobile-First Hero Section */}
        <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#1a2b36] via-[#2C4F5E] to-[#1E3A47]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 text-xs sm:text-sm font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                {article.category}
              </span>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight px-2">
                {article.title}
              </h1>
              
              <div className="flex flex-col sm:flex-row items-center justify-center text-white/80 mb-4 sm:mb-6 space-y-2 sm:space-y-0 sm:space-x-6 text-sm sm:text-base">
                <div className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {article.date}
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {article.readTime}
                </div>
              </div>
              
              <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto px-4">
                {article.excerpt}
              </p>
            </div>
          </div>
        </section>

        {/* Mobile-First Article Content */}
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 xl:p-12">
              <div 
                className="prose prose-sm sm:prose prose-gray max-w-none
                  prose-headings:text-[#2C4F5E] prose-headings:font-bold
                  prose-h2:text-xl sm:prose-h2:text-2xl lg:prose-h2:text-3xl prose-h2:mt-6 sm:prose-h2:mt-8 prose-h2:mb-3 sm:prose-h2:mb-4
                  prose-h3:text-lg sm:prose-h3:text-xl lg:prose-h3:text-2xl prose-h3:mt-5 sm:prose-h3:mt-6 prose-h3:mb-2 sm:prose-h3:mb-3
                  prose-p:text-sm sm:prose-p:text-base prose-p:leading-relaxed prose-p:mb-3 sm:prose-p:mb-4
                  prose-ul:text-sm sm:prose-ul:text-base prose-ul:space-y-1 prose-ul:mb-3 sm:prose-ul:mb-4
                  prose-li:leading-relaxed
                  prose-strong:text-[#2C4F5E] prose-strong:font-semibold"
                dangerouslySetInnerHTML={{ __html: formatContent(article.content) }}
              />
            </div>
          </div>
        </section>

        {/* Mobile-First FAQ Section */}
        <section className="py-8 sm:py-12 lg:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2C4F5E] mb-6 sm:mb-8 text-center">
              Häufige Fragen zu {article.category === 'Kosten & Preise' ? 'Kosten & Preisen' : article.category}
            </h2>

            <div className="space-y-3 sm:space-y-4">
              {(() => {
                // Generate category-specific FAQs
                const generateFAQs = () => {
                  const baseFAQs = [
                    {
                      q: "Wie viel kostet eine professionelle Entrümpelung?",
                      a: "Die Kosten variieren je nach Größe und Zustand der Immobilie. Eine 3-Zimmer-Wohnung kostet durchschnittlich 1.200-2.500€. Wir bieten kostenlose Besichtigungen mit Festpreisangeboten an."
                    },
                    {
                      q: "Wie lange dauert eine Haushaltsauflösung?",
                      a: "Je nach Umfang dauert eine Entrümpelung zwischen einem halben Tag (kleine Wohnung) und mehreren Tagen (großes Haus). Wir planen realistische Zeitrahmen und halten Termine ein."
                    },
                    {
                      q: "Was passiert mit wertvollen Gegenständen?",
                      a: "Wertvolle Gegenstände werden fair bewertet und angerechnet. Antiquitäten, Schmuck oder Sammlerobjekte können den Preis Ihrer Entrümpelung erheblich reduzieren."
                    }
                  ];

                  // Category-specific FAQs
                  const categoryFAQs: {[key: string]: Array<{q: string, a: string}>} = {
                    'Kosten & Preise': [
                      {
                        q: "Gibt es versteckte Kosten bei der Entrümpelung?",
                        a: "Nein, wir arbeiten mit transparenten Festpreisen. Nach der kostenlosen Besichtigung erhalten Sie ein detailliertes Angebot ohne Nachkosten."
                      },
                      {
                        q: "Kann ich bei der Entrümpelung Geld sparen?",
                        a: "Ja, durch Vorab-Sortierung, Verkauf von Wertgegenständen und mehrere Angebote können Sie 200-500€ sparen."
                      }
                    ],
                    'Ratgeber': [
                      {
                        q: "Sollte ich die Entrümpelung selbst machen?",
                        a: "Das hängt von Größe, Zeit und körperlicher Verfassung ab. Bei großen Mengen oder Zeitdruck empfehlen wir professionelle Hilfe."
                      },
                      {
                        q: "Wie bereite ich mich auf eine Entrümpelung vor?",
                        a: "Sortieren Sie vorab wertvolle Gegenstände aus, organisieren Sie Helfer und planen Sie ausreichend Zeit ein."
                      }
                    ],
                    'B2B': [
                      {
                        q: "Wie läuft eine Büroauflösung ab?",
                        a: "Nach kostenloser Besichtigung und Angebot räumen wir diskret und termingerecht. DSGVO-konforme Datenvernichtung inklusive."
                      },
                      {
                        q: "Können Sie auch am Wochenende entrümpeln?",
                        a: "Ja, für Gewerbekunden bieten wir flexible Termine auch außerhalb der Geschäftszeiten an."
                      }
                    ]
                  };

                  const specificFAQs = categoryFAQs[article.category] || [];
                  return [...specificFAQs, ...baseFAQs].slice(0, 4);
                };

                return generateFAQs().map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 sm:p-6">
                    <h3 className="font-bold text-[#2C4F5E] mb-2 text-sm sm:text-base">
                      {faq.q}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ));
              })()}
            </div>

            <div className="text-center mt-6 sm:mt-8">
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Weitere Fragen? Wir beraten Sie gerne persönlich!
              </p>
              <a
                href="/kontakt"
                className="group inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-[#C73E3A] text-white rounded-lg font-semibold hover:bg-[#B02E2A] transition-all hover:shadow-lg hover:scale-105 transform text-sm sm:text-base"
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="hidden sm:inline">Jetzt kostenlos beraten lassen</span>
                <span className="sm:hidden">Beratung</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#C73E3A] to-[#B02E2A] text-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-black/10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <div className="mb-6">
              <div className="inline-block p-3 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Kostenlose Beratung anfordern
            </h2>
            <p className="text-lg md:text-xl mb-2 opacity-90">
              ✓ Festpreis-Angebot binnen 24h
            </p>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              ✓ Kostenlose Besichtigung vor Ort
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <a
                href="tel:+4908000060970"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-[#C73E3A] rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Jetzt anrufen
              </a>
              <a
                href="/kontakt"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-[#C73E3A] transition-all hover:scale-105 transform"
              >
                Beratung anfragen
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            
            <div className="mt-8 flex items-center justify-center space-x-6 text-sm opacity-80">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Seit 2017 aktiv
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Mo-Fr 8-16 Uhr
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Bielefeld & OWL
              </div>
            </div>
          </div>
        </section>

        {/* Mobile-First Internal Linking Section */}
        <section className="py-8 sm:py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#2C4F5E] mb-4 sm:mb-6">
                Das könnte Sie auch interessieren
              </h3>
              
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                {/* Enhanced intelligent internal linking based on article content and user intent */}
                {(() => {
                  const getRelatedArticles = () => {
                    const related: any[] = [];
                    
                    // Enhanced content-based recommendations with advanced scoring
                    const getContentRelevance = (targetArticle: any) => {
                      let score = 0;
                      
                      // Category matching (highest priority)
                      if (targetArticle.category === article.category) score += 15;
                      
                      // Service type matching with weighted scoring
                      const serviceKeywords = {
                        'haushalts': 8, 'büro': 7, 'garage': 6, 'sperrmüll': 7, 
                        'umzug': 8, 'diy': 5, 'professionell': 6, 'messie': 9,
                        'keller': 6, 'dachboden': 6, 'entrümpelung': 10
                      };
                      
                      Object.entries(serviceKeywords).forEach(([keyword, weight]) => {
                        const inCurrent = article.title.toLowerCase().includes(keyword) || 
                                         article.excerpt.toLowerCase().includes(keyword) ||
                                         article.content.toLowerCase().includes(keyword);
                        const inTarget = targetArticle.title.toLowerCase().includes(keyword) || 
                                        targetArticle.excerpt.toLowerCase().includes(keyword) ||
                                        targetArticle.content.toLowerCase().includes(keyword);
                        if (inCurrent && inTarget) score += weight;
                      });
                      
                      // Location matching (Bielefeld focus) with weighted scoring
                      const locationKeywords = {
                        'bielefeld': 8, 'steinhagen': 6, 'owl': 4, 
                        'gütersloh': 5, 'paderborn': 4, 'herford': 4
                      };
                      
                      Object.entries(locationKeywords).forEach(([keyword, weight]) => {
                        const inCurrent = article.title.toLowerCase().includes(keyword) || 
                                         article.excerpt.toLowerCase().includes(keyword);
                        const inTarget = targetArticle.title.toLowerCase().includes(keyword) || 
                                        targetArticle.excerpt.toLowerCase().includes(keyword);
                        if (inCurrent && inTarget) score += weight;
                      });
                      
                      // Intent matching with sophisticated analysis
                      const intentPatterns = {
                        'cost_focused': ['kosten', 'preise', 'preis', 'günstig', 'sparen', 'euro', '€'],
                        'guide_focused': ['guide', 'anleitung', 'schritt', 'checkliste', 'tipps', 'ratgeber'],
                        'comparison': ['vs', 'vergleich', 'unterschied', 'professionell', 'diy', 'selbst'],
                        'local_service': ['bielefeld', 'vor ort', 'lokal', 'regional', 'anbieter'],
                        'planning': ['planung', 'vorbereitung', 'organisieren', 'termine', 'ablauf']
                      };
                      
                      Object.entries(intentPatterns).forEach(([intent, keywords]) => {
                        const currentMatches = keywords.filter(keyword => 
                          article.title.toLowerCase().includes(keyword)
                        ).length;
                        const targetMatches = keywords.filter(keyword => 
                          targetArticle.title.toLowerCase().includes(keyword)
                        ).length;
                        
                        if (currentMatches > 0 && targetMatches > 0) {
                          score += Math.min(currentMatches, targetMatches) * 6;
                        }
                      });
                      
                      // Content depth similarity (reading time correlation)
                      const currentTime = parseInt(article.readTime.replace(/[^\d]/g, ''));
                      const targetTime = parseInt(targetArticle.readTime.replace(/[^\d]/g, ''));
                      const timeDiff = Math.abs(currentTime - targetTime);
                      if (timeDiff <= 3) score += 4; // Similar depth articles
                      else if (timeDiff <= 6) score += 2;
                      
                      // Recency bonus for newer articles
                      const currentDate = new Date(article.date);
                      const targetDate = new Date(targetArticle.date);
                      const daysDiff = Math.abs(targetDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24);
                      if (daysDiff <= 30) score += 3; // Recent articles are more relevant
                      
                      // Complementary content bonus
                      const complementaryPairs = [
                        ['kosten', 'guide'], ['preise', 'tipps'], ['diy', 'professionell'],
                        ['planung', 'durchführung'], ['vorbereitung', 'ablauf']
                      ];
                      
                      complementaryPairs.forEach(([keyword1, keyword2]) => {
                        const currentHas1 = article.title.toLowerCase().includes(keyword1);
                        const currentHas2 = article.title.toLowerCase().includes(keyword2);
                        const targetHas1 = targetArticle.title.toLowerCase().includes(keyword1);
                        const targetHas2 = targetArticle.title.toLowerCase().includes(keyword2);
                        
                        if ((currentHas1 && targetHas2) || (currentHas2 && targetHas1)) {
                          score += 7; // Complementary content gets bonus
                        }
                      });
                      
                      return score;
                    };
                    
                    // Get all other articles with relevance scores
                    const scoredArticles = articlesData
                      .filter(a => a.id !== article.id)
                      .map(a => ({ ...a, relevanceScore: getContentRelevance(a) }))
                      .sort((a, b) => b.relevanceScore - a.relevanceScore);
                    
                    // Priority 1: Highly relevant articles (score > 8)
                    const highlyRelevant = scoredArticles.filter(a => a.relevanceScore > 8).slice(0, 2);
                    related.push(...highlyRelevant);
                    
                    // Priority 2: Moderately relevant articles (score 4-8)
                    const moderatelyRelevant = scoredArticles
                      .filter(a => a.relevanceScore >= 4 && a.relevanceScore <= 8 && !related.some(r => r.id === a.id))
                      .slice(0, 2);
                    related.push(...moderatelyRelevant);
                    
                    // Priority 3: Fill remaining slots with any other articles
                    while (related.length < 4) {
                      const remaining = scoredArticles.filter(a => !related.some(r => r.id === a.id));
                      if (remaining.length === 0) break;
                      related.push(remaining[0]);
                    }
                    
                    return related.slice(0, 4);
                  };
                  
                  return getRelatedArticles().map((relatedArticle) => (
                    <a
                      key={relatedArticle.id}
                      href={`/artikel/${relatedArticle.id}`}
                      className="group flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-all border border-gray-100 hover:border-[#C73E3A]/20"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#2C4F5E] to-[#C73E3A] rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="mb-1">
                          <span className="text-xs text-[#C73E3A] font-semibold uppercase tracking-wide">
                            {relatedArticle.category}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-[#2C4F5E] mb-1 group-hover:text-[#C73E3A] transition-colors line-clamp-2">
                          {relatedArticle.title}
                        </h4>
                        <p className="text-gray-600 text-xs line-clamp-2">
                          {relatedArticle.excerpt}
                        </p>
                        <div className="flex items-center mt-2 text-[#C73E3A] text-xs font-semibold">
                          <span className="mr-1">→</span>
                          Jetzt lesen
                        </div>
                      </div>
                    </a>
                  ));
                })()}
              </div>
            </div>
          </div>
        </section>

        {/* Mobile-First Related Articles */}
        <section className="py-8 sm:py-12 lg:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2C4F5E] mb-6 sm:mb-8 text-center">
              Weitere hilfreiche Artikel
            </h2>
            
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              {articlesData
                .filter(a => a.id !== article.id)
                .slice(0, 4)
                .map((relatedArticle) => (
                  <a
                    key={relatedArticle.id}
                    href={`/artikel/${relatedArticle.id}`}
                    className="group bg-gray-50 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-all"
                  >
                    <div className="mb-2 sm:mb-3">
                      <span className="text-xs sm:text-sm text-[#C73E3A] font-semibold uppercase tracking-wide">
                        {relatedArticle.category}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#2C4F5E] mb-2 group-hover:text-[#C73E3A] transition-colors line-clamp-2 leading-tight">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 mb-3">
                      {relatedArticle.excerpt}
                    </p>
                    <div className="flex items-center text-[#C73E3A] font-semibold text-xs sm:text-sm">
                      <span className="hidden sm:inline">Artikel lesen</span>
                      <span className="sm:hidden">Lesen</span>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}