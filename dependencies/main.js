var hscript = require('html2hscript');
var virtualDom = require('virtual-dom');
var xss = require('xss');

/* compile the bundle:
 * browserify dependencies\main.js --standalone main -o dependencies.js
 * uglifyjs dependencies.js -r virtualDom,h,diff,create,patch,xss,hscript -o deps.min.js */
module.exports = {
    hscript: hscript,
    xss: xss,
    h: virtualDom.h,
    create: virtualDom.create,
    diff: virtualDom.diff,
    patch: virtualDom.patch
};
