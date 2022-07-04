const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const { DefinePlugin } = require("webpack");

// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

// // common function to get style loaders
// const getStyleLoaders = (cssOptions, preProcessor) => {
//   const loaders = [
//     require.resolve("style-loader"),
//     {
//       loader: require.resolve("css-loader"),
//       options: cssOptions,
//     },
//     {
//       // Options for PostCSS as we reference these options twice
//       // Adds vendor prefixing based on your specified browser support in
//       // package.json
//       loader: require.resolve("postcss-loader"),
//       options: {
//         // Necessary for external CSS imports to work
//         // https://github.com/facebook/create-react-app/issues/2677
//         ident: "postcss",
//         plugins: () => [
//           require("postcss-flexbugs-fixes"),
//           require("postcss-preset-env")({
//             autoprefixer: {
//               flexbox: "no-2009",
//             },
//             stage: 3,
//           }),
//         ],
//       },
//     },
//     // {
//     //   loader: "resolve-url-loader",
//     //   options: {
//     //     sourceMap: true,
//     //     debug: true,
//     //   },
//     // },
//   ];
//   // if (preProcessor) {
//   //   loaders.push(require.resolve(preProcessor));
//   // }
//   if (preProcessor) {
//     loaders.push({
//       loader: require.resolve(preProcessor),
//       options: cssOptions,
//     });
//   }
//   return loaders;
// };

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    modules: [path.join(__dirname, "./"), "node_modules"],
    alias: {
      components: path.resolve(__dirname, "./src/components/"),
    },
  },
  module: {
    strictExportPresence: true,
    // include: path.appSrc,
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "esbuild-loader",
          options: {
            loader: "jsx",
            target: "es2015",
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: "esbuild-loader",
          options: {
            loader: "tsx",
            target: "es2015",
          },
        },
        exclude: /node_modules/,
      },
      // {
      //   test: cssRegex,
      //   exclude: cssModuleRegex,
      //   use: getStyleLoaders({
      //     importLoaders: 1,
      //   }),
      // },
      // // Adds support for CSS Modules (https://github.com/css-modules/css-modules)
      // // using the extension .module.css
      // {
      //   test: cssModuleRegex,
      //   use: getStyleLoaders({
      //     importLoaders: 1,
      //     modules: true,
      //     // getLocalIdent: getCSSModuleLocalIdent,
      //   }),
      // },
      //  {
      //   test: sassRegex,
      //   exclude: sassModuleRegex,
      //   use: getStyleLoaders({ importLoaders: 2 }, 'sass-loader'),
      // },
      // // Adds support for CSS Modules, but using SASS
      // // using the extension .module.scss or .module.sass
      // {
      //   test: sassModuleRegex,
      //   use: getStyleLoaders(
      //     {
      //       importLoaders: 2,
      //       modules: true,
      //       // getLocalIdent: getCSSModuleLocalIdent,
      //     },
      //     'sass-loader'
      //   ),
      // },
      // {
      //   test: lessRegex,
      //   exclude: lessModuleRegex,
      //   use: getStyleLoaders({ importLoaders: 2 }, "less-loader"),
      // },
      // // Adds support for CSS Modules, but using SASS
      // // using the extension .module.scss or .module.sass
      // {
      //   test: lessModuleRegex,
      //   use: getStyleLoaders(
      //     {
      //       importLoaders: 2,
      //       modules: true,
      //       // getLocalIdent: getCSSModuleLocalIdent,
      //     },
      //     "less-loader"
      //   ),
      // },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.less$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          {
            loader: "resolve-url-loader",
            options: {
              sourceMap: true,
              debug: true,
            },
          },
          // Compiles Sass to CSS
          {
            loader: "less-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        resourceQuery: { not: [/raw/] },
        use: [
          "babel-loader",
          {
            loader: "react-svg-loader",
            options: {
              svgo: {
                plugins: [{ removeTitle: false }, { cleanupIDs: false }],
                floatPrecision: 2,
              },
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      titel: "react-jsonschema-form-demo",
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
};
