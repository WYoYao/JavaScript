
var reg=/\d+/;
var res=reg.exec('123leo131');

var res=reg.exec('leo');
//正则每次捕获的时候都会返回一个数组， 第一个属性的是捕获的内容，index的值为第一个捕获的内容的索引 ，input，为捕获的对象
//var res=reg.exec('leo');
//当未捕获到相关内容的时候返回null
//console.log(res);   //=>[ '123', index: 0, input: '123leo131' ]


//正则是有懒惰性的，只会匹配到一个捕获的内容，后面就不会继续捕获了
//加了全局作用修饰符g 之后，每次正则捕获结束后，我们的lastIndex的值都变成的最新的值，下一次的捕获都从新的值开始查找
var reg=/\d+/g;
//不加全局修饰符g的时候lastIndex是不会执行的
//lastIndex 为最早开始匹配的索引
//console.log(reg.lastIndex);
//console.log(reg.exec('123ejjfi321'));
//console.log(reg.lastIndex);
//console.log(reg.exec('123ejjfi321'));
//console.log(reg.lastIndex);
//console.log(reg.exec('123ejjfi321'));

//正则的每一次捕获都是具有贪婪性的，都会捕获最长的匹配的对象
//function fn(){
//    var arr=new Array();
//    var reg=/\d+/g;
//    var last=null;
//    do {
//        var last=reg.exec('s234gu234u2gu42ut3f4ut2f34tf23u4fu2f342f34y2f34tf2y3f4y2');
//        if(last)
//            arr.push(last);
//    }
//    while (last)
//    return arr;
//};
//console.log(fn());

// "?"号放在一个量词的后面会取消捕获时候的贪婪性
//var reg=/\d+?/g;
//会有贪婪性，会截取对打的
//console.log(reg.exec('123ejjfi321'));

var reg=/\d+/g;
//match 比exec更加好用，但是在正则中见含有() 分组的时候，就不能匹配到 分组中的数据
var str="123soerh234srgo342dt";
console.log(str.match(reg));


