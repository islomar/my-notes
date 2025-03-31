# Running and Embedding the React Application

## Running Locally

This is a React application built with Vite. To run it locally:

1. Make sure you have Node.js installed on your system
2. Navigate to the project directory in your terminal
3. Install dependencies (if you haven't already):
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. The application will be available at http://localhost:5173 by default

## Embedding Options

There are several ways to embed this React application:

### 1. Embedding in an iframe

After running the development server or deploying the application, you can embed it in an HTML page using an iframe:

```html
<iframe 
  src="http://localhost:5173" 
  width="100%" 
  height="600px" 
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>
```

### 2. Building and Hosting as a Static Site

You can build the application for production and host it on any static site hosting service:

```bash
npm run build
```

This will create a `dist` directory with optimized production files that can be deployed to services like:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Firebase Hosting

### 3. Embedding as a Component in Another React Application

If you want to use this application as part of another React application:

1. Build it as a library by modifying the `vite.config.ts`:
   ```typescript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     build: {
       lib: {
         entry: 'src/App.tsx',
         name: 'ReactViteApp',
         formats: ['es', 'umd']
       },
       rollupOptions: {
         external: ['react', 'react-dom'],
         output: {
           globals: {
             react: 'React',
             'react-dom': 'ReactDOM'
           }
         }
       }
     }
   })
   ```

2. Publish it to npm or use it locally with npm link

### 4. Using Web Components (Advanced)

You can wrap your React application as a Web Component to use it in any HTML page or framework:

1. Install the required packages:
   ```bash
   npm install @lit-labs/react
   ```

2. Create a wrapper component:
   ```typescript
   // src/web-component.ts
   import { createComponent } from '@lit-labs/react';
   import React from 'react';
   import ReactDOM from 'react-dom/client';
   import App from './App';

   class ReactAppElement extends HTMLElement {
     connectedCallback() {
       const mountPoint = document.createElement('div');
       this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
       
       const root = ReactDOM.createRoot(mountPoint);
       root.render(React.createElement(App));
     }
   }

   customElements.define('react-app', ReactAppElement);
   ```

3. Then use it in any HTML page:
   ```html
   <script type="module" src="/path/to/web-component.js"></script>
   <react-app></react-app>
   ```

## Development Considerations

- This project uses React 19, which is a very recent version
- TypeScript is configured for type checking
- The application uses Vite's Hot Module Replacement (HMR) for fast development
- ESLint is configured for code quality checks