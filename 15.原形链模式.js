
;(function(){
    return;
    function Person(){
        var num=0;
        this.name='leo';
    }
    //基于构造函数模式的原形模式，解决了方法或属性的公有问题
    /*
    *1.每一个函数数据类型的值都天生自带一个属性prototype(原型)，并且这个属性是一个对象数据类型的值
    *2.并且prototype上面浏览器天生给他加了一个属性constructor,属性是当前函数或类本身
    *3.每个对象数据类型(普通的对象，实例，prototype)也天生自带一个属性：__proto__,__proto__是当前实例所属的原形prototype
    * */




    Person.prototype.say=function(){
        console.log(this.name);
    }

    var my=new Person;
    var you=new Person;
    console.log(my.say===you.say);

    //instanceof 相当于一直沿着（n）__proto__+ constructor 进行向上的查找    只要能找到就返回true
    console.log(my instanceof Person);
    //首先子啊私有的属性中查找，有则返回，无则通过__proto__ 一直向上查找对象的原型如果还没有再通过原型上面的__proto__向上一直查找
    my.hasOwnProperty('say');


})();

;(function(){
    var arr=[1,{name:'leo'},2,1,{name:'leo'},{name:'leo1'}];

    var obj={};

    for(var i=0;i<arr.length;i++){
        var cur=arr[i];
        if(obj[cur]==cur){
            arr[i]=arr[arr.length-1];
            arr.length--;
            i--;
            continue
        }
        obj[cur]=cur;
    }
    console.log(obj);


})();