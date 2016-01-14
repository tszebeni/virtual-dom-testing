var hscript = require('html2hscript');

/* compile the bundle:
 * browserify dependencies\optional.js --standalone optional -o dependencies\deps.optional.js
 * uglifyjs dependencies\deps.optional.js --compress --mangle -o dependencies\deps.optional.min.js */
module.exports = {
    hscript: hscript
};
