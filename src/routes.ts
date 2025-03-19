import HomePage from "./pages/Home/index";
import ContactPage from "./pages/Contact/index";
import ArticlePage from "./pages/Article/index";
import ArticleDetailsPage from "./pages/Article/[id]/index";

import { IRoute } from "./router";

export const routes: IRoute[] = [
  {
    label: "Home",
    path: "/",
    component: HomePage,
    meta: {
      requiresAuth: false,
      seo: {
        title: "Home Page",
        description: "Welcome to the Home Page",
      },
    },
  },
  {
    label: "Github",
    path: "https://github.com/padcmoi/Boilerplate-SPA-Vite-SPA-Router-VanillaJS-Typescript-Tailwind3-",
    component: () => ({ template: "", script: () => {} }),
    meta: {
      requiresAuth: false,
      seo: {
        title: "Github Page",
        description: "Visit our Github repository",
      },
    },
  },
  {
    label: "Contact",
    path: "/contact",
    component: ContactPage,
    meta: {
      requiresAuth: false,
      seo: {
        title: "Contact Page",
        description: "Get in touch with us",
      },
    },
  },
  {
    label: "Article",
    path: "/article",
    component: ArticlePage,
    children: [
      {
        label: "Details",
        path: "/:id",
        component: ArticleDetailsPage,
        meta: {
          requiresAuth: true,
          seo: {
            title: "Article Details",
            description: "Read the full article",
          },
        },
      },
    ],
    meta: {
      requiresAuth: false,
      seo: {
        title: "Articles",
        description: "Browse our articles",
      },
    },
  },
];
