import { routes } from "../routes";

const Home = () => {
  const template = `
<nav class="shadow-lg">
  <div class="container mx-auto flex justify-between items-center p-4 ">
    <div class="flex items-center">

      <a href="/" class="text-lg font-semibold">Brand</a>
      
      <button id="toggle-dark-mode" class="mx-4 focus:outline-none">
        <svg id="theme-toggle-dark-icon" class="hidden focus:outline-none size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>
        <svg id="theme-toggle-light-icon" class="focus:outline-none size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
      </button>

    </div>
    <div class="block lg:hidden">
      <button id="toggle-nav-menu" class="focus:outline-none">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>
    <div class="hidden lg:flex lg:items-center lg:w-auto w-full">
      <ul class="lg:flex lg:items-center lg:justify-between text-base ">
        ${routes
          .map(
            (route) => `
          <li><a href="${route.path}" class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" ${route.path.startsWith("/") ? "" : 'target="_blank"'}>${route.label}</a></li>
        `
          )
          .join("")}
      </ul>
    </div>
  </div>

  <div id="nav-mobile-menu" class="relative hidden">
    <div class="absolute inset-0 h-screen backdrop-blur-md m-0 p-0 flex items-center overflow-hidden justify-center">
      <div class="min-h-screen w-full flex items-start justify-end mt-12 mr-4">
        <ul id="nav-mobile-menu-list" class="flex flex-col gap-8">
        ${routes
          .map(
            (route) => `
          <li>
            <a href="${route.path}" class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" ${route.path.startsWith("/") ? "" : 'target="_blank"'}>${route.label}</a>
          </li>
        `
          )
          .join("")}
        </ul>
    </div>
  </div>

</nav>

`;

  const script = () => {
    const darkIcon = document.getElementById("theme-toggle-dark-icon")!;
    const lightIcon = document.getElementById("theme-toggle-light-icon")!;
    const toggleNavMenu = document.getElementById("toggle-nav-menu")!;
    const navMobileMenu = document.getElementById("nav-mobile-menu")!;

    const navMobileMenuList = document.getElementById("nav-mobile-menu-list")!;
    const navLinks = navMobileMenuList.getElementsByTagName("a");

    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", () => {
        navMobileMenu.classList.toggle("hidden");
      });
    }

    toggleNavMenu.addEventListener("click", () => {
      navMobileMenu.classList.toggle("hidden");
    });

    const updateIcons = () => {
      if (document.documentElement.classList.contains("dark")) {
        darkIcon.classList.remove("hidden");
        lightIcon.classList.add("hidden");
      } else {
        darkIcon.classList.add("hidden");
        lightIcon.classList.remove("hidden");
      }
    };

    const toggleDarkMode = () => {
      document.documentElement.classList.toggle("dark");
      const isDarkMode = document.documentElement.classList.contains("dark");
      localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
      updateIcons();
    };

    document.getElementById("toggle-dark-mode")!.addEventListener("click", toggleDarkMode);

    if (localStorage.getItem("darkMode") === "enabled") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    updateIcons();
  };

  return { template, script };
};

export default Home;
