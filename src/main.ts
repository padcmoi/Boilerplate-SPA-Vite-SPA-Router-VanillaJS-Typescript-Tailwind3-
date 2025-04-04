import "./app.css";
import { router } from "./router";
import Navbar from "./components/navbar.ts";

document.getElementById("app")!.innerHTML = `
  <div class="bg-white dark:bg-gray-800 text-black dark:text-white min-h-[100vh] flex flex-col">
    <header class="flex-1">
      ${Navbar().template}
    </header>
  
    <main id="router-view" class="flex-8 min-h-[80vh]"></main>
  
    <footer class="flex-1 bg-gray-200 dark:bg-gray-900 text-center py-4">
      <p>&copy; 2025 My Company. All rights reserved.</p>
    </footer>
  </div>
`;

router.setAuthenticationStatus(true);
router.startView();

Navbar().script();
