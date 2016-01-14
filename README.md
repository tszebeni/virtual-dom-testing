# virtual-dom-testing

Simple project to test the virtual dom without React by implementing various modules.

Dependencies packaged together with browserify and uglify (around 33kb):
- [Virtual Dom library](https://github.com/Matt-Esch/virtual-dom) and
- [JS XSS library](https://github.com/leizongmin/js-xss).
- optional dependency to render html to hscript (around 129kb): [html2hscript library](https://github.com/twilson63/html2hscript)
    - in case you omit it, it falls back to nodejs service with jsonp.

The code also contains a simple AMD module loader built to work with this specific project.

For trying it out, just check out and do
- npm install
- start node app: node server/server.js
- go to http://localhost:8080/index.html

Some example components:
- DebugComponent: Trigger to switch to debug mode
- CountdownComponent: Simple widget to count down to 0 from a specified time (configurable in json)
- FooterComponent: Displayes a footer section
- HeaderComponent: Composite of LocaleComponent and DebugComponent and displayes an H1
- LocaleComponent: trigger to switch language without page reload
- MainComponent: Composite of CountdownComponents
- GridComponent: Example component to display an html grid
- HTMLComponent: Component to display custom html content, which is also filtered against xss
- TextComponent: Component to display raw text without markup

Some core modules:
- assert: it does what it has to
- component: base and utility class to create components
- page-registry: to lookup page specific component configuration
- format: placeholder formatting support
- functions: utility functions, like debounce, tried and merge
- global: define global module as ´this´ in global scope
- hscript: html to hscript converter, on the fly if optional dependency is included, otherwise via backend with jsonp 
- i18n: message-source aware localisation utility
- jsonp: to talk to servers in a cross origin manner
- leave: detect page shutdown and stop re-rendering, interface over logic in app.js
- message-source: ajax based json loading of translations
- module: amd module loader which also works with browserify-s packages
- request: ajax made simple and easy
- state: ajax based state manager which will re-render the page if change happens
- timer: state based counter which uses setInterval
- dependencies: interface over virtual-dom and xss packaged via browserify

Quick start to modify:
- clone this repo
- hit npm install
- npm install -g browserify
- npm install -g uglifyjs
- (optional)re-package dependencies (inside client/js):
    - browserify dependencies\main.js --standalone deps -o dependencies\deps.js
    - uglifyjs dependencies\deps.js --compress --mangle -o dependencies\deps.min.js
    - browserify dependencies\optional.js --standalone optional -o dependencies\deps.optional.js
    - uglifyjs dependencies\deps.optional.js --compress --mangle -o dependencies\deps.optional.min.js
- start server app, which serves the files and provides the html2hscript service:
    - node server/server.js
- open http://localhost:8080/index.html   