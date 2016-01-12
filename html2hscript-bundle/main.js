var parser = require('html2hscript');
var xss = require('xss');

/* compile the bundle: browserify html2hscript-bundle\main.js --standalone main -o html2hscript-bundle.js */
module.exports = {
    convert: parser,
    xss: xss
};
