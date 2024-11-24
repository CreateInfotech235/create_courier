const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node', // Specify that we're building for Node.js
  entry: './index.ts', // Your entry point, adjust if needed
  output: {
    filename: 'bundle.js', // Output filename
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  externals: [nodeExternals()], // Exclude node_modules from the bundle
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader', // Use ts-loader to compile TypeScript
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'], // Resolve .ts and .js extensions
  },
};
