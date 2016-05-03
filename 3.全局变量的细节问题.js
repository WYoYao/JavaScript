
/*
*不加var 的时候不会进行预解释，会相当于给当前作用域的对象添加一个属性
*
* */


;(function(){
    var aa=3;
    num=2;
    console.log(num);
    console.log(this.num);
    console.log(this.aa);
})()

var aa=3;
num=2;
console.log(num);
console.log(this.num);
console.log(this.aa);