'use client'
import { useState, useEffect } from 'react';

interface Article {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    category: string;
    readTime: string;
    image: string;
}

const articlesData: Article[] = [
    {
        id: 'haushaltsaufloesung-kosten',
        title: 'Haushaltsauflösung Kosten 2024: Was kostet eine Wohnungsauflösung?',
        excerpt: 'Alles über Kosten einer Haushaltsauflösung: Preisfaktoren, Spartipps und wie Sie bis zu 50% sparen können.',
        content: `
# Haushaltsauflösung Kosten 2024: Was kostet eine Wohnungsauflösung?

Eine Haushaltsauflösung steht an und Sie fragen sich: Was kostet das eigentlich? Die Preise variieren stark – zwischen 800€ und 4.500€ ist alles möglich. Hier erfahren Sie, welche Faktoren die Kosten beeinflussen und wie Sie richtig sparen.

## Was kostet eine Haushaltsauflösung im Durchschnitt?

Die Kosten für eine professionelle Haushaltsauflösung richten sich hauptsächlich nach der Wohnungsgröße und dem Aufwand:

**Durchschnittspreise 2024:**
• 1-Zimmer-Wohnung: 800 - 1.200€
• 2-Zimmer-Wohnung: 1.200 - 1.800€  
• 3-Zimmer-Wohnung: 1.800 - 2.500€
• 4-Zimmer-Wohnung: 2.500 - 3.200€
• Einfamilienhaus: 3.200 - 4.500€

Diese Preise gelten für eine komplette, besenreine Räumung inklusive Entsorgung.

## Diese Faktoren beeinflussen die Kosten

**1. Wohnungsgröße und Zimmeranzahl**
Je mehr Räume, desto höher die Kosten. Auch Keller, Dachboden und Garage erhöhen den Preis.

**2. Menge und Art der Gegenstände**
• Viele Möbel = höhere Kosten
• Sperrmüll und Elektrogeräte sind teurer zu entsorgen
• Sondermüll (Farben, Chemikalien) verursacht Extra-Kosten

**3. Zustand der Wohnung**
Eine vermüllte Wohnung kostet mehr als eine bereits aufgeräumte. Bei extremen Messie-Wohnungen können Aufschläge von 30-50% anfallen.

**4. Anfahrtsweg und Zugänglichkeit**
• Große Entfernungen erhöhen die Kosten
• Fehlt ein Aufzug, wird ein Zuschlag berechnet
• Enge Treppenhäuser erschweren den Transport

## So sparen Sie bei der Haushaltsauflösung

**Wertgegenstände identifizieren**
Vor der Entrümpelung sollten Sie wertvolle Gegenstände aussortieren:
• Antiquitäten und Sammlerobjekte
• Funktionsfähige Elektrogeräte
• Hochwertige Möbel
• Schmuck und Uhren

Diese werden vom Räumungspreis abgezogen oder separat verkauft.

**Vorab selbst entrümpeln**
Entsorgen Sie bereits im Vorfeld:
• Persönliche Gegenstände
• Kleidung und Textilien  
• Bücher und Papiere
• Kleinteile

Das kann die Kosten um 200-500€ reduzieren.

**Mehrere Angebote einholen**
Holen Sie mindestens 3 Kostenvoranschläge ein. Seriöse Anbieter besichtigen vor Ort und erstellen ein detailliertes Angebot.

## Versteckte Kosten vermeiden

**Achten Sie auf Festpreise**
Seriöse Anbieter kalkulieren nach der Besichtigung einen Festpreis. Vorsicht vor Stundenlöhnen oder vagen Kostenangaben.

**Diese Zusatzkosten können anfallen:**
• Sondermüll-Entsorgung: 50-200€
• Aufzug nicht vorhanden: 10-15% Aufschlag
• Endreinigung: 3-5€ pro m²
• Demontage komplexer Möbel: 50-150€

**Kostenlose Leistungen einfordern**
Folgende Services sollten immer inklusive sein:
• Besichtigung und Kostenvoranschlag
• Transport und Verladung
• Normale Entsorgung
• Besenreine Übergabe

## Wann lohnt sich eine professionelle Haushaltsauflösung?

Eine professionelle Räumung ist sinnvoll, wenn:
• Sie zeitlich oder körperlich nicht in der Lage sind
• Wertgegenstände fachgerecht begutachtet werden sollen
• Sondermüll vorhanden ist
• Eine besenreine Übergabe erforderlich ist

Die Zeitersparnis und der Stress, der Ihnen erspart bleibt, rechtfertigen meist die Kosten.

## Fazit: Faire Preise durch gute Vorbereitung

Eine Haushaltsauflösung kostet zwischen 800€ und 4.500€. Die genauen Kosten hängen von Größe, Zustand und Inhalt der Wohnung ab. Mit der richtigen Vorbereitung und mehreren Angeboten können Sie jedoch erheblich sparen.

**Jetzt kostenlose Beratung sichern:** Lassen Sie sich unverbindlich beraten und erhalten Sie ein Festpreis-Angebot für Ihre Haushaltsauflösung.
        `,
        date: '15. November 2024',
        category: 'Kosten & Preise',
        readTime: '7 Min. Lesezeit',
        image: '/images/haushaltsaufloesung-kosten.jpg'
    },
    {
        id: 'entrümpelung-checkliste',
        title: 'Entrümpelung Checkliste: 10 Schritte zur erfolgreichen Haushaltsauflösung',
        excerpt: 'Mit unserer Schritt-für-Schritt Anleitung wird Ihre Entrümpelung zum Erfolg. Kostenlose Checkliste zum Download.',
        content: `
# Entrümpelung Checkliste: 10 Schritte zur erfolgreichen Haushaltsauflösung

Eine Entrümpelung kann überwältigend wirken. Mit der richtigen Planung wird sie jedoch zur strukturierten Aufgabe. Diese Checkliste führt Sie Schritt für Schritt durch den gesamten Prozess.

## Schritt 1: Zeitplan erstellen (2-4 Wochen vorher)

**Realistische Zeitplanung ist entscheidend:**
• Kleine Wohnung (1-2 Zimmer): 1-2 Tage
• Mittlere Wohnung (3-4 Zimmer): 3-5 Tage  
• Großes Haus: 1-2 Wochen
• Messie-Wohnung: 2-3 Wochen

Planen Sie 20% mehr Zeit ein als ursprünglich gedacht. Entrümpelungen dauern meist länger als erwartet.

## Schritt 2: Rechtliche Aspekte klären

**Wichtige Fragen vorab:**
• Sind Sie der rechtmäßige Eigentümer/Erbe?
• Müssen andere Familienmitglieder informiert werden?
• Gibt es ein Testament oder Erbverträge?
• Welche Fristen sind zu beachten (Mietvertrag, etc.)?

Bei Erbschaften sollten alle Beteiligten schriftlich zustimmen.

## Schritt 3: Budget festlegen

**Kostenfaktoren kalkulieren:**
• Professionelle Entrümpelung: 800-4.500€
• Container-Miete: 150-400€
• Reinigungsmittel und Material: 50-100€
• Verkaufsplattformen (eBay, etc.): 5-10% vom Verkaufspreis

**Einnahmen gegenrechnen:**
• Wertgegenstände verkaufen
• Pfandflaschen sammeln
• Altmetall zum Schrotthändler

## Schritt 4: Wertgegenstände identifizieren

**Vor der Entsorgung prüfen:**

**Wertvoll sind oft:**
• Schmuck und Uhren
• Antiquitäten und Kunstgegenstände
• Sammlerobjekte (Münzen, Briefmarken)
• Bücher (Erstausgaben)
• Vintage-Möbel und Designer-Stücke
• Funktionsfähige Elektrogeräte

**Professionell schätzen lassen:**
Bei unklarem Wert sollten Sie einen Sachverständigen hinzuziehen.

## Schritt 5: Sortierung in 4 Kategorien

**System für effiziente Entrümpelung:**

**1. Behalten**
• Persönliche Erinnerungsstücke
• Noch brauchbare Gegenstände
• Wichtige Dokumente

**2. Verkaufen**  
• Wertvolle Gegenstände
• Gut erhaltene Möbel
• Funktionsfähige Elektrogeräte

**3. Spenden**
• Kleidung in gutem Zustand
• Bücher und Spielzeug
• Haushaltsgeräte

**4. Entsorgen**
• Defekte Gegenstände
• Verschlissene Möbel
• Sondermüll

## Schritt 6: Entsorgungsmöglichkeiten organisieren

**Container bestellen:**
• Für große Mengen Sperrmüll
• Verschiedene Größen: 3m³ bis 10m³
• Stellplatz bei der Gemeinde anmelden

**Sperrmüll-Abholung:**
• Kostenlos bei den meisten Gemeinden
• Termine rechtzeitig vereinbaren
• Mengenbegrenzungen beachten

**Wertstoffhof:**
• Für Elektrogeräte und Sondermüll
• Öffnungszeiten prüfen
• Ausweis mitbringen

## Schritt 7: Verkauf organisieren

**Online-Plattformen nutzen:**
• eBay Kleinanzeigen: Lokaler Verkauf
• Facebook Marketplace: Große Reichweite
• Spezialisierte Portale: Für Antiquitäten

**Flohmärkte und Hausverkauf:**
• Alles auf einmal loswerden
• Weniger Aufwand als Einzelverkauf
• Realistische Preise ansetzen

**Ankaufsdienste:**
• Für Bücher, CDs, DVDs
• Schnell aber niedrige Preise
• Online-Ankauf möglich

## Schritt 8: Professionelle Hilfe einbeziehen

**Wann Profis sinnvoll sind:**
• Bei großem Umfang (ab 3 Zimmer)
• Wenn Zeitdruck besteht
• Bei körperlichen Einschränkungen
• Für besenreine Übergabe

**Darauf bei der Auswahl achten:**
• Festpreis nach Besichtigung
• Versicherungsschutz
• Referenzen und Bewertungen
• Vollständige Entsorgungsnachweise

## Schritt 9: Dokumente sichern und vernichten

**Wichtige Dokumente finden:**
• Versicherungspolicen
• Sparbücher und Verträge
• Testament und Vollmachten
• Persönliche Urkunden

**Sichere Vernichtung:**
• Persönliche Daten schreddern
• Festplatten professionell löschen
• DSGVO-konforme Aktenvernichtung

## Schritt 10: Endreinigung und Übergabe

**Besenreine Übergabe bedeutet:**
• Alle Räume sind vollständig geräumt
• Grober Schmutz ist entfernt
• Keine Renovierung erforderlich
• Schlüssel können übergeben werden

**Bei Bedarf Endreinigung beauftragen:**
• Professionelle Grundreinigung
• Beseitigung hartnäckiger Flecken
• Desinfektionen bei Bedarf

## Fazit: Mit System zum Erfolg

Eine strukturierte Entrümpelung spart Zeit, Geld und Nerven. Beginnen Sie früh mit der Planung und scheuen Sie sich nicht, professionelle Hilfe in Anspruch zu nehmen.

**Jetzt kostenlose Beratung sichern:** Unsere Experten helfen Ihnen bei der Planung und Durchführung Ihrer Entrümpelung.
        `,
        date: '8. November 2024',
        category: 'Ratgeber',
        readTime: '10 Min. Lesezeit',
        image: '/images/entrümpelung-checkliste.jpg'
    },
    {
        id: 'wertvolles-erkennen',
        title: 'Wertvolle Gegenstände erkennen: Diese Schätze verstecken sich im Haushalt',
        excerpt: 'Antiquitäten, Sammlerobjekte, Erbstücke - So erkennen Sie versteckte Schätze vor der Entrümpelung.',
        content: `
# Wertvolle Gegenstände erkennen: Diese Schätze verstecken sich im Haushalt

Vor jeder Entrümpelung lohnt sich ein genauer Blick: In deutschen Haushalten schlummern oft unerkannte Schätze. Was für Sie wertlos erscheint, kann hunderte oder sogar tausende Euro wert sein.

## Die häufigsten Schätze im Haushalt

**Schmuck und Uhren**
• Goldschmuck: Auch alter oder defekter Schmuck hat Materialwert
• Vintage-Uhren: Besonders deutsche Marken (A. Lange & Söhne, Glashütte)
• Silberbesteck: Echter Silbergehalt macht den Wert aus
• Kostümschmuck: Designerstücke können wertvoll sein

**Porzellan und Keramik**
• Meissen-Porzellan: Erkennbar am blauen Schwerter-Stempel
• Rosenthal, KPM Berlin: Deutsche Luxusmarken
• Hummel-Figuren: Besonders ältere Jahrgänge
• Steiff-Tiere: Mit Knopf im Ohr und Fahne

## Möbel und Einrichtung: Woran Sie Wertvolles erkennen

**Antiquitäten und Vintage-Möbel**
• Massivholz vs. Furnier: Echtes Holz ist wertvoller
• Handwerkszeichen: Stempel, Signaturen, Etiketten
• Bauhaus und Mid-Century: Designklassiker der 50er-70er Jahre
• Orientteppiche: Echte Handarbeit erkennen

**Erkennungsmerkmale für wertvolle Möbel:**
• Schwalbenschwanz-Verbindungen bei Schubladen
• Hochwertige Beschläge aus Messing oder Bronze
• Furniere aus edlen Hölzern
• Originale Designer-Aufkleber oder Stempel

## Bücher und Dokumente: Mehr als Altpapier

**Wertvolle Bücher erkennen:**
• Erstausgaben berühmter Werke
• Signierte Exemplare
• Limitierte Auflagen
• Alte Kochbücher und Fachbücher

**Historische Dokumente:**
• Alte Aktien und Wertpapiere
• Militaria (Vorsicht: Nicht alles ist legal verkäuflich)
• Vintage-Landkarten und Stadtpläne
• Alte Briefe und Postkarten

## Sammlerbereich: Hier schlummern oft Schätze

**Münzen und Briefmarken**
• Deutsche Mark vor 1990: Sammlerpreise möglich  
• Alte Pfennige und Mark-Stücke
• Briefmarken des Deutschen Reichs
• DDR-Briefmarken in perfektem Zustand

**Spielzeug und Sammlerobjekte**
• Märklin-Eisenbahnen: Besonders H0-Modelle der 50er-70er
• Barbie-Puppen: Erste Editionen sind wertvoll
• Lego-Sets: Vollständige, alte Sets
• Comics: Marvel und DC aus den 60er-80ern

## Technik und Elektrogeräte: Vintage ist gefragt

**Audio und HiFi**
• Röhrenverstärker: Bei Musikern sehr beliebt
• Plattenspieler: Technics, Thorens, Dual
• Vintage-Lautsprecher: Tannoy, JBL, Klipsch
• Schallplatten: Jazz, Rock, Klassik der 50er-80er

**Computer und Konsolen**
• Apple-Computer der 80er/90er
• Spielekonsolen: Atari, Nintendo, Sega
• Vintage-Kameras: Leica, Hasselblad, Rollei
• Röhrenradios und alte Fernseher

## So ermitteln Sie den Wert richtig

**Online-Recherche als erster Schritt:**
• eBay "Verkaufte Artikel" durchsuchen
• Spezialisierte Sammler-Foren
• Auktionshäuser-Ergebnisse
• Preisvergleichs-Portale

**Professionelle Schätzung einholen:**
• Sachverständige für Antiquitäten
• Juweliere für Schmuck und Uhren  
• Kunsthändler für Gemälde
• Auktionshäuser für Gesamtschätzungen

**Warnsignale für Fälschungen:**
• Zu perfekter Zustand bei alten Gegenständen
• Fehlende oder ungenaue Markenzeichen
• Ungewöhnlich niedrige Preise bei angeblichen Raritäten

## Häufige Fehler beim Wertschätzen

**Diese Irrtümer sind teuer:**
• "Ist ja alt, also wertlos": Alter allein macht nicht wertlos
• Zustand überschätzen: Auch beschädigte Stücke können wertvoll sein
• Emotionalen Wert mit Marktwert verwechseln
• Zu schnell verkaufen: Recherche braucht Zeit

**Realistische Erwartungen haben:**
Die meisten Gegenstände haben keinen besonderen Sammlerwert. Aber selbst 50-100€ pro Gegenstand können bei einer Entrümpelung schnell zu beachtlichen Summen werden.

## Verkaufsstrategie für Wertgegenstände

**Verschiedene Kanäle nutzen:**
• Auktionshäuser: Für sehr wertvolle Stücke (ab 500€)
• eBay: Für Sammlerobjekte und Vintage
• Fachhändler: Für Antiquitäten und Schmuck
• Flohmärkte: Für alles andere

**Timing beachten:**
• Antiquitäten: Vor Weihnachten und im Frühjahr
• Gartenartikel: März bis Juni
• Weihnachtsschmuck: Oktober bis November

## Fazit: Augen auf bei der Entrümpelung

Eine sorgfältige Durchsicht vor der Entrümpelung kann sich richtig lohnen. Nehmen Sie sich die Zeit für eine gründliche Bewertung – es könnte der Unterschied zwischen Gewinn und Verlust sein.

**Jetzt kostenlose Beratung sichern:** Unsere Experten helfen Ihnen dabei, Wertgegenstände zu identifizieren und optimal zu verwerten.
        `,
        date: '1. November 2024',
        category: 'Tipps & Tricks',
        readTime: '8 Min. Lesezeit',
        image: '/images/wertvolle-gegenstände.jpg'
    },
    {
        id: 'messie-hilfe',
        title: 'Messie-Wohnung aufräumen: Professionelle Hilfe bei Messie-Syndrom',
        excerpt: 'Einfühlsame Hilfe bei Messie-Wohnungen: Wie der Weg zurück zu einem sauberen Zuhause gelingt.',
        content: `
# Messie-Wohnung aufräumen: Professionelle Hilfe bei Messie-Syndrom

Das Messie-Syndrom betrifft mehr Menschen als man denkt. Schätzungsweise 2,5 Millionen Deutsche leben in stark vermüllten Wohnungen. Der Weg zurück zu einem bewohnbaren Zuhause ist möglich – mit der richtigen Hilfe und viel Verständnis.

## Was ist das Messie-Syndrom?

Das Messie-Syndrom ist eine ernst zu nehmende psychische Belastung, bei der Betroffene zwanghaft Gegenstände sammeln und nicht entsorgen können. Es ist keine Faulheit oder mangelnde Hygiene, sondern eine behandlungsbedürftige Störung.

**Typische Merkmale:**
• Unfähigkeit, Gegenstände wegzuwerfen
• Starke emotionale Bindung an Dinge
• Verlust der Wohnfunktion durch Ansammlungen
• Sozialer Rückzug und Schamgefühle
• Gesundheitliche Risiken durch Ungeziefer und Schimmel

## Grade der Vermüllung: Eine Einschätzung

**Grad 1 - Leichte Unordnung:**
• Wohnung ist noch bewohnbar
• Alle Räume sind zugänglich
• Keine Geruchsbelästigung
• Küche und Bad funktionsfähig

**Grad 2 - Mittlere Vermüllung:**
• Einige Räume nicht mehr nutzbar
• Stapel bis zur Decke
• Leichte Geruchsbildung
• Erste hygienische Probleme

**Grad 3 - Starke Vermüllung:**
• Nur noch schmale Pfade durch die Wohnung
• Küche und Bad eingeschränkt nutzbar
• Starke Geruchsbelästigung
• Schimmel und Ungeziefer möglich

**Grad 4 - Extreme Vermüllung:**
• Wohnung unbewohnbar
• Gesundheitsgefahr durch Schimmel
• Ungeziefer und Fäulnis
• Sofortiger Handlungsbedarf

## Der richtige Umgang mit Betroffenen

**Verständnis und Geduld zeigen:**
• Keine Vorwürfe oder Schuldzuweisungen
• Betroffene nicht unter Druck setzen
• Scham und Angst ernst nehmen
• Kleine Fortschritte würdigen

**Professionelle Hilfe organisieren:**
• Therapeutische Begleitung
• Spezialisierte Entrümpelungs-Teams
• Sozialarbeiter hinzuziehen
• Medizinische Untersuchung bei Gesundheitsgefährdung

## Schritt-für-Schritt zur Messie-Entrümpelung

**Phase 1: Vertrauen schaffen (1-2 Wochen)**
• Behutsame Erstbesichtigung
• Gemeinsame Zielsetzung
• Realistische Zeitplanung
• Sicherheitsmaßnahmen besprechen

**Phase 2: Vorsortierung (2-4 Wochen)**
• Wichtige Dokumente sichern
• Wertgegenstände identifizieren
• Gefährliche Stoffe entfernen
• Erste Laufwege schaffen

**Phase 3: Haupträumung (1-3 Wochen)**
• Raum für Raum systematisch vorgehen
• Betroffene in Entscheidungen einbeziehen
• Regelmäßige Pausen einhalten
• Fortschritte dokumentieren

**Phase 4: Sanierung (1-2 Wochen)**
• Grundreinigung und Desinfektion
• Schimmelbeseitigung
• Kleinere Reparaturen
• Ungeziefer-Bekämpfung

## Was kostet eine Messie-Entrümpelung?

**Kostenfaktoren:**
• Grad der Vermüllung
• Wohnungsgröße
• Notwendige Sanierungsmaßnahmen
• Zeitaufwand und Personalkosten

**Durchschnittspreise:**
• Grad 1: 1.500 - 3.000€
• Grad 2: 3.000 - 6.000€
• Grad 3: 6.000 - 12.000€
• Grad 4: 12.000 - 20.000€

**Zusatzkosten:**
• Schimmelbeseitigung: 2.000 - 5.000€
• Ungeziefer-Bekämpfung: 500 - 2.000€
• Desinfektion: 500 - 1.500€
• Container und Entsorgung: 1.000 - 3.000€

## Gesundheitsrisiken ernst nehmen

**Akute Gefahren in Messie-Wohnungen:**
• Schimmelsporen: Atemwegserkrankungen
• Ungeziefer: Krankheitsübertragung
• Einsturzgefahr: Durch Überladung
• Brandgefahr: Durch zugestellte Fluchtwege
• Verletzungsrisiko: Durch herumliegende Gegenstände

**Schutzmaßnahmen bei der Räumung:**
• Atemschutz und Schutzkleidung
• Erste-Hilfe-Ausrüstung vor Ort
• Regelmäßige Lüftung
• Professionelle Ausrüstung verwenden

## Rechtliche Aspekte beachten

**Mietrechtliche Konsequenzen:**
• Vermieter kann bei extremer Vermüllung kündigen
• Nachbarn können Mietminderung geltend machen
• Ordnungsamt kann Zwangsräumung anordnen
• Kosten trägt meist der Mieter

**Unterstützung durch Behörden:**
• Sozialamt: Finanzielle Hilfe möglich
• Gesundheitsamt: Bei Gesundheitsgefährdung
• Ordnungsamt: Vermittlung zwischen Parteien
• Betreuungsstelle: Bei rechtlicher Betreuung

## Nach der Räumung: Rückfall vermeiden

**Therapeutische Nachbetreuung:**
• Verhaltenstherapie zur Ursachenbehandlung
• Selbsthilfegruppen für Betroffene
• Regelmäßige Kontrolltermine
• Aufbau sozialer Kontakte

**Präventive Maßnahmen:**
• Feste Aufräum-Routinen entwickeln
• Ein-Gegenstand-rein-ein-Gegenstand-raus-Regel
• Regelmäßige Besuche von Vertrauenspersonen
• Professionelle Reinigungshilfe

## Hilfe für Angehörige

**Umgang mit Betroffenen:**
• Grenzen setzen, aber Unterstützung anbieten
• Keine Vorhaltungen oder Ultimaten
• Eigene psychische Gesundheit schützen
• Professionelle Beratung in Anspruch nehmen

**Wo finden Angehörige Hilfe:**
• Caritas und Diakonie: Beratung und Unterstützung
• Selbsthilfegruppen für Angehörige
• Psychologische Beratungsstellen
• Online-Foren und Informationsportale

## Fazit: Hoffnung und professionelle Hilfe

Das Messie-Syndrom ist behandelbar. Mit professioneller Hilfe, viel Geduld und der richtigen Nachbetreuung ist ein Weg zurück zu einem bewohnbaren Zuhause möglich.

**Jetzt kostenlose Beratung sichern:** Unsere Experten helfen diskret und einfühlsam bei der Planung und Durchführung einer Messie-Entrümpelung.
        `,
        date: '25. Oktober 2024',
        category: 'Spezialthemen',
        readTime: '12 Min. Lesezeit',
        image: '/images/messie-hilfe.jpg'
    },
    {
        id: 'nachlassverwertung',
        title: 'Nachlassverwertung: Erbschaft sinnvoll auflösen und verwerten',
        excerpt: 'Nach einem Todesfall: So lösen Sie eine Erbschaft professionell auf und verwerten Wertgegenstände optimal.',
        content: `
# Nachlassverwertung: Erbschaft sinnvoll auflösen und verwerten

Ein Todesfall bringt neben der Trauer oft die Aufgabe mit sich, den Nachlass zu regeln. Eine durchdachte Nachlassverwertung kann emotional belastend sein, aber auch finanzielle Chancen bieten.

## Erste Schritte nach dem Todesfall

**Sofortmaßnahmen (erste 48 Stunden):**
• Erbschein beantragen oder Testament vorlegen
• Alle Erben kontaktieren und informieren
• Nachlassgericht benachrichtigen
• Versicherungen und Banken informieren
• Wohnung/Haus sichern (Schlösser, Alarmanlagen)

**Rechtliche Grundlagen klären:**
• Wer sind die rechtmäßigen Erben?
• Gibt es ein Testament oder Erbvertrag?
• Sind Pflichtteilsberechtigte zu bedenken?
• Welche Schulden sind vorhanden?

**Achtung Erbschaftsteuer:**
Die Erbschaftsteuer muss innerhalb von 3 Monaten nach Kenntnis der Erbschaft angemeldet werden.

## Nachlass systematisch erfassen

**Vollständige Bestandsaufnahme erstellen:**

**Immobilien:**
• Eigenheimwert durch Gutachter ermitteln
• Grundbucheinträge prüfen
• Belastungen und Hypotheken erfassen
• Nebenkosten und Unterhalt kalkulieren

**Wertgegenstände identifizieren:**
• Schmuck und Uhren
• Kunstgegenstände und Antiquitäten
• Sammlungen (Münzen, Briefmarken, etc.)
• Hochwertige Möbel und Einrichtung
• Fahrzeuge und Maschinen

**Finanzwerte ermitteln:**
• Bankkonten und Sparbücher
• Aktien, Fonds und Anleihen
• Versicherungen mit Rückkaufswert
• Forderungen gegen Dritte

## Professionelle Wertermittlung

**Wann ist eine Schätzung nötig?**
• Bei Erbschaftsteuer ab bestimmten Freibeträgen
• Wenn mehrere Erben sich einigen müssen
• Bei unklarem Wert von Gegenständen
• Für Verkaufs- oder Versicherungszwecke

**Sachverständige beauftragen:**
• Immobiliengutachter: Für Häuser und Grundstücke
• Kunstsachverständige: Für Gemälde und Skulpturen
• Juweliere: Für Schmuck und Edelmetalle
• Antiquitätenhändler: Für Möbel und Sammlerobjekte

**Kosten für Gutachten:**
• Immobiliengutachten: 0,5-1,5% des Verkehrswerts
• Kunstgutachten: 1-3% des geschätzten Werts
• Schmuckschätzung: 1-2% des Werts
• Gesamtnachlass: 2.000-10.000€ je nach Umfang

## Verwertungsstrategien entwickeln

**Verkauf über verschiedene Kanäle:**

**Auktionshäuser:**
• Für hochwertige Kunst und Antiquitäten
• Internationale Reichweite
• Expertenberatung inklusive
• Provision: 15-25% des Verkaufspreises

**Fachhändler:**
• Schneller Verkauf ohne Wartezeit
• Faire Preise bei seriösen Händlern
• Meist Barzahlung möglich
• Gut für größere Mengen

**Online-Plattformen:**
• eBay: Große Reichweite, mehr Aufwand
• Catawiki: Spezialisiert auf Sammlerobjekte
• Hood.de: Deutsche Alternative zu eBay
• Facebook Marketplace: Lokaler Verkauf

**Direktverkauf:**
• Immobilien: Über Makler oder privat
• Fahrzeuge: Händler oder Privatverkauf
• Schmuck: Juwelier oder Goldankauf

## Steuerliche Aspekte der Nachlassverwertung

**Erbschaftsteuer-Freibeträge 2024:**
• Ehepartner: 500.000€
• Kinder: 400.000€ pro Kind
• Enkel: 200.000€ pro Enkel
• Geschwister/Neffen: 20.000€

**Steuerklassen und Steuersätze:**
• Steuerklasse I (7-30%): Ehepartner, Kinder
• Steuerklasse II (15-43%): Geschwister, Neffen
• Steuerklasse III (30-50%): Alle anderen

**Bewertungsmaßstäbe:**
• Immobilien: Verkehrswert zum Todeszeitpunkt
• Wertpapiere: Kurs am Todestag
• Unternehmen: Ertragswert oder Substanzwert
• Hausrat: Meist pauschal 1% des Nachlasswerts

## Sonderfall: Überschuldeter Nachlass

**Warnsignale erkennen:**
• Mehr Schulden als Vermögen
• Hohe Kreditraten und Verbindlichkeiten
• Rückstände bei Miete oder Nebenkosten
• Mahnungen und Vollstreckungsbescheide

**Erbschaft ausschlagen:**
• Frist: 6 Wochen nach Kenntnis
• Beim Nachlassgericht erklären
• Auch teilweise Ausschlagung möglich
• Alternative: Nachlassverwaltung beantragen

## Emotionale Aspekte berücksichtigen

**Umgang mit Erinnerungsstücken:**
• Nicht alles hat einen Marktwert
• Familienerinnerungen fair aufteilen
• Digitalisierung von Fotos und Dokumenten
• Zeit für Abschiednehmen einplanen

**Konflikte unter Erben vermeiden:**
• Früh kommunizieren und transparent sein
• Neutrale Gutachter hinzuziehen
• Notar oder Mediator als Vermittler
• Schriftliche Vereinbarungen treffen

## Praktische Tipps für die Nachlassverwertung

**Zeitmanagement:**
• Realistische Fristen setzen
• Nicht unter Zeitdruck verkaufen
• Marktzeiten beachten (Immobilien, Kunst)
• Steuerfristen im Blick behalten

**Kostenoptimierung:**
• Mehrere Angebote einholen
• Gruppierung ähnlicher Gegenstände
• Hausverkäufe für Restposten
• Professionelle Hilfe nur bei Wertvollem

**Dokumentation:**
• Alle Bewertungen und Verkäufe dokumentieren
• Belege für Steuer aufbewahren
• Fotos von wertvollen Gegenständen
• Kommunikation mit Erben schriftlich

## Fazit: Strukturiert und respektvoll vorgehen

Eine Nachlassverwertung ist eine verantwortungsvolle Aufgabe, die Fingerspitzengefühl und Sachverstand erfordert. Mit der richtigen Planung lassen sich sowohl emotionale als auch finanzielle Aspekte angemessen berücksichtigen.

**Jetzt kostenlose Beratung sichern:** Unsere Experten unterstützen Sie bei der professionellen und würdevollen Nachlassverwertung.
        `,
        date: '18. Oktober 2024',
        category: 'Erbschaft',
        readTime: '9 Min. Lesezeit',
        image: '/images/nachlassverwertung.jpg'
    },
    {
        id: 'umweltgerechte-entsorgung',
        title: 'Umweltgerechte Entsorgung: Nachhaltigkeit bei der Entrümpelung',
        excerpt: 'Wie Entrümpelung nachhaltig funktioniert: Recycling, Spenden und umweltschonende Entsorgung.',
        content: `
# Umweltgerechte Entsorgung: Nachhaltigkeit bei der Entrümpelung

Jährlich fallen in Deutschland etwa 40 Millionen Tonnen Siedlungsabfall an. Bei Entrümpelungen können Sie aktiv dazu beitragen, diese Menge zu reduzieren und wertvolle Ressourcen zu schonen.

## Warum nachhaltige Entrümpelung wichtig ist

**Umweltauswirkungen von Wegwerfmentalität:**
• Rohstoffverschwendung durch Vernichtung brauchbarer Gegenstände
• CO₂-Emissionen durch Müllverbrennung und Transporte
• Deponieplatzverschwendung für recycelbare Materialien
• Energieverlust durch fehlende Wiederverwertung

**Ihr Beitrag zum Klimaschutz:**
Eine nachhaltige Entrümpelung kann den CO₂-Fußabdruck um bis zu 60% reduzieren im Vergleich zur reinen Müllentsorgung.

## Die 5-R-Strategie für nachhaltige Entrümpelung

**1. Refuse (Ablehnen)**
• Neue Anschaffungen kritisch hinterfragen
• Qualität vor Quantität wählen
• Auf langlebige Produkte setzen

**2. Reduce (Reduzieren)**
• Minimalistischen Lebensstil entwickeln
• Bewusster konsumieren
• Doppelte Gegenstände vermeiden

**3. Reuse (Wiederverwenden)**
• Gegenstände in anderem Kontext nutzen
• Upcycling-Projekte realisieren
• Reparieren statt wegwerfen

**4. Recycle (Recyceln)**
• Materialien fachgerecht trennen
• Wertstoffkreisläufe unterstützen
• Recycling-Stationen nutzen

**5. Rot (Kompostieren)**
• Organische Abfälle kompostieren
• Natürliche Kreisläufe fördern

## Richtig sortieren für die Umwelt

**Wertstoffe erkennen und trennen:**

**Metalle:**
• Aluminium: 100% recycelbar ohne Qualitätsverlust
• Kupfer: Extrem wertvoll für Recycling
• Eisen und Stahl: Magnettest zur Identifikation
• Edelmetalle: Auch kleinste Mengen sind wertvoll

**Kunststoffe:**
• PET-Flaschen: Zu neuen Flaschen oder Textilien
• PE/PP: Für Folien und Behälter
• PS: Für Dämmstoff und neue Produkte
• Recycling-Codes beachten (Dreiecks-Symbol mit Zahl)

**Papier und Karton:**
• Bis zu 7x recycelbar
• Keine beschichteten oder verschmutzten Papiere
• Akten schreddern, aber recyceln

**Elektrogeräte (WEEE):**
• Seltene Erden und wertvolle Metalle enthalten
• Kostenlose Rückgabe beim Händler oder Wertstoffhof
• Daten sicher löschen vor Abgabe

## Spenden statt entsorgen

**Geeignete Organisationen finden:**

**Soziale Einrichtungen:**
• Caritas, Diakonie, AWO: Möbel und Haushaltsgeräte
• Sozialkaufhäuser: Kleidung und Gebrauchsgegenstände
• Frauenhäuser: Besonders Haushaltsausstattung
• Flüchtlingshilfe: Möbel und warme Kleidung

**Bildungseinrichtungen:**
• Schulen: Bücher, Computer, Bastelmaterial
• Kindergärten: Spielzeug und Bücher
• Volkshochschulen: Bücher und Elektronik
• Universitäten: Fachbücher und Laborausstattung

**Tierheime und Umweltorganisationen:**
• Alte Handtücher und Decken
• Transportboxen und Käfige
• Gartenwerkzeug und Pflanzen

**Spendenquittungen für Steuer:**
Anerkannte Organisationen stellen Spendenbescheinigungen aus, die steuerlich absetzbar sind.

## Kreislaufwirtschaft verstehen

**Was passiert mit recycelten Materialien?**

**Papier wird zu:**
• Neuem Papier und Karton (5-7 Zyklen)
• Dämmstoff für Gebäude
• Eierkartons und Verpackungen

**Metalle werden zu:**
• Neuen Metallprodukten ohne Qualitätsverlust
• Elektronikkomponenten
• Fahrzeugteilen und Maschinen

**Kunststoffe werden zu:**
• Fleece-Pullovern (aus PET-Flaschen)
• Gartenmöbeln und Zäunen
• Neuen Verpackungen (Downcycling)

**Glas wird zu:**
• Neuem Glas (unendlich recycelbar)
• Glaswolle für Dämmung
• Straßenbelag (Glasbruch)

## Sondermüll richtig entsorgen

**Gefährliche Abfälle identifizieren:**

**Chemikalien und Farben:**
• Lösungsmittel und Säuren
• Alte Farben und Lacke
• Pflanzenschutzmittel
• Batterien und Akkus

**Elektronik mit Schadstoffen:**
• Röhrenfernseher (Blei)
• Energiesparlampen (Quecksilber)
• Handys (seltene Erden)
• Drucker und Kopierer (Toner)

**Kostenlose Abgabestellen:**
• Wertstoffhöfe der Gemeinden
• Schadstoffmobile (mobile Sammlung)
• Handel (Rücknahmepflicht für Elektrogeräte)

## Upcycling: Aus Alt mach Neu

**Kreative Wiederverwertung:**

**Möbel aufwerten:**
• Alte Kommoden neu streichen
• Aus Paletten Gartenmöbel bauen
• Türen zu Tischplatten umfunktionieren
• Schubladen als Wandregale nutzen

**Textilien verwandeln:**
• T-Shirts zu Putzlappen
• Jeans zu Taschen oder Polsterbezügen
• Handtücher zu Tierbetten
• Hemden zu Küchenschürzen

**Dekoration selbst machen:**
• Weinflaschen zu Vasen
• Konservendosen zu Stiftebehältern
• Alte Bücher zu Wandkunst
• CDs als Vogelschreck im Garten

## Nachhaltige Entrümpelungsunternehmen wählen

**Worauf achten bei der Auswahl:**

**Zertifizierungen prüfen:**
• Entsorgungsfachbetrieb-Zertifikat
• ISO 14001 (Umweltmanagementsystem)
• EMAS (Eco-Management and Audit Scheme)
• Mitgliedschaft in Umweltverbänden

**Nachhaltige Praktiken erfragen:**
• Wie hoch ist die Recycling-Quote?
• Werden Spenden an soziale Einrichtungen vermittelt?
• Gibt es eigene Wiederverwertungskanäle?
• Wird CO₂-Kompensation angeboten?

**Transparenz einfordern:**
• Entsorgungsnachweise verlangen
• Verwertungswege dokumentieren lassen
• Umweltbilanz des Unternehmens erfragen

## Kosten und Nutzen nachhaltiger Entsorgung

**Kostenvergleich:**
• Reine Müllentsorgung: 150-300€ pro Tonne
• Recycling-orientierte Entsorgung: 100-250€ pro Tonne
• Mit Wertanrechnung: 50-150€ pro Tonne
• Spenden: 0€ plus Steuervorteil

**Versteckte Ersparnisse:**
• Weniger Entsorgungskosten durch Verwertung
• Steuervorteile durch Spenden
• Verkaufserlöse für Wertgegenstände
• Gutes Gewissen (unbezahlbar)

## Praktische Tipps für den Alltag

**Vor der nächsten Entrümpelung:**
• Inventar erstellen und Verwertungsmöglichkeiten recherchieren
• Soziale Kontakte für Spenden nutzen
• Online-Plattformen für Verkauf und Verschenkung
• Zeit für nachhaltigen Prozess einplanen

**Langfristig nachhaltiger leben:**
• Bewusster konsumieren
• Reparatur-Cafés nutzen
• Tauschbörsen und Second-Hand-Märkte besuchen
• Leasing und Sharing-Economy nutzen

## Fazit: Nachhaltigkeit als Verantwortung

Umweltgerechte Entrümpelung ist mehr als ein Trend – es ist unsere Verantwortung gegenüber kommenden Generationen. Jeder gesparte Container und jeder gespendete Gegenstand macht einen Unterschied.

**Jetzt kostenlose Beratung sichern:** Unsere Experten helfen Ihnen bei einer nachhaltigen und umweltgerechten Entrümpelung.
        `,
        date: '11. Oktober 2024',
        category: 'Nachhaltigkeit',
        readTime: '6 Min. Lesezeit',
        image: '/images/umwelt-entsorgung.jpg'
    }
];

