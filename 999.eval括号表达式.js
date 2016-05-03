//;(function(){})();
;(function(){
  var fn1=function (argument) {
    console.log(this);
  }
  var fn2=function (argument) {
    console.log(this);
  }
  var obj={name:'leo',fn:fn1};
  (fn1,obj.fn)();
  //eval 只会执行第一个
  eval(12,231,123,123,2123,123)
  //()会执行最后一个
  (12,231,123,123,2123,123)

})();

//28
