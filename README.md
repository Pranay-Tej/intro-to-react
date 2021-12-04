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
- [ ] Input bind for step size
- [ ] Dynamic form array
