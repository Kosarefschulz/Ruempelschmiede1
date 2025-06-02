'use client'
import { useState, useEffect } from 'react'

interface Service {
    id: string;
    title: string;
    icon: string;
    image: string;
    shortDescription: string;
    fullDescription: string;
    keyBenefits: string[];
    processSteps?: string[];
    priceInfo?: string;
}

const servicesData: Service[] = [
    {
        id: 'haushaltsaufloesung',
        title: 'Haushaltsauflösungen & Wohnungsauflösungen',
        icon: '🏠',
        image: '/images/service-haushaltsaufloesung.jpg',
        shortDescription: 'Komplette Räumung von Wohnungen und Häusern mit Wertanrechnung und besenreiner Übergabe.',
        fullDescription: `Eine Haushaltsauflösung oder Wohnungsauflösung ist oft mehr als nur das Leerräumen von Räumlichkeiten. Es ist ein Prozess, der mit Emotionen, Erinnerungen und organisatorischem Aufwand verbunden ist. Ob es sich um einen Umzug in eine kleinere Wohnung, den Wechsel in ein Pflegeheim, einen Trauerfall in der Familie oder die Aufgabe einer Zweitwohnung handelt – wir stehen Ihnen in dieser herausfordernden Zeit als verlässlicher und einfühlsamer Partner zur Seite. Unser Ziel ist es, Ihnen den gesamten Prozess so stressfrei und unkompliziert wie möglich zu gestalten.

Wir beginnen mit einer kostenlosen und unverbindlichen Besichtigung vor Ort. Dabei verschaffen wir uns einen genauen Überblick über den Umfang der Arbeiten, besprechen Ihre individuellen Wünsche und klären, welche Gegenstände möglicherweise noch verwertbar sind oder einen emotionalen Wert für Sie haben. Auf Basis dieser Bestandsaufnahme erstellen wir Ihnen ein transparentes Festpreisangebot, das alle vereinbarten Leistungen umfasst – ohne versteckte Kosten.

Unser Leistungsspektrum bei Haushaltsauflösungen ist umfassend: Es beinhaltet die Demontage von Möbeln und Einbauküchen, das sorgfältige Sortieren von Hausrat, Kleidung und persönlichen Gegenständen sowie den Abtransport und die fachgerechte, umweltfreundliche Entsorgung von Sperrmüll, Elektroschrott und sonstigen Abfällen. Dabei achten wir stets auf eine maximale Wiederverwertung und führen brauchbare Gegenstände, wenn gewünscht, karitativen Zwecken zu oder verrechnen den Wert bei einem möglichen Ankauf. Diskretion und Respekt vor Ihrem Eigentum sind für uns selbstverständlich. Unsere geschulten Mitarbeiter arbeiten effizient, sauber und hinterlassen die Räumlichkeiten besenrein. Auf Wunsch übernehmen wir auch zusätzliche Aufgaben wie kleinere Reparaturarbeiten, die Entfernung von Tapeten und Bodenbelägen oder eine Grundreinigung, sodass die Wohnung übergabefertig ist. Wir verstehen, dass jede Haushaltsauflösung einzigartig ist und passen unsere Dienstleistungen flexibel an Ihre Bedürfnisse an. Vertrauen Sie auf unsere langjährige Erfahrung und unser Engagement, um diese anspruchsvolle Aufgabe professionell und zu Ihrer vollen Zufriedenheit zu meistern.`,
        keyBenefits: [
            'Kostenlose Vor-Ort-Besichtigung und Festpreisangebot',
            'Komplette Räumung aller Wohnbereiche inkl. Keller & Dachboden',
            'Fachgerechte Demontage von Möbeln und Küchen',
            'Umweltfreundliche Entsorgung und Recycling',
            'Wertanrechnung für verwertbare Gegenstände',
            'Besenreine Übergabe, optionale Zusatzleistungen',
            'Diskretion und einfühlsamer Umgang'
        ],
        processSteps: [
            'Kostenlose Besichtigung innerhalb 24-48h',
            'Detailliertes Festpreisangebot ohne versteckte Kosten',
            'Flexible Terminvereinbarung nach Ihren Wünschen',
            'Professionelle Durchführung mit geschultem Team',
            'Besenreine Übergabe mit Abnahmeprotokoll'
        ],
        priceInfo: 'Ab 890€ für eine 2-Zimmer-Wohnung (inkl. aller Nebenkosten)'
    },
    {
        id: 'gewerbeaufloesung',
        title: 'Gewerbeauflösungen & Betriebsauflösungen',
        icon: '🏢',
        image: '/images/service-gewerbeaufloesung.jpg',
        shortDescription: 'Professionelle Räumung von Büros, Praxen, Läden und Produktionsstätten zum Festpreis.',
        fullDescription: `Die Auflösung eines Gewerbes, sei es ein Büro, eine Praxis, ein Ladengeschäft, eine Werkstatt oder ein ganzes Betriebsgelände, stellt Unternehmen vor komplexe Herausforderungen. Es geht nicht nur darum, Räumlichkeiten zu leeren, sondern auch darum, Inventar fachgerecht zu demontieren, Akten datenschutzkonform zu vernichten und den gesamten Prozess möglichst effizient und störungsfrei zu gestalten, um den Betriebsablauf nicht unnötig zu belasten oder Stillstandzeiten zu minimieren. Wir sind Ihr spezialisierter Partner für professionelle Gewerbeauflösungen jeder Größenordnung.

Wir verstehen die spezifischen Anforderungen von Geschäftskunden und bieten maßgeschneiderte Lösungen, die auf Ihre Branche und Ihre individuellen Bedürfnisse zugeschnitten sind. Eine sorgfältige Planung ist der Schlüssel zum Erfolg. Daher beginnt unsere Zusammenarbeit mit einer detaillierten Bestandsaufnahme und Beratung direkt an Ihrem Standort. Wir analysieren den Umfang der zu räumenden Flächen, die Art des Inventars (Büromöbel, Maschinen, technische Anlagen, Lagerbestände etc.) und besprechen mit Ihnen den optimalen Zeitplan, der sich flexibel nach Ihren betrieblichen Erfordernissen richtet – bei Bedarf auch außerhalb der regulären Geschäftszeiten oder am Wochenende.

Unser Service umfasst die komplette Demontage und den Abtransport von Büroeinrichtungen, Regalsystemen, Maschinen und Anlagen. Wir kümmern uns um die fachgerechte Entsorgung aller anfallenden Materialien unter strikter Einhaltung gesetzlicher Vorschriften und Umweltauflagen. Ein besonderes Augenmerk legen wir auf die sichere und DSGVO-konforme Aktenvernichtung, für die Sie selbstverständlich einen Nachweis erhalten. Verwertbare Güter und Materialien werden identifiziert und können, je nach Vereinbarung, angerechnet oder dem Recyclingkreislauf zugeführt werden, um Kosten zu optimieren und die Umwelt zu schonen. Unser erfahrenes Team arbeitet schnell, diskret und präzise, um eine termingerechte und besenreine Übergabe der Gewerbeflächen sicherzustellen. Wir bieten Ihnen nicht nur die reine Räumung, sondern auch logistische Gesamtlösungen, inklusive Containerstellung und Koordination mit weiteren Dienstleistern, falls erforderlich. Vertrauen Sie auf unsere Expertise, um Ihre Betriebsauflösung professionell, gesetzeskonform und wirtschaftlich sinnvoll abzuwickeln.`,
        keyBenefits: [
            'Planung und Durchführung für Büros, Praxen, Läden, Lager etc.',
            'Flexible Terminfindung, auch außerhalb der Geschäftszeiten',
            'Demontage von Inventar, Maschinen und Anlagen',
            'DSGVO-konforme Aktenvernichtung mit Nachweis',
            'Fachgerechte Entsorgung und Recycling von Gewerbeabfällen',
            'Ankauf oder Verwertung von Restwerten möglich',
            'Besenreine Übergabe und Minimierung von Ausfallzeiten'
        ],
        processSteps: [
            'Erstberatung und detaillierte Bestandsaufnahme vor Ort',
            'Maßgeschneidertes Konzept mit transparenter Kalkulation',
            'Koordination aller Gewerke und Dienstleister',
            'Durchführung zum Wunschtermin (auch nachts/Wochenende)',
            'Übergabe mit vollständiger Dokumentation und Nachweisen'
        ],
        priceInfo: 'Individuelles Festpreisangebot nach kostenloser Besichtigung'
    },
    {
        id: 'messie-entruempelung',
        title: 'Messie-Wohnungen & Sonderfälle',
        icon: '🧹',
        image: '/images/service-messie.jpg',
        shortDescription: 'Diskrete und professionelle Räumung von stark vermüllten oder verwahrlosten Wohnungen.',
        fullDescription: `Die Entrümpelung von Messie-Wohnungen erfordert ein Höchstmaß an Diskretion, Einfühlungsvermögen und Professionalität. Oftmals sind die Betroffenen oder deren Angehörige mit der Situation überfordert und schämen sich, Hilfe in Anspruch zu nehmen. Wir begegnen jedem Fall mit Respekt und Verständnis und garantieren einen absolut vertraulichen Umgang mit Ihrer Situation. Unser spezialisiertes Team ist geschult im Umgang mit extremen Verhältnissen, sei es durch starke Vermüllung, hygienische Herausforderungen oder Schädlingsbefall.

Eine Messie-Wohnung zu räumen bedeutet mehr als nur Müllbeseitigung. Es geht darum, wieder bewohnbare und sichere Verhältnisse zu schaffen. Unsere Arbeit beginnt mit einer diskreten Kontaktaufnahme und einer sorgfältigen, aber zügigen Einschätzung der Lage. Wir verstehen, dass oft schnelle Hilfe benötigt wird, sei es auf Wunsch der Betroffenen selbst, von Vermietern, Hausverwaltungen oder Behörden. Wir entwickeln einen detaillierten Plan, der nicht nur die Räumung, sondern auch notwendige Reinigungs- und Desinfektionsmaßnahmen umfasst.

Während des gesamten Prozesses legen wir großen Wert darauf, eventuell vorhandene Wertgegenstände, wichtige Dokumente oder persönliche Erinnerungsstücke zu identifizieren und zu sichern. Unsere Mitarbeiter gehen dabei systematisch und mit der gebotenen Sorgfalt vor. Die Entsorgung der unbrauchbaren Gegenstände und des Abfalls erfolgt fachgerecht und unter Einhaltung aller Umwelt- und Hygienevorschriften. Bei Bedarf organisieren wir auch die Bekämpfung von Schädlingen durch zertifizierte Partner. Nach der vollständigen Räumung führen wir eine gründliche Reinigung und Desinfektion der Räumlichkeiten durch, um Gerüche zu neutralisieren und eine hygienisch einwandfreie Umgebung wiederherzustellen. Unser Ziel ist es, den Wohnraum nicht nur leer, sondern auch wieder nutzbar zu machen. Wir arbeiten eng mit unseren Auftraggebern zusammen und informieren transparent über jeden Schritt. Vertrauen Sie unserer Erfahrung und unserem spezialisierten Know-how, um auch die schwierigsten Fälle professionell und mit dem nötigen Fingerspitzengefühl zu lösen.`,
        keyBenefits: [
            'Diskrete und einfühlsame Vorgehensweise',
            'Spezialisiertes Team für extreme Fälle und Hygieneprobleme',
            'Sicherung von Wertgegenständen und wichtigen Dokumenten',
            'Fachgerechte Entsorgung von Müll und kontaminierten Materialien',
            'Gründliche Reinigung und Desinfektion nach der Räumung',
            'Geruchsneutralisation und optional Schädlingsbekämpfung',
            'Wiederherstellung eines bewohnbaren Zustands'
        ],
        processSteps: [
            'Vertrauliche Erstberatung und Situationsanalyse',
            'Diskrete Einschätzung vor Ort mit Sofortmaßnahmen',
            'Schutzmaßnahmen für Team und Umgebung',
            'Systematische Räumung mit Wertsachensicherung',
            'Desinfektion, Geruchsbeseitigung und Wiederherstellung'
        ],
        priceInfo: 'Nach Aufwand - detaillierter Kostenvoranschlag nach Besichtigung'
    },
    {
        id: 'keller-dachboden-entruempelung',
        title: 'Keller- & Dachbodenentrümpelung',
        icon: '📦',
        image: '/images/service-keller-dachboden.jpg',
        shortDescription: 'Schnelle und gründliche Räumung von Kellern, Dachböden, Garagen und Nebengebäuden.',
        fullDescription: `Keller und Dachböden entwickeln sich über die Jahre oft zu vergessenen Lagerräumen, in denen sich unzählige Dinge ansammeln, die nicht mehr benötigt werden. Der Gedanke an eine Entrümpelung solcher Bereiche kann überwältigend sein – enge Zugänge, mangelndes Licht und die schiere Menge an Gegenständen stellen eine echte Herausforderung dar. Wir nehmen Ihnen diese Last ab und schaffen schnell und effizient wieder Platz und Ordnung. Egal ob es sich um einen vollgestellten Keller, einen zugemüllten Dachboden oder auch um Garagen und Schuppen handelt, unser erfahrenes Team packt tatkräftig an.

Wir beginnen mit einer kostenlosen Besichtigung, um den Umfang der Entrümpelung einzuschätzen und Ihnen ein faires Festpreisangebot zu unterbreiten. Dabei berücksichtigen wir auch schwer zugängliche Bereiche und die Art der zu entsorgenden Gegenstände. Unser Service umfasst das komplette Ausräumen, das Sortieren des Inhalts nach wiederverwertbaren Materialien, Sondermüll und Restmüll sowie den fachgerechten Abtransport und die umweltbewusste Entsorgung. Sie müssen sich um nichts kümmern – wir übernehmen die gesamte Organisation und Durchführung.

Oft schlummern in Kellern oder auf Dachböden auch noch Gegenstände von Wert. Unsere Experten erkennen diese und wir bieten Ihnen eine faire Wertanrechnung an, die direkt mit den Kosten der Entrümpelung verrechnet werden kann. Dies kann den Gesamtpreis erheblich reduzieren. Wir arbeiten zügig und hinterlassen die geräumten Bereiche besenrein, sodass Sie den neu gewonnenen Platz sofort wieder nutzen können – sei es als Hobbyraum, zusätzlicher Stauraum oder einfach, um wieder Durchblick zu haben. Unser Ziel ist es, Ihnen eine stressfreie Lösung für Ihre Keller- oder Dachbodenentrümpelung zu bieten, damit Sie sich wieder wohlfühlen und wertvollen Raum zurückgewinnen. Vertrauen Sie auf unsere Professionalität und Effizienz für ein schnelles und sauberes Ergebnis.`,
        keyBenefits: [
            'Schnelle und effiziente Räumung von Kellern, Dachböden, Garagen',
            'Kostenlose Besichtigung und transparentes Festpreisangebot',
            'Sortierung, Abtransport und fachgerechte Entsorgung',
            'Wertanrechnung für brauchbare Gegenstände',
            'Besenreine Übergabe der geräumten Flächen',
            'Schaffung von neuem Platz und Ordnung',
            'Auch für schwer zugängliche Bereiche geeignet'
        ],
        processSteps: [
            'Kostenlose Vor-Ort-Besichtigung und Bestandsaufnahme',
            'Faires Festpreisangebot ohne versteckte Kosten',
            'Terminvereinbarung (oft innerhalb von 48 Stunden möglich)',
            'Komplette Räumung mit Sortierung und Verwertung',
            'Besenreine Übergabe des aufgeräumten Raums'
        ],
        priceInfo: 'Ab 390€ für einen Standard-Keller (ca. 20-30qm)'
    },
    {
        id: 'express-service',
        title: 'Express-Entrümpelung (48h-Service)',
        icon: '⚡',
        image: '/images/service-express.jpg',
        shortDescription: 'Garantierte Räumung innerhalb von 48 Stunden für besonders dringende Fälle.',
        fullDescription: `Manchmal muss es einfach schnell gehen: Ein unerwarteter Umzugstermin, eine kurzfristige Wohnungsübergabe, ein Notfall oder einfach der Wunsch, ein belastendes Problem so rasch wie möglich aus der Welt zu schaffen. Für solche dringenden Fälle bieten wir unseren Express-Entrümpelungsservice an. Wir garantieren Ihnen eine professionelle und vollständige Räumung Ihrer Räumlichkeiten innerhalb von nur 48 Stunden nach Ihrer Beauftragung – oft sogar schneller, abhängig von Umfang und Standort.

Unser Express-Service ist darauf ausgelegt, Ihnen maximale Flexibilität und Geschwindigkeit zu bieten, ohne dabei Kompromisse bei Qualität und Sorgfalt einzugehen. Sobald Sie uns kontaktieren, priorisieren wir Ihren Auftrag und organisieren umgehend eine Besichtigung – wenn nötig auch virtuell per Videoanruf – um den Aufwand schnell einschätzen zu können. Sie erhalten von uns ein verbindliches Angebot, und nach Ihrer Zustimmung beginnen wir unverzüglich mit der Planung und Durchführung der Entrümpelung.

Unser eingespieltes Team ist erfahren in der schnellen und effizienten Abwicklung auch komplexer Räumungsarbeiten unter Zeitdruck. Wir kümmern uns um alle Aspekte der Entrümpelung: von der Demontage über das Sortieren und Verpacken bis hin zum Abtransport und der fachgerechten Entsorgung. Auch bei unserem Express-Service achten wir auf Umweltverträglichkeit und eine mögliche Wertanrechnung für wiederverwertbare Gegenstände. Diskretion und eine besenreine Übergabe sind selbstverständlich. Dieser Service ist ideal für Privatpersonen, Vermieter, Immobilienmakler oder Hausverwaltungen, die eine schnelle und zuverlässige Lösung benötigen. Verlassen Sie sich darauf, dass wir auch unter Termindruck professionell, gründlich und zu Ihrer vollsten Zufriedenheit arbeiten. Kontaktieren Sie uns, wenn es schnell gehen muss – wir sind für Sie da!`,
        keyBenefits: [
            'Garantierte Räumung innerhalb von 48 Stunden (je nach Umfang)',
            'Schnelle Besichtigung und Angebotsstellung',
            'Priorisierte Auftragsbearbeitung',
            'Ideal für dringende Fälle und kurzfristige Termine',
            'Umfassender Service trotz Zeitdruck',
            'Keine Kompromisse bei Qualität und Sorgfalt',
            'Zuverlässige und professionelle Durchführung'
        ],
        processSteps: [
            'Sofortige Kontaktaufnahme und Bedarfsanalyse',
            'Express-Besichtigung (auch per Video möglich)',
            'Verbindliches Sofortangebot',
            'Mobilisierung zusätzlicher Teams',
            'Garantierte Fertigstellung innerhalb 48 Stunden'
        ],
        priceInfo: '20% Express-Zuschlag auf unsere regulären Preise'
    }
];

