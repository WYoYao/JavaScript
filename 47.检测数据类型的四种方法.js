;(function(){
  //1.typeof 用来检测数据类型的运算符
  /*
  使用typeof 返回的都是一个字符串，字符串中包含返回的类型
  返回的类型分为 number string object boolean function undefind  (null 返回的也是object)
  typeof 有局限性的 不能区分数组 正则 和 对象
  */
  console.log(typeof []);
  console.log(typeof 12);
  console.log(typeof '123');

  function fn(arg){
    //赋默认的值
    if(typeof arg==='undefind'){
        arg=0;
    }
    //这种方法当传入的arg为false 的时候这个效果就不准确了
    arg=arg||0;
  }

  function cb(callback){
    //通过typeof 判断是否是方法数据类型的
    typeof callback==='function'?callback():null;
    //如果是真的话，就执行后面的方法，如果是假的话，后面就不会继续执行
    callback&&callback();
  }


  //2.instanceof 用来检测某一个实例是否属于某一个类
  console.log([] instanceof Array);//true
  console.log(/\d+/ instanceof RegExp);//true
  /*
  instanceof 的弊端
  1. 对于基础数据类型来说 字面创建出来的结果 和 实例创建出来的结果是有区别的,从严格意义上面
  来讲，通过实例创建的才是标准的数据类型的值，对于字面量创建出来的类型值不是严谨的实例，
  但是由于JS的松散性，导致了可以使用 各自原型上面提供的方法 （instanceof 不能用来检测和
  处理字面量创建出来的基本数据类型的值）
  */
  console.log(1 instanceof Number);
  console.log("" instanceof String);
  console.log(true instanceof Boolean);
  console.log(new Number(1) instanceof Number);
  console.log(new String("") instanceof String);
  console.log(new Boolean(true) instanceof Boolean);
  /*
  instanceof 是通过__proto__ 一直向上级的原型进行查找，一直找到Object为止
  */
  function fn(){};
  console.log([] instanceof Array);
  console.log([] instanceof Object);
  console.log(fn instanceof Object);

  //原型链上面有所以instanceof 就不准确了，我们可以修改原型链，这样instanceof 就不是准确的了
  function Fn(){};
  var ary=new Array();
  Fn.prototype=ary;
  var f=new Fn();
  console.log(f.__proto__===ary)

  //3.constructor 构造函数 指向检测   原理instanceof 的方法十分的相似(constructor 可以处理基
  //本数据)
  console.log([].constructor===Array);
  console.log(/\d/.constructor===RegExp);
  console.log(new Number(1).constructor===Number);
  //由于一直向上查找 所以在检测 到私有的有的时候，就不会继续向上查找，所以不会一直找到Object
  console.log(/\d/.constructor===Object);
  /*
  弊端：
  1.我们在对类实现重写的时候，可能会修改constructor 这样的话constructor 的检测也是不准确的
  */
  function Fn(){};
  var ary=new Array();
  Fn.prototype=ary;
  var f=new Fn();
  console.log(f.constructor===Array)
  //(instanceof 和 constructor)都会受修改原型的影响
  /*
  弊端：
  2。对于 null 和 undefined 他们的所属类   ，浏览器把这两个类保护起来了，不允许我们在外面访问使用
  */
  console.log(null.constructor);
  //4.Object  Object.protypeof.toStirng.call()  是所有对象数据类型的基类
  //用过call 修改toSting 方法中的this 来执行toString
  //注意这里调用的toString的方法是Object 上面的toString 的方法，
  console.log((1).toString());//执行的是Number.prototype.toString 的方法，不是执行Object 上面的toString 的方法
  //function RegExp Array Object 都有自己的toString 的方法不是同一个方法

  //Object 上面的toString 的方法不是仅仅转换成一个字符串的方法
  /*
  Object.prototype.toString 当前方法的执行的主体(this) 的详细信息
  */
  /*
  Object.prototype.toString 是目前最完善的验证数据类型的方法
  */
  var obj ={};
  console.log(obj.toString());  //Object.prototype.toString
  console.log(Object.prototype.toString.call(obj));//Object.prototype.toString
  console.log([].toString());//Array.prototype.toString
  console.log(Object.prototype.toString.call([]));//Object.prototype.toString
  console.log(Object.prototype.toString.call(undefined));//[object Undefined]
  console.log(Object.prototype.toString.call(null));//[object Null]
  

})();
