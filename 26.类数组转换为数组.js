//;()();



;(function(){
  //此方案适用于Node 集合 和元素集合
  var ary=Array.prototype.slice.call(arguments);
  console.dir(ary);
  //但是元素的集合，这个方法在IE8以下不兼容

  /*浏览器的异常信息捕获*/
})(1,23,4);
