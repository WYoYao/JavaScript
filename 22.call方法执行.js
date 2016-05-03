
//;(function(){})();

;(function(){

  return;
  //Function 类的原型上面也有方法
  // Function.prototype.call=function(){
  //
  // }
  //call 方法是用来改变方法中的关键字
  function fn(argument) {
    console.log(this);
  }
  //这个时候执行的this是window
  fn();
  var obj={name:'这是测试的时候用的'};
  //obj.fn();//报错 obj不能执行fn上面的方法

  /*
  1.首先让原型上面的call方法执行,把原来方法中的this 改变成为call 方法传入的参数
  2.然后让原来的方法执行
  */
  fn.call(obj);

})();

;(function(){
  //原理    自己模拟出call方法的执行大致原理
  Function.prototype.myCall=function(content) {
    //1.让fn中的值转变成content中的值
    /*
      myCall 方法中的this就是当前我要操作和改变的方法，就是调用myCall的函数(谁执行的myCall的方法，this就是谁)；
      首先需要改变this这个方法中的this,将其改变为content
      方法还没执行的时候都是保存的堆中的代码字符串
    */
    //将整个方法的this 替换成为content
    var that= eval(this.toString().replace(/this/,'obj'));
    //2.让fn方法执行
  }

})();

;(function(){
  function fn1(){
    console.log(1);
  }
  function fn2() {
    console.log(2);
  }
  /*
  fn1通过原形链的机制，首先找到Function.prototype.call方法执行，让fn1中的this关键
  字，变为fn2
  然后再让fn1 这个方法执行 ==》打印出1
  */
  fn1.call(fn2);//==>1
  /*
  1.首先fn1.通过prototype找到call方法
  2.因为call方法本是也是Function的一个实例，所以也可以调用call方法
  3.fn1.prototype.call.prototype.call执行，将fn1.prototype.call中的this替换成fn2
  4.然后fn1.prototype.call 中的this指向fn2,(原本fn1.prototype.call中的this指向的
  是fn1的方法代码块的地址，这个时候this指向修改成为了fn2的地址，然后执行fn1的时候，
  因为this的指向已经修改为fn2了，所以执行的结果是2)；
  */
  fn1.call.call(fn2);//==>2
  /*
  1.fn1.prototype.call.prototype.call.prototype.call执行 将fn1.prototype.call.prototype中的this指向fn2
  2.fn1.prototype.call.prototype.call               执行将fn1.prototype中的this                指向fn2
  3.fn1.prototype中  的this执行                     但是这个时候的this指向已经指向到fn2;                
  */
  fn1.call.call.call(fn2);
})();
