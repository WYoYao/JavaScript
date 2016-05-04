/*
  分组的作用：
  1.改变优先级
  2.分组引用
*/


;(function(){
    return;
    //\2 代表和第二个分组出现一摸一样的内容   \1代表和第一个分组出现一摸一样的内容(/Number 分组引用)
    //不仅是规则一样，是分组里面的值也一摸一样
    var res=/^(\w)\1(\w)\2$/;
    console.log(res.test('llee'));
    console.log(res.test('lyee'));
})();
;(function(){
    //分组捕获，不仅将大正则匹配到，还将()中的小正则捕获到
    var reg=/^(\d{2})(\d{4})(\d{4})(\d{2})(\d{2})(\d{2})(\d)(\d|x)$/;
    var str='420683199310200319';
    /*
    ["420683199310200319", "42", "0683", "1993", "10", "20",
    "03", "1", "9", index: 0, input: "420683199310200319"]
    */

    /*
    返回数组的第一个内容 是整个大正则匹配到的内容
    后续返回值是，每个分组中捕获的内容
    不仅仅将整个大正则捕获到了，还可以将整个小分组捕获到了
    */

    //有些内容是不用
    console.log(reg.exec(str));
    console.log(str.match(reg));

})();



;(function(){
    //?:的意思是只匹配不捕获
    var reg=/^(?:\d{2})(?:\d{4})(\d{4})(\d{2})(\d{2})(?:\d{2})(?:\d)(?:\d|x)$/;
    var str='420683199310200319';

    //有些内容是不用
    console.log(reg.exec(str));
    console.log(str.match(reg));

})();
