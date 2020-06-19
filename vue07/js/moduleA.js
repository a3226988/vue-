/* var name = "张三"
var age = 15
function showzhangsan(){
	console.log("姓名：",name,"年龄：",age);
} */
/*员工张三开发的js*/
var A = function modula(){
	var name = "张三"
	var age = 15
	function showzhangsan(){
		console.log("姓名：",name,"年龄：",age);
	} 
	return {
		myname:name,
		myage:age,
		myshow:showzhangsan
	}
}();

