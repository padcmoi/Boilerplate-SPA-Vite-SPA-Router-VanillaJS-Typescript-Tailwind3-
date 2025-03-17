import { IRouteComponentArgs } from "@/router";

const Home: IRouteComponentArgs = (params, query) => {
  const template = `
    <div class="container mx-auto p-4">
        <h1 class="text-3xl font-bold mb-4">Article</h1>
        <ul class="list-disc list-inside">
            ${Array.from({ length: 5 }, () => {
              const random = Math.random().toString(36).substring(7);
              const queries = new URLSearchParams({
                a: Math.floor(Math.random() * 10).toString(),
                b: Math.floor(Math.random() * 10).toString(),
                c: Math.floor(Math.random() * 10).toString(),
              }).toString();
              return `<li class="mb-2"><a class="text-blue-500 hover:underline" href="/article/${random}?${queries}">/article/${random}?${queries}</a></li>`;
            }).join("")}
        </ul>
    </div>
  `;

  const script = () => {
    console.log("script page Article");
  };

  return { template, script };
};

export default Home;
