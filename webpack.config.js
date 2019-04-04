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
	devServer: {
		proxy: {
			'/v2/**': {
				target: 'http://pokeapi.co/api/',
				secure: false,
				changeOrigin: true
			}
		},
		historyApiFallback: true,
		contentBase: './',
	},
	resolve: {
		root: __dirname,
	},
	watch: true,
	devtool: 'eval',
};
