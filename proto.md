# JS原型

标签（空格分隔）： 原型 

---
Javascript规定，每一个构造函数都有一个prototype属性，指向另一个对象。这个对象的所有属性和方法，都会被构造函数的实例继承。
这意味着，我们可以把那些不变的属性和方法，直接定义在prototype对象上。
原型链中的方法和属性没有被复制到其他对象——它们被访问需要通过前面所说的“原型链”的方式。


方法
--

    function Ga(name,color){
      this.name = name;
      this.color = color; 
    }
    Ga.prototype.price = 310;
    Ga.prototype.rating = 3;
    
    var newtoy = new Ga("405","red");
    for (var prop in newtoy){
      if(newtoy.hasOwnProperty(prop))
      alert(prop + " = "+ newtoy[prop]);
    }

对象属性和原型属性区分，用**hasOwnProperty()**方法
例子：newtoy.hasOwnProperty('name')  //true
newtoy.hasOwnProperty('price')  //false
**propertyIsEnumerable()**方法会对所有的非内建对象属性返回true，而大部分内建属性方法都是不可枚举的，返回false,任何来自原型链的属性也是不可枚举的,若调用来自原型链的某个对象对象则为true。
newtoy.propertyIsEnumerable('name')  //true
newtoy.propertyIsEnumerable('constuctor') //false
newtoy.propertyIsEnumerable('price')   //true
newtoy.constructor.prototype.propertyIsEnumerable('name')
**isPrototypeOf()**方法告诉当前对象是否是一个对象的原型
Ga.prototype.isPrototypeOf(newtoy)
__proto__（隐式原型）与prototype（显式原型）。隐式原型指向创建这个对象的函数(constructor)的prototype。
**create的原型**
var person2 = Object.create(person1);
person2.__proto__   //person1

扩展内建对象
------

例子：将string对象反转，因为数组有reverse方法，可以借助此向Array中添加reverse方法，首先用split()将字符串转换为数组，再用reverse方法产生一个反向数组，最后通过join方法将结果数组转为字符串。

     String.prototype.reverse= function(){
            return Array.prototype.reverse.apply(this.split('')).join('');
          }
    "story".reverse();

当对原型对象执行完全替换时，可能会触发原型链异常(exception),prototype.constructor属性不可靠

    function Dog(){
     this.tail = true;
    }
    var benji = new Dog();
    var rusty = new Dog();
    Dog.prototype.say = function(){return 'woof';}
    Dog.prototype = {paws:4,hair:true};  
    typeof benji.__proto__.paws //undefined
    typeof benji.__proto__.say  //function

之后创建的所有对象都使用的是更新后的原型链

    var Lucy = new Dog();
    Lucy.say()  //error
    Lucy.paws  //4

此时新对象的constructor属性不能再保持正确了

    Lucy.constructor  //Object()
    beji.constructor  //Dog()

解决方法：当重写某对象的prototype时，最好重置相应的constructor属性

    Dog.prototype.constructor = Dog;