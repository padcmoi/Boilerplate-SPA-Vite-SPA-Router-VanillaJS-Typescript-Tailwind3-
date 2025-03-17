import { IRouteComponentArgs } from "@/router";

const Home: IRouteComponentArgs = (params, query) => {
  const template = `
    <div class="container mx-auto p-4">
      <h1 class="text-4xl font-bold mb-4">Article id ${params.id}</h1>
      <div class="bg-slate-600 text-white p-4 rounded shadow-md">
        <p class="text-lg">Args: ${JSON.stringify(query)}</p>
      </div>
      <a href="/article" class="mt-4 inline-block text-blue-500 hover:text-blue-700">Revenir en arrière</a>
    </div>
  `;

  const script = () => {
    console.log("script page Article with " + JSON.stringify(params));
  };

  return { template, script };
};

export default Home;
