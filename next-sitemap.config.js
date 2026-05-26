/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://genericoou.com.br",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [
      "https://genericoou.com.br/sitemap.xml",
    ],
  },
  additionalPaths: async (config) => {
    // next-sitemap will automatically pick up all pages from `app/`
    // but we explicitly add static pages here for priority control
    return [
      { loc: "/", changefreq: "daily", priority: 1.0 },
      { loc: "/medicamentos/", changefreq: "weekly", priority: 0.9 },
      { loc: "/como-funciona-generico/", changefreq: "monthly", priority: 0.8 },
      { loc: "/sobre/", changefreq: "monthly", priority: 0.5 },
      { loc: "/privacidade/", changefreq: "yearly", priority: 0.3 },
    ];
  },
};

module.exports = config;
