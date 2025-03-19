import { IRouteComponentArgs } from "@/router";
import typescriptLogo from "../../assets/typescript.svg";
import viteLogo from "/vite.svg";

import { setupCounter } from "../../components/counter";

const Home: IRouteComponentArgs = (params, query) => {
  const template = `
    <div class="flex flex-col items-center justify-center min-h-[80vh] ">
      <div class="flex space-x-4">
        <a href="https://vite.dev" target="_blank">
          <img src="${viteLogo}" class="logo w-16 h-16" alt="Vite logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
          <img src="${typescriptLogo}" class="logo w-16 h-16" alt="TypeScript logo" />
        </a>
      </div>
      <h1 class="text-4xl font-bold mt-8">Vite + TypeScript</h1>
      <div class="card mt-6 p-6 rounded-lg ">
        <button id="counter" type="button" class="px-4 py-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-700 transition duration-300"></button>
      </div>
      <p class="read-the-docs mt-4 text-violet-500">
        Click on the Vite and TypeScript logos to learn more
      </p>
    </div>
  `;

  const script = () => {
    setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
  };

  return { template, script };
};

export default Home;
