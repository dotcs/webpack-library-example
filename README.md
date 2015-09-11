# Example Setup: Writing a library with webpack

This repository contains a sample library, that is custered into multiple files.
Each file of this library is independent of all other files, such that the 
library can be clustered into individual and independent chunks.

The sample code structure is as follows:

```
src
├── alpha
│   ├── a
│   │   ├── one.js
│   │   └── two.js
│   └── b.js
└── beta
    ├── a.js
        └── b.js
```

The complete library definition is denoted within the webpack entry files:

```javascript
module.exports = {
  entry: {
    'alpha/a/one': './src/alpha/a/one',
    'alpha/a/two': './src/alpha/a/two',
    'alpha/b': './src/alpha/b',
    'beta/a': './src/beta/a',
    'beta/b': './src/beta/b'
  },
  // ...
}
```

`webpack --config webpack.config.js` will generate a `dist` folder that 
contains the library. The demo in `demo` makes use of the library.

```shell
cd demo
webpack --config webpack.config.js
# this will generate the bundle.js
# then open index.html
```

If everything worked out, you can require each module of the library on its own.
E.g. via `require('MyLibrary/alpha/a/one)`. Please see the demo for the details.
