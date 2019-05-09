const webpack = require('webpack');
const path = require('path');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: __dirname + '/client/src/index.jsx',
	module: {
		rules: [
			{
				include: [path.resolve(__dirname, 'client/src')],
				exclude: /node_modules/,
				loader: 'babel-loader',

				options: {
					plugins: ['syntax-dynamic-import'],

					presets: ['@babel/preset-env', '@babel/preset-react']
				},

				test: [/\.jsx$/]
			}
		]
	},

	output: {
		chunkFilename: 'bundle.js',
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'client/dist')
	},

	mode: 'development',

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	}
};
