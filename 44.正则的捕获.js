

/*
  正则
  贪婪性：在量词后面添加？ 取消正则捕获的贪婪性
  ？: 在匹配的过程中只匹配不捕获
  懒惰性：取消正则的懒惰性，通过添加全局修饰符g
*/

;(function(){
  return;
  //默认的lastIndex的值都是0；为了取消正则的懒惰性，可以使用
  //全局修饰符g  原理每次匹配之后都想lastIndex值修改为当前匹配的
  //的索引位置，可以取消捕获时候的懒惰性(这个属性代表下一次正则捕获的时候开始的所引，但是这个值默认的永远都是0)
  //不管执行几次都是从头开始捕获，所以正则时候懒惰性的
  var reg=/\d+?/;
  var str="leo2015zhanwang2016";
  console.log(reg.lastIndex);
  var ary=reg.exec(str);
  console.log(ary);

})();


;(function(){
  return;
  var reg=/\d+?/g;
  var str="leo2015zhanwang2016";
  var res=reg.exec(str);
  var arr=[];
  while (res) {
      arr.push(res[0]);
      res=reg.exec(str);
  }
  console.log(arr);

})();

;(function(){
  //match  不能捕获到分组中的
  //将符合大正则的全部方法数组中，当需要分组中的小正则.match是捕获不到的
  var ary='leo2015hanwang2016'.match(/\d+?/g);

  console.log(ary);
})();

;(function(){
    String.prototype.myMatch=function(arg){
      var result=[];
      var res=arg.exec(this);
      while (res) {
          result.push(res[0]);
          res=arg.exec(this);
      }
    }
})();

;(function(){
  /*
  分组的作用，在正则捕获的时候，添加的分组不仅仅可以将大正则匹配到的内容捕获
  还可以将子分组中的正则匹配出来
  */

  //替换模版的原理 其实就是怎么简单
  var reg=/{(\d+)}/g;
  var str='my name is {0},my age is {1}';
  var arr=['leo','23'];
    str=str.replace(reg, function(){
      return arr[arguments[1]];
    });
  console.log(str);
})();


//
