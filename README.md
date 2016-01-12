# virtual-dom-testing

Simple project to test the virtual dom without React by implementing various modules.

Dependencies packaged together with browserify and uglify (around 160kb):
- [Virtual Dom library](https://github.com/Matt-Esch/virtual-dom),
- [html2hscript library](https://github.com/twilson63/html2hscript) and
- [JS XSS library](https://github.com/leizongmin/js-xss).

The code also contains a simple AMD module loader built to work with this specific project.

For trying it out, just check out and
- do npm install
- start a simple webser e.g. Python: python -m SimpleHTTPServer 8000
- go to http://localhost:8000/src/index.html

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
- component-registry: it gives page specific component configuration @deprecated
- format: placeholder formatting support
- global: define global module as this in global scope
- i18n: message-source aware localisation utility
- leave: detect page shutdown and stop re-rendering, interface over logic in app.js
- message-source: ajax based json loading of translations
- module: amd module loader which also works with browserify-s packages
- request: ajax made easy
- state: ajax based state manager which will rerender the page if change happens
- timer: state based counter based on setInterval
- dependencies: interface over virtual-dom, xss and html2hscript packaged via browserify

