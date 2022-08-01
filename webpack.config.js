const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 通过 npm 安装
const HtmlWebPackPlugin = require("html-webpack-plugin"); // 通过 npm 安装
const webpack = require("webpack");
const { DefinePlugin } = require("webpack");

// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports = {
  entry: "./src/App.tsx",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundel.[hash].js",
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    modules: [path.join(__dirname, "./"), "node_modules"],
    alias: {
      components: path.resolve("./src/components/"),
      src: path.resolve("./src"),
      "@": path.resolve("./src"),
    },
  },
  module: {
    strictExportPresence: true,
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
    new CleanWebpackPlugin(), // 清空dist文件夹
    new HtmlWebPackPlugin({
      titel: "react-jsonschema-form-demo",
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
};
