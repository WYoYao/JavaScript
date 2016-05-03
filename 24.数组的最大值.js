//;(function(){})();

;(function(){
  return;
  //通过字符串拼接的方式，来执行Math.max 来获取
  var arr=[12,32,445,234,23,5,57,58,87];
  console.log(eval('Math.max('+arr.toString()+')'));
})();


;(function(){
  //1排序获取
  var arr=[12,32,445,234,23,5,57,58,87];
  arr.sort(function(a,b) {
    return a-b;
  })
  var min=arr[0];
  var max=arr[arr.length-1];
  console.log(min,max);
})();

;(function(){
  //2通过Math.min Math.max 实现取最大和最小
  var arr=[12,32,445,234,23,5,57,58,87];
  /*
  Math.max 方法的参数只能单个单个的传递，不能把所有的参数全部放到一个数组中，进行
  取最大值和最小值
  */

  //eval 将一个字符串转换成为一个表达式执行

  console.log(Math.max(arr));//undefined;
  //可以通过apply方法将方法中需要传递的参数类型从单个转换成对应的数组
  console.log(Math.max.apply(null,arr));//445
  console.log(Math.min.apply(null,arr));//445
})();

;(function(){
  //3假设法
  /*
  假设第一个数是默认就是数组最大的数，然后依次向后比较，遇到最大的值赋值，然后重新向
  后比较。
  */
  var arr=[12,32,445,234,23,5,57,58,87];
  var max=arr[0],min=arr[0];
  for (var i = 1; i < arr.length; i++) {
    var cur=arr[i];
    max=max<cur?cur:max;
    min=min>cur?cur:min;
  }
  console.log(max,min);


})();
