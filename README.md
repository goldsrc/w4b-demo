# 📦 Webpack Boilerplate
This is a fork of a repository [Webpack 4 boilerplate by finmavis](https://finmavis.dev/blog/webpack-configuration-step-by-step)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) ![David](https://david-dm.org/dev/goldsrc/webpack-4-boilerplate.svg)
## 🚀 Quick start

To run this locally:

1. Install all dependencies using `yarn` or `npm install`
2. Start the development server using `yarn start` or `npm start`
3. Open up [http://localhost:3000](http://localhost:3000)
4. Happy Hacking!

### Production build

```bash
npm build
```
or
```bash
yarn build
```
> Note: Install [http-server](https://www.npmjs.com/package/http-server) globally to deploy a simple server.

```bash 
npm i -g http-server
```
or
```bash
yarn global add http-server
```

You can view the deploy by creating a server in `dist`. 

```bash
cd build 
http-server
```

## Features

- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Sass](https://sass-lang.com/)
- [PostCSS](https://postcss.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Dependencies

### Webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for Webpack.
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for Webpack.
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify development/production configuration
- [`cross-env`](https://github.com/kentcdodds/cross-env) - Cross platform configuration.

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript.
- [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - Use properties directly on a class.
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel.
- [`babel-eslint`](https://github.com/babel/babel-eslint) - Lint Babel code.
  - [`eslint`](https://github.com/eslint/eslint) - ESLint.

### Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel and Webpack.
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS.
  - [`sass`](https://github.com/sass/dart-sass) - Dart Sass.
- [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Process CSS with PostCSS.
  - [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) - Sensible defaults for PostCSS.
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolves CSS imports into JS.
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM.
- [`eslint-loader`](https://webpack.js.org/loaders/eslint-loader/) - Use ESLint with Webpack.
- [`file-loader`](https://webpack.js.org/loaders/file-loader/) - Copy files to build folder.

### Plugins

- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders.
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copy files to build directory.
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template.
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files.

## Author

- [Mohammad Beheshti](https://github.com/goldsrc/)

## License

This project is open source and available under the [MIT License](LICENSE).
