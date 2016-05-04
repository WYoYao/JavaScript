;(function(){
  var str='2016-05-04 21:37:00';
  var reg=/^(\d{4})[-/](\d{1,2})[-/](\d{1,2}) +(\d{2}):(\d{2}):(\d{2})$/g;
  var ary=[];

  var resstr='{0}年{1}月{2}日{3}时{4}分{5}秒';
  var regstr=/{(\d+)}/g;
  str.replace(reg,function(){
    ary=[].slice.call(arguments,1,7);
    return arguments[0];
  })
  var resstr='{0}年{1}月{2}日{3}时{4}分{5}秒';
  var regstr=/{(\d+)}/g;
  resstr= resstr.replace(regstr,function () {
      return ary[arguments[1]];
  })
  console.log(resstr);
})();
