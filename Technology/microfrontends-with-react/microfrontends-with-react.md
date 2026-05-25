# Microfrontends with React - A Complete Developer's Guide

- <https://www.udemy.com/course/microfrontend-course>
- Created by Stephen Grider
- 9 hours on-demand video
- 16 articles
- 13 sections, 124 lectures
- <https://app.diagrams.net/?src=about#G1E1f67hI1lsIEU0nSUGfWaWWtEXt9giyn#%7B%22pageId%22%3A%2231RsYrZ3KrHfDwI80wkb%22%7D>

## Section 1: The basics of microfrontends

- What are microfrontends?
  - Divide a monolithic app into multiple, smaller apps
  - Each smaller app is responsible for a distinct feature of the product
- Why use them?
  - Multiple engineering teams can work in isolation
  - Each smaller app is easier to undersand and make changes to
- `Container` decides where and when to show all the microfrontends we have.
- **Integration**: how and when does the Container get access to the source code in MFE #1 and #2?
- There is no single perfect solution to integration
  - Many solutions, eache have pros and cons
- Major categories of integration
  - Build-time integration
    - Compile-time integration
    - **Before** Container gets loaded in the browser, it gets access to ProductsList source code
  - Run-time integration
    - Client-side integration
    - **After** Container gets loaded in the browser, it gets access to ProductList source code
  - Server integration
    - While sending down JS to load up Container, a server decides on whether or not to include ProductList source
- This course is focused 100% on **Run-Time Integration** using Webpack Module Federation
  - Hardest to setup and understand: it makes sense to cover it in great detail.
  - Most flexible and performant solution around right now.
- Webpack combines many dependencies and JS files into a single one, usually called `bundle.js` or `main.js`
- <http://localhost:8081/main.js>
  - This shows the content of the bundled main.js. To actually show what we want, we need to creat a `public` folder with an `index.html` that loads the `main.js` script.
- HTML Webpack plugin: needed because the bundle JS files created for the Webpack Dev Server have random names, e.g. `1k4j43.bundle.js`, `46j3ji.vendor.js`, etc.

## Section 2: The basics of module federations

- You need to use the webpack plugin `webpack/lib/container/ModuleFederationPlugin`

## Section 3: Sharing dependencies between apps

- For **asynchronous loading**, it renamed the Container's `index.js` to `bootstrap.js` and created an `index.js` which imports `bootstrap.js`
- When the container and the remote share a library, we can avoid fetching it twice with `shared: ['faker'],`
  - That works only if the major version matches. Otherwise, it would load 2 different versions.
- With

```
    shared: {
        faker: {
            singleton: true,
        }
    },
```

you would load only 1 version, even if the different versioins differ in the major part (a warning is shown in the browser console)

- **Sub-App Execution Context**
- It exists a bug when the HTML element "id" for the HTML element matches the id for the ModuleFederationPlugin id.
  - `<div id="cart></div>` --> your browser creates a global variable `cart` for this `div` element... which overrides the `cart` global variable created by the `remoteEntry.js`

## Section 4: Linking multiple apps together

- TBD

## Section 5: Generic ties between projects

- TBD

## Section 6: Implementing a CI/CD pipeline

- TBD

## Section 7: Deployment to Amazon Web Services

- TBD

## Section 8: Microfrontend-Specific AWS config

- TBD

## Section 9: Handling CSS in microfrontends

- TBD

## Section 10: Implementing Multi-Tier Navigation

- TBD

## Section 11: Performance considerations

- TBD

## Section 12: Authentication in microfrontends

- TBD

## Section 13: Using other frontend frameworks

- TBD

## About iFrames
- While iframes technically allow embedding different applications, they create more problems than they solve and represent an outdated approach that many beginners mistakenly consider "micro-frontends."
- Why it fails:
  - **Styling nightmare**: Each iframe has its own CSS context, making it impossible to create consistent spacing, fonts, and colors across applications.
  - **Communication barriers**: Parent and child applications struggle to share data or coordinate actions (like showing loading states).
  - **Accessibility issues**: Screen readers and keyboard navigation break across iframe boundaries, failing users with disabilities.
  - **Performance bottlenecks**: Each iframe loads a complete HTML document with its own CSS and JavaScript, consuming unnecessary resources.
  - **Poor mobile responsiveness**: Iframes do not play well on mobile devices, leading to scrolling issues and touch interaction problems.
  - **SEO challenges**: Search engines have difficulty correctly indexing content within iframes.

## Other resources

- [React Micro frontends with Module Federation](https://nearform.com/digital-community/react-micro-frontends-with-module-federation/)
- [What is NOT a Micro-Frontend: Clearing the Confusion](https://dev.to/managerfx/cosa-non-e-un-micro-frontend-facciamo-chiarezza-5lh)
- [Micro-Frontend Seamless Integration vs Iframes](https://medium.com/@p.aditya.198/micro-frontend-seamless-integration-vs-iframes-5fca85c67fda)
- [How Microfrontends Work: From iframes to Module Federation](https://www.freecodecamp.org/news/how-microfrontends-work-iframes-to-module-federation/)
