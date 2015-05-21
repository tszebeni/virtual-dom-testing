(function (global) {
    var modules = {};
    var counter = 0;

    global.modules = modules;

    global.require = function require (id) {
        return modules[id];
    };

    global.define = function define (id, deps, factory) {
        if (!factory) {
            factory = deps;
            deps = [];
        }
        if (!id || id.length === 0) {
            id = "anonymous" + counter++;
        }
        modules[id] = {};
        var module = modules[id];
        var exp = module['exports'] = {};
        var resolvedDeps = deps.map(require);
        var ret = factory.apply(global, [require, module, exp].concat(resolvedDeps));

        modules[id] = module.exports;
        if (ret) {
            modules[id] = ret;
        }
    };
    global.define.amd = true;
})(this);
