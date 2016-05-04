;(function(){
    return;
  //在不使用正则的时候，replace 只会执行一次
   var str='leotest2015leotest2026';
   str.replace('leo','WYOleo').replace('leo','WYOleo');
   //lastIndex一直都是0；
   console.log(str.replace('leo','WYOleo').replace('leo','WYOleo'));

})();


;(function(){
    return;
  //在不使用正则的时候，replace 只会执行一次
   var str='leotest2015leotest2026';
   console.log(str.replace(/leo/g,'WYO'));


})();


;(function(){
    return;
  //在不使用正则的时候，replace 只会执行一次
   var str='leotest2015leotest2026';
   //回调函数执行多少次，取决正则捕获多少次

   //即使正则是有分组的，我们也可以获取到分组的内容
   str.replace(/leo/g,function(){
     /*
     arguments
     1.捕获的内容
     2.被捕获的Index
     3.被赛选的容器
     */

     /*
     每个arguments 和每次执行exec 的结果是相同的，相当于执行多次的exec 然后把参数返
     回到匿名方法中
     */
     console.log(arguments);
     console.log('ok');
     //返回的结果，将会替换当前大正则中被匹配到的内容
     return 'WYO';
   });


})();


;(function(){
    return;

   var str='leotest2015leotest2026';

   str.replace(/(\d+)/g,function(){
     //RegExp.$1 获取第一个分组捕获的内容 (这些方法在IE下面不兼容)；
     console.log(RegExp.$1);

     return 'WYO';
   });

})();


;(function(){
  var str='20160503';//二零一六零五零三
  var arr=['零','一','二','三','四','五','六','七','八','九'];
  var reg=/\d+?/g;
  str.replace(reg,function(){
    return arr[arguments[0]]
  });




})();
