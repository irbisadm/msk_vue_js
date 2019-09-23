module.exports = {
  title: 'MSK VUE.JS',
  description: 'Сообщество неравнодушных к технологии Vue.js разработчиков',
  themeConfig: {
    search: false,
    navbar: false
  },
  head: [
    ["link", {rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png"}],
    ["link", {rel: "apple-touch-icon", sizes: "32x32", href: "/favicon-32x32.png"}],
    ["link", {rel: "apple-touch-icon", sizes: "16x16", href: "/favicon-16x16.png"}],
    ["link", {rel: "apple-touch-icon", href: "/site.webmanifest"}],
    ["link", {rel: "apple-touch-icon", color: "#00BE8E", href: "/safari-pinned-tab.svg"}],
    ["meta", {name: "msapplication-TileColor", content: "#00BE8E"}],
    ["meta", {name: "theme-color", content: "#00BE8E"}],
    ["meta", {name: "google-site-verification", content: "3QwH-N-T2aPgSMIDwt6DlCaDUo1um65TLTR6EQ9D7-w"}]
  ],
  configureWebpack: {
    resolve: {
      extensions: ['.ts', '.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                babelrc: false,
                configFile: false,
                presets: [
                  '@vue/babel-preset-jsx'
                ],
              },
            },
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
                appendTsxSuffixTo: [/\.vue$/],
              },
            },
          ],
        },
      ],
    },
  },
  postcss: {plugins: [require('postcss-mixins'), require('postcss-nested'), require('autoprefixer')]}
};