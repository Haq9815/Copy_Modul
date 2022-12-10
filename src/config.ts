export const SITE = {
  title: "Understanding Rest Api",
  description: "Workshop Laboratorium B201 Network and Security",
  defaultLanguage: "en_US",
  site: "https://modulapib201.vercel.app"
};

export const OPEN_GRAPH = {
  image: {
    src: "/default-og-image.png",
    alt: "Understanding Koa"
  },
  twitter: "Lab B201"
};

export const KNOWN_LANGUAGES = {
  English: "en"
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
export const GITHUB_EDIT_URL = `/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
export const COMMUNITY_INVITE_URL = ` `;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   appId: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
  en: [
    { text: 'Welcome to the workshop', link: 'welcome' },
    { text: 'Requirements', header: true },
    { text: 'Code Editor', link: 'instalasi-vscode' },
    { text: 'Node.js', link: 'instalasi-nodejs' },
    { text: 'NPM', link: 'instalasi-npm' },
    { text: 'Mongodb', link: 'instalasi-mongodb' },
    { text: 'Postman', link: 'instalasi-postman' },
    { text: 'Workshop Content', header: true },
    { text: 'Pengenalan API', link: 'pengenalan-api'},
    { text: 'Pengenalan Koa JS', link: 'pengenalan-koa'},
    { text: 'Pembuatan API', link: 'pembuatan-api'},
  ],
};
