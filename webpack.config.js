const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  externals: {
    trello: "TrelloPowerUp",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        loader: "ts-loader",
      },
      {
        test: /\.html$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: "index.html",
      templateContent: `
        <!DOCTYPE html>
        <html>
          <body>
            <script src="https://p.trellocdn.com/power-up.min.js"></script>
          </body>
        </html>
      `,
    }),
  ],
};
