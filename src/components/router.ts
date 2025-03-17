class Router {
  private routes: { [key: string]: string } = {};

  constructor() {
    window.addEventListener("hashchange", this.handleRouteChange.bind(this));
    window.addEventListener("load", this.handleRouteChange.bind(this));
  }

  addRoute(path: string, templateUrl: string) {
    this.routes[path] = templateUrl;
  }

  handleRouteChange() {
    const path = window.location.hash.slice(1) || "/";
    const templateUrl = this.routes[path];
    if (templateUrl) {
      this.loadTemplate(templateUrl);
    }
  }

  async loadTemplate(templateUrl: string) {
    try {
      const response = await fetch(templateUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch template: ${response.statusText}`);
      }
      const content = await response.text();
      document.getElementById("app")!.innerHTML = content;
    } catch (error) {
      console.error(`Error loading template: ${(error as any).message}`);
    }
  }
}

const router = new Router();
router.addRoute("/", "/templates/home.html");
router.addRoute("/about", "/templates/about.html");
router.addRoute("/contact", "/templates/contact.html");

document.addEventListener("DOMContentLoaded", () => {
  router.handleRouteChange();
});
