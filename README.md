# 数据封装类方法

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
###方法
####call(),apply()方法
1. 每个函数都包含两个非继承而来的方法：call()方法和apply()方法。
2. 相同点：这两个方法的作用是一样的。
都是在特定的作用域中调用函数，等于设置函数体内this对象的值，以扩充函数赖以运行的作用域。
一般来说，this总是指向调用某个方法的对象，但是使用call()和apply()方法时，就会改变this的指向。
**call方法:** 
语法：call([thisObj[,arg1[, arg2[,   [,.argN]]]]]) 
定义：调用一个对象的一个方法，以另一个对象替换当前对象。 
说明： 
call 方法可以用来代替另一个对象调用一个方法。call 方法可将一个函数的对象上下文从初始的上下文改变为由 thisObj 指定的新对象。 
如果没有提供 thisObj 参数，那么 Global 对象被用作 thisObj。 
例子：
function add(a,b)  
{  
    alert(a+b);  
}  
function sub(a,b)  
{  
    alert(a-b);  
}  
  
add.call(sub,3,1);  
这个例子中的意思就是用 add 来替换 sub，add.call(sub,3,1) == add(3,1) ，所以运行结果为：alert(4); // 注意：js 中的函数其实是对象，函数名是对 Function 对象的引用。 

    <script>
        //例1
        window.color = 'red';
        document.color = 'yellow';
        var s1 = {color: 'blue' };
        function changeColor(){
            console.log(this.color);
        }

        changeColor.call();         //red (默认传递参数)
        changeColor.call(window);   //red
        changeColor.call(document); //yellow
        changeColor.call(this);     //red
        changeColor.call(s1);       //blue

    </script>

    //例2
    var Pet = {
        words : '...',
        speak : function (say) {
            console.log(say + ''+ this.words)
        }
    }
    Pet.speak('Speak'); // 结果：Speak...

    var Dog = {
        words:'Wang'
    }

    //将this的指向改变成了Dog
    Pet.speak.call(Dog, 'Speak'); //结果： SpeakWang
**apply方法:** 
//例1
    <script>
       
        window.number = 'one';
        document.number = 'two';
        var s1 = {number: 'three' };
        function changeColor(){
            console.log(this.number);
        }

        changeColor.apply();         //one (默认传参)
        changeColor.apply(window);   //one
        changeColor.apply(document); //two
        changeColor.apply(this);     //one
        changeColor.apply(s1);       //three

    </script>

    //例2
    function Pet(words){
        this.words = words;
        this.speak = function () {
            console.log( this.words)
        }
    }
    function Dog(words){
        //Pet.call(this, words); //结果： Wang
       Pet.apply(this, arguments); //结果： Wang
    }
    var dog = new Dog('Wang');
    dog.speak();
   
3.不同点：接收参数的方式不同。
apply()方法 接收两个参数，一个是函数运行的作用域（this），另一个是参数数组。
语法：apply([thisObj [,argArray] ]);，调用一个对象的一个方法，2另一个对象替换当前对象。
说明：如果argArray不是一个有效数组或不是arguments对象，那么将导致一个 
TypeError，如果没有提供argArray和thisObj任何一个参数，那么Global对象将用作thisObj。
call()方法 第一个参数和apply()方法的一样，但是传递给函数的参数必须列举出来。
语法：call([thisObject[,arg1 [,arg2 [,...,argn]]]]);，应用某一对象的一个方法，用另一个对象替换当前对象。
说明： call方法可以用来代替另一个对象调用一个方法，call方法可以将一个函数的对象上下文从初始的上下文改变为thisObj指定的新对象，如果没有提供thisObj参数，那么Global对象被用于thisObj。
使用示例1：

    function add(c,d){
        return this.a + this.b + c + d;
    }

    var s = {a:1, b:2};
    console.log(add.call(s,3,4)); // 1+2+3+4 = 10
    console.log(add.apply(s,[5,6])); // 1+2+5+6 = 14 
使用示例2:
    <script>
        window.firstName = "Cynthia"; 
        window.lastName = "_xie";

        var myObject = {firstName:'my', lastName:'Object'};

        function getName(){
            console.log(this.firstName + this.lastName);
        }

        function getMessage(sex,age){
            console.log(this.firstName + this.lastName + " 性别: " + sex + " age: " + age );
        }

        getName.call(window); // Cynthia_xie
        getName.call(myObject); // myObject

        getName.apply(window); // Cynthia_xie
        getName.apply(myObject);// myObject

        getMessage.call(window,"女",21); //Cynthia_xie 性别: 女 age: 21
        getMessage.apply(window,["女",21]); // Cynthia_xie 性别: 女 age: 21

        getMessage.call(myObject,"未知",22); //myObject 性别: 未知 age: 22
        getMessage.apply(myObject,["未知",22]); // myObject 性别: 未知 age: 22

    </script>
