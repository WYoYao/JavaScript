


;(function () {
  var str="leo2015wyy216";
  str.replace(/(leo)\d+(wyy)/g,function () {
      /*
      ["leo2015wyy", "leo", "wyy", 0, "leo2015wyy216"]
      里面既有大正则捕获的内容，也有小分组捕获的内容
      */

      //获取对应的第一个分组
      console.log(RegExp.$1);
      console.log(arguments);

      //如果不写return  的时候默认然会undefined 原来的内容会被替换
      //如果不想进行替换就返回捕获的内容,(arguments[0]就是原来捕获的内容)
      return arguments[0];
  })
  console.log(str);
  //match 只能捕获到大正则中的内容，不能捕获到正则中的内容
  console.log(str.match(/(leo)\d+(wyy)/g));
})();

//转换数字的大小写
;(function(){
  var str="这个月的支出是3000";
  var arr=['零','一','二','三','四','五','六','七','八','九']
  str.replace(/\d+?/g,function () {
      return arr[arguments[0]];
  })
})();


//获取一会字符中出现最多的字符
;(function(){
  var hash={};
  'asdawrhuaohertuiahweuri'.replace(/[a-z]/gi,function () {
      if(hash[arguments[0]]){
          hash[arguments[0]]++;
      }else{
          hash[arguments[0]]=1
      }
  })
  console.log(hash);
  var max=0;
  var cur=null;
  for (item in hash) {
      if(hash[item]>max){
        max=hash[item];
        cur=item;
      }

  }
  console.log(cur);
})();

//2016-5-4 11:42:00 转换成为yyyy年mm月dd日 hh时mm分ss秒
;(function(){

  var str = '2016-5-4 11:42:00';
  var rex = /(\d+)/g;
  var reg = /(\d{4})-(\d{1:2})-(\d{1:2}) (\d{1:2}):(\d{1:2}):(\d{1:2})/g;
  str.replace(rex, function () {
    console.log(arguments);
  })

  var str='2016-5-4 11:42:00';
  var reg=/(\d{4})-(\d{1:2})/
})();

;(function(){
  var str='http://it.jsjinfo.cn/index.php?m=bug&f=browse&productid=3&browseType=assignToMe&param=0';
  var reg=/([^?=&]+)=([^?=&]+)/g;
  str.replace(reg,function(){
      console.log(arguments);
  })
})();
