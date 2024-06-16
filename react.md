# Notes about React

## Charla "Crea una librería de componentes con React desde 0"

- [Nuclio Digital School](https://nuclio.school/landing-ppc-full-stack-developer/)
- Guillermo Blasco
- TypeScript, Theming, Storybook.
- Librerías de componentes: e.g.Material-UI, Ant Design.
- https://github.com/Humankind-Technologies/react-components-typescript-storybook-boilerplate
- https://github.com/Humankind-Technologies/humankind-react-components
- https://www.chromatic.com/


## Concepts
- Angular, Vue: Two way (data binding)
- React: **One way (data flow)**
- In React, **data flows only in ONE direction**, from parent to child components (data flows down with `props`)
    - Clear state management
    - Defined responsibilities
    - Much easier debugging
    - High reusability
- The way to pass data (lifting state) from a child to its parent is using a `callback` function
- **React Server Components (RSC)**
    - Next.js: React framework, runs React on a server
    - E.g. you can query a database from the server and then put data in the components (frontend)
    - Downside:
        - You can NOT use a lot of React tools: e.g. State, Hooks or Event Handlers
        - You need to put that on client components
        - Advantages:
            - Faster render
            - Smaller bundler
            - Fewer use of React Hooks (e.g. `useQuery()`, you can do it on the server)
                - Also, you can put state in URL (e.g. `/auth?login=true`) and read the state from URL in the component (e.g. `searchParams.login`)
- **React hooks**
    - From React v16.8
    - The let us separate the behavior of your component ("business logic") to its appeareance
    - The 4 hooks you (actually) need
        - useState
        - useEffect
        - useRef
        - useContext
    - useState
    - useReducer
    - useSyncExternalStore
    - useEffect
    - useLayoutEffect
    - useInsertionEffect
    - useRef
    - useImperativeHandle
    - useMemo
    - useCallback
    - useContext
    - useTransition
    - useDeferredValue
    - useDebugValue
    - useId
- **Reconciliation**
    - [Preserving and Resetting State](https://react.dev/learn/preserving-and-resetting-state)
        - State is isolated between components. 
        - React keeps track of which state belongs to which component based on their place in the UI tree. 
        - You can control when to preserve state and when to reset it between re-renders.
    - Current tree vs Work-In-Progress tree
        - "Work-in-progress tree" is the new tree after an action from the user.
        - Only the difference between those 2 trees is given to the **Rendering Environment**. The Rendering Environment transforms a tree into a set of DOM operations and renders a **DOM tree**.
        - We compare them and calculate the differences between them. Then, difference is turned into a set of **DOM operations** and prioritized.
        - Then, the WIP-tree becomes the "Current tree"
        - React core developers have divided the **tree comparison engine** and the **rendering environment** into separate phases, so that React DOM and React Native can use their own rendering engines when using the same comparison engine that is in React core.
        - Heuristic algorithm for traversing the tree, node comparisons between current tree and WIP⁻tree. We get O(n) instead of O(n^3)
- **React Fiber**
    - Introduced in React v16
    - React Fiber is an internal engine change geared to make React faster and smarter. The **Fiber reconciler**, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React.
    - https://blog.logrocket.com/deep-dive-react-fiber/
- **React 19**
    - Biggest change: React Compiler. It converts React code into regular JS code, in order to improve performance and reduce cognitive load.
        - No more memoization (to manually store results of expensive function call): `useCallback()`, `useMemo()`, `memo()`
        - All used to prevent unneded re-renders
        - E.g. we use `const increment = useCallback(() => setCount((c) => c + 1), [])` inside a React component so that `increment()` isn't re-created
        - E.g. we use `const doubleCount = useMemo(() => count*2, [count])` to recompute `doubleCount` **only** when `count` changes.
        - With the new React Compiler, it's much more simple, you don't have to worry about memoization, it's optimized transparently:
        ```
        const increment = () => setCount((c) => c + 1)
        const doubleCount = count * 2
        ```
    - No more `forwardRef()`
        - You could pass a `ref` to a child component, and the child component had to use `forwardRef()` in order to access it.
        - Now, you can access `ref` from the child component as any other prop
    - `use()` hook
        - multi-purpose hook
        - Lets you load resources asynchronously: promises and context
        - It replaces both `useEffect()` (for data fetching) and `useContext()` (for reading context)
        - Before, with `useEffect()` you needed to
            1. Fetch data in useEffect
            2. Set in state
            3. Display in UI
        - Now, with the `use()` hook, you can
            1. Resolve with use, e.g. `const person = use(fetchPerson())`
            2. Show fallback with `Suspense` component while the async fetchPerson is executing...
            3. Display data in UI
    - `Directives`
        - String you can add to top of component, e.g. `use client` or `use server`
        - Commands to run React code on server or client
    - `Actions` make forms much easier
        - It can be run on server **or** client
        - `useFormStatus()`
            - From React DOM, to prevent submitting twice the form, since there are async functions (it will usually take time for actions to complete)
            - That way, you can disable submit button while the submission is pending
        - `useFormState()`
            - It is a stateful hook
            - What if you want the data returned from your action?
            - Similar to `useState()` but for **actions**
            - Use case: "Add to cart" action
        - `useOptimistic()`
            - What to do while we're waiting for action to finish running?
            - Ideal for real-time apps
            - Avoid making users wait
            - Optimistic update
- [7 React Lessons I Wish I Knew Earlier](https://www.youtube.com/watch?v=4AXQgOcL1mo): 7 minutes
    - React State must be immutable
    - Don't Use useState for Everything
        - You also have Server state, URL state (`usePathname()`, `useLocation()`), Local storage + cookies...
        - Before using state...
            1. Can it be computed each render?
            2. Is there a library that has that state?
            3. Does it need to be rendered?
            4. If the answer to all above is NO, then you might use `useState()`
    - Derive Values Without State
    - Compute Values Without Effects
    - Keys Should Actually Be Unique
        - Use crypto.randomUUID()
    - Don't Leave Out Dependencies
    - Use useEffect Last
        - Instead of fetching data from a `useEffect()`, use `useQuery()` or [SWR](https://swr.vercel.app/)
        - How to NO use useEffect
            - Derive values in render
            - Response to events with handlers
            - Fetch with React Query



## Courses
- https://advancedreact.com/ (Wes Bos)
- https://www.reactbootcamp.com/modules


## Interesting links
### Videos
- [The Heart of React || How React works under the hood](https://www.youtube.com/watch?v=5XnU2cvgw5o): 10 minutes
- [Code Bootcamp](https://www.youtube.com/@TheCodeBootcamp/videos): several short videos explaining things about React
    - [How to Rewire Your Brain to Learn React](https://www.youtube.com/watch?v=gjxY0aVdoCY): 6 minutes
    - [Every React 19 Feature Explained in 8 Minutes](https://www.youtube.com/watch?v=2NPIYnY3ilo): 8 minutes
    - [7 React Lessons I Wish I Knew Earlier](https://www.youtube.com/watch?v=4AXQgOcL1mo): 7 minutes
    - [ALL React Hooks Explained in 12 Minutes](https://www.youtube.com/watch?v=LOH1l-MP_9k): 12 minutes
