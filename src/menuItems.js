export const menuItems = [
  {
    title: "Nastea",
    url: "/",
  },
  {
    title: "Servicii",
    url: "/services",
    submenu: [
      {
        title: "super design",
        url: "design",
      },
      {
        title: "web development",
        url: "web-dev",
        submenu: [
          {
            title: "Frontend",
            url: "frontend",
          },
          {
            title: "Backend",
            submenu: [
              {
                title: "NodeJS",
                url: "node",
              },
              {
                title: "PHP",
                url: "php",
              },
            ],
          },
        ],
      },
      {
        title: "SEO",
        url: "seo",
      },
    ],
  },
  {
    title: "About",
    url: "/about",
    submenu: [
      {
        title: "Who we are",
        url: "who-we-are",
      },
      {
        title: "Our values",
        url: "our-values",
      },
    ],
  },
];
