var path = require('path');

module.exports = {
	entry:'./src/app.js',
	output:{
		path:'./static/build',
		filename:'bundle.js'
	},
	module: {
    loaders: [{
      	test: /\.(js|jsx)$/, //←Test for ".js" file, if it passes, use the loader
      	exclude: /node_modules/, //←Exclude node_modules folder
      	loader: ["babel-loader"],
      	query: {
        	presets: ["es2015", "stage-0", "react"]
      	}
     }]
  	},
	resolve:{
		root:[
			path.resolve('./src')
		]
	}
}