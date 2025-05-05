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
- Defining your own Hooks:
  - Share stateful logic
  - Must start with `use`
  - Example: [`useTheme`](oreilly-react-fundamentals-2024/oreilly-react-exercises/5-hooks/useContext/src/hooks/useTheme.js)
- Using Reducers
  - Hard to manage state when there are a lot of "setStates" in a component
  - We can move it to one single file - reducer
  - Step 1: dispatch an action. An action is an object which has a type and a payload.
  - Step 2: define what happens when an action is fired.
  - Step 3: wire up the reducer
    - `const [products, dispatch] = useReducer(productsReducer, {});`
  - example: [productsReducer](oreilly-react-fundamentals-2024/slideshow/src/Components/productsReducer.js)

  ## Module 12: Advanced React

  - `useMemo`
    - It caches a value
    - e.g. if a calculation takes more than 1 ms.
  - `useCallback`
    - It caches a function
    - React will return and not call your function back during initial render.
    - Helpful when you pass it as a prop to a component wrapped in memo.
    - Use the React Developer Tools profiler to see which components would benefit the most from memoization.
  - `useRefs`
    - Lets you persist values between re-renders
    - Updating a ref doesn't trigger re-rendering
    - Current value is accessed using `ref.current`
    - Helpful to access DOM elements
  - **How React updates the DOM**
    - React updates the DOM by using its virtual DOM and reconciliation process.
    - Three phases: Trigger, Render and Commit phase
    - **Trigger** (component triggered to render)
      - Initial render
      - Parents re-rendered
      - Something in the component changed
    - **Render**
      - After you trigger a render, React calls the component to figure out what to display on screen
      - Initial render calls root component.
      - For subsequent renders, React calls the component whose state update triggered the render
    - **Commit**
      - When React has figured out what component to re-render.
      - After rendering, React will modify the DOM
      - For the initial render, React uses the appendchild DOM API to display all the created DOM nodes on the screen.
      - For subsequent renders, react determines the minimal changes required and only applies the necessary updates to make the DOM match the latest rendering output.
      - React alters the DOM nodes **only when there are differences between renders**.

## Module 13: Testing and Debugging

- React Testing Library (RTL) and Jest
- React Developer tools

## Module 14: Introduction to React 18

- Released in March 2022
- It introduces features to polish UI and remove jankiness
- Features of React 18:
- Automatic Batching
  - Group together updates that can be processed simultaneously
  - By batching updates, React doesn't wait for each micro task to complete, thereby boosting performance.
  - pre-React 18 batched everything happening inside an event handler, but NOT if it happened outside an event handler.
- Concurrency
  - Before React 18, rendering was a single synchronous task which could not be interrupted.
  - This allows React to prioritize urgent updates without blocking the entire rendering process.
- Transition
  - Prioritize updates
  - Mark non-urgent UI updates as "transitions"
  - `import { startTransition } from 'react'`

## Module 15: Preparing for Tech Interviews

- Question 1: create a typeahead component in React that implements debouncing
- Question 2: create an app that calls an API and renders data on the page
- Question 3: create a form app that has a different state of UI when a field is selected, has value or is visited (uses onFocus, onBlur events)
- Question 4: given a mock, use React to render on the page

## Next Steps
- Manage state using a state management library, e.g: Redux
- Learn how to consume a GraphQL API
- Leverage a framework such as NextJS or Remix