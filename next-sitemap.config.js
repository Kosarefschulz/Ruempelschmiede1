/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://ruempelschmiede.de',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: [
    '/404',
    '/api/*',
  ],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://ruempelschmiede.de/sitemap.xml',
      'https://ruempelschmiede.com/sitemap.xml',
      'https://rümpel-schmiede.de/sitemap.xml',
      'https://rümpel-schmiede.com/sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
        ],
      },
    ],
  },
  transform: async (config, path) => {
    // Prioritäten für verschiedene Seiten setzen
    const priorities = {
      '/': 1.0,
      '/kontakt': 0.9,
      '/leistungen': 0.9,
      '/entruempelung-bielefeld': 0.9,
      '/entruempelung-steinhagen': 0.9,
      '/preise': 0.8,
      '/b2b': 0.8,
      '/artikel': 0.8,
      '/artikel/haushaltsaufloesung-kosten': 0.7,
      '/artikel/entrümpelung-checkliste': 0.7,
      '/artikel/wertvolles-erkennen': 0.7,
      '/artikel/messie-hilfe': 0.7,
      '/artikel/nachlassverwertung': 0.7,
      '/artikel/kellerentruempelung-kosten-tipps': 0.7,
      '/artikel/dachboden-entruempelung-anleitung': 0.7,
      '/artikel/garage-entruempelung-guide': 0.7,
      '/artikel/bueroaufloesung-planung-kosten': 0.7,
      '/artikel/sperrmuell-richtig-entsorgen-guide': 0.7,
      '/artikel/entruempelung-vor-umzug-checkliste': 0.7,
      '/artikel/professionelle-vs-diy-entruempelung': 0.7,
      '/artikel/entruempelung-bielefeld-lokaler-guide': 0.8,
      '/artikel/umweltgerechte-entsorgung': 0.7,
      '/ueber-uns': 0.6,
    };

    const priority = priorities[path] || 0.7;
    
    // Städteseiten haben mittlere Priorität
    if (path.startsWith('/entruempelung-')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: new Date().toISOString(),
      };
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: `https://ruempelschmiede.de${path}`,
          hreflang: 'de',
        },
        {
          href: `https://ruempelschmiede.com${path}`,
          hreflang: 'de',
        },
      ],
    };
  },
};