Pour mettre en place le mode sombre (dark mode) avec Tailwind CSS 4 dans une application Vite, suivez ces étapes :

1. **Installer Tailwind CSS** :
    Assurez-vous d'avoir Node.js installé, puis initialisez votre projet Vite et installez Tailwind CSS.

    ```bash
    npm init vite@latest my-project
    cd my-project
    npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
    npx tailwindcss init -p
    ```

2. **Configurer Tailwind CSS** :
    Ouvrez le fichier `tailwind.config.js` et ajoutez la configuration pour le mode sombre.

    ```javascript
    module.exports = {
      darkMode: 'class', // ou 'media' si vous préférez utiliser les préférences système
      content: [
         './index.html',
         './src/**/*.{js,ts,jsx,tsx}',
      ],
      theme: {
         extend: {},
      },
      plugins: [],
    }
    ```

3. **Ajouter Tailwind CSS à votre CSS** :
    Ouvrez le fichier `src/index.css` et ajoutez les directives Tailwind.

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

4. **Configurer le mode sombre dans votre application** :
    Ajoutez une classe `dark` à l'élément racine de votre application pour activer le mode sombre.

    ```html
    <!DOCTYPE html>
    <html lang="en" class="dark">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Vite App</title>
      <link rel="stylesheet" href="/src/index.css">
    </head>
    <body>
      <div id="app"></div>
      <script type="module" src="/src/main.js"></script>
    </body>
    </html>
    ```

5. **Utiliser les classes Tailwind pour le mode sombre** :
    Utilisez les classes Tailwind pour styliser vos composants en mode sombre.

    ```html
    <div class="bg-white dark:bg-gray-800 text-black dark:text-white">
      <h1 class="text-2xl">Hello, World!</h1>
    </div>
    ```

6. **Basculer entre les modes clair et sombre** :
    Ajoutez un bouton ou une logique pour basculer entre les modes clair et sombre en ajoutant ou en supprimant la classe `dark` sur l'élément racine.

    ```javascript
    // src/main.js
    document.getElementById('toggle-dark-mode').addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
    });
    ```

    ```html
    <button id="toggle-dark-mode">Toggle Dark Mode</button>
    ```

Avec ces étapes, vous devriez être en mesure de configurer et d'utiliser le mode sombre dans votre application Vite avec Tailwind CSS 4.