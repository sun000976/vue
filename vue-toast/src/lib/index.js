import ToastComponet from './vue-toast.vue'

let Toast = {};
Toast.install = function(Vue,options){
	
	const opt = {
		duration:3000
	};
	
	for (var key in options) {
		opt[key] = options[key]
	};
	
	Vue.prototype.$toast = function(message,option){
		
		if (typeof option == 'object') {
			for (var key in option) {
				opt[key] = option[key]
			}
		};
		
		//  Vue.extend继承/寄存
		var ToastContorller = Vue.extend(ToastComponet)
		//  new一个实例  用来挂载到创建的div中
		var instance = new ToastContorller().$mount(document.createElement('div'))
		//  给message穿一个值
		instance.message = message;
		//  显示/隐藏    默认显示
		instance.visible = true;
		// 隔几秒隐藏  默认时间3秒  要移除这个对象 
		setTimeout(()=>{
			instance.visible = false;
			document.body.removeChild(instance.#el);
		},opt.duration)
	};
	Vue.prototype.$toast['show'] = function (message,option){
		Vue.prototype.$toast(message,option)
	};
	
	Vue.prototype.$toast['success'] = function (message,option){
		Vue.prototype.$toast(message,option)
	};
	
	Vue.prototype.$toast['info'] = function (message,option){
		Vue.prototype.$toast(message,option)
	};
	
	Vue.prototype.$toast['error'] = function (message,option){
		Vue.prototype.$toast(message,option)
	};
};

export default Toast;
