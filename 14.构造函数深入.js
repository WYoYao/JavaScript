
;(function(){
    return;
    function fn(){
        var num=0;
        this.name='leo';
        this.say=function(){
            console.log(this.name);
        }

        //
        return 123;
        return {name:'leo'};
    }

    var m=new fn;
    var f= m.say;
    console.log(m.name);
    m.say();
})();

;(function(){
    return;
    function fn(){
        var num=0;
        this.name='leo';
        this.say=function(){
            console.log(this.name);
        }

        //如果返回的是一个基本类型的值 则不会影响返回this
        return 123;
        return {name:'leo'};
    }

    var m=new fn;
    console.log(m);

})();

;(function(){
    return;
    function fn(){
        var num=0;
        this.name='leo';
        this.say=function(){
            console.log(this.name);
        }

        //如果返回的是一个引用类型的值 则会影响返回this
        return {name:'leo'};
    }

    var m=new fn;
    console.log(m);

})();


;(function(){

    return;
    function Fn(){
        var num=0;
        this.name='leo';
        this.say=function(){
            console.log(this.name);
        }
    }

    //可以使用instanceof 来检测实例是否属于该类
    var m=new Fn();
    console.log(m instanceof Object);//true
    console.log(m instanceof Fn);//true
    console.log(m instanceof Array);//true
    //typeOf 对于检测数据类型的局限性 不能检测  Object 下的   Array   正则

})();


;(function(){
    function Fn(){
        var num=0;
        this.name='leo';
        this.say=function(){
            console.log(this.name);
        }
    }

    var m=new Fn();
    var m1=new Fn();
    //两个实例拥有各自的内存空间所以不相同
    console.log(m.say==m1.say);//fasle
    //检测一个属性是否属于一个实例对象
    //in 检测属相的时候，不能区分私有的属性和公用的属性
    console.log('say' in m);//true
    //hasOwnProperty 用来检测对象是否含有其的私有属性，只能检测私有的属性
    console.log(m.hasOwnProperty('say'));
    //检测是否是公有的属性
    ('say' in m) && m.hasOwnProperty('say');
    //isPrototypeOf 检测原形上面是否含有其属性

})();
