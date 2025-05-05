# React Fundamentals: Building Modern, Interactive Web Applications with React's Component-Based Architecture

- Author: Shruti Kapoor
  - <https://shrutikapoor.dev/>
  - <https://www.linkedin.com/in/shrutikapoor08/>
- <https://learning.oreilly.com/course/react-fundamentals-building/0636920981428/>
  - September 2024
  - 3 hours
  - <https://github.com/shrutikapoor08/oreilly-react-exercises>

## Module 1: Introduction to React and Getting Started

- Key features of React
  - **Components**: basic building blocks, e.g. "Header", "Profile", "Main Content" (with "Tile" components), etc.
  - **State**
  - **Virtual DOM**
    - Copy of the actual DOM
    - In-memory representation of the DOM
    - React diffs with the previous version to figure out what has updated
    - More performant than updating real DOM
  - **JSX**
    - JavaScript XML
    - Not required for React
    - Similar to HTML
- Setting up a development environment
  - CodePen
  - Codesandbox
    - <https://codesandbox.io/p/sandbox/react-new>
- Local setup
  - Recommendation: use Vite, so that you don't have to worry about Webpack, babel, etc. The industry has moved away from `create-react-app`to Vite.
  - `npm create vite@latest`
  - You could also use NextJS, Remix, start from scratch, etc.

## Module 3 and 4

- [Example code with Vite](./oreilly-react-fundamentals-2024/)
  - <http://localhost:5173>
- `<>` is the same than `<Fragment>`

## Module 5: Adding Interactivity with Events

- In a browser console: `monitor(window)` will let you see all the events being triggered in the browser.

## Module 7: Styles and CSS in React

- `className` with CSS selector from CSS file
- Inline `style`
- CSS modules
  - E.g. `Button.module.css`, then we import it in our React file and we can access the styles programmatically

## Module 8: React Hooks

- [Code examples](./oreilly-react-fundamentals-2024/)
- Introduced in React 16
- Functions that allow you to use React lifecycle methods in functional components.
- `useState`
  - Add state to a functional React component
- `useEffect`
  - Perform side effects in React
  - Side effects - updating DOM, data fetching, managing subscriptions, setTimeouts
  - Replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount

## Module 9:  creating a Slideshow app

- [Code examples](./oreilly-react-fundamentals-2024/slideshow/)

## Module 10: fetching data

-They use `useEffect()` in order to fetch images from an HTTP API

## Module 11: Sharing data between components

- `useContext()`