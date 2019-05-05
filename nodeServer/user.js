module.exports = {
	userName:"Jack",
	sayHello:function(){
		return 'Hello';
	}
}

/*exports.userName = 'Tom';
exports.sayHello = function(){
	return 'World';
}*/



let http=require('http');
let url = require('url');
let util = require('util');

let server=http.createServer((req,res)=>{
	res.statusCode = 200;
	res.setHeader('Content-Type','text/piain','charset=utf-8');    
	res.end(util.inspect(url.parse("http://localhost:3000/index.html?a=123#tag")))
}).listen(3000,'127.0.0.1',()=>{
	console.log('服务器已经开始运行 请打开浏览器:http://127.0.0.1:3000/来访问')
})

















