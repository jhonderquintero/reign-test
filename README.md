Deployed version (CD with Netflify): https://ecstatic-chandrasekhar-61cafc.netlify.app/

## Applied Design Patterns

### Atomic Design

Atomic design is methodology for creating design systems.
All elements are is atoms, molecules, organisms, templates, and pages concurrently working \
together to create effective interface design systems.

There are five distinct stages of the Atomic Design methodology, with the first three modelled after their equivalents in the Chemistry world. Each stage builds on the previous, acting as an aggregate of items from the preceding stages.

Atoms
Molecules
Organisms
Templates
Pages

In this folder structure we defined Atoms, Molecules and Organisms in "src/atomic" folder \
and Templates and Pages in "src/views"

https://bradfrost.com/blog/post/atomic-web-design/

### Improve React Performance

Design pattern recommended by Kent C. Dodds (Google Expert and creator of React Testing Library)
(This design patterns is applied in Atomic templates)

https://epicreact.dev/one-react-mistake-thats-slowing-you-down/

### Design Tokens for future usage of Design System (Scalability)

https://spectrum.adobe.com/page/design-tokens/

## Packages and Libraries

### react-router-dom

Enables you to implement dynamic routing in a web app.

https://reactrouter.com/

### react-query

This library make possible fetching, caching, synchronising and updating server state in React applications.
(Incredible speed performance of react-applications)

https://react-query.tanstack.com/

### date-fns

Toolset for manipulating JavaScript dates in a browser & Node.js.

https://date-fns.org/

### animate.css

This is a library of ready-to-use, cross-browser animations for use in your web projects. Great for emphasis, home pages, sliders, and attention-guiding hints.

https://animate.style/

### react-lottie

Allows implement lottie files in React

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run prettier-check`

This command checks that files are already formatted with prettier, rather than overwriting them

### `npm run prettier-fix`

This command format and overwritte all files with prettier styles.

## Folder Structure

Main folder: src
Package Manager: npm
React/Typescript

### helpers

In this folders are all functions that work as helpers for some actions.

### context

All context created with React.context are in this folders.

### hooks

Customs hooks

### navigation

Routes and navigations created with react-router-dom

### assets

Images, assets and lottie files

### views

Atomic Pages and Templates

### atomic

Atomic Atoms, Molecules and Organisms

### styles

All global styles applied in the code.