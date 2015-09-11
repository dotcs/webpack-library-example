var path = require("path");
module.exports = {
  entry: {
    'alpha/a/one': './src/alpha/a/one',
    'alpha/a/two': './src/alpha/a/two',
    'alpha/b': './src/alpha/b',
    'beta/a': './src/beta/a',
    'beta/b': './src/beta/b'
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "MyLibrary/[name].js",
    library: ["MyLibrary", "[name]"],
    libraryTarget: "umd"
  }
}
