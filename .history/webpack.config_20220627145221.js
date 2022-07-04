const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

// if (preProcessor) {
//   let preProcessorOptions = {
//     sourceMap: true,
//   };

//   if (preProcessor === "less-loader") {
//     preProcessorOptions = {
//       sourceMap: true,

//       //自定义主题

//       modifyVars: {
//         "primary-color": "#ff2d52", // 全局主色，
//       },

//       javascriptEnabled: true,
//     };
//   }

//   loaders.push(
//     {
//       loader: require.resolve("resolve-url-loader"),

//       options: {
//         sourceMap: isEnvProduction && shouldUseSourceMap,
//       },
//     },

//     {
//       loader: require.resolve(preProcessor),

//       options: preProcessorOptions,
//     }
//   );
// }

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: ["esbuild-loader"],
      },
      {
        test: /\.tsx?$/,
        loaders: ["babel-loader", "ts-loader"],
      },
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
        test: /\.less$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "resolve-url-loader",
            options: {
              sourceMap: true,
              debug: true,
            },
          },
        ],
      },
      {
        loader: "less-loader", // compiles Less to CSS
        options: {
          modifyVars: {
            "primary-color": "#f9c700",
            "link-color": "#1DA57A",
            "border-radius-base": "2px",
          },
          javascriptEnabled: true,
          sourceMap: true,
        },
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
          loader: ["html-loader"],
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
