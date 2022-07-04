const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;
if (preProcessor) {
  let preProcessorOptions = {
    sourceMap: true,
  };

  if (preProcessor === "less-loader") {
    preProcessorOptions = {
      sourceMap: true,

      //自定义主题

      modifyVars: {
        "primary-color": "#ff2d52", // 全局主色，
      },

      javascriptEnabled: true,
    };
  }

  loaders.push(
    {
      loader: require.resolve("resolve-url-loader"),

      options: {
        sourceMap: isEnvProduction && shouldUseSourceMap,
      },
    },

    {
      loader: require.resolve(preProcessor),

      options: preProcessorOptions,
    }
  );
}
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
      {
        test: sassRegex,
        exclude: sassModuleRegex,
        use: getStyleLoaders(
          {
            importLoaders: 3,
            sourceMap: isEnvProduction && shouldUseSourceMap,
          },
          "sass-loader"
        ),
        // Don't consider CSS imports dead code even if the
        // containing package claims to have no side effects.
        // Remove this when webpack adds a warning or an error for this.
        // See https://github.com/webpack/webpack/issues/6571
        sideEffects: true,
      },
      {
        test: sassModuleRegex,
        use: getStyleLoaders(
          {
            importLoaders: 3,
            sourceMap: isEnvProduction && shouldUseSourceMap,
            modules: {
              getLocalIdent: getCSSModuleLocalIdent,
            },
          },
          "sass-loader"
        ),
      },
      // 以下这里仿照上面sass的代码，配置下less。
      {
        test: lessRegex,
        exclude: lessModuleRegex,
        use: getStyleLoaders(
          {
            importLoaders: 2,
            sourceMap: isEnvProduction && shouldUseSourceMap,
          },
          "less-loader"
        ),
        // Don't consider CSS imports dead code even if the
        // containing package claims to have no side effects.
        // Remove this when webpack adds a warning or an error for this.
        // See https://github.com/webpack/webpack/issues/6571
        sideEffects: true,
      },
      // Adds support for CSS Modules (https://github.com/css-modules/css-modules)
      // using the extension .module.css
      {
        test: lessModuleRegex,
        use: getStyleLoaders(
          {
            importLoaders: 2,
            sourceMap: isEnvProduction && shouldUseSourceMap,
            modules: true,
            getLocalIdent: getCSSModuleLocalIdent,
          },
          "less-loader"
        ),
      },
      {
        test: lessModuleRegex,
        use: getStyleLoaders(
          {
            importLoaders: 2,
            sourceMap: isEnvProduction && shouldUseSourceMap,
            modules: {
              getLocalIdent: getCSSModuleLocalIdent,
            },
          },
          "less-loader"
        ),
      },
    ],
    loaders: [
      // 增加新的loader
      {
        test: /\.tsx?$/,
        loaders: ["babel-loader", "ts-loader"],
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
