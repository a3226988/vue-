const path = require("path")

module.exports = {
	mode: "development",
	entry: './src/js/moduleB.js',
	output: {
		path: path.resolve(__dirname, 'target'),
		filename: 'index.js'
	},
	module: {
		rules: [{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.less$/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader" // translates CSS into CommonJS
				}, {
					loader: "less-loader" // compiles Less to CSS
				}]
			}
		]
	}
}
