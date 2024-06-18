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

### React Server Components (RSC)
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

### React hooks
- From React v16.8
- The let us separate the behavior of your component ("business logic") to its appeareance
- The 4 hooks you (actually) need
    - useState
    - useEffect
    - useRef
    - useContext
- **State Management**
    - useState
    - useReducer
        - for more complex state management than useState
        - good fit if you have a lot of related state, e.g. multiple inputs in a form
        - "reducer" function to update state, it can greatly simplify state-related code
    - useSyncExternalStore
        - to integrate non-React state stores with React
        - probably you will never use it (unless you want to build you own state management library from scratch)
- **Effect Hooks**: to perform side effect
    - useEffect
        - used to perform side effects in React
            - Runs after React paints the UI
            - Asynchronous
        - let you synchronize with a system outside React
        - types of effects
            - Event-based (i.e. button click)
            - Render-based (i.e. fetching data)
            - **We should better NOT use `useEffect()` for any of those effects!!** 
                - Event-based: we should better run side effects in an event handler
                    - `<button onClick={saveData}>
                - Render-based: use React query or framework tool (NextJS) for fetching data
        - When to use?
            - Ideal for syncing your React code with browser APIs
            - E.g. 
            ```
            const ref = useRef(null)
            const [tooltipHeight, setTooltipHeight] = useState(0)

            useLayoutEffect(() => {
                const { height } = ref.current.getBoundingClientRect()
                setTooltipHeight(height)
            }, [])
            ```
    - useLayoutEffect
        - More limited
        - Runs just before React painst the UI
        - For synchornous operations
        - Used less often
        - Ideal when you want to set initial state from a browser API
    - useInsertionEffect
        - Made exclusive for CSS-in-JS libraries
        - Runs before any effect hook
        - used to insert styles
- **Ref Hooks**: to reference JS values in DOM values
    - useRef
            - refs are an "escape hatch", to step outside of React
            - refs let us "remember" data like useState
            - it does NOT trigger re-renders
            - it only stores ONE value (accessible with `.current`)
            - refs are mutable (unlike state)
            - DOM elements can be stored in refs
            1. Connect ref to ref prop, e.g. `const inputEl = useRef(null); <input ref={inputEl} type="text" />`
    - useImperativeHandle
        - a ref hook, but rarely used
        - used only when you need to forward a ref, used in combination with forwardRef
        - used to "expose" a method to the parent component
- **Performance Hooks**
    - useMemo
        - hook made to improve app performance
        - uses memoizatin to "remember" values
        - calcuates values only when dependencies change
        - good for expensive computations
        - similar to `useEffect` BUT is not for side effects and MUST return a value
    - useCallback
        - Similar to useMemo
        - It's for functions, for callback functions, not computed values
        - Great for functions passed as a prop
        - prevents callback function from being re-made
        - it is called on each render
- **Context Hooks**
    - useContext
        - It can read the context value
        - If a component is wrapped in a `<Context.Provider value="value">`, we can read in the children the value passed.
        - We can read it from any child: `const theme = useContext(ThemeContext)`
- **Transition Hooks**: for better UX
    - useTransition
        - All state updates are "urgent" by default
        - to specify certain updates as non-urgent
        - good for heavy computations
        - transitions can make apps more responsive
        - Typical use case: filtering a list based on user input. That avoids the problem of the UI to freeze because as long as you type there continuous rerenders and actions happening. We mark as non-urgent.
    - useDeferredValue
        - lets you "defer" updates to keep your app responsive
        - schedules an update at an optimal time for us instead of us doing it ourselves
        - great for filtering lists: just filter, no pending state
- **Random Hooks**
    - useDebugValue
        - Only if you use React DevTools, it lets you label your custom hook, that way you can find your custom hook easier in the React DevTools extension
    - useId
        - it creates a unique ids, no argument needed.
        - Don't use it to generate keys in list. Keys should come from your data
        - best for id prop on form fields, when input components are to be used in several places of the same page.
- **React 19 Hooks**
    - useFormStatus
    - useFormState
    - useOptimistic
    - use

#### Custom Hooks
- If you’re writing a custom Hook, it’s recommended to wrap any functions that it returns into useCallback
- https://react.dev/reference/react/useCallback#optimizing-a-custom-hook


### Reconciliation
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

### React Fiber
- Introduced in React v16
- React Fiber is an internal engine change geared to make React faster and smarter. The **Fiber reconciler**, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React.
- https://blog.logrocket.com/deep-dive-react-fiber/

### React 19
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

### [7 React Lessons I Wish I Knew Earlier](https://www.youtube.com/watch?v=4AXQgOcL1mo): 7 minutes
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


## Testing
### React Hooks
- `renderHook()`
- [How to Test Custom React Hooks with React Testing Library](https://www.builder.io/blog/test-custom-hooks-react-testing-library)
- [How to test custom React hooks (Kent C. Dodds)](https://kentcdodds.com/blog/how-to-test-custom-react-hooks)
- [Testing a React Custom Hook](https://dev.to/manuartero/testing-a-custom-hook-like-a-pro-1b19)


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
- [Coding with Adam](https://www.youtube.com/@CodingWithAdam)
    - [Learn React Context Explained in 10 minutes - useContext](https://www.youtube.com/watch?v=hUhWtYXgg0I&list=PLg5g_z-gxDmtg3BsvjMKsGfluWPmEK2v): 10 minutes, from 2022
        - https://github.com/CodingWith-Adam/react-context-tutorial
        - Elegan solution: `useUserName()`
- [You don't know what useCallback is](https://www.youtube.com/watch?v=9sImHTrRKrg): 7 minutes