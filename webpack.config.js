const webpack            = require('webpack');
const path               = require('path');

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
		}, {
			test: /\.css$/,
			loader: 'style!css',
		}, {
			test: /\.styl$/,
			loader: 'style!css!stylus',
		},
		],
	},
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
