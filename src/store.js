//const是ES6里定义常量 和var差不多
const STORAGE_KEY = 'todos-vuejs'
//export导出
export default{
	//fetch()是E6的写法，相当于fetch:function()
	fetch () {
		return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
	},
	save (items){
		window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
	}
}