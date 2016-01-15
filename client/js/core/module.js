/**
 * Simple AMD module loader which loads Browserified packages as well (third party virtual dom).
 * TODO: Promise based waitFor for not yet defined modules
 */
(function (global) {
    "use strict";
    var modules = {};
    var counter = 0;

    var require = function require (id) {
        assert(id, 'id is mandatory for require');
        id = String(id);
        var scope;
        var scoped = id.match(/(.*)\/(.*)/); // LOL Boobs
        if (scoped && scoped.length > 2) {
            assert(scoped.length === 3, 'Scoped require is only supported for one level deep.');
            id = scoped[1];
            scope = scoped[2];
            if (typeof modules[id] === 'function' && modules[id].type === 'factory') {
                modules[id]();
            }
            assert(modules[id], 'Required module [' + id + '] is missing');
            assert(modules[id][scope], 'Required module [' + scope + '] is missing from [' + id + ']');
            if (typeof modules[id][scope] === 'function' && modules[id][scope].type === 'factory') {
                modules[id][scope]();
            }
            return modules[id][scope];
        }

        assert(modules[id], 'Required module [' + id + '] is missing');
        if (typeof modules[id] === 'function' && modules[id].type === 'factory') {
            modules[id]();
        }
        return modules[id];
    };

    var define = function define (id, deps, factory) {
        if (!factory) {
            factory = deps;
            deps = [];
        }
        if (!id || id.length === 0) {
            id = 'anonymous' + counter++;
        }
        id = String(id);

        assert(id, 'Id for define is mandatory');
        assert(!modules[id], 'Attempt to redefine existing module!');

        modules[id] = (function (modules, id) { return function () {
            var module = modules[id] = {};
            var exports = module.exports = {};
            var resolvedDeps = deps.map(require);
            var ret = factory.apply(global, [require, module, exports].concat(resolvedDeps));

            modules[id] = module.exports;
            if (ret && exports === module.exports && Object.keys(exports).length === Object.keys(module.exports).length) {
                modules[id] = ret;
            }
        };})(modules, id);
        modules[id].type = 'factory';
    };
    define.amd = true;

    global.require = require;
    global.define = define;

})(this);
