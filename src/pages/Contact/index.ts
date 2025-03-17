import { IRouteComponentArgs } from "@/router";

const Home: IRouteComponentArgs = (params, query) => {
  const template = `
    <div class="min-h-screen flex items-center justify-center">
      <div class="p-8 rounded-lg w-full max-w-md">
        <h1 class="text-2xl font-bold mb-6 text-center">Contact Us</h1>
        <form>
          <div class="mb-4">
            <label class="block text-sm font-bold mb-2" for="name">Name</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your name">
          </div>
          <div class="mb-4">
            <label class="block text-sm font-bold mb-2" for="email">Email</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your email">
          </div>
          <div class="mb-4">
            <label class="block text-sm font-bold mb-2" for="message">Message</label>
            <textarea class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your message"></textarea>
          </div>
          <div class="flex items-center justify-between">
            <button class="font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  `;

  const script = () => {
    console.log("script page Contact");
  };

  return { template, script };
};

export default Home;
