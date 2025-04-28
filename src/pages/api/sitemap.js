export default async function handler(req, res) {
    res.setHeader("Content-Type", "application/xml");
    res.status(200); 
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"; 
  
    const staticPages = [
      "", "who-we-are", "our-team", "Testimonial", "portfolio",
      "about-company", "OurCulture", "artificial-intelligence-machin-learning",
      "mobile-app-development", "coustom-software-development",
      "cloud-services", "qa-testing", "data-security",
      "hire-developer", "solution-on-demand", "Career", "contact-us"
    ];
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
      .map(
        (page) => `
    <url>
      <loc>${siteUrl}${page ? `/${page}` : ""}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`
      )
      .join("")}
  </urlset> `;
  
    res.send(sitemap); 
  }
  