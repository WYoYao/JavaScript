
;(function(){

    function fn(){
        var i=10;
        return function (n){
            console.log(n+(++i));
        }
    }

    var f=fn();
    //执行完之后值并不进行销毁 所以i 的值可以进行保存
    f(10);//==>21
    f(20);//==>32
    //每次执行完毕后都会销毁内容 所以值不会积累
    fn()(10);//==>21
    fn()(20);//==>31

})();