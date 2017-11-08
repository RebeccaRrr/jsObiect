# jsObiect

Object
##构造对象的方法

 1. 声明一个对象
 2. 构造函数
例：
function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}
var person1 = new Person('Bob');
var person2 = new Person('Sarah');
 3. Object()构造函数
例：
var person1 = new Object();
person1.name = 'Chris';
person1['age'] = 38;
person1.greeting = function() {
  alert('Hi! I\'m ' + this.name + '.');
}
**create()方法**基于现有对象创建新的对象实例
例：
var person2 = Object.create(person1);


##Array()用于构建数组的内建构造器函数
例子：
var a =new Array();
var mm = new Array(1,2,3,"array")；
如果传递的是一个数字，会被认为是数组的长度
例：
var a2 = new Array(5);
a2为[undefined,undefined,undefined,undefined,undefined]
**数组方法**
var a=[3,5,1,7,'test'];
 - push()方法将新元素添加到数组末端，返回改变后的数组长度
   a.push('new')；   //返回6
   a;    //[1,3,5,7,'test'，'new']
 - pop()方法删除最后一个元素，返回被删除的元素
   a.pop()  //删除new
   a;   //[3,5,1,7,'test']
 - sort()给数组排序，返回排序后的数组，**数组本身也会改变**
   var b=a.sort();    //a,b均为[1,3,5,7,'test']
 - join()返回由参数值连接而成的字符串，**数组本身不改变**
   a.join(' is not ');     //"1 is not 3 is not 5 is not 7 is not test"
 - slice(start,end)**在不修改目标数组**的情况下返回其中的片段，起始由start和end确定，不包含end
   b = a.slice(1,3);     //[3,5]
   a;        //[1,3,5,7,'test']
 - splice(start,end,arg1,...)修改目标数组，移除并返回指定切片，并可选新参数填补空缺，包含end
   b = a.splice(1,2,100,101,102);//[3,5]
   a;     //[1,100,101,102,7,'test']


##Function()用于构建函数的内建构造器函数
例：
function sum(a,b){return a+b;};
var sum = function (a,b){return a+b;};
var sum = new Function('a','b','return a+b;')
以上三种方式等价，尽量避免使用Function()
属性**length**记录函数的参数数量，**caller**属性返回调用该函数对象的外层函数引用。
例：
function A(){return A.caller;}
function B(){return A();}
B();  //B()