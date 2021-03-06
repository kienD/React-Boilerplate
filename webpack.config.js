var path = require('path');

config = {
	entry: './src/js/main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: [
						'es2015',
						'react'
					]
				}
			},
			{
				test: /\.(sass|scss)$/,
				loader: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	}
};

// add eslint as linter at some point 

module.exports = config;