


;(function(){
    return;
    var obj={
        name:'leo',
        age:'12'
    };
    obj.__proto__.bb=123;

    for (var item in obj){
        //遍历私有的   忽略原型上面的方法
        if(obj.propertyIsEnumerable(item))
            console.log(item);
    }

})();


;(function(){
    return;
    var obj={
        name:'leo',
        age:'12'
    };

    //以obj 为原型创建一个对象
    //会在中间添加一层原型
    var obj1=Object.create(obj);
    console.log(obj1.__proto__==obj);
})();


;(function(){
    return;
    //return  模拟Object.create()
    function object(o){
        function Fn(){

        };
        Fn.prototype=o;
        Fn.prototype.constructor=Fn;
        //返回新的实例，不污染父级
        return new Fn();
    }

    var obj={
        name:'leo',
        age:'12'
    };
    //以obj 为原型创建一个对象
    //会在中间添加一层原型
    var obj1={

    }
    obj1.prototype=object(obj);
    console.log(obj1.name);
    console.log(obj1.__proto__==obj);
})();

;(function(){
    /*
    * 原型继承是我们JS中最常用的一种继承方式
    * 子类B 想要继承A类中的所有属性和方法(私有+公有)
    * 只需要让B.prototype=new A(); 即可
    *
    * 并不是将A的prototype 属性克隆给B,只是在B和A之间添加了原型的连接
    * */
})();

;(function(){
    //使用call 基层
    function A(){
        this.x=100;
    }
    A.prototype.say=function(){
        console.log(this.x);
    }
    function B(){
        //让A执行让A中的this指为B
        A.call(this);
    }

    var b=new B();
    console.log(b);//私有的会继承
    b.say();//公有的不会基层
})();

/*
* JS 中有封装，继承，重写（没有多态）
*   基层通过原型链来进行调用
*   重写子类重写父类的方法，作用域链会优先查找私有的方法
*
* */