####caller(),callee()方法
**caller**
caller返回一个函数的引用，这个函数调用了当前的函数。
使用这个属性要注意:
1 这个属性只有当函数在执行时才有用
2 如果在javascript程序中，函数是由顶层调用的，则返回null
functionName.caller: functionName是当前正在执行的函数。
例子：

        var a = function() {   
    alert(a.caller);   
    }   
    var b = function() {   
    a();   
    }   
    b();  //结果为function() {   a();   }   
    a();  //结果为null
**callee**
callee放回正在执行的函数本身的引用，它是arguments的一个属性
使用callee时要注意:
1 这个属性只有在函数执行时才有效
2 它有一个length属性，可以用来获得形参的个数，因此可以用来比较形参和实参个数是否一致，即比较arguments.length是否等于arguments.callee.length
3 它可以用来递归匿名函数。

        var a = function() {   
    alert(arguments.callee);   
    }   
    var b = function() {   
    a();   
    }   
    b();  
结果为：

    function() {   
    alert(arguments.callee);   
    }   
    
##Boolean()
Boolean（逻辑）对象用于将非逻辑值转换为逻辑值（true 或者 false）。
可用于创建Boolean对象，和当作一般函数使用。
对象：var b = new Boolean();
var a = new Boolean(true);
函数：Boolean('test');   //true

##Numeber()
1.构造器函数，创建一个对象
var n = new Number(1.2);//类型是对象
2.被当做一般函数时，可将任何值都转化为数字。var n = Number(1.2);//类型是number
**Number 对象属性**
MAX_VALUE,MIN_VALUE,NaN，POSITIVE_INFINITY,NEGATIVE_INFINITY
**Number 对象方法**
toString
把数字转换为字符串，使用指定的基数。
toLocaleString
把数字转换为字符串，使用本地数字格式顺序。
toFixed
把数字转换为字符串，结果的小数点后有指定位数的数字。
toExponential
把对象的值转换为指数计数法。
toPrecision
把数字格式化为指定的长度。
valueOf
返回一个 Number 对象的基本数字值。
##String()
String() 函数把对象的值转换为字符串。
String 对象实际就是一个字符数组，有length属性。当基本字符串和String对象被转换为布尔值时，尽管空串是falsy，但所有string对象都是truthy
Boolean("")   //false
Boolean(new String(""));   //true
**方法**
**toUpperCase()，toLowerCase()**
**charAt()**返回指定位置的字符，返回的字符是长度为 1 的字符串。若传递给charAt()方法的位置不存在，则返回一个空串。
**indexOf()** 方法可返回某个指定的字符串值在字符串中首次出现的位置。如果要检索的字符串值没有出现，则该方法返回 -1。
var s = new String("Couch potato");
s.indexOf('o');   //1
s.indexOf('o',2); //找第二个出现的o,即7
s.lastIndexOf('o')  //可使搜索从末端开始
**slice(),substring()**方法返回目标字符串指定的区间.substring()方法如果参数 start 与 stop 相等，那么该方法返回的就是一个空串（即长度为 0 的字符串）。如果 start 比 stop 大，那么该方法在提取子串之前会先交换这两个参数。如果省略stop则返回的对象一直到字符串结尾。
s.slice(1,5)  //ouch
s.substring(1,5) //ouch
出现负参数时，slice会将其与字符串长度相加，substring会将它视作从0开始的计数方式
s.slice(1,-1) //ouch potat
s.substring(1,-1) //C
split()分割字符串，可视为join的反操作
s.split(" ");   //["Couch", "potato"]
**substr()** 方法从字符串中提取从 startPos位置开始的指定数目的字符串。如果参数startPos是负数，从字符串的尾部开始算起的位置。也就是说，-1 指字符串中最后一个字符，-2 指倒数第二个字符，以此类推。如果startPos为负数且绝对值大于字符串长度，startPos为0。
语法：stringObject.substr(startPos,length)  length可选

    <script type="text/javascript">
      var mystr="I love JavaScript!";
      document.write(mystr.substr(7));
      document.write(mystr.substr(2,4));
    </script>
运行结果：
JavaScript!
love