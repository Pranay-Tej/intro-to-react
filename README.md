# Intro to React - workshop

## Resources

- [dev-handbook notes](https://dev-handbook.vercel.app/frontend/react/react)
- [react-forms repo](https://github.com/Pranay-Tej/react-forms)
- React Ecosystem
  - Build Tools
    - Create React App
    - Vite
  - Forms
    - react-hook-form
    - Formik
  - UI Components
    - mui
  - Routing
    - react-router
    - React Location
  - Hooks
    - React Query
  - Component Documentation/Design System
    - StoryBook
  - State Management
    - Zustand
    - React Redux
    - Redux Toolkit
  - Animations
    - Framer Motion
  - React Frameworks
    - NextJS (SSR, SEO)
    - BlitzJS

---

## Tasks

### Instructions

- Clone the repo `git clone https://github.com/Pranay-Tej/intro-to-react.git`
- `cd intro-to-react` and `npm i` to install dependencies
- `npm run dev` for local development server
- All tasks have corresponding git branches. `git branch -a` to view all branches
- Solution for current task will be available in next task's branch
- Checkout to `1` branch to get started with the first assignment
- Checkout to `main` branch at any point to access instructions and resources

---

### 1. Counter functionality

- [x] Create counter Component

  - [x] Pass `step` as prop
  - [x] Use `1` as default `step` value

- [x] Increase count
- [x] Decrease count
- [x] Reset count
- [x] Add dynamic class to count text

  - [x] Red when number < 0
  - [x] Blue when number >= 0

- [x] Emit `<Counter />` value back to parent

### 2. Forms

- [x] Text input
- [x] Number
- [x] Date (`npm i` to install date-fns`)
- [x] Time
- [x] Select
- [x] Multi Select
- [x] Radio group
- [x] Checkbox group
- [x] Input bind for step size
- [x] Dynamic form array

### 3. CRUD App

- [x] JSON Server `npm i -D json-server`
- [x] Axios `npm i axios`
- [x] Install packages `npm i`
- [x] Run API `npm run api`
- [x] fetchAll
- [x] fetchById
- [x] create
- [x] updateById
- [x] deleteById
- [x] Bonus: highlight the selected item when editing

### 4. Routing

- [x] react-router `npm i react-router-dom`
- [x] `BrowserRouter`, `Switch`, `Link`, `Route`
- [x] Set Counters Route
- [x] Set Forms Route
- [x] Set Todos route
- [x] Nested & Dynamic routes
  - [x] `useRouteMatch()`, `path`, `url`
  - [x] `useParams()`
  - [x] Programmatic Navigation `useHistory()`
- [x] Lazy load routes
  - [x] `lazy`, `Suspense`
- [x] Bonus: Add `404 NOT FOUND` route

### 5. Custom hooks

- [x] useAxios custom hook/re-usable logic
  - [x] data, isLoading, errorMessage

### 6. Context API

- [x] `createContext()`
- [x] `Context.Provider`, `value`
- [x] `<ContextProvider />` custom component
- [x] `useContext()`
- [x] `useReducer()` for redux pattern

### 7. State Management (Zustand)

- [x] zustand `npm i zustand`
- [x] `create` store
- [x] `useStore`
- [x] `set`, `get`, `state`
- [x] `devtools`
- [x] Counter
- [x] async events
- [x] Chaining events
- [ ] Check Zustand's [GitHub](https://github.com/pmndrs/zustand) for more info
  - [ ] Memoizing selectors
  - [ ] Usage with Immer
  - [ ] Redux like store
  - [ ] Splitting store into slices
  - [ ] Middleware

### 8. Multiple Configurations

- [ ] env variables configuration
- [ ] npm scripts
  - [ ] multiple dev setups
  - [ ] multiple prod builds
