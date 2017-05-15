const webpack = require('webpack');
const path = require('path');

const config = {
	
	entry: [

		'./app/main.jsx',

		// activate HMR for React
		// 'react-hot-loader/patch',

	],

	output: {
		path: path.resolve(__dirname, 'app/dist'),
		publicPath: '/assets/',
		filename: 'bundle.js'
	},

	devServer: {
		hot: true,
		contentBase: path.resolve(__dirname, 'app'),
		publicPath: '/assets/',
	},



	module: {

		rules: [
			{
				test: /.(js|jsx)$/,
				use: [
					'babel-loader'
				],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					'style-loader/url',
					'file-loader'
					// 'css-loader?modules',
					// 'postcss-loader',
				],
			}
		]

	},

	plugins: [
	    new webpack.HotModuleReplacementPlugin(),
	    // enable HMR globally

	    // new webpack.NamedModulesPlugin(),
	    // prints more readable module names in the browser console on HMR updates
  	],

}

module.exports = config;