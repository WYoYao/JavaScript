var oTab=document.getElementById("tab");
//获取theah
var tHead=oTab.tHead;
//获取表头的所有列
var oThs=tHead.rows[0].cells;
var tBody=oTab.tBodies[0];
var oRows=tBody.rows;
//用于保存过去到的数据
var data=null;

//添加一个标识 用于反选排序
for (var i = 0; i < oThs.length; i++) {
  var cur=oThs[i];
  //如果在这个地方直接声明一个index 声明保存的时候 下一次循环的时候就会被重新的赋值
  // var index=i;
  //如果用一个变量保存的时候，由于下面这个变量的类型附加方法，所以变量不会一直不会得到释放，所有每次获取的时候都是对应的值
  // cur.index=i;
  if(cur.className==='cursor'){
    cur.index=i;
    cur.flag=-1;
    cur.onclick=function(){
      sort.call(this,this.index);
    }
  }
}

//1获取JSON格式的数据
var xml=new XMLHttpRequest();
xml.open("get","./person.json",true);

xml.onreadystatechange=function(){
    if(xml.readyState==4 && /^2\d{2}$/.test(xml.status)){
        data=JSON.parse(xml.responseText);
        bind();
        changeBg();
        //32 -22
    }
}

xml.send(null);


//2实现数据绑定
function  bind(){
  var frg=document.createDocumentFragment();
  for (var i = 0; i < data.length; i++) {

    var cur=data[i];
    //每次循环创建一个tr
    var oTr=document.createElement("tr");
    //每个tr中需要创建td

    for (var key in cur) {
      var oTd=document.createElement('td');
      oTd.innerHTML=cur[key];
      oTr.appendChild(oTd);
    }

    frg.appendChild(oTr);
  }

  tBody.appendChild(frg);
  frg=null;
}

function changeBg(){
    for (var i = 0; i < oRows.length; i++) {
      oRows[i].className=i%2===1?'bg':null;
    }
}



function sort(Num){
  this.flag*=-1;
  var _this=this;
  //把存储所有放的类数组转换为数组
  var arr=Array.prototype.slice.call(oRows);
  //给数组进行排序
  arr.sort(function(a,b){
    return (parseFloat(a.cells[Num].innerHTML)-parseFloat(b.cells[Num].innerHTML))*_this.flag;
  })
  //按照arr中的最新的顺序把所有的内容重新添加到页面上面
  var frg=document.createDocumentFragment();
  for (var i = 0; i < arr.length; i++) {
    var cur=arr[i];
    frg.appendChild(cur);
  }
  tBody.appendChild(frg);
  frg=null;
    changeBg();
}




































//
