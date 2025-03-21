import { IRouteComponentArgs } from "@/router";

const Home: IRouteComponentArgs = (params, query) => {
  const template = `
    <div class="flex items-center justify-center min-h-[80vh]">
      <div class="p-8 rounded-lg w-full max-w-md">
        <h1 class="text-2xl font-bold mb-6 text-center">Contact Us</h1>
        <form name="contact" method="POST" data-netlify="true">
          <div class="mb-4">
            <label class="block text-sm font-bold mb-2" for="name">Name</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-white text-black dark:bg-gray-800 dark:text-white" id="name" name="name" type="text" placeholder="Your name">
          </div>
          <div class="mb-4">
            <label class="block text-sm font-bold mb-2" for="email">Email</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-white text-black dark:bg-gray-800 dark:text-white" id="email" name="email" type="email" placeholder="Your email">
          </div>
          <div class="mb-4">
            <label class="block text-sm font-bold mb-2" for="message">Message</label>
            <textarea class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-white text-black dark:bg-gray-800 dark:text-white" id="message" name="message" placeholder="Your message"></textarea>
          </div>
          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
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
