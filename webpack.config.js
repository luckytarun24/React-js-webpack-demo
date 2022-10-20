/* eslint-disable no-underscore-dangle */
import path, { dirname } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  entry: { bundle: path.resolve(__dirname, "./src/index.jsx") },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.s[ca]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset",
      },
    ],
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src"),
    },
    extensions: ["*", ".js", ".jsx", ".sass", ".scss"],
  },
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack App",
      template: "public/index.html",
    }),
    new ESLintPlugin(),
  ],
};
