//正则中的原字符

//      \：       转移转移后面字符所代表的含义
/*
*   元字符
*   1. "\"       转移转移后面字符所代表的含义
*   2. "^"       以某一个元字符开始  本身不占位置
*   3. "$"       以某一个元字符结尾
*   4. "."       除了\n意外的任意一个字符
*   5. "\n"      匹配一个换行符
*   6. "()"      分组 把一个大的正则划分成几个小的正则
*   7. "x|y"     x或者y中的一个
*   8. "[xyz]"   xyz中的任意一个
*   9. "[^xyz]"  非xyz中的任意一个
*   10."[a-z]"   a-z中的任意字符
*   11."[^a-z]"  非a-z中的任意字符
*   12."\d"      一个0-9之间的数字
*   13."\D"      除了0-9之间的任意一个数字
*   14."\b"      匹配一个便捷符
*   15."\w"      数字字母下划线中的随便一个     用中括号的表示 [(0-9)(a-z)(A-Z)(_)]  [0-9a-zA-Z_]
*   16."\s"      匹配一个空白符        空格 制表  换页符
*   17，         [] 中所有的字符都是代表本身的意思，没有特殊的含义
*
*
*
*   量词元字符
*   1. "*"       代表主线0到多次的量型元字符
*   2. "+"       至少出现一次的量型的元字符
*   3. "?"       出现0次到一次的元字符
*   4.{n}        出现N次
*   5.{n,}       出现N到多次
*   6.{n.m}      出现n到m次
*
*   修饰符
*   1.  globle(g):全局匹配
*   2.  ignoreCase(i):忽略大小写
*   3.  multiline(m):多行匹配
* */

//一个有效数字的正则表达式
/*
* +1
* 1
* 123
* -123123
* 0
* 2.12
*
* */
//有效数字的正则
var reg=/^[-+]?(\d|([1-9]\d+))(\.\d+)?$/

console.log(reg.test('-0.'));