const categories = [
    'Alle Artikel',
    'Kosten & Preise',
    'Ratgeber',
    'Tipps & Tricks',
    'Spezialthemen',
    'Erbschaft',
    'Nachhaltigkeit'
];

export default function ArtikelPage() {
    const [selectedCategory, setSelectedCategory] = useState('Alle Artikel');
    const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisibleSections(prev => new Set(prev).add(entry.target.id));
                    }
                });
            },
            { threshold: 0.1 }
        );

        const sections = document.querySelectorAll('.animate-section');
        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const filteredArticles = selectedCategory === 'Alle Artikel' 
        ? articlesData 
        : articlesData.filter(article => article.category === selectedCategory);

    return (
        <div className="bg-gray-50 text-gray-700">
            <style jsx>{`
                .fade-in-up {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 0.6s ease-out;
                }
                
                .fade-in-up.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                
                .delay-100 { transition-delay: 100ms; }
                .delay-200 { transition-delay: 200ms; }
                .delay-300 { transition-delay: 300ms; }
            `}</style>

            {/* Hero Section */}
            <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#1a2b36] via-[#2C4F5E] to-[#1E3A47]">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <span className="inline-block px-6 py-2 mb-6 text-sm font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                            RATGEBER & TIPPS
                        </span>
                        
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                            Entrümpelung Ratgeber
                            <span className="block text-[#C73E3A] mt-2">Tipps & Wissen</span>
                        </h1>
                        
                        <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                            Professionelle Tipps und Anleitungen für Ihre Entrümpelung. Von Kostensparen 
                            bis zur umweltgerechten Entsorgung - hier finden Sie alles Wissenswerte.
                        </p>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 bg-white sticky top-20 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                                    selectedCategory === category
                                        ? 'bg-[#C73E3A] text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section id="articles-grid" className="animate-section py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredArticles.map((article, index) => (
                            <article
                                key={article.id}
                                className={`fade-in-up delay-${(index % 3) + 1}00 ${
                                    visibleSections.has('articles-grid') ? 'visible' : ''
                                } bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all group cursor-pointer`}
                            >
                                {/* Article Image */}
                                <div className="relative h-48 bg-gradient-to-br from-[#2C4F5E] to-[#C73E3A]">
                                    <div className="absolute inset-0 bg-black/20"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    
                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 text-[#2C4F5E] px-3 py-1 rounded-full text-xs font-semibold">
                                            {article.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Article Content */}
                                <div className="p-6">
                                    <div className="flex items-center text-sm text-gray-500 mb-3">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {article.date}
                                        <span className="mx-2">•</span>
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {article.readTime}
                                    </div>
                                    
                                    <h2 className="text-xl font-bold text-[#2C4F5E] mb-3 group-hover:text-[#C73E3A] transition-colors line-clamp-2">
                                        {article.title}
                                    </h2>
                                    
                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {article.excerpt}
                                    </p>
                                    
                                    <div className="flex items-center text-[#C73E3A] font-semibold group-hover:text-[#B02E2A] transition-colors">
                                        Artikel lesen
                                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Load More Button */}
                    {filteredArticles.length > 6 && (
                        <div className="text-center mt-12">
                            <button className="px-8 py-3 bg-[#C73E3A] text-white rounded-lg font-semibold hover:bg-[#B02E2A] transition-all">
                                Weitere Artikel laden
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-16 bg-[#2C4F5E] text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Bleiben Sie informiert
                    </h2>
                    <p className="text-lg text-white/80 mb-8">
                        Erhalten Sie regelmäßig neue Tipps und Ratgeber rund um das Thema Entrümpelung
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Ihre E-Mail-Adresse"
                            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#C73E3A] focus:outline-none"
                        />
                        <button className="px-6 py-3 bg-[#C73E3A] text-white rounded-lg font-semibold hover:bg-[#B02E2A] transition-all whitespace-nowrap">
                            Anmelden
                        </button>
                    </div>
                    
                    <p className="text-sm text-white/60 mt-4">
                        Kostenlos und jederzeit kündbar. Ihre Daten sind bei uns sicher.
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-[#2C4F5E] mb-8 text-center">
                        Häufige Fragen zur Entrümpelung
                    </h2>

                    <div className="space-y-4">
                        {[
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
                            },
                            {
                                q: "Ist eine Entrümpelung umweltfreundlich?",
                                a: "Ja, wir arbeiten nach nachhaltigen Prinzipien: Recycling, Spenden an soziale Einrichtungen und fachgerechte Entsorgung nach den neuesten Umweltstandards."
                            },
                            {
                                q: "Brauche ich einen Termin für eine Besichtigung?",
                                a: "Ja, eine Terminvereinbarung ist sinnvoll. So können wir uns ausreichend Zeit nehmen und Ihnen vor Ort ein genaues, verbindliches Angebot erstellen."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-6">
                                <h3 className="font-bold text-[#2C4F5E] mb-2">
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

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-[#C73E3A] to-[#B02E2A] text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Haben Sie Fragen zur Entrümpelung?
                    </h2>
                    <p className="text-lg mb-8 opacity-90">
                        Unsere Experten beraten Sie gerne kostenlos und unverbindlich
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+4952199999900"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#C73E3A] rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            0521 / 1200 510
                        </a>
                        <a
                            href="/kontakt"
                            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-[#C73E3A] transition-all"
                        >
                            Kostenlose Beratung
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}