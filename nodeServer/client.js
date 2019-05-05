let http = require('https');
let util = require('util');
let httpget = http.get('https://www.imooc.com/index/getstarlist',function(res){
	let data = '';
	res.on('data',function(chunk){
		data +=chunk;
	});
	res.on('end',function(){
		result = JSON.parse(data);
		console.log("result:"+util.inspect(result))
		console.log('result.data:'+result.data)
		console.log('result.msg:'+result.msg)
	})
})
