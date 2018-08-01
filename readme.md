<div align="center">
  <a href="https://github.com/webpack/webpack" style="display: inline-block; margin: 20px;">
    <img width="90" heigth="90" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
  <a href="https://github.com/pugjs/pug" style="display: inline-block; margin: 20px;">
    <img src="https://cdn.rawgit.com/pugjs/pug-logo/eec436cee8fd9d1726d7839cbe99d1f694692c0c/SVG/pug-final-logo-_-colour-128.svg" height="90">
  </a>
  <a href="https://github.com/babel/babel" style="display: inline-block; margin: 20px;">
    <img alt="babel" src="https://raw.githubusercontent.com/babel/logo/master/babel.png" height="70">
  </a>
  <a href="https://github.com/postcss/postcss" style="display: inline-block; margin: 20px 20px;">
     <img width="70" height="70" src="http://postcss.github.io/postcss/logo.svg">
  </a>
  <a href="https://github.com/sass/sass" style="display: inline-block; margin: 20px;">
    <img width="90" src="https://sass-scss.ru/assets/img/logos/logo.svg">
  </a>
  <a href="https://github.com/svg/svgo" style="display: inline-block; margin: 20px;">
    <img src="https://svg.github.io/svgo-logo.svg" width="70" height="70" alt="logo"/>
  </a>
  <a href="https://eslint.org/" style="display: inline-block; margin: 20px;">
    <img width="80" height="80" src="https://eslint.org/img/logo.svg">
  </a>
  <a href="https://github.com/stylelint/stylelint" style="display: inline-block; margin: 20px;">
    <img height="70" src="https://s3.amazonaws.com/media-p.slid.es/uploads/467124/images/2872758/stylelint-icon-black.svg">
  </a>
  
  <h1>Web Starter Kit</h1>
  <p>Web Starter Kit is an opinionated boilerplate for web development. The builder uses a component approach that will make your project easy to maintain and readable. You do not need to spend much time searching for and linking files. The builder uses <a href="https://meyerweb.com/eric/tools/css/reset/">reset.css</a> and <a href="https://necolas.github.io/normalize.css/">normalize.css</a></p>
</div> 
<h2 align="center">Install</h2>

###### step 1
```bash
git clone https://github.com/web-garage/web-starter-kit
```
###### step 2
```bash
npm install
```
###### step 3
```bash
npm run start
```

### libpng issues

