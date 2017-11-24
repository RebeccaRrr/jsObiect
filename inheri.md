# 继承

标签（空格分隔）： 对象

---

**构造函数继承**
------

    function Animal(){
    　　　　this.species = "动物";
    　　}
    function Cat(name,color){
    　　　　this.name = name;
    　　　　this.color = color;
    　　}

一、 构造函数绑定
---------
使用call或apply方法

    function Cat(name,color){
        	Animal.apply(this,arguments);
    　　　　this.name = name;
    　　　　this.color = color;
    　　}


二、使用 prototype
--------------
如果"猫"的prototype对象，指向一个Animal的实例，那么所有"猫"的实例，就能继承Animal了。

     Cat.prototype = new Animal();
     Cat.prototype.constructor = Cat;
     var cat1 = new Cat("大毛","黄色");
     alert(cat1.species); // 动物
将共享属性迁到原型中去

    function Animal(){}
    Animal.prototype.species = "动物";

三、直接继承原型
--------

第三种方法是对第二种方法的改进。由于Animal对象中，不变的属性都可以直接写入Animal.prototype。所以，我们也可以让Cat()跳过 Animal()，直接继承Animal.prototype。

    Cat.prototype = Animal.prototype;
    Cat.prototype.constructor = Cat;

与前一种方法相比，这样做的优点是效率比较高（不用执行和建立Animal的实例了），比较省内存。缺点是 Cat.prototype和Animal.prototype现在指向了同一个对象，那么任何对Cat.prototype的修改，都会反映到Animal.prototype。一旦子对象对原型进行了修改，父对象也会被修改。
四、 利用空对象作为中介——临时构造器F()
----------------------
创造一个空对象作为中介

    var F = function(){};
    F.prototype = Animal.prototype;
    Cat.prototype = new F();
    Cat.prototype.constructor = Cat;

将上面的方法，封装成一个函数extend()，便于使用。

    var extend = function(Child,Parent){
        	var F = function(){};
            F.prototype = Parent.prototype;
            Child.prototype = new F();
            Child.prototype.constructor = Child;
            Child.uber = Parent.prototype;
    
        }
uber属性：指向父类原型，这个属性直接指向父对象的prototype属性
使用方法：

    extend(Cat,Animal);
    　　var cat1 = new Cat("大毛","黄色");
    　　alert(cat1.species); // 动物
五、 拷贝继承
----------------------
将父对象的属性拷贝给子对象，包括对象方法。此方法在效率上略逊一筹，因为执行的是子对象原型的逐一拷贝，而非简单的原型链查询。此方法仅适用于只包含基本数据类型的对象，所有的对象类型（包括函数和数组）都是不可复制的，因为它们只支持引用传递。

    var extend2 = function(Child,Parent){
        var c = Child.prototype;
        var p = Parent.prototype;
        for (var i in c) {
        	c[i] = p[i];
        }
        c.uber = p;
     }
当对象类型进行拷贝时，执行的是引用拷贝，在下例中，对name改变，不会对A的name产生影响，但改变stuff会对A的stuff产生影响。

    var A = function(){};
    var B = function(){};
    A.prototype.stuff = [1,2,3];
    A.prototype.name = 'a';
    extend2(B,A);
    B.prototype.name += 'b';  //'ab'
    A.prototype.name  //'a'
    B.prototype.stuff.push(4,5,6);  //6
    A.prototype.stuff;  //[1, 2, 3, 4, 5, 6]

但当对B的stuff属性进行重写而非修改现有属性时，A的stuff会继续引用原有对象，而B的stuff属性指向了新的对象。

    B.prototype.stuff = ['a','b','c'];
    A.prototype.stuff  //[1, 2, 3]


----------

**非构造函数继承**
-------

    var Chinese = {
    　　　　nation:'中国'
    　　};
    var Doctor ={
    　　　　career:'医生'
    　　}
要使对象Doctor继承对象Chinese，而两个都是普通对象，不是构造函数，无法使用构造函数方法实现"继承"。
一、Object()方法
------------
把子对象的prototype属性，指向父对象，从而使得子对象与父对象连在一起。此方法也称为原型继承，因为将父对象设置成了子对象原型。

    function object(o) { 
    　　　　function F() {} 
    　　　　F.prototype = o; 
    　　　　return new F(); 
    　　}
使用：先用函数构造子对象，再加上子对象本身的属性，此时子对象已经有父对象属性了。

    var Doctor = object(Chinese);
        Doctor.career = '医生';
        alert(Doctor.nation);  //中国

若要访问uber属性，可以继续object函数

    function object(o) { 
        	var n;
    　　　　function F() {} 
    　　　　F.prototype = o;
            n = new F();
            n.ober = o;
    　　　　return n; 
    　　}


二、浅拷贝
-----


三、深拷贝
-----