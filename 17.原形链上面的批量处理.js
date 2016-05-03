
function Person(){

}

//别名添加
var pro=Person.prototype;
pro.add=function(){

}

//直接替换掉原来的原形，原来的原形将要被销毁
/*
* 这种写法直接替换原有的原形，会出现一个问题，自己新创建的原形里面的construct 的指向直接指向Object
* 需要手动添加一个constructor
* 上面的方法只能适用于自己创建的类，如果修改内置类的时候会被屏蔽掉
* 但是我们可以单个的修改内置类原型中的方法，所以为了避免修改内置类中的方法，我们需要给自己添加的内置类添加特殊的标识
*
* */
//用这种方法修改内置类的时候浏览器是给屏蔽掉的
//给内置添加的内置方法的时候都需要添加特殊的标识
Person.prototype={
    constructor:Person,
    //Code
}
