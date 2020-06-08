const config = {
  siteTitle: "Chipmunk: Bookmark Management with Context", // Site title.
  siteTitleShort: "Chipmunk Bookmark", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Chipmunk Bookmark Manager", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://shavakan.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/chipmunk", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "KAIST CS374 Spring 2020 Design Project 4 High Fidelity Prototype of Tentative-Team-Name", // Website description used for RSS feeds/meta description tag.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "YYYY/MM/DD", // Date format for display.
  copyright: "Copyright © 2020. ChangWon Lee, Junwoo Park, Taehyun Hwang, Jooyon Kim" // Copyright string for the footer of the website and RSS feed.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

module.exports = config;
