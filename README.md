# webpack-typescript

**View the [live version](https://webpack-ts-react-boilerplate.netlify.app/) hosted on netlify.**

![project header](/public/project-header.png)

> This project is intended to be used as a boilerplate project. It uses Webpack 5, Babel 7, React 17 and Typescript 4.

## :sparkles: Features :sparkles:

- Webpack 5 + Hot reloading in the development setting (while maintaining state)
- React 17, Typescript 4, Babel 7, EsLint
- Already setup with Bootstrap 5, styled-components and scss
- Code splitting in the production build to reduce package size
- Content hashes, to update required files as new versions are pushed out
- Different coloured favicons to easily distinguish developer and production environments

| ![development favicon](/public/fav_dev.png) | ![production favicon](/public/fav_prod.png) |
| :-----------------------------------------: | :-----------------------------------------: |
|                 Dev Favicon                 |                Prod Favicon                 |

## :rocket: Getting Started :rocket:

1. Clone the project (click the green button) and change into that directory
2. Run `npm install` if you like to use npm, or just `yarn` if you prefer to use yarn, in the terminal
3. Run `npm run start` with npm, or `yarn start` with yarn, in the terminal
4. And that's it! :tada:

## :pushpin: Scripts :pushpin:

- `npm run start` or `yarn start`: open the developer server in a new tab.
- `npnm run build` or `yarn build`: creates a production build in /dist folder
  - (Note to run the production build, change into the /dist folder (`cd dist`) and run `npx serve`)
- `npm run clean` or `yarn clean`: remove the /dist folder and everything it contains
- `npm run lint` or `yarn lint`: runs eslint to automatically fix what it can, and alert you to what it can't
- `npm run format` or `yarn format`: runs prettier to automatically format your project if it can.
