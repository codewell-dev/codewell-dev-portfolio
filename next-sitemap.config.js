/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://codewell-dev.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'monthly',
  priority: 0.8,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*',           allow: '/' },
      // Allow AI crawlers for GEO/AEO
      { userAgent: 'GPTBot',      allow: '/' },
      { userAgent: 'Claude-Web',  allow: '/' },
      { userAgent: 'anthropic-ai',allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Googlebot',   allow: '/' },
    ],
    additionalSitemaps: [`https://codewell-dev.com/sitemap.xml`],
  },
};
