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
- http://localhost:8081/main.js
  - This shows the content of the bundled main.js. To actually show what we want, we need to creat a `public` folder with an `index.html` that loads the `main.js` script.
- HTML Webpack plugin: needed because the bundle JS files created for the Webpack Dev Server have random names, e.g. `1k4j43.bundle.js`, `46j3ji.vendor.js`, etc.

## Section 2: The basics of module federations

- TBD

## Section 3: Sharing dependencies between apps

- TBD

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
