import HomePage from "./pages/Home/index";
import ContactPage from "./pages/Contact/index";
import ArticlePage from "./pages/Article/index";
import ArticleDetailsPage from "./pages/Article/[id]/index";

export type IRouteComponentArgs = (params: { [key: string]: string }, query: { [key: string]: string }, seo: IRoute["meta"]["seo"]) => { template: string; script: () => void };

interface IRoute {
  label: string;
  path: string;
  component?: IRouteComponentArgs;
  children?: IRoute[];
  meta: {
    requiresAuth: boolean;
    seo: {
      title: string;
      description: string;
    };
    [key: string]: any;
  };
}

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

class Router {
  private routes: { [key: string]: { component: IRouteComponentArgs; meta?: IRoute["meta"] } } = {};
  public params: { [key: string]: string } = {};
  public query: { [key: string]: string } = {};
  public meta: IRoute["meta"] = { requiresAuth: false, seo: { title: "", description: "" } };
  public isAuthenticated: boolean = false;

  private state = {
    currentPath: window.location.pathname + window.location.search,
  };

  private stateProxy = new Proxy(this.state, {
    set: (target: { currentPath: string }, property: "currentPath", value: string) => {
      target[property] = value;
      this.updateView();
      return true;
    },
  });

  constructor() {
    window.addEventListener("popstate", () => {
      this.stateProxy.currentPath = window.location.pathname + window.location.search;
    });
  }

  private matchRoute(path: string): {
    component?: IRouteComponentArgs;
    params?: { [key: string]: string };
    query?: { [key: string]: string };
    meta?: IRoute["meta"];
  } {
    const [pathname, queryString] = path.split("?");
    const query = this.parseQueryString(queryString || "");

    for (const route in this.routes) {
      const routeParts = route.split("/").filter(Boolean);
      const pathParts = pathname.split("/").filter(Boolean);

      if (routeParts.length !== pathParts.length) {
        continue;
      }

      const params: { [key: string]: string } = {};
      let match = true;

      for (let i = 0; i < routeParts.length; i++) {
        if (routeParts[i].startsWith(":")) {
          params[routeParts[i].substring(1)] = pathParts[i];
        } else if (routeParts[i] !== pathParts[i]) {
          match = false;
          break;
        }
      }

      if (match) {
        return { component: this.routes[route].component, params, query, meta: this.routes[route].meta };
      }
    }

    return {};
  }

  private parseQueryString(queryString: string): { [key: string]: string } {
    return queryString
      .split("&")
      .map((param) => param.split("="))
      .reduce((query: { [key: string]: string }, [key, value]) => {
        query[decodeURIComponent(key)] = decodeURIComponent(value);
        return query;
      }, {});
  }

  private replaceLinkBehavior(): void {
    document.querySelectorAll("a").forEach((el) => {
      if (el.dataset.routerReplaceBehavior) return;

      const href = el.getAttribute("href");
      if (href && href.startsWith("/") && !el.dataset.routerReplaceBehavior) {
        // el.style.border = "1px solid red"; // test
        el.addEventListener("click", function (event) {
          event.preventDefault();
          router.navigate(href);
        });
        el.dataset.routerReplaceBehavior = "true";
      }
    });
  }

  private updateView(): void {
    const path = this.state.currentPath;
    const { component, params, query, meta } = this.matchRoute(path);

    if (component) {
      this.params = params || {};
      this.query = query || {};
      this.meta = meta || { requiresAuth: false, seo: { title: "", description: "" } };

      if (this.meta.requiresAuth && !this.isAuthenticated) {
        console.error(`Route requires auth for path: `, path);
      } else {
        const { template, script } = component(this.params, this.query, this.meta.seo);
        const routerView = document.getElementById("router-view");
        if (routerView) {
          routerView.innerHTML = template;
          script();
          // To prevent page refresh and provide a smooth transition
          this.replaceLinkBehavior();
        }
      }
    } else {
      console.error(`No route found for path: ${path}`);
    }
  }

  public static Initialize() {
    const router = new Router();
    return router;
  }

  public addRoutes(routes: IRoute[]): void {
    const addRouteRecursively = (route: IRoute, parentPath: string = ""): void => {
      const fullPath = `${parentPath}${route.path}`;
      if (route.component) {
        this.routes[fullPath] = { component: route.component, meta: route.meta };
      }
      if (route.children) {
        route.children.forEach((childRoute) => addRouteRecursively(childRoute, fullPath));
      }
    };

    routes.forEach((route) => addRouteRecursively(route));
  }

  public startView(): void {
    this.stateProxy.currentPath = window.location.pathname + window.location.search;
  }

  public setAuthenticationStatus(isLoggedIn: boolean): void {
    this.isAuthenticated = isLoggedIn;
  }

  public navigate(path: string): void {
    window.history.pushState({}, "", path);
    this.stateProxy.currentPath = path;
  }
}

export const router = Router.Initialize();

router.addRoutes(routes);
