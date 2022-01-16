const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')

const SRC_DIR = path.resolve(__dirname, './src')
const ASSETS_DIR = path.resolve(__dirname, './src/assets')
const MAIN_ENTRY_PATH = path.join(__dirname, './src/index.tsx')
const BUILD_DIR = path.resolve(__dirname, 'build')

const common = {
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js($|\?)/i,
        exclude: [/\.html$/, /\.s?css$/, /node_modules\//],
      }),
    ],
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src")
    },
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(ASSETS_DIR, 'images'),
          to: path.join(BUILD_DIR, 'images'),
        },
      ],
    }),
    new htmlWebpackPlugin({
      template: path.join(SRC_DIR, 'index.html'),
      favicon: path.join(ASSETS_DIR, 'images/favicon.svg'),
    }),
  ],
  // externalsPresets: { node: true },
  // externals: [
  //   nodeExternals(),
  // ],
}

const main = {
  entry: MAIN_ENTRY_PATH,

  output: {
    filename: 'index.js',
    path: BUILD_DIR,
    publicPath:'/'
  },
  devServer: {
    historyApiFallback: true,
  },
  ...common,
}

module.exports = [main]
