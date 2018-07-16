//This file isn't transpiled, so must use CommonJS and ES5

//Register babel to transpile before our tests run.
require('babel-register')();

//DIsable webpack features that Mocha doesn't understand
require.extensions['.css'] = function(){};  //consider it as empty function