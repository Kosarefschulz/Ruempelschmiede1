export interface CityData {
  name: string
  slug: string
  region: string
  postalCode: string
  coordinates: {
    lat: number
    lng: number
  }
  basePrice: number
  komfortPrice: number
  premiumPrice: number
  customerCount: number
  reviewCount: number
  districts?: string[]
  nearbyTowns: Array<{
    name: string
    slug: string
    distance: string
  }>
  localSpecialty?: string
  specialPartnership?: {
    name: string
    description: string
    url: string
  }
  heroTitle?: string
  heroSubtitle?: string
  uniqueServices?: Array<{
    title: string
    description: string
    icon: string
  }>
  testimonials: Array<{
    name: string
    text: string
    service: string
    rating: number
  }>
  faqs: Array<{
    question: string
    answer: string
  }>
}

export const cities: Record<string, CityData> = {
  hoexter: {
    name: 'Höxter',
    slug: 'hoexter',
    region: 'NW',
    postalCode: '37671',
    coordinates: { lat: 51.7745, lng: 9.3811 },
    basePrice: 690,
    komfortPrice: 1390,
    premiumPrice: 2090,
    customerCount: 500,
    reviewCount: 487,
    districts: [
      'Höxter-Kernstadt',
      'Albaxen',
      'Bödexen',
      'Brenkhausen',
      'Bruchhausen',
      'Fürstenau',
      'Godelheim',
      'Lüchtringen',
      'Lütmarsen',
      'Ottbergen',
      'Ovenhausen',
      'Stahle'
    ],
    specialPartnership: {
      name: 'Die Steinpfleger',
      description: 'Einziger autorisierter Partner für professionelle Steinreinigung im Raum Höxter',
      url: 'https://www.die-steinpfleger.de'
    },
    nearbyTowns: [
      { name: 'Holzminden', slug: 'holzminden', distance: '12 km' },
      { name: 'Bad Driburg', slug: 'bad-driburg', distance: '15 km' },
      { name: 'Brakel', slug: 'brakel', distance: '18 km' },
      { name: 'Beverungen', slug: 'beverungen', distance: '10 km' }
    ],
    testimonials: [
      {
        name: 'Familie Müller',
        text: 'Haushaltsauflösung und Terrassenreinigung aus einer Hand. Die Steinpfleger-Qualität ist beeindruckend!',
        service: 'Haushaltsauflösung + Steinpflege Höxter',
        rating: 5
      },
      {
        name: 'Herr Schmidt',
        text: 'Nach der Entrümpelung haben sie auch unsere Einfahrt gereinigt. Sieht aus wie neu!',
        service: 'Kellerentrümpelung Höxter',
        rating: 5
      },
      {
        name: 'Frau Weber',
        text: 'Professionelle Arbeit, faire Preise. Die Steinpflege war das i-Tüpfelchen!',
        service: 'Komplettservice Höxter',
        rating: 5
      },
      {
        name: 'Michael Bauer',
        text: 'Express-Service hat perfekt funktioniert. Innerhalb von 48 Stunden war alles erledigt.',
        service: 'Express-Entrümpelung Höxter',
        rating: 5
      },
      {
        name: 'Familie Hoffmann',
        text: 'Die Fassadenreinigung hat unser Haus verwandelt. Endlich wieder strahlend sauber!',
        service: 'Steinpflege Holzminden',
        rating: 5
      },
      {
        name: 'Anna Krüger',
        text: 'Nachlass-Entrümpelung mit viel Fingerspitzengefühl. Danke für alles!',
        service: 'Haushaltsauflösung Brakel',
        rating: 5
      }
    ],
    faqs: [
      {
        question: 'Was kostet eine Entrümpelung in Höxter?',
        answer: 'Die Kosten für eine Entrümpelung in Höxter beginnen bei 690€ für eine 1-Zimmer-Wohnung. Der finale Preis hängt von verschiedenen Faktoren ab: Wohnungsgröße, Zugänglichkeit, Entsorgungsmenge und gewünschte Zusatzleistungen. Wir bieten immer eine kostenlose Besichtigung und verbindliche Festpreise an.'
      },
      {
        question: 'Welche Stadtteile in Höxter bedienen Sie?',
        answer: 'Wir entrümpeln in ganz Höxter und allen Stadtteilen: Höxter-Kernstadt, Albaxen, Bödexen, Brenkhausen, Bruchhausen, Fürstenau, Godelheim, Lüchtringen, Lütmarsen, Ottbergen, Ovenhausen und Stahle. Auch in den umliegenden Gemeinden wie Holzminden, Bad Driburg und Beverungen sind wir aktiv.'
      },
      {
        question: 'Was ist das Besondere an Ihrer Partnerschaft mit Die Steinpfleger?',
        answer: 'Als exklusiver Die Steinpfleger Franchise-Partner für die Region Höxter bieten wir neben Entrümpelungen auch professionelle Steinreinigung und -pflege an. Das bedeutet: Komplettservice aus einer Hand - von der Haushaltsauflösung bis zur Terrassenreinigung. Ein Ansprechpartner, eine Rechnung, doppelte Qualität!'
      },
      {
        question: 'Wie schnell können Sie in Höxter entrümpeln?',
        answer: 'Wir bieten einen 48-Stunden Express-Service in Höxter. In dringenden Fällen können wir oft noch am selben Tag mit der Entrümpelung beginnen.'
      }
    ]
  },
  koeln: {
    name: 'Köln',
    slug: 'koeln',
    region: 'NW',
    postalCode: '50667',
    coordinates: { lat: 50.9375, lng: 6.9603 },
    basePrice: 720,
    komfortPrice: 1420,
    premiumPrice: 2090,
    customerCount: 1800,
    reviewCount: 1673,
    districts: [
      'Innenstadt',
      'Rodenkirchen',
      'Lindenthal',
      'Ehrenfeld',
      'Nippes',
      'Chorweiler',
      'Porz',
      'Kalk',
      'Mülheim'
    ],
    nearbyTowns: [
      { name: 'Leverkusen', slug: 'leverkusen', distance: '10 km' },
      { name: 'Bergisch Gladbach', slug: 'bergisch-gladbach', distance: '15 km' },
      { name: 'Hürth', slug: 'huerth', distance: '10 km' },
      { name: 'Frechen', slug: 'frechen', distance: '12 km' },
      { name: 'Bergheim', slug: 'bergheim', distance: '20 km' }
    ],
    testimonials: [
      {
        name: 'Familie Müller',
        text: 'Professionelle Entrümpelung in Köln. Das Team war pünktlich, freundlich und sehr gründlich.',
        service: 'Haushaltsauflösung Köln',
        rating: 5
      },
      {
        name: 'Michael Schmidt',
        text: 'Express-Service in Köln - innerhalb von 48 Stunden war alles erledigt. Top!',
        service: 'Express-Entrümpelung',
        rating: 5
      },
      {
        name: 'Anna Weber',
        text: 'Faire Preise und transparente Abrechnung. Gerne wieder bei der nächsten Entrümpelung!',
        service: 'Wohnungsauflösung Köln',
        rating: 5
      },
      {
        name: 'Familie Bauer',
        text: 'Kellerentrümpelung in Köln - schnell und sauber. Der Festpreis wurde eingehalten.',
        service: 'Keller Köln',
        rating: 5
      },
      {
        name: 'Vertraulich',
        text: 'Diskrete und respektvolle Räumung. Das Team hat mit viel Fingerspitzengefühl gearbeitet.',
        service: 'Messie-Hilfe Köln',
        rating: 5
      },
      {
        name: 'Consulting GmbH',
        text: 'Komplette Gewerbeauflösung am Wochenende. Perfekt organisiert und termingerecht.',
        service: 'Büroauflösung Köln',
        rating: 5
      }
    ],
    faqs: [
      {
        question: 'Was kostet eine Entrümpelung in Köln?',
        answer: 'Die Kosten für eine Entrümpelung in Köln beginnen bei 720€ für eine 1-Zimmer-Wohnung. Der finale Preis hängt von verschiedenen Faktoren ab: Wohnungsgröße, Zugänglichkeit, Entsorgungsmenge und gewünschte Zusatzleistungen. Wir bieten immer eine kostenlose Besichtigung und verbindliche Festpreise an.'
      },
      {
        question: 'In welchen Kölner Stadtteilen sind Sie aktiv?',
        answer: 'Wir entrümpeln in ganz Köln - von der Innenstadt über Nippes, Ehrenfeld, Lindenthal bis nach Porz und Mülheim. Auch in den Außenbezirken wie Rodenkirchen, Chorweiler und Kalk sind wir für Sie da.'
      },
      {
        question: 'Wie schnell können Sie in Köln entrümpeln?',
        answer: 'Wir bieten einen 48-Stunden Express-Service in Köln. In dringenden Fällen können wir oft noch am selben Tag mit der Entrümpelung beginnen. Regulär sind wir innerhalb von 3-5 Tagen bei Ihnen.'
      },
      {
        question: 'Arbeiten Sie auch am Wochenende in Köln?',
        answer: 'Ja, wir bieten flexible Termine auch am Wochenende an. Besonders für Berufstätige oder bei dringenden Entrümpelungen in Köln sind Samstags-Termine möglich.'
      }
    ]
  },
  muenchen: {
    name: 'München',
    slug: 'muenchen',
    region: 'BY',
    postalCode: '80331',
    coordinates: { lat: 48.1351, lng: 11.5820 },
    basePrice: 750,
    komfortPrice: 1490,
    premiumPrice: 2190,
    customerCount: 1200,
    reviewCount: 1156,
    heroTitle: 'Entrümpelung München - Servus und anpacken!',
    districts: [
      'Altstadt-Lehel',
      'Ludwigsvorstadt-Isarvorstadt',
      'Maxvorstadt',
      'Schwabing',
      'Au-Haidhausen',
      'Sendling',
      'Neuhausen-Nymphenburg',
      'Bogenhausen',
      'Berg am Laim',
      'Trudering-Riem',
      'Ramersdorf-Perlach',
      'Obergiesing-Fasangarten'
    ],
    nearbyTowns: [
      { name: 'Dachau', slug: 'dachau', distance: '25 km' },
      { name: 'Freising', slug: 'freising', distance: '35 km' },
      { name: 'Starnberg', slug: 'starnberg', distance: '25 km' },
      { name: 'Fürstenfeldbruck', slug: 'fuerstenfeldbruck', distance: '25 km' },
      { name: 'Germering', slug: 'germering', distance: '20 km' }
    ],
    testimonials: [
      {
        name: 'Maria Huber',
        text: 'Entrümpelung unserer Altbauwohnung in Schwabing. Das Team war sehr respektvoll und hat alles perfekt organisiert.',
        service: 'Haushaltsauflösung Schwabing',
        rating: 5
      },
      {
        name: 'Innovation GmbH',
        text: 'Büroauflösung im Glockenbach - sehr professionell und auch am Wochenende möglich. Top Service!',
        service: 'Gewerbe Glockenbachviertel',
        rating: 5
      },
      {
        name: 'Franz Mayer',
        text: 'Kellerentrümpelung in Sendling - schnell erledigt und fair bepreist. Gerne wieder!',
        service: 'Keller Sendling',
        rating: 5
      },
      {
        name: 'Familie Gruber',
        text: 'Dachbodenentrümpelung in Haidhausen - trotz enger Treppe alles perfekt bewältigt.',
        service: 'Dachboden Haidhausen',
        rating: 5
      },
      {
        name: 'Dr. Zimmermann',
        text: 'Express-Service für unsere Zahnarztpraxis in der Maxvorstadt. 48 Stunden - Wort gehalten!',
        service: 'Praxis Maxvorstadt',
        rating: 5
      },
      {
        name: 'Thomas Bauer',
        text: 'Haus in Bogenhausen nach Erbfall entrümpelt. Sehr einfühlsam und trotzdem gründlich.',
        service: 'Nachlass Bogenhausen',
        rating: 5
      }
    ],
    faqs: [
      {
        question: 'Was kostet eine Entrümpelung in München?',
        answer: 'Die Kosten für eine Entrümpelung in München beginnen bei 750€ für eine 1-Zimmer-Wohnung. Der finale Preis hängt von verschiedenen Faktoren ab: Wohnungsgröße, Zugänglichkeit, Entsorgungsmenge und gewünschte Zusatzleistungen. Wir bieten immer eine kostenlose Besichtigung und verbindliche Festpreise an.'
      },
      {
        question: 'In welchen Münchner Stadtteilen sind Sie aktiv?',
        answer: 'Wir entrümpeln in ganz München - von Schwabing über die Altstadt bis nach Sendling und Giesing. Auch in den Außenbezirken wie Trudering, Perlach und Bogenhausen sind wir für Sie da.'
      },
      {
        question: 'Gibt es einen Aufpreis für schwer zugängliche Altbauwohnungen in München?',
        answer: 'Nein, unser Festpreis gilt auch für schwer zugängliche Objekte. Ob Altbau in Schwabing ohne Aufzug oder Dachgeschosswohnung in Haidhausen - der vereinbarte Preis bleibt gleich.'
      },
      {
        question: 'Wie lange dauert eine Entrümpelung in München?',
        answer: 'Die Dauer hängt von der Objektgröße ab. Eine 2-Zimmer-Wohnung entrümpeln wir meist in 4-6 Stunden, ein Einfamilienhaus in 1-2 Tagen. Express-Service innerhalb 48 Stunden möglich.'
      }
    ]
  },
  hamburg: {
    name: 'Hamburg',
    slug: 'hamburg',
    region: 'HH',
    postalCode: '20095',
    coordinates: { lat: 53.5511, lng: 9.9937 },
    basePrice: 740,
    komfortPrice: 1450,
    premiumPrice: 2150,
    customerCount: 1500,
    reviewCount: 1423,
    districts: [
      'Hamburg-Mitte',
      'Altona',
      'Eimsbüttel',
      'Hamburg-Nord',
      'Wandsbek',
      'Bergedorf',
      'Harburg'
    ],
    nearbyTowns: [
      { name: 'Norderstedt', slug: 'norderstedt', distance: '15 km' },
      { name: 'Wedel', slug: 'wedel', distance: '20 km' },
      { name: 'Pinneberg', slug: 'pinneberg', distance: '18 km' },
      { name: 'Ahrensburg', slug: 'ahrensburg', distance: '25 km' }
    ],
    testimonials: [
      {
        name: 'Familie Hansen',
        text: 'Sehr professionelle Haushaltsauflösung in Eppendorf. Alles wurde sorgfältig sortiert und entsorgt.',
        service: 'Haushaltsauflösung Hamburg',
        rating: 5
      },
      {
        name: 'Reederei Nord GmbH',
        text: 'Büroauflösung in der HafenCity - termingerecht und diskret durchgeführt.',
        service: 'Gewerbeauflösung Hamburg',
        rating: 5
      },
      {
        name: 'Peter Schulze',
        text: 'Kellerentrümpelung in Altona schnell erledigt. Faire Preise und super Service!',
        service: 'Kellerentrümpelung Hamburg',
        rating: 5
      }
    ],
    faqs: [
      {
        question: 'Was kostet eine Entrümpelung in Hamburg?',
        answer: 'Die Kosten für eine Entrümpelung in Hamburg beginnen bei 740€ für eine 1-Zimmer-Wohnung. Der finale Preis hängt von verschiedenen Faktoren ab: Wohnungsgröße, Zugänglichkeit, Entsorgungsmenge und gewünschte Zusatzleistungen.'
      },
      {
        question: 'Entrümpeln Sie auch in den Hamburger Außenbezirken?',
        answer: 'Ja, wir sind in ganz Hamburg aktiv - von der Innenstadt über Altona, Eimsbüttel bis nach Bergedorf und Harburg. Auch in den Vier- und Marschlanden sind wir für Sie da.'
      },
      {
        question: 'Wie schnell können Sie in Hamburg entrümpeln?',
        answer: 'Wir bieten einen 48-Stunden Express-Service in Hamburg. In dringenden Fällen können wir oft noch am selben Tag mit der Entrümpelung beginnen.'
      }
    ]
  },
  berlin: {
    name: 'Berlin',
    slug: 'berlin',
    region: 'BE',
    postalCode: '10178',
    coordinates: { lat: 52.5200, lng: 13.4050 },
    basePrice: 690,
    komfortPrice: 1390,
    premiumPrice: 2090,
    customerCount: 2500,
    reviewCount: 2387,
    districts: [
      'Mitte',
      'Friedrichshain-Kreuzberg',
      'Pankow',
      'Charlottenburg-Wilmersdorf',
      'Spandau',
      'Steglitz-Zehlendorf',
      'Tempelhof-Schöneberg',
      'Neukölln',
      'Treptow-Köpenick',
      'Marzahn-Hellersdorf',
      'Lichtenberg',
      'Reinickendorf'
    ],
    nearbyTowns: [
      { name: 'Potsdam', slug: 'potsdam', distance: '35 km' },
      { name: 'Oranienburg', slug: 'oranienburg', distance: '35 km' },
      { name: 'Bernau', slug: 'bernau', distance: '25 km' },
      { name: 'Königs Wusterhausen', slug: 'koenigs-wusterhausen', distance: '30 km' }
    ],
    testimonials: [
      {
        name: 'Familie Schneider',
        text: 'Wohnungsauflösung in Prenzlauer Berg perfekt durchgeführt. Sehr zuverlässiges Team!',
        service: 'Haushaltsauflösung Berlin',
        rating: 5
      },
      {
        name: 'StartUp GmbH',
        text: 'Büroauflösung in Mitte - schnell, professionell und zu fairen Preisen.',
        service: 'Gewerbeauflösung Berlin',
        rating: 5
      },
      {
        name: 'Frau Zimmermann',
        text: 'Messie-Wohnung in Neukölln diskret und gründlich entrümpelt. Vielen Dank!',
        service: 'Messie-Entrümpelung Berlin',
        rating: 5
      }
    ],
    faqs: [
      {
        question: 'Was kostet eine Entrümpelung in Berlin?',
        answer: 'Die Kosten für eine Entrümpelung in Berlin beginnen bei 690€ für eine 1-Zimmer-Wohnung. Als Hauptstadt-Service bieten wir besonders günstige Konditionen bei gleichbleibend hoher Qualität.'
      },
      {
        question: 'In welchen Berliner Bezirken sind Sie tätig?',
        answer: 'Wir entrümpeln in allen 12 Berliner Bezirken - von Spandau bis Köpenick, von Pankow bis Steglitz. Unser Hauptstandort ermöglicht uns kurze Anfahrtswege in ganz Berlin.'
      },
      {
        question: 'Bieten Sie auch Entrümpelungen in Brandenburg an?',
        answer: 'Ja, wir entrümpeln auch im Berliner Umland. Potsdam, Oranienburg, Bernau und weitere Städte in Brandenburg gehören zu unserem Einzugsgebiet.'
      }
    ]
  },
  frankfurt: {
    name: 'Frankfurt',
    slug: 'frankfurt',
    region: 'HE',
    postalCode: '60311',
    coordinates: { lat: 50.1109, lng: 8.6821 },
    basePrice: 730,
    komfortPrice: 1440,
    premiumPrice: 2120,
    customerCount: 1100,
    reviewCount: 1045,
    districts: [
      'Innenstadt',
      'Westend',
      'Nordend',
      'Ostend',
      'Bornheim',
      'Sachsenhausen',
      'Bockenheim',
      'Höchst',
      'Fechenheim'
    ],
    nearbyTowns: [
      { name: 'Offenbach', slug: 'offenbach', distance: '10 km' },
      { name: 'Bad Homburg', slug: 'bad-homburg', distance: '20 km' },
      { name: 'Hanau', slug: 'hanau', distance: '25 km' },
      { name: 'Mainz', slug: 'mainz', distance: '40 km' }
    ],
    testimonials: [
      {
        name: 'Finanz AG',
        text: 'Büroauflösung im Bankenviertel professionell und diskret durchgeführt.',
        service: 'Gewerbeauflösung Frankfurt',
        rating: 5
      },
      {
        name: 'Familie Wagner',
        text: 'Haushaltsauflösung in Sachsenhausen - alles bestens gelaufen!',
        service: 'Wohnungsauflösung Frankfurt',
        rating: 5
      },
      {
        name: 'Herr Klein',
        text: 'Express-Entrümpelung hat super funktioniert. Innerhalb von 48 Stunden!',
        service: 'Express-Service Frankfurt',
        rating: 5
      }
    ],
    faqs: [
      {
        question: 'Was kostet eine Entrümpelung in Frankfurt?',
        answer: 'Die Kosten für eine Entrümpelung in Frankfurt beginnen bei 730€ für eine 1-Zimmer-Wohnung. Als Finanzmetropole sind wir auf schnelle und diskrete Abwicklung spezialisiert.'
      },
      {
        question: 'Entrümpeln Sie auch Büros im Bankenviertel?',
        answer: 'Ja, wir sind auf Gewerbeentrümpelungen spezialisiert. Gerade im Frankfurter Bankenviertel führen wir regelmäßig diskrete Büroauflösungen durch - auch außerhalb der Geschäftszeiten.'
      },
      {
        question: 'Wie schnell können Sie in Frankfurt entrümpeln?',
        answer: 'Wir bieten einen 48-Stunden Express-Service in Frankfurt. Für Geschäftskunden sind wir auch am Wochenende und nachts im Einsatz.'
      }
    ]
  },
  stuttgart: {
    name: 'Stuttgart',
    slug: 'stuttgart',
    region: 'BW',
    postalCode: '70173',
    coordinates: { lat: 48.7758, lng: 9.1829 },
    basePrice: 720,
    komfortPrice: 1420,
    premiumPrice: 2100,
    customerCount: 950,
    reviewCount: 912,
    districts: [
      'Stuttgart-Mitte',
      'Stuttgart-Nord',
      'Stuttgart-Ost',
      'Stuttgart-Süd',
      'Stuttgart-West',
      'Bad Cannstatt',
      'Degerloch',
      'Feuerbach',
      'Vaihingen'
    ],
    nearbyTowns: [
      { name: 'Esslingen', slug: 'esslingen', distance: '15 km' },
      { name: 'Ludwigsburg', slug: 'ludwigsburg', distance: '20 km' },
      { name: 'Böblingen', slug: 'boeblingen', distance: '20 km' },
      { name: 'Waiblingen', slug: 'waiblingen', distance: '15 km' }
    ],
    testimonials: [
      {
        name: 'Automotive GmbH',
        text: 'Professionelle Büroauflösung in Stuttgart-Vaihingen. Termingerecht abgewickelt.',
        service: 'Gewerbeauflösung Stuttgart',
        rating: 5
      },
      {
        name: 'Familie Schwarz',
        text: 'Haushaltsauflösung am Killesberg - trotz vieler Treppen alles problemlos!',
        service: 'Wohnungsauflösung Stuttgart',
        rating: 5
      },
      {
        name: 'Herr Müller',
        text: 'Kellerentrümpelung in Bad Cannstatt schnell und sauber erledigt.',
        service: 'Kellerentrümpelung Stuttgart',
        rating: 5
      }
    ],
    faqs: [
      {
        question: 'Was kostet eine Entrümpelung in Stuttgart?',
        answer: 'Die Kosten für eine Entrümpelung in Stuttgart beginnen bei 720€ für eine 1-Zimmer-Wohnung. Die Hanglage vieler Stuttgarter Stadtteile ist bereits in unseren Preisen berücksichtigt.'
      },
      {
        question: 'Entrümpeln Sie auch in den Stuttgarter Höhenlagen?',
        answer: 'Ja, wir entrümpeln in ganz Stuttgart - auch in Halbhöhenlagen wie Killesberg oder auf der Gänsheide. Unsere Teams sind auf die Stuttgarter Topografie eingestellt.'
      },
      {
        question: 'Bieten Sie auch Entrümpelungen im Großraum Stuttgart an?',
        answer: 'Selbstverständlich! Wir entrümpeln auch in Esslingen, Ludwigsburg, Böblingen und dem gesamten Rems-Murr-Kreis.'
      }
    ]
  },
  duesseldorf: {
    name: 'Düsseldorf',
    slug: 'duesseldorf',
    region: 'NW',
    postalCode: '40213',
    coordinates: { lat: 51.2277, lng: 6.7735 },
    basePrice: 710,
    komfortPrice: 1410,
    premiumPrice: 2090,
    customerCount: 850,
    reviewCount: 823,
    districts: [
      'Altstadt',
      'Carlstadt',
      'Oberkassel',
      'Golzheim',
      'Derendorf',
      'Pempelfort',
      'Flingern',
      'Düsseltal',
      'Bilk',
      'Benrath'
    ],
    nearbyTowns: [
      { name: 'Neuss', slug: 'neuss', distance: '10 km' },
      { name: 'Ratingen', slug: 'ratingen', distance: '15 km' },
      { name: 'Meerbusch', slug: 'meerbusch', distance: '12 km' },
      { name: 'Hilden', slug: 'hilden', distance: '15 km' }
    ],
    testimonials: [
      {
        name: 'Mode GmbH',
        text: 'Geschäftsauflösung auf der Königsallee diskret und professionell durchgeführt.',
        service: 'Gewerbeauflösung Düsseldorf',
        rating: 5
      },
      {
        name: 'Familie Yamamoto',
        text: 'Wohnungsauflösung in Oberkassel - sehr zuvorkommend und gründlich!',
        service: 'Haushaltsauflösung Düsseldorf',
        rating: 5
      },
      {
        name: 'Herr Richter',
        text: 'Messie-Wohnung in Flingern einfühlsam und diskret entrümpelt.',
        service: 'Messie-Entrümpelung Düsseldorf',
        rating: 5
      }
    ],
    faqs: [
      {
        question: 'Was kostet eine Entrümpelung in Düsseldorf?',
        answer: 'Die Kosten für eine Entrümpelung in Düsseldorf beginnen bei 710€ für eine 1-Zimmer-Wohnung. Als Landeshauptstadt-Service bieten wir erstklassige Qualität zu fairen Preisen.'
      },
      {
        question: 'Entrümpeln Sie auch Geschäfte auf der Königsallee?',
        answer: 'Ja, wir sind auf diskrete Geschäftsauflösungen spezialisiert. Gerade auf der Kö führen wir regelmäßig Entrümpelungen außerhalb der Geschäftszeiten durch.'
      },
      {
        question: 'In welchen Düsseldorfer Stadtteilen sind Sie aktiv?',
        answer: 'Wir entrümpeln in ganz Düsseldorf - von der Altstadt über Oberkassel bis nach Benrath. Auch in den japanischen Vierteln sind wir regelmäßig im Einsatz.'
      }
    ]
  },
  bremen: {
    name: 'Bremen',
    slug: 'bremen',
    region: 'HB',
    postalCode: '28195',
    coordinates: { lat: 53.0793, lng: 8.8017 },
    basePrice: 700,
    komfortPrice: 1400,
    premiumPrice: 2080,
    customerCount: 650,
    reviewCount: 628,
    districts: [
      'Mitte',
      'Östliche Vorstadt',
      'Schwachhausen',
      'Vahr',
      'Horn-Lehe',
      'Neustadt',
      'Obervieland',
      'Huchting',
      'Woltmershausen',
      'Gröpelingen'
    ],
    nearbyTowns: [
      { name: 'Bremerhaven', slug: 'bremerhaven', distance: '60 km' },
      { name: 'Delmenhorst', slug: 'delmenhorst', distance: '15 km' },
      { name: 'Oldenburg', slug: 'oldenburg', distance: '45 km' },
      { name: 'Achim', slug: 'achim', distance: '20 km' }
    ],
    testimonials: [
      {
        name: 'Reederei Bremen',
        text: 'Büroauflösung am Hafen - professionell und termingerecht durchgeführt.',
        service: 'Gewerbeauflösung Bremen',
        rating: 5
      },
      {
        name: 'Familie Petersen',
        text: 'Haushaltsauflösung in Schwachhausen. Sehr freundliches und kompetentes Team!',
        service: 'Wohnungsauflösung Bremen',
        rating: 5
      },
      {
        name: 'Frau Meyer',
        text: 'Dachbodenentrümpelung im Viertel - trotz enger Treppen alles super!',
        service: 'Dachbodenentrümpelung Bremen',
        rating: 5
      }
    ],
    faqs: [
      {
        question: 'Was kostet eine Entrümpelung in Bremen?',
        answer: 'Die Kosten für eine Entrümpelung in Bremen beginnen bei 700€ für eine 1-Zimmer-Wohnung. Als Hansestadt-Service bieten wir maritime Zuverlässigkeit zu fairen Preisen.'
      },
      {
        question: 'Entrümpeln Sie auch in Bremerhaven?',
        answer: 'Ja, wir entrümpeln im gesamten Bundesland Bremen. Sowohl in der Stadt Bremen als auch in Bremerhaven sind wir regelmäßig im Einsatz.'
      },
      {
        question: 'Bieten Sie Express-Entrümpelung in Bremen an?',
        answer: 'Ja, wir bieten einen 48-Stunden Express-Service in Bremen. Besonders für Hafenbetriebe und Reedereien sind wir flexibel verfügbar.'
      }
    ]
  },
  leipzig: {
    name: 'Leipzig',
    slug: 'leipzig',
    region: 'SN',
    postalCode: '04109',
    coordinates: { lat: 51.3397, lng: 12.3731 },
    basePrice: 680,
    komfortPrice: 1380,
    premiumPrice: 2070,
    customerCount: 750,
    reviewCount: 721,
    districts: [
      'Mitte',
      'Plagwitz',
      'Connewitz',
      'Gohlis',
      'Reudnitz',
      'Schleußig',
      'Lindenau',
      'Südvorstadt',
      'Grünau',
      'Paunsdorf'
    ],
    nearbyTowns: [
      { name: 'Halle', slug: 'halle', distance: '40 km' },
      { name: 'Merseburg', slug: 'merseburg', distance: '30 km' },
      { name: 'Delitzsch', slug: 'delitzsch', distance: '25 km' },
      { name: 'Markkleeberg', slug: 'markkleeberg', distance: '10 km' }
    ],
    testimonials: [
      {
        name: 'Kultur e.V.',
        text: 'Vereinsauflösung in Plagwitz - sehr verständnisvoll und professionell.',
        service: 'Vereinsauflösung Leipzig',
        rating: 5
      },
      {
        name: 'Familie Schulze',
        text: 'Altbau-Wohnung in Gohlis entrümpelt. Trotz 4. Stock ohne Aufzug alles super!',
        service: 'Haushaltsauflösung Leipzig',
        rating: 5
      },
      {
        name: 'Student WG',
        text: 'WG-Auflösung in Connewitz - schnell, günstig und unkompliziert!',
        service: 'WG-Auflösung Leipzig',
        rating: 5
      }
    ],
    faqs: [
      {
        question: 'Was kostet eine Entrümpelung in Leipzig?',
        answer: 'Die Kosten für eine Entrümpelung in Leipzig beginnen bei 680€ für eine 1-Zimmer-Wohnung. Als ostdeutsche Metropole bieten wir besonders günstige Konditionen.'
      },
      {
        question: 'Entrümpeln Sie auch Altbauwohnungen ohne Aufzug?',
        answer: 'Ja, wir sind auf Leipziger Altbauten spezialisiert. Ob Gründerzeit in Gohlis oder Jugendstil in der Südvorstadt - wir meistern jede Herausforderung.'
      },
      {
        question: 'Bieten Sie auch WG-Auflösungen in Leipzig an?',
        answer: 'Selbstverständlich! Gerade in Studentenvierteln wie Connewitz oder Plagwitz führen wir regelmäßig WG-Auflösungen durch - schnell und studentenfreundlich im Preis.'
      }
    ]
  },
  dresden: {
    name: 'Dresden',
    slug: 'dresden',
    region: 'SN',
    postalCode: '01067',
    coordinates: { lat: 51.0504, lng: 13.7373 },
    basePrice: 680,
    komfortPrice: 1380,
    premiumPrice: 2070,
    customerCount: 680,
    reviewCount: 654,
    districts: [
      'Altstadt',
      'Neustadt',
      'Pieschen',
      'Blasewitz',
      'Striesen',
      'Leuben',
      'Prohlis',
      'Gorbitz',
      'Cotta',
      'Plauen'
    ],
    nearbyTowns: [
      { name: 'Radebeul', slug: 'radebeul', distance: '10 km' },
      { name: 'Freital', slug: 'freital', distance: '15 km' },
      { name: 'Pirna', slug: 'pirna', distance: '25 km' },
      { name: 'Meißen', slug: 'meissen', distance: '25 km' }
    ],
    testimonials: [
      {
        name: 'Kunst & Antiquitäten GmbH',
        text: 'Geschäftsauflösung in der Altstadt - sehr sorgfältiger Umgang mit wertvollen Stücken.',
        service: 'Geschäftsauflösung Dresden',
        rating: 5
      },
      {
        name: 'Familie Friedrich',
        text: 'Villa in Blasewitz entrümpelt. Professionell und mit Respekt vor der Historie.',
        service: 'Haushaltsauflösung Dresden',
        rating: 5
      },
      {
        name: 'Herr Wagner',
        text: 'Kellerentrümpelung nach Hochwasser - schnelle und unkomplizierte Hilfe!',
        service: 'Hochwasser-Entrümpelung Dresden',
        rating: 5
      }
    ],
    faqs: [
      {
        question: 'Was kostet eine Entrümpelung in Dresden?',
        answer: 'Die Kosten für eine Entrümpelung in Dresden beginnen bei 680€ für eine 1-Zimmer-Wohnung. Als Kunst- und Kulturstadt sind wir auf den behutsamen Umgang mit wertvollen Gegenständen spezialisiert.'
      },
      {
        question: 'Entrümpeln Sie auch historische Villen in Dresden?',
        answer: 'Ja, wir haben Erfahrung mit Dresdner Villen in Blasewitz, Weißer Hirsch und Loschwitz. Wir arbeiten respektvoll und bewahren auf Wunsch historische Elemente.'
      },
      {
        question: 'Bieten Sie Hochwasser-Entrümpelung in Dresden an?',
        answer: 'Ja, wir haben Erfahrung mit Hochwasserschäden. Wir entrümpeln schnell und fachgerecht, auch in Zusammenarbeit mit Versicherungen.'
      }
    ]
  },
  hannover: {
    name: 'Hannover',
    slug: 'hannover',
    region: 'NI',
    postalCode: '30159',
    coordinates: { lat: 52.3759, lng: 9.7320 },
    basePrice: 710,
    komfortPrice: 1410,
    premiumPrice: 2090,
    customerCount: 920,
    reviewCount: 889,
    districts: [
      'Mitte',
      'Vahrenwald-List',
      'Bothfeld-Vahrenheide',
      'Buchholz-Kleefeld',
      'Misburg-Anderten',
      'Kirchrode-Bemerode-Wülferode',
      'Südstadt-Bult',
      'Döhren-Wülfel',
      'Ricklingen',
      'Linden-Limmer'
    ],
    nearbyTowns: [
      { name: 'Garbsen', slug: 'garbsen', distance: '15 km' },
      { name: 'Langenhagen', slug: 'langenhagen', distance: '10 km' },
      { name: 'Laatzen', slug: 'laatzen', distance: '10 km' },
      { name: 'Isernhagen', slug: 'isernhagen', distance: '15 km' }
    ],
    testimonials: [
      {
        name: 'Messe Hannover GmbH',
        text: 'Messestand-Entrümpelung schnell und zuverlässig. Perfekt auf Messetermine abgestimmt!',
        service: 'Messeservice Hannover',
        rating: 5
      },
      {
        name: 'Familie Niedersachse',
        text: 'Haushaltsauflösung in List - freundlich, pünktlich und gründlich.',
        service: 'Wohnungsauflösung Hannover',
        rating: 5
      },
      {
        name: 'IT-Firma',
        text: 'Büroauflösung in der Nordstadt. DSGVO-konforme Aktenvernichtung inklusive!',
        service: 'Büroauflösung Hannover',
        rating: 5
      }
    ],
    faqs: [
      {
        question: 'Was kostet eine Entrümpelung in Hannover?',
        answer: 'Die Kosten für eine Entrümpelung in Hannover beginnen bei 710€ für eine 1-Zimmer-Wohnung. Als Messestadt sind wir auf flexible und termingerechte Lösungen spezialisiert.'
      },
      {
        question: 'Bieten Sie Messe-Entrümpelung in Hannover an?',
        answer: 'Ja, wir sind auf Messeservice spezialisiert. Wir entrümpeln Messestände, Showrooms und Lagerflächen - auch kurzfristig und außerhalb der regulären Zeiten.'
      },
      {
        question: 'In welchen Hannoveraner Stadtteilen sind Sie aktiv?',
        answer: 'Wir entrümpeln in ganz Hannover - von der Nordstadt über List und Linden bis nach Kirchrode. Auch in der Region Hannover sind wir für Sie da.'
      }
    ]
  },
  dortmund: {
    name: 'Dortmund',
    slug: 'dortmund',
    region: 'NW',
    postalCode: '44135',
    coordinates: { lat: 51.5136, lng: 7.4653 },
    basePrice: 700,
    komfortPrice: 1400,
    premiumPrice: 2080,
    customerCount: 780,
    reviewCount: 752,
    districts: [
      'Innenstadt',
      'Hörde',
      'Hombruch',
      'Lütgendortmund',
      'Huckarde',
      'Mengede',
      'Brackel',
      'Aplerbeck',
      'Eving',
      'Scharnhorst'
    ],
    nearbyTowns: [
      { name: 'Bochum', slug: 'bochum', distance: '20 km' },
      { name: 'Witten', slug: 'witten', distance: '15 km' },
      { name: 'Hagen', slug: 'hagen', distance: '25 km' },
      { name: 'Unna', slug: 'unna', distance: '15 km' }
    ],
    testimonials: [
      {
        name: 'BVB Fan Club',
        text: 'Vereinsheim-Entrümpelung schnell und günstig erledigt. Echte Borussen!',
        service: 'Vereinsentrümpelung Dortmund',
        rating: 5
      },
      {
        name: 'Familie Kowalski',
        text: 'Haushaltsauflösung in der Nordstadt - respektvoll und professionell.',
        service: 'Wohnungsauflösung Dortmund',
        rating: 5
      },
      {
        name: 'Zeche Digital GmbH',
        text: 'Büroauflösung im Phoenix-See Areal. Modern und effizient!',
        service: 'Gewerbeauflösung Dortmund',
        rating: 5
      }
    ],
    faqs: [
      {
        question: 'Was kostet eine Entrümpelung in Dortmund?',
        answer: 'Die Kosten für eine Entrümpelung in Dortmund beginnen bei 700€ für eine 1-Zimmer-Wohnung. Als Ruhrgebietsstadt bieten wir bodenständige Preise und zuverlässigen Service.'
      },
      {
        question: 'Entrümpeln Sie auch Zechensiedlungen in Dortmund?',
        answer: 'Ja, wir kennen die Besonderheiten der Dortmunder Zechensiedlungen. Ob in der Nordstadt oder in Hörde - wir sind mit den örtlichen Gegebenheiten vertraut.'
      },
      {
        question: 'Wie schnell können Sie in Dortmund entrümpeln?',
        answer: 'Wir bieten einen 48-Stunden Express-Service in Dortmund. Als Teil des Ruhrgebiets-Netzwerks sind wir besonders schnell vor Ort.'
      }
    ]
  },
  essen: {
    name: 'Essen',
    slug: 'essen',
    region: 'NW',
    postalCode: '45127',
    coordinates: { lat: 51.4556, lng: 7.0116 },
    basePrice: 700,
    komfortPrice: 1400,
    premiumPrice: 2080,
    customerCount: 820,
    reviewCount: 791,
    districts: [
      'Stadtmitte',
      'Rüttenscheid',
      'Werden',
      'Kettwig',
      'Steele',
      'Kray',
      'Altenessen',
      'Frohnhausen',
      'Holsterhausen',
      'Borbeck'
    ],
    nearbyTowns: [
      { name: 'Mülheim', slug: 'muelheim', distance: '10 km' },
      { name: 'Gelsenkirchen', slug: 'gelsenkirchen', distance: '15 km' },
      { name: 'Oberhausen', slug: 'oberhausen', distance: '15 km' },
      { name: 'Bottrop', slug: 'bottrop', distance: '20 km' }
    ],
    testimonials: [
      {
        name: 'Kulturhauptstadt e.V.',
        text: 'Veranstaltungsraum auf Zollverein entrümpelt. Respektvoller Umgang mit dem Welterbe!',
        service: 'Kulturgut-Entrümpelung Essen',
        rating: 5
      },
      {
        name: 'Familie Schmitz',
        text: 'Villa in Bredeney professionell entrümpelt. Sehr sorgfältiges Team!',
        service: 'Villa-Entrümpelung Essen',
        rating: 5
      },
      {
        name: 'Bergbau AG',
        text: 'Werkshalle in Kray geräumt. Fachgerechte Entsorgung von Industriegütern.',
        service: 'Industrieentrümpelung Essen',
        rating: 5
      }
    ],
    faqs: [
      {
        question: 'Was kostet eine Entrümpelung in Essen?',
        answer: 'Die Kosten für eine Entrümpelung in Essen beginnen bei 700€ für eine 1-Zimmer-Wohnung. Als Kulturhauptstadt sind wir auf respektvollen Umgang mit historischen Objekten spezialisiert.'
      },
      {
        question: 'Entrümpeln Sie auch auf dem Welterbe Zollverein?',
        answer: 'Ja, wir haben Erfahrung mit Entrümpelungen im Bereich des UNESCO-Welterbes Zollverein. Wir arbeiten dabei besonders sorgfältig und in Abstimmung mit den Behörden.'
      },
      {
        question: 'Bieten Sie Industrieentrümpelung in Essen an?',
        answer: 'Ja, wir entrümpeln regelmäßig ehemalige Industrieanlagen im Ruhrgebiet. Wir verfügen über die nötige Expertise für die fachgerechte Entsorgung von Industriegütern.'
      }
    ]
  },
  duisburg: {
    name: 'Duisburg',
    slug: 'duisburg',
    region: 'NW',
    postalCode: '47051',
    coordinates: { lat: 51.4344, lng: 6.7623 },
    basePrice: 690,
    komfortPrice: 1390,
    premiumPrice: 2070,
    customerCount: 680,
    reviewCount: 656,
    districts: [
      'Mitte',
      'Rheinhausen',
      'Hamborn',
      'Meiderich/Beeck',
      'Homberg/Ruhrort/Baerl',
      'Walsum',
      'Süd'
    ],
    nearbyTowns: [
      { name: 'Oberhausen', slug: 'oberhausen', distance: '15 km' },
      { name: 'Krefeld', slug: 'krefeld', distance: '20 km' },
      { name: 'Moers', slug: 'moers', distance: '15 km' },
      { name: 'Dinslaken', slug: 'dinslaken', distance: '20 km' }
    ],
    testimonials: [
      {
        name: 'Hafen Duisburg GmbH',
        text: 'Lagerhalle im Hafen entrümpelt. Professionell und termingerecht!',
        service: 'Industrieentrümpelung Duisburg',
        rating: 5
      },
      {
        name: 'Familie Yilmaz',
        text: 'Wohnungsauflösung in Marxloh - sehr respektvoll und freundlich.',
        service: 'Haushaltsauflösung Duisburg',
        rating: 5
      },
      {
        name: 'Logistik GmbH',
        text: 'Büroauflösung schnell und diskret durchgeführt. Empfehlenswert!',
        service: 'Büroauflösung Duisburg',
        rating: 5
      }
    ],
    faqs: [
      {
        question: 'Was kostet eine Entrümpelung in Duisburg?',
        answer: 'Die Kosten für eine Entrümpelung in Duisburg beginnen bei 690€ für eine 1-Zimmer-Wohnung. Als Hafenstadt bieten wir besonders günstige Konditionen für große Projekte.'
      },
      {
        question: 'Entrümpeln Sie auch im Duisburger Hafen?',
        answer: 'Ja, wir sind auf Hafenlogistik spezialisiert. Wir entrümpeln Lagerhallen, Büros und Industrieanlagen im gesamten Hafengebiet.'
      },
      {
        question: 'Bieten Sie mehrsprachigen Service in Duisburg?',
        answer: 'Ja, unser Team spricht neben Deutsch auch Türkisch, Arabisch und Englisch. Gerade in Stadtteilen wie Marxloh ist das ein großer Vorteil.'
      }
    ]
  },
  bochum: {
    name: 'Bochum',
    slug: 'bochum',
    region: 'NW',
    postalCode: '44787',
    coordinates: { lat: 51.4819, lng: 7.2162 },
    basePrice: 700,
    komfortPrice: 1400,
    premiumPrice: 2080,
    customerCount: 720,
    reviewCount: 694,
    districts: [
      'Mitte',
      'Wattenscheid',
      'Nord',
      'Ost',
      'Süd',
      'Südwest'
    ],
    nearbyTowns: [
      { name: 'Herne', slug: 'herne', distance: '10 km' },
      { name: 'Witten', slug: 'witten', distance: '15 km' },
      { name: 'Gelsenkirchen', slug: 'gelsenkirchen', distance: '15 km' },
      { name: 'Hattingen', slug: 'hattingen', distance: '15 km' }
    ],
    testimonials: [
      {
        name: 'Ruhr-Universität',
        text: 'Büroauflösung an der Uni - flexibel auf Semesterzeiten abgestimmt.',
        service: 'Uni-Entrümpelung Bochum',
        rating: 5
      },
      {
        name: 'Familie Bergmann',
        text: 'Haushaltsauflösung in Langendreer. Sehr professionelles Team!',
        service: 'Wohnungsauflösung Bochum',
        rating: 5
      },
      {
        name: 'Starlight Express',
        text: 'Requisitenlager entrümpelt - sorgfältiger Umgang mit Theatergut.',
        service: 'Theater-Entrümpelung Bochum',
        rating: 5
      }
    ],
    faqs: [
      {
        question: 'Was kostet eine Entrümpelung in Bochum?',
        answer: 'Die Kosten für eine Entrümpelung in Bochum beginnen bei 700€ für eine 1-Zimmer-Wohnung. Als Universitätsstadt bieten wir spezielle Konditionen für Studenten und Uni-Mitarbeiter.'
      },
      {
        question: 'Entrümpeln Sie auch an der Ruhr-Universität?',
        answer: 'Ja, wir entrümpeln regelmäßig Büros, Labore und Lagerräume an der RUB. Wir kennen die Uni-Strukturen und arbeiten flexibel.'
      },
      {
        question: 'Bieten Sie WG-Auflösungen in Bochum an?',
        answer: 'Selbstverständlich! In der Nähe der Uni und in Stadtteilen wie Ehrenfeld führen wir regelmäßig günstige WG-Auflösungen durch.'
      }
    ]
  },
  wuppertal: {
    name: 'Wuppertal',
    slug: 'wuppertal',
    region: 'NW',
    postalCode: '42103',
    coordinates: { lat: 51.2562, lng: 7.1508 },
    basePrice: 700,
    komfortPrice: 1400,
    premiumPrice: 2080,
    customerCount: 580,
    reviewCount: 559,
    districts: [
      'Elberfeld',
      'Barmen',
      'Vohwinkel',
      'Cronenberg',
      'Ronsdorf',
      'Beyenburg',
      'Langerfeld',
      'Oberbarmen',
      'Heckinghausen'
    ],
    nearbyTowns: [
      { name: 'Solingen', slug: 'solingen', distance: '15 km' },
      { name: 'Remscheid', slug: 'remscheid', distance: '20 km' },
      { name: 'Velbert', slug: 'velbert', distance: '20 km' },
      { name: 'Hagen', slug: 'hagen', distance: '25 km' }
    ],
    testimonials: [
      {
        name: 'Schwebebahn GmbH',
        text: 'Lagerräume unter der Schwebebahn entrümpelt - einzigartige Herausforderung gemeistert!',
        service: 'Schwebebahn-Entrümpelung',
        rating: 5
      },
      {
        name: 'Familie Engels',
        text: 'Villa am Briller Viertel entrümpelt. Sehr sorgfältiger Umgang mit Antiquitäten.',
        service: 'Villa-Entrümpelung Wuppertal',
        rating: 5
      },
      {
        name: 'Tanztheater Pina Bausch',
        text: 'Requisitenlager professionell geräumt. Respektvoller Umgang mit Kulturerbe.',
        service: 'Kultur-Entrümpelung Wuppertal',
        rating: 5
      }
    ],
    faqs: [
      {
        question: 'Was kostet eine Entrümpelung in Wuppertal?',
        answer: 'Die Kosten für eine Entrümpelung in Wuppertal beginnen bei 700€ für eine 1-Zimmer-Wohnung. Die besondere Topografie Wuppertals ist in unseren Preisen bereits berücksichtigt.'
      },
      {
        question: 'Entrümpeln Sie auch in den Wuppertaler Höhenlagen?',
        answer: 'Ja, wir entrümpeln in ganz Wuppertal - auch in den steilen Lagen von Elberfeld und Barmen. Unsere Teams sind auf die Wuppertaler Topografie eingestellt.'
      },
      {
        question: 'Können Sie auch unter der Schwebebahn entrümpeln?',
        answer: 'Ja, wir haben Erfahrung mit Entrümpelungen im Bereich der Schwebebahn. Wir arbeiten dabei in enger Abstimmung mit den WSW.'
      }
    ]
  },
  bielefeld: {
    name: 'Bielefeld',
    slug: 'bielefeld',
    region: 'NW',
    postalCode: '33602',
    coordinates: { lat: 52.0302, lng: 8.5325 },
    basePrice: 690,
    komfortPrice: 1390,
    premiumPrice: 2070,
    customerCount: 620,
    reviewCount: 598,
    districts: [
      'Mitte',
      'Schildesche',
      'Gadderbaum',
      'Brackwede',
      'Dornberg',
      'Jöllenbeck',
      'Heepen',
      'Stieghorst',
      'Sennestadt',
      'Senne'
    ],
    nearbyTowns: [
      { name: 'Herford', slug: 'herford', distance: '20 km' },
      { name: 'Gütersloh', slug: 'guetersloh', distance: '20 km' },
      { name: 'Detmold', slug: 'detmold', distance: '30 km' },
      { name: 'Paderborn', slug: 'paderborn', distance: '45 km' }
    ],
    testimonials: [
      {
        name: 'Dr. Oetker',
        text: 'Werksgelände-Entrümpelung professionell durchgeführt. Sehr zuverlässig!',
        service: 'Industrieentrümpelung Bielefeld',
        rating: 5
      },
      {
        name: 'Familie Ostwestfale',
        text: 'Bauernhof in Jöllenbeck entrümpelt. Respektvoller Umgang mit Familiengeschichte.',
        service: 'Hofentrümpelung Bielefeld',
        rating: 5
      },
      {
        name: 'Universität Bielefeld',
        text: 'Institutsauflösung schnell und diskret. Perfekte Koordination!',
        service: 'Uni-Entrümpelung Bielefeld',
        rating: 5
      }
    ],
    faqs: [
      {
        question: 'Was kostet eine Entrümpelung in Bielefeld?',
        answer: 'Die Kosten für eine Entrümpelung in Bielefeld beginnen bei 690€ für eine 1-Zimmer-Wohnung. Als ostwestfälische Metropole bieten wir bodenständige Preise und zuverlässigen Service.'
      },
      {
        question: 'Entrümpeln Sie auch Bauernhöfe im Bielefelder Umland?',
        answer: 'Ja, wir entrümpeln regelmäßig Höfe in Stadtteilen wie Jöllenbeck, Dornberg oder Senne. Wir haben Erfahrung mit landwirtschaftlichen Objekten.'
      },
      {
        question: 'Bieten Sie Uni-Entrümpelungen in Bielefeld an?',
        answer: 'Ja, wir entrümpeln regelmäßig an der Universität Bielefeld. Ob Büros, Labore oder Archive - wir arbeiten diskret und termingerecht.'
      }
    ]
  },
  bonn: {
    name: 'Bonn',
    slug: 'bonn',
    region: 'NW',
    postalCode: '53111',
    coordinates: { lat: 50.7374, lng: 7.0982 },
    basePrice: 710,
    komfortPrice: 1410,
    premiumPrice: 2090,
    customerCount: 780,
    reviewCount: 752,
    districts: [
      'Bonn',
      'Bad Godesberg',
      'Beuel',
      'Hardtberg'
    ],
    nearbyTowns: [
      { name: 'Siegburg', slug: 'siegburg', distance: '15 km' },
      { name: 'Troisdorf', slug: 'troisdorf', distance: '20 km' },
      { name: 'Sankt Augustin', slug: 'sankt-augustin', distance: '10 km' },
      { name: 'Königswinter', slug: 'koenigswinter', distance: '15 km' }
    ],
    testimonials: [
      {
        name: 'Bundesministerium',
        text: 'Behördenumzug diskret und professionell begleitet. Höchste Sicherheitsstandards!',
        service: 'Behörden-Entrümpelung Bonn',
        rating: 5
      },
      {
        name: 'Familie Beethoven',
        text: 'Altbauwohnung in der Südstadt entrümpelt. Sehr kultiviertes Team!',
        service: 'Haushaltsauflösung Bonn',
        rating: 5
      },
      {
        name: 'UN Organisation',
        text: 'Office clearance handled professionally. International standards met!',
        service: 'UN-Entrümpelung Bonn',
        rating: 5
      }
    ],
    faqs: [
      {
        question: 'Was kostet eine Entrümpelung in Bonn?',
        answer: 'Die Kosten für eine Entrümpelung in Bonn beginnen bei 710€ für eine 1-Zimmer-Wohnung. Als ehemalige Bundeshauptstadt sind wir auf diskrete und professionelle Abwicklung spezialisiert.'
      },
      {
        question: 'Entrümpeln Sie auch Regierungsgebäude in Bonn?',
        answer: 'Ja, wir haben Erfahrung mit Behördenumzügen und -entrümpelungen. Wir arbeiten diskret und erfüllen höchste Sicherheitsstandards.'
      },
      {
        question: 'Bieten Sie internationalen Service für UN-Mitarbeiter?',
        answer: 'Yes, we offer services in English for UN staff and diplomats. Our team is experienced in handling international relocations and clearances.'
      }
    ]
  },
  muenster: {
    name: 'Münster',
    slug: 'muenster',
    region: 'NW',
    postalCode: '48143',
    coordinates: { lat: 51.9607, lng: 7.6261 },
    basePrice: 700,
    komfortPrice: 1400,
    premiumPrice: 2080,
    customerCount: 680,
    reviewCount: 656,
    districts: [
      'Altstadt',
      'Schlossbezirk',
      'Aaseestadt',
      'Geist',
      'Gievenbeck',
      'Handorf',
      'Hiltrup',
      'Kinderhaus',
      'Mauritz',
      'Roxel'
    ],
    nearbyTowns: [
      { name: 'Greven', slug: 'greven', distance: '20 km' },
      { name: 'Telgte', slug: 'telgte', distance: '15 km' },
      { name: 'Warendorf', slug: 'warendorf', distance: '30 km' },
      { name: 'Dülmen', slug: 'duelmen', distance: '30 km' }
    ],
    testimonials: [
      {
        name: 'WWU Münster',
        text: 'Institutsauflösung professionell durchgeführt. Sehr gute Koordination!',
        service: 'Uni-Entrümpelung Münster',
        rating: 5
      },
      {
        name: 'Familie Westfale',
        text: 'Altbauwohnung am Prinzipalmarkt entrümpelt. Respektvoller Umgang mit Historie.',
        service: 'Altstadt-Entrümpelung Münster',
        rating: 5
      },
      {
        name: 'Fahrrad GmbH',
        text: 'Fahrradlager geräumt - in der Fahrradhauptstadt ein Muss! Super Service!',
        service: 'Lagerentrümpelung Münster',
        rating: 5
      }
    ],
    faqs: [
      {
        question: 'Was kostet eine Entrümpelung in Münster?',
        answer: 'Die Kosten für eine Entrümpelung in Münster beginnen bei 700€ für eine 1-Zimmer-Wohnung. Als Universitätsstadt bieten wir faire Preise für Studenten und Akademiker.'
      },
      {
        question: 'Entrümpeln Sie auch historische Gebäude in der Altstadt?',
        answer: 'Ja, wir haben Erfahrung mit historischen Gebäuden am Prinzipalmarkt und in der Altstadt. Wir arbeiten behutsam und respektvoll mit der Historie.'
      },
      {
        question: 'Bieten Sie WG-Auflösungen für Studenten in Münster an?',
        answer: 'Natürlich! Als Uni-Stadt führen wir regelmäßig günstige WG-Auflösungen durch, besonders zum Semesterende.'
      }
    ]
  },
  nurnberg: {
    name: 'Nürnberg',
    slug: 'nuernberg',
    region: 'BY',
    postalCode: '90402',
    coordinates: { lat: 49.4521, lng: 11.0767 },
    basePrice: 710,
    komfortPrice: 1410,
    premiumPrice: 2090,
    customerCount: 820,
    reviewCount: 791,
    districts: [
      'Altstadt',
      'Gostenhof',
      'St. Johannis',
      'Maxfeld',
      'Schoppershof',
      'Schweinau',
      'Galgenhof',
      'Steinbühl',
      'Gibitzenhof',
      'Werderau'
    ],
    nearbyTowns: [
      { name: 'Fürth', slug: 'fuerth', distance: '10 km' },
      { name: 'Erlangen', slug: 'erlangen', distance: '20 km' },
      { name: 'Schwabach', slug: 'schwabach', distance: '20 km' },
      { name: 'Ansbach', slug: 'ansbach', distance: '50 km' }
    ],
    testimonials: [
      {
        name: 'Spielwarenmesse GmbH',
        text: 'Messestand-Entrümpelung perfekt getimed. Profis für Messetermine!',
        service: 'Messe-Entrümpelung Nürnberg',
        rating: 5
      },
      {
        name: 'Familie Franke',
        text: 'Fachwerkhaus in der Altstadt behutsam entrümpelt. Sehr respektvoll!',
        service: 'Altstadt-Entrümpelung Nürnberg',
        rating: 5
      },
      {
        name: 'Lebkuchen GmbH',
        text: 'Lagerräume vor Weihnachten schnell geräumt. Flexibel und zuverlässig!',
        service: 'Gewerbe-Entrümpelung Nürnberg',
        rating: 5
      }
    ],
    faqs: [
      {
        question: 'Was kostet eine Entrümpelung in Nürnberg?',
        answer: 'Die Kosten für eine Entrümpelung in Nürnberg beginnen bei 710€ für eine 1-Zimmer-Wohnung. Als Messestadt sind wir auf termingerechte Abwicklung spezialisiert.'
      },
      {
        question: 'Entrümpeln Sie auch während der Spielwarenmesse?',
        answer: 'Ja, wir sind gerade während der Messen flexibel im Einsatz. Wir entrümpeln Messestände, Showrooms und Lager auch kurzfristig.'
      },
      {
        question: 'Können Sie historische Fachwerkhäuser in Nürnberg entrümpeln?',
        answer: 'Selbstverständlich! Wir haben viel Erfahrung mit der Nürnberger Altstadt und arbeiten besonders behutsam in historischen Gebäuden.'
      }
    ]
  }
}