export default function LeistungenPage() {
    const [activeService, setActiveService] = useState<string>('haushaltsaufloesung');
    const [scrollProgress, setScrollProgress] = useState(0);
    const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
    const [readingProgress, setReadingProgress] = useState<{[key: string]: number}>({});

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);

            // Track reading progress for each service
            servicesData.forEach(service => {
                const element = document.getElementById(`detail-${service.id}`);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const elementTop = rect.top;
                    const elementHeight = rect.height;
                    const windowHeight = window.innerHeight;
                    
                    if (elementTop < windowHeight && elementTop + elementHeight > 0) {
                        const visibleHeight = Math.min(windowHeight, elementTop + elementHeight) - Math.max(0, elementTop);
                        const progress = (visibleHeight / elementHeight) * 100;
                        setReadingProgress(prev => ({ ...prev, [service.id]: Math.min(100, Math.max(0, progress)) }));
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisibleSections(prev => new Set(prev).add(entry.target.id));
                        // Set active service based on what's in view
                        if (entry.target.id.startsWith('detail-')) {
                            setActiveService(entry.target.id.replace('detail-', ''));
                        }
                    }
                });
            },
            { threshold: 0.3 }
        );

        const sections = document.querySelectorAll('.animate-section');
        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const scrollToService = (serviceId: string) => {
        const element = document.getElementById(`detail-${serviceId}`);
        if (element) {
            const offset = 100; // Offset for fixed header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const whyChooseUs = [
        { icon: '✅', title: 'Festpreisgarantie', text: 'Transparente Preise ohne versteckte Kosten - Sie wissen vorher genau, was es kostet' },
        { icon: '🏆', title: '7+ Jahre Erfahrung', text: 'Über 50.000 erfolgreiche Entrümpelungen seit 2009 sprechen für sich' },
        { icon: '🌱', title: 'Umweltgerecht', text: 'Zertifizierte Entsorgung mit maximalem Recycling-Anteil für die Umwelt' },
        { icon: '⭐', title: '4,9/5 Sterne', text: 'Ausgezeichnete Bewertungen bei Google, Trusted Shops und ProvenExpert' },
        { icon: '🛡️', title: 'Voll versichert', text: 'Betriebshaftpflicht bis 5 Mio. Euro - Sie sind rundum abgesichert' },
        { icon: '📞', title: '24/7 Notfall-Service', text: 'Rund um die Uhr erreichbar für dringende Entrümpelungen' }
    ];

    return (
        <div className="bg-gray-50 text-gray-700 overflow-x-hidden">
            <style jsx>{`
                .fade-in-up {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.8s ease-out;
                }
                
                .fade-in-up.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                
                .delay-100 { transition-delay: 100ms; }
                .delay-200 { transition-delay: 200ms; }
                .delay-300 { transition-delay: 300ms; }
                .delay-400 { transition-delay: 400ms; }
                
                .reading-time {
                    font-size: 0.875rem;
                    color: #6B7280;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                
                .service-nav {
                    position: sticky;
                    top: 80px;
                    z-index: 40;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                }
                
                .service-content {
                    line-height: 1.8;
                    color: #374151;
                }
                
                .service-content p {
                    margin-bottom: 1.5rem;
                }
                
                @media (max-width: 768px) {
                    .service-nav {
                        top: 60px;
                    }
                }
            `}</style>

            {/* Progress Bar */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
                <div 
                    className="h-full bg-gradient-to-r from-[#C73E3A] to-[#2C4F5E] transition-all duration-300"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            {/* Hero Section - Kompakter */}
            <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#1a2b36] via-[#2C4F5E] to-[#1E3A47]">
                <div className="absolute inset-0 opacity-5">
                    <div className="h-full w-full" style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block px-6 py-2 mb-6 text-sm font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                        PROFESSIONELLE ENTRÜMPELUNGEN SEIT 2009
                    </span>
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Unsere <span className="text-[#C73E3A]">Leistungen</span> im Detail
                    </h1>
                    
                    <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                        Entdecken Sie unser umfassendes Leistungsspektrum. Von der Haushaltsauflösung 
                        bis zur Betriebsräumung - wir haben für jeden Bedarf die passende Lösung.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+4952199999900"
                            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#C73E3A] rounded-xl shadow-2xl transform transition-all duration-300 hover:bg-[#B02E2A] hover:scale-105"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Jetzt anrufen: 0521 / 1200 510
                        </a>
                        
                        <a
                            href="#leistungen-navigation"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/50"
                        >
                            Leistungen entdecken
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* Sticky Navigation for Services */}
            <nav id="leistungen-navigation" className="service-nav py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                        {servicesData.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => scrollToService(service.id)}
                                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                                    activeService === service.id
                                        ? 'bg-[#C73E3A] text-white shadow-lg transform scale-105'
                                        : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                                }`}
                            >
                                <span className="mr-2">{service.icon}</span>
                                <span className="hidden md:inline">{service.title.split('&')[0]}</span>
                                <span className="md:hidden text-sm">{service.title.split(' ')[0]}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Main Services Content */}
            <section className="py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Quick Overview Cards */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-[#2C4F5E] text-center mb-8">
                            Schnellübersicht unserer Leistungen
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {servicesData.map((service, index) => (
                                <div
                                    key={service.id}
                                    className={`animate-section fade-in-up delay-${(index % 3) + 1}00 ${
                                        visibleSections.has('overview') ? 'visible' : ''
                                    } bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer`}
                                    onClick={() => scrollToService(service.id)}
                                    id={index === 0 ? 'overview' : undefined}
                                >
                                    <div className="flex items-start space-x-4">
                                        <span className="text-4xl">{service.icon}</span>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-lg text-[#2C4F5E] mb-2">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-2">
                                                {service.shortDescription}
                                            </p>
                                            <p className="text-[#C73E3A] font-semibold text-sm">
                                                {service.priceInfo}
                                            </p>
                                        </div>
                                    </div>
                                    {readingProgress[service.id] > 0 && (
                                        <div className="mt-4">
                                            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                                                <div 
                                                    className="h-full bg-gradient-to-r from-[#C73E3A] to-[#2C4F5E] transition-all duration-300"
                                                    style={{ width: `${readingProgress[service.id]}%` }}
                                                />
                                            </div>
                                            <p className="text-xs text-gray-500 mt-1">
                                                {Math.round(readingProgress[service.id])}% gelesen
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Detailed Service Descriptions */}
                    <div className="space-y-20">
                        {servicesData.map((service, index) => (
                            <div
                                key={service.id}
                                id={`detail-${service.id}`}
                                className={`animate-section fade-in-up ${
                                    visibleSections.has(`detail-${service.id}`) ? 'visible' : ''
                                }`}
                            >
                                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                                    {/* Service Header with Image */}
                                    <div className="relative h-64 md:h-80 bg-gradient-to-br from-[#2C4F5E] to-[#C73E3A]">
                                        <div className="absolute inset-0 opacity-20">
                                            <img 
                                                src={service.image} 
                                                alt={service.title} 
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="relative h-full flex items-center justify-center text-white text-center p-8">
                                            <div>
                                                <span className="text-7xl md:text-8xl mb-4 block filter drop-shadow-2xl">
                                                    {service.icon}
                                                </span>
                                                <h2 className="text-3xl md:text-4xl font-bold">
                                                    {service.title}
                                                </h2>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Service Content */}
                                    <div className="p-8 md:p-12">
                                        {/* Reading Time Indicator */}
                                        <div className="reading-time mb-6">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>Lesezeit: ca. 3-4 Minuten</span>
                                        </div>

                                        {/* Main Description */}
                                        <div className="service-content text-lg mb-10">
                                            {service.fullDescription.split('\n\n').map((paragraph, idx) => (
                                                <p key={idx} className="mb-6 leading-relaxed">
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>

                                        {/* Key Benefits */}
                                        <div className="bg-[#F5F5F0] rounded-2xl p-8 mb-8">
                                            <h3 className="text-2xl font-bold text-[#2C4F5E] mb-6 flex items-center">
                                                <span className="text-3xl mr-3">💡</span>
                                                Ihre Vorteile auf einen Blick
                                            </h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {service.keyBenefits.map((benefit, idx) => (
                                                    <div key={idx} className="flex items-start space-x-3">
                                                        <svg className="w-6 h-6 text-[#C73E3A] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                        <span className="text-gray-700">{benefit}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Process Steps */}
                                        {service.processSteps && (
                                            <div className="bg-gradient-to-br from-[#2C4F5E] to-[#1E3A47] text-white rounded-2xl p-8 mb-8">
                                                <h3 className="text-2xl font-bold mb-6 flex items-center">
                                                    <span className="text-3xl mr-3">📋</span>
                                                    So läuft die {service.title.split('&')[0]} ab
                                                </h3>
                                                <div className="space-y-4">
                                                    {service.processSteps.map((step, idx) => (
                                                        <div key={idx} className="flex items-start space-x-4">
                                                            <span className="bg-[#C73E3A] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                                                                {idx + 1}
                                                            </span>
                                                            <p className="text-white/90">{step}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Price Info */}
                                        <div className="bg-gradient-to-r from-[#C73E3A] to-[#B02E2A] text-white rounded-2xl p-8 mb-8">
                                            <h3 className="text-2xl font-bold mb-4">💰 Transparente Preisgestaltung</h3>
                                            <p className="text-xl mb-4">{service.priceInfo}</p>
                                            <p className="text-white/80">
                                                Alle Preise sind Festpreise inklusive aller Nebenkosten wie Anfahrt, 
                                                Entsorgungsgebühren und Arbeitszeit. Keine versteckten Kosten!
                                            </p>
                                        </div>

                                        {/* CTA Buttons */}
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <a
                                                href="tel:+4952199999900"
                                                className="inline-flex items-center justify-center px-8 py-4 bg-[#C73E3A] text-white rounded-lg font-semibold text-lg hover:bg-[#B02E2A] transition-all transform hover:scale-105 shadow-lg"
                                            >
                                                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                                Jetzt beraten lassen
                                            </a>
                                            <a
                                                href="/kontakt"
                                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#2C4F5E] text-[#2C4F5E] rounded-lg font-semibold text-lg hover:bg-[#2C4F5E] hover:text-white transition-all transform hover:scale-105"
                                            >
                                                Kostenloses Angebot anfordern
                                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-[#2C4F5E] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block px-6 py-2 mb-6 text-sm font-semibold text-white bg-white/20 rounded-full">
                            IHRE VORTEILE
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                            Warum Sie sich für die <span className="text-[#C73E3A]">Rümpelschmiede</span> entscheiden sollten
                        </h2>
                        <p className="text-xl text-white/80 max-w-4xl mx-auto">
                            Diese 6 Gründe machen uns zum führenden Entrümpelungsunternehmen in Bielefeld und Umgebung
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyChooseUs.map((reason, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all"
                            >
                                <div className="text-5xl mb-4">{reason.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                                <p className="text-white/80">{reason.text}</p>
                            </div>
                        ))}
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: '1.200+', label: 'Erfolgreiche Entrümpelungen', icon: '🏠' },
                            { value: '98%', label: 'Weiterempfehlungsrate', icon: '⭐' },
                            { value: '7+', label: 'Jahre Erfahrung', icon: '🏆' },
                            { value: '24/7', label: 'Notfall-Service', icon: '📞' }
                        ].map((stat, index) => (
                            <div key={index}>
                                <div className="text-5xl mb-2">{stat.icon}</div>
                                <div className="text-4xl font-bold text-[#C73E3A] mb-2">{stat.value}</div>
                                <div className="text-white/80">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#2C4F5E] mb-4">
                            Häufig gestellte Fragen
                        </h2>
                        <p className="text-xl text-gray-600">
                            Die wichtigsten Antworten auf einen Blick
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                q: "Wie schnell können Sie mit der Entrümpelung beginnen?",
                                a: "In der Regel können wir innerhalb von 2-3 Werktagen mit der Entrümpelung beginnen. Bei unserem Express-Service garantieren wir sogar eine Durchführung innerhalb von 48 Stunden."
                            },
                            {
                                q: "Was kostet eine Entrümpelung?",
                                a: "Die Kosten hängen vom Umfang und der Art der Entrümpelung ab. Nach einer kostenlosen Besichtigung erhalten Sie von uns ein verbindliches Festpreisangebot ohne versteckte Kosten."
                            },
                            {
                                q: "Was passiert mit brauchbaren Gegenständen?",
                                a: "Gut erhaltene Gegenstände können wir ankaufen und den Wert direkt mit den Entrümpelungskosten verrechnen. Alternativ spenden wir diese an karitative Einrichtungen."
                            },
                            {
                                q: "Muss ich während der Entrümpelung anwesend sein?",
                                a: "Nein, Sie müssen nicht die ganze Zeit anwesend sein. Eine Einweisung zu Beginn und eine Abnahme am Ende reichen aus. Wir arbeiten selbstständig und zuverlässig."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                                <h3 className="text-lg font-bold text-[#2C4F5E] mb-2">
                                    {faq.q}
                                </h3>
                                <p className="text-gray-600">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-gradient-to-r from-[#C73E3A] to-[#B02E2A] text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                        Überzeugt? Dann lassen Sie uns loslegen!
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Kontaktieren Sie uns noch heute für eine kostenlose Beratung und ein unverbindliches Angebot.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+4952199999900"
                            className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#C73E3A] rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
                        >
                            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Jetzt anrufen: 0521 / 999 999 00
                        </a>
                        <a
                            href="https://wa.me/4952199999900"
                            className="inline-flex items-center justify-center px-10 py-5 bg-green-500 text-white rounded-xl font-bold text-lg hover:bg-green-600 transition-all transform hover:scale-105 shadow-2xl"
                        >
                            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                            Per WhatsApp schreiben
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}