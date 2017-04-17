var webpack = require('webpack');
var path = require('path');

var phaserModule = path.join(__dirname, '/node_modules/phaser-ce/')
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js')
var pixi = path.join(phaserModule, 'build/custom/pixi.js')
var p2 = path.join(phaserModule, 'build/custom/p2.js')

module.exports = {
    entry: "./entry.js",
    output: {
        path: path.join(__dirname, "/static"),
        filename: "bundle.js",
        publicPath: '/static/'
    },
    module: {
      rules: [
        { test: /\.vue$/, loader: "vue-loader" },
        { test: /\.css$/, loader: "style-loader!css-loader" },
        { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(png|jpg|gif|eot|woff2|woff|ttf|svg)$/,
          loader: 'url-loader',
          query: {
              limit: 10000,
              name: '/static/images/[name].[ext]?[hash]'
          }
        },
        { test: /pixi\.js/, use: ['expose-loader?PIXI'] },
        { test: /phaser-split\.js$/, use: ['expose-loader?Phaser'] },
        { test: /p2\.js/, use: ['expose-loader?p2'] }
      ]
    },
    resolve: {
      alias: {
        vue: 'vue/dist/vue.js',
        'phaser': phaser,
        'pixi': pixi,
        'p2': p2
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
				R: 'ramda',
				$: 'jquery',
        jQuery: 'jquery',
        Vue: 'vue',
        VueRouter: 'vue-router'
      })
    ],
};
