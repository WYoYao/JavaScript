

/*
* 1.在全局作用域下声明的变量是全部变量
* 2.在私有的作用域下声明的就是私有的变量  在方法中的形参或者var 过
*
* */

/*
* 如果私有作用域中没有的时候会一直向上查找一直找到window为止
* */

/*
* 保护私有变量不受外界干扰，被称之为闭包
* */

/*
* 方法的执行
* 1.如果有形参，先给形参赋值
* 2.进行私有作用域的预解释
* 3.私有的作用域代码从上到下执行
*
* 1.函数的形参和私有作用域的变量全部都是私有的变量
*
* */
;(function(){
    return;
    console.log(total);
    var total=0;
    function fn(val1,val2){
        console.log(total);
        var total=val1+val2;
        console.log(total);
    };
    fn(100,200);

})()

/*
* 不管条件成不成立都会进行预解释
* */
;(function(){
    return;
    if(false){
        var name='leo';
    }
    console.log(name);
})();

/*
*
* 预解释只会对等号左边的值进行预解释，不会对右边的进行预解释
* */
;(function(){
    return;
    fn();
    var fn=function(){
        console.log(1);
    }

    fn();
})();

//自执行函数不进行预解释，但是指定到他的时候会直接执行
;(function(){
    return;
    console.log(1);
})();

/*
* 虽然return 后面的代码不执行了，但是仍然会进行预解释
* */
;(function(){
    return;
    console.log(num);//==>undefind
    console.log(aa);//return 后面的代码不会执行
    return function (){
        var aa=12;
    }
    var num=100;
})();


;(function(){
    fn();//==>2
    fn=function(){console.log(1)};
    fn();//==>2
    var fn=2;
    fn();   //==>会报错
    fn=function(){console.log(1)};
    fn();
    fn=function(){console.log(1)};
    fn=function(){console.log(2)};
})();
