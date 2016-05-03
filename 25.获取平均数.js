;(function(){
  //通过原型上面方法实现  一直使用argument 不将其转换成为数组
  return;
  function aveFn() {
    //将参数转换成为一个有序的数组
    var resutl= Array.prototype.sort.call(arguments,function (a,b) {
      return a-b;
    });

    resutl=Array.prototype.slice.call(resutl,1,resutl.length-1);
    // Array.prototype.pop.call(resutl);
    // Array.prototype.shift.call(resutl);
    console.log(Array.prototype.join.call(resutl,'+'));
    var num= (eval(Array.prototype.join.call(resutl,'+'))/resutl.length).toFixed(2);
    return num
  }

  var arr= aveFn(1,213,12,3123,34,534,53,1,2);
  console.log(arr);
})();


;(function () {
  function aveFn() {

    //将参数转换成为一个有序的数组    然后继续执行
    var arr=[].slice.call(arguments);
    //实现排序
    arr.sort(function (a,b) {
      return a-b;
    });

    var arr= arr.slice(1,arr.length-1);

    var num= (eval(arr.join('+'))/arr.length).toFixed(2);

    return num
  }

  var arr= aveFn(1,213,12,3123,34,534,53,1,2);
  console.log(arr);
})();
