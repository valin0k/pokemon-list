const webpack            = require('webpack');
const ProgressBarPlugin  = require('progress-bar-webpack-plugin');
const path               = require('path');
// const distDir            = path.resolve('./app');

module.exports = {
	entry: [
		'./app/app.js',
	],
	output: {
		path: __dirname,
		publicPath: '/',
		filename: 'search.js',
	},
	module: {
		loaders: [{
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['react', 'es2015', 'stage-2'],
			},
		}, {
			test: /\.css$/,
			loader: 'style!css',
		}, {
			test: /\.styl$/,
			loader: 'style!css!stylus',
		},

		],
	},
/*  plugins: [
    new ProgressBarPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({
    mangle: true,
    preserveComments: false,
    output: {
      comments: false,
    },
    compress: {
      warnings: false,
    },
  }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],*/
	resolve: {
		root: __dirname,
	},
	devServer: {
		historyApiFallback: true,
		contentBase: './',
	},
	watch: true,
	devtool: 'eval',
};
