'use strict';

// should print something to console.log
require('../dist/MyLibrary/alpha/a/one'); 


var b = require('../dist/MyLibrary/alpha/b');
b('hello world (via MyLibrary/alpha/b)');  // should print 'hello world via MyLibrary/alpha/b' to the console
