# Boilerplate with Vite VanillaJS + TypeScript + Tailwind 3 + SPA Router 

## Introduction

This project is a boilerplate to quickly start a web application using Vite, VanillaJS, TypeScript, Tailwind 3, and a router for a single-page application (SPA).

## Prerequisites

- Node.js (version 20 or higher)
- pnpm

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/padcmoi/vite-vanillajs-ts-tailwind-spa.git
    cd vite-vanillajs-ts-tailwind-spa
    ```

2. Install the dependencies:

    ```bash
    pnpm install
    ```

## Scripts

- `dev`: Starts the development server.
- `build`: Builds the application for production.

Use the following commands to run the scripts:

```bash
npm run dev
npm run build
```

## Project Structure

```
vite-vanillajs-ts-tailwind-spa/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── router/
│   ├── styles/
│   ├── main.ts
│   └── index.html
├── .gitignore
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Tailwind CSS Configuration

Tailwind can be configured via the `tailwind.config.js` file. You can customize the styles by modifying this file. Requires some change or wait the next commit to adjust the configurations according to your specific needs.

## Router Configuration

The SPA router is configured in the `src/router` folder. You can add new routes by modifying the files in this folder.

## Contribution

Contributions are welcome. Please submit a pull request for any improvements or corrections.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
