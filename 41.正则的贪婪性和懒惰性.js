/*
解决正则的懒惰性是通过加全局修饰符g 解决
原理：通过每次正则每次捕捉结束后，我们的lastIndex值都变为了最新的值，下一次捕获从最新的
位置进行查找，这样就可以完全捕获到全部的内容了
*/

/*
解决正则的贪婪性，通过在量词元字符后面添加？ 来取消正则的贪婪性
*/

;(function() {
  return;
  var reg=/\d+/;
  var str='leo2016test666';
  /*
  [捕获的第一个值,index捕获的第一个索引，input:捕获的容器]
  */
  //["2016", index: 3, input: "leo2016test666"]  捕获的是一个数组
  console.log(reg.exec(str));
  /*
  正则的懒惰性，默认情况下，每次只会获取第一个匹配的参数，在不进行特殊操作的时候，接下
  来执行也还是只捕获第一个内容
  */

})();

;(function(){
  return;
  console.dir(/\d+/);
  /*
  lastIndex:正则每次查找的时候开始的位置

  */
  //每次捕获完成的时候lastIndex的值都是0所以每次捕获都会从新开始
  var reg=/\d+/;
  console.log(reg.lastIndex); //0
  var str='leo2016test666';
  reg.exec(str);
  console.log(reg.lastIndex); //0

  /*
  正则中的修饰符gim
  global(g):全局匹配
  ignoreCase(i):忽略大小写匹配
  multiline(m):多行匹配
  */
  //解决正则的懒惰像

})();

;(function(){
  return;
  //添加完全局修饰符之后lastIndex的值开始修改 每次都会保存
  var reg=/\d+/g;
  var str='leo2016test666test777';
  console.log('未捕获之前的lastIndex的值',reg.lastIndex);//0
  console.log(  reg.exec(str),reg.lastIndex);//["2016", index: 3, input: "leo2016test666test777"] 7
  console.log(  reg.exec(str),reg.lastIndex);//["666", index: 11, input: "leo2016test666test777"] 14
  console.log(  reg.exec(str),reg.lastIndex);//["777", index: 18, input: "leo2016test666test777"] 21
  //当lastIndex
  console.log(  reg.exec(str),reg.lastIndex);//null 0

})();

;(function(){
  return;
  //实现全部捕获的方法   最重要的一点 需要g全局修饰符
  var reg=/\d+/g;
  var str='leo2016test666test777';
  var arr=[];
  var res=reg.exec(str);
  while (res) {
    arr.push(res[0]);
    res=reg.exec(str);
  }
  console.log(arr);
})();



;(function(){
  return;
  //该正则的意思，匹配一个到多个的数字
  var reg=/\d+/g;
  var str='leo2016test666test777';
  /*
  因为正则的贪婪性，所以每次，正则匹配的时候都会匹配最多的符合正则要求的数据
  所以能够匹配到2016
  */
  console.log(reg.exec(str));
})();


;(function(){
  return;
  //解决贪婪性的办法 想每次获取到一个数字   在量词元字符后面每个添加一个？
  /*
  ?号在正则中的作用
  1.放在一个普通的元字符后面，表示出现0到1次
  2.放在量词的元字符后面的时候,表示取消捕获时候的贪婪性
  */
  var reg=/\d+?/g;
  var str='leo2016test666test777';
  console.log(reg.exec(str));
})();

;(function(){
  return;
  var reg=/\d+?/g;
  var str='leo2016test666test777';
  //获取到所有的匹配的正则
  /*
  match 是字符串的方法
  reg   是正则表达式的方法
  */
  console.log(str.match(reg));
  /*
  match 在当前的情况当中比exec好用，但是正则中存在（）分组捕获的时候下，match只能
  捕获到大正则中匹配的数据，不能够匹配到分组中的数据
  */

// })();






























//
