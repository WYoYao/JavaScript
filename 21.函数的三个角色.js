
//function Fn(){
//
//}
//
//console.dir(Fn);
//length 函数参数的长度
//__proto__ 当作Function 普通对象实例的使用
//prototype     类的原型，原型上面定义的方法都是这个类实例的公有方法

/*
* 函数的多面性
* 1.方法。他本身就是一个普通的函数，执行的时候形成私有的作用域（闭包） 形参赋值，预解释，代码执行，执行完之后栈内存的销毁。
* 2.类。他可以有自己的实例，同时又一个prototype的属性是自己的原型，他的实例都指向自己的原型
* 3.普通对象。他本是也是和 var obj={} 中的obj 一样，也就是一个普通的对象，他可以调用自己作为对象的一些私有属性，也可以通过__proto__找到Function.prototype
* 4.三者没有联系
*  */

function Fn(){
    var num=100;
    this.x='x';
}

Fn.aaa=1000;

var f=new Fn();

var res=Fn();//中的this 是window

console.log(f.num, f.aaa, f.x);
//undefined undefined 'x'