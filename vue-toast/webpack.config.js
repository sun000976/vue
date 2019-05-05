var path = require('path');
module.exports = {
	//  入口 
	entry:'./src/lib/index.js',
	//  出口
	output:{
		path:path.join(__dirname,'./dist'),
		filename:'vue-toast.js'
	},
	//  方loader加载器
	module:{
		rules:[
			{
				test:/\.vue$/,
				loader:'vue-loader'
			}
		]
	},
	//  放一些插件
	plugins:[
		
	]
}