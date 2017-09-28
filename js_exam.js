/**
 *
 * Question 1 
 *
 */

// 原数据如下
var traces = [
  { place : '天河' , name : '张三' , time : '2009/07/15 10:30:20' } ,
  { place : '越秀' , name : '李四' , time : '2009/07/13 10:30:20' } ,
  { place : '黄村' , name : '王五' , time : '2009/07/12 10:30:20' } 
];

// TODO 请在此处实现完成下方法调用需要的代码
// your code here ...


// 注意是实现数组方法，不是函数,依 time 字段进行排序
traces.sortBy('time');  

traces;

// 此时应为按 time 字段从小到大排序的如下结构
// [
//  { place : '黄村' , name : '王五' , time : '2009/07/12 10:30:20' } ,
//  { place : '越秀' , name : '李四' , time : '2009/07/13 10:30:20' } ,
//  { place : '天河' , name : '张三' , time : '2009/07/15 10:30:20' } 
// ]


/**
 *
 * Question 2
 *
 */
 
let a = 1;

let o = { 
  a : 2 , 
  b : ()=> {
    
    console.log(this.a);
    
    return function(){ 
      console.log(this.a);
    } 
    
  }
}

o.b(); 
// TODO 的输出, 请在这里写出 o.b() 的输出

o.b = o.b();
o.b(); 
// TODO 的输出, 请在这里写出 o.b() 的输出

let c = o.b;
let k = {
  a : 10
}
// TODO 在这里写出如何让 c() 输出 10 的方法;


/**
 *
 * Question 3
 *
 */
 
function foo(){
  this.foo && this.foo = 'bar';
};

console.log( foo() , foo );
// TODO 在这里写出输出结果;

--------------------------------

var foo = function (){
  console.log(foo);
  this.foo || ( this.foo = 'bar' );
  console.log(this.foo);
}();
// TODO 在这里写出输出结果;

--------------------------------

var foo = function foo(){
  console.log(foo);
  this.foo || ( this.foo = 'bar' );
  console.log( this.foo );
}();

console.log(foo);
// TODO 在这里写出输出结果;



/**
 *
 * Question 4
 *
 */
 
 var a = 1;

function foo(call){
	"use strict";
	
	function bass() {
		console.log(a);
	}
	
	var a = 2;

	function fuzz(){
		console.log(this.a);
	}

	return {
		bass: bass ,
		fuzz: fuzz ,
		call: call 
	}
	
	function a(){};
}

function call() {
	console.log(a);
}

var o = foo(call);
o.a = 3;

o.bass();
o.fuzz();
o.call();
// TODO 请写出上面三个调用的输出结果

var fuzz = o.fuzz;
fuzz(); 
// TODO 请写出上面调用的输出结果

var cb = o.call;
cb(); 
// TODO 请写出上面调用的输出结果
