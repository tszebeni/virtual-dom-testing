# virtual-dom-testing

Simple project to test the virtual dom without React by implementing a simple page.
Only dependency is the [Virtual Dom library packaged by browserify](https://github.com/Matt-Esch/virtual-dom).

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

Some core modules:
- assert: it does what it has to
- component-registry: it gives page specific component configuration
- format: placeholder formatting support
- global: define global module as this in global scope
- i18n: message-source aware localisation utility
- leave: detect page shutdown and stop re-rendering, interface over logic in app.js
- message-source: ajax based json loading of translations
- module: amd module loader which also works with browserify-s packages
- request: ajax made easy
- state: ajax based state manager
- virtual-dom: interface over virtual-dom packaged via browserify

