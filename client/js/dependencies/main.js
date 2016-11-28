var virtualDom = require('virtual-dom');
var xss = require('xss');

/* compile the bundle:
 * browserify dependencies\main.js --standalone deps -o dependencies\deps.js
 * uglifyjs dependencies\deps.js --compress --mangle -o dependencies\deps.min.js */
module.exports = {
    xss: xss,
    h: virtualDom.h,
    create: virtualDom.create,
    diff: virtualDom.diff,
    patch: virtualDom.patch
};
