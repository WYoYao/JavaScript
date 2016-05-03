

/*
*查找上级作用域，只看当前作用域的定义的位置在哪个位置
* 跟在哪执行的时候没有关系的
* */
;(function(){

    var num=12;
    function fn(){
        var num=120;
        return function(){
            console.log(num);
        }
    }
    //f 的值是fn方法执行的结果返回给f  所以会先执行fn方法，这个是时候会对num进行预解释
    var f=fn();
    f();
})();