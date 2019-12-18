module.exports = {
  title: "Hello VuePress!",
  description: "Just playing around",
  themeConfig: {
    logo: "/logo.png",
    searchPlaceholder: "Buscar...",
    sidebar: [
      "/",
      {
        title: "Posts", // required
        path: "/post/page1", // optional, which should be a absolute path.
        collapsable: true, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        children: ["/post/page1", "/post/page2"]
      }
    ]
  }
};