Installing on some versions of OSX and Linux may raise errors with a [missing libpng dependency](https://github.com/tcoopman/image-webpack-loader/issues/51#issuecomment-273597313): 

> Module build failed: Error: dyld: Library not loaded: /usr/local/opt/libpng/lib/libpng16.16.dylib

This can be remedied by installing the newest version of libpng with [homebrew](http://brew.sh/):

```sh
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
```sh
brew install libpng
```

or for Debian based systems 

```sh
wget -q -O /tmp/libpng12.deb http://mirrors.kernel.org/ubuntu/pool/main/libp/libpng/libpng12-0_1.2.54-1ubuntu1_amd64.deb \
  && sudo dpkg -i /tmp/libpng12.deb \
  && rm /tmp/libpng12.deb

```

<h2 align="center">Commands</h2>

Scaffold  | Usage
---       | ---
Development | `npm run start`
Production | `npm run build`
Create new page | `npm run g p 'name'` or `npm run g page 'name'`
Create new component | `npm run g c 'name'` or `npm run g component 'name'`

*Web Starter Kit will automatically connect **js** and **scss** files*

<h2 align="center">Plugins</h2>

#### Pug

|Name|Description|
|:--:|:----------|
|[pug-loader](https://github.com/pugjs/pug-loader)| Pug loader for webpack.

#### SCSS

|Name|Description|
|:--:|:----------|
|[postcss-loader](https://github.com/postcss/postcss-loader)| PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.
|[sass-loader](https://github.com/webpack-contrib/sass-loader)| Loads a SASS/SCSS file and compiles it to CSS.
|[css-loader](https://github.com/webpack-contrib/css-loader)| The css-loader interprets @import and url() like import/require() and will resolve them.
|[style-loader](https://github.com/webpack-contrib/style-loader)| Adds CSS to the DOM by injecting a <style> tag
|[autoprefixer](https://github.com/postcss/autoprefixer)| PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use. It is recommended by Google and used in Twitter and Taobao.
|[postcss-import](https://github.com/postcss/postcss-import)| This plugin can consume local files, node modules or web_modules.
|[precss](https://github.com/jonathantneal/precss)| PreCSS lets you use Sass-like markup and staged CSS features in CSS.
|[postcss-font-magician](https://github.com/jonathantneal/postcss-font-magician)| Font Magician is a PostCSS plugin that magically generates all of your @font-face rules. Never write a @font-face rule again.
|[postcss-browser-reporter](https://github.com/postcss/postcss-browser-reporter)| PostCSS plugin to report warning messages right in your browser.
|[postcss-flexbugs-fixes](https://github.com/luisrudge/postcss-flexbugs-fixes)| PostCSS plugin This project tries to fix all of flexbug's issues.
|[cssnano](https://github.com/ben-eb/cssnano)| cssnano is a modern, modular compression tool written on top of the PostCSS ecosystem, which allows us to use a lot of powerful features in order to compact CSS appropriately.

#### JavaScript

|Name|Description|
|:--:|:----------|
|[babel-loader](https://github.com/babel/babel-loader)| This package allows transpiling JavaScript files using Babel and webpack.
|[eslint-loader](https://github.com/MoOx/eslint-loader)| Eslint loader for webpack

#### Server

|Name|Description|
|:--:|:----------|
|[webpack-dev-server](https://github.com/webpack/webpack-dev-server)| Use webpack with a development server that provides live reloading. This should be used for development only.

#### Files

|Name|Description|
|:--:|:----------|
|[file-loader](https://github.com/webpack-contrib/file-loader)| Instructs webpack to emit the required object as file and to return its public URL
|[image-webpack-loader](https://github.com/tcoopman/image-webpack-loader)| Image loader module for webpack. Minify PNG, JPEG, GIF, SVG and WEBP images with imagemin
|[svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader)| Webpack loader for creating SVG sprites.
|[svgo-loader](https://github.com/rpominov/svgo-loader)| Svgo loader for webpack. All the svg from the assets folder are collected by default in the sprite.
|[favicons-webpack-plugin](https://github.com/jantimon/favicons-webpack-plugin)| Allows to use the favicons generator with webpack. Favicon should be in the folder assets and should be called favicon.png

For connection of fonts the builder uses a plug-in [postcss-font-magician](https://github.com/jonathantneal/postcss-font-magician) which magically generates all your rules @font-face. To connect the font, change *postcss.config.js* which is in the project root as follows

``` javascript
module.exports = () => ({
  ...
  plugins: {
    'postcss-font-magician': {
      variants: {
        'Raleway': { // Font name 
          '300': [], // Oswald
          '400': [],
          '700': [],
        }
      },
      protocol: 'https:',
      foundries: ['google'], // Will be taken from https://fonts.google.com
    }
  }
});
```

Now you can register in scss

``` scss
font-family: "Raleway";
```
<h2 align="center">Structure</h2>

#### Development

```
├── node_modules
├── src
│   ├── assets
│   ├── components
│   ├── pages
│   │   └── index.pug
│   ├── shared
│   │   ├── css
│   │   │   ├── common.css
│   │   │   ├── extends.css
│   │   │   ├── mixins.css
│   │   │   ├── reset.css
│   │   │   └── variables.css
│   │   ├── js
│   │   │   ├── navigation.js
│   │   │   └── pages.js
│   │   └── pug
│   │   │   ├── includes
│   │   │   │   └── head.pug
│   │   │   ├── layouts
│   │   │   │   └── main.pug
│   │   │   └── mixins
│   │   │   │   └── mixins.pug
│   ├── main.js
│   └── main.scss        
├── webpack
│   ├── babel.module.js
│   ├── devserver.module.js
│   ├── file.module.js
│   ├── images.module.js
│   ├── postcss.module.js
│   ├── pug.module.js
│   └── svg-sprite.module.js
├── .eslintrc.js
├── .gitignore
├── changelog.md
├── cli.js
├── license
├── package-lock.json
├── package.json
├── postcss.config.js
├── readme.md
├── stylelint.config.js
├── webpack.common.js
├── webpack.dev.js
├── webpack.prod.js
└── options.json
```

#### Production

```
├── build
│   ├── css
│   │   └── index.css
│   ├── images
│   └── js
│   │   └── app.js
└── index.html
```

## [Changelog](changelog.md)

## [License](license)
