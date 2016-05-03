
//;(function(){})();

;(function(){
  var obj={name:'leo'};
  function fn(num1,num2){
      console.log(num1,num2);
      console.log(this);
  }
  //严格模式，接下来的js代码将通过严格模式开始编写
  'use strict'
  //非严格模式下都是这样
  fn(100,200);//==>300 window

  fn.call(100,200);//NaN window
  //在严格模式下this 是null 和undefined   非严格模式下都是window
  fn.call(null)//window
  fn.call(undefined)//window

  /*
  共同点：
  apply和call的方法都是一样的，都是通过改变this的关键字 把方法执行，
  严格模式下，和非严格模式this 的效果都是相同的
  不同点：
  call  传递参数的时候是 value,value,value 一个一个传递
  apply 传递参数的时候通过把参数全部放到一个数组中进行传递(也是相当于一个一个传递，只不过是统一放到一个参数中)
  */

  /*
  bind:方法与call和apply方法是相同的
  */
  //只是将fn中的this改变成为obj,并且将形参传入到方法中，同时会返回一个值，这个返回值，就是改变this 和形参赋值后的方法
  var tempFn = fn.bind(obj,1,2);
  //bind 实现了JS中的预处理的思想，实现改变成为我们想要结果，并且把对应的参数的值也准备好，以后要用到的时候，直接调用执行即可。
  tempFn();



})();
