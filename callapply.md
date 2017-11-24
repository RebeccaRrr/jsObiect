# call(),apply()方法

标签（空格分隔）： 未分类

---
##call()方法
call() 方法调用一个函数, 其具有一个指定的this值和分别地提供的参数(参数的列表)。
注意：该方法的作用和 apply() 方法类似，只有一个区别，就是call()方法接受的是若干个参数的列表，而apply()方法接受的是一个包含多个参数的数组。
**语法**
Edit
fun.call(thisArg, arg1, arg2, ...)
**参数**
thisArg
在fun函数运行时指定的this值。需要注意的是，指定的this值并不一定是该函数执行时真正的this值，如果这个函数处于非严格模式下，则指定为null和undefined的this值会自动指向全局对象(浏览器中就是window对象)，同时值为原始值(数字，字符串，布尔值)的this会指向该原始值的自动包装对象。
arg1, arg2, ...
指定的参数列表。
**返回值**
返回结果包括指定的this值和参数。
**描述**
可以让call()中的对象调用当前对象所拥有的function。你可以使用call()来实现继承：写一个方法，然后让另外一个新的对象来继承它（而不是在新对象中再写一次这个方法）。

**示例**
------

 - 使用call方法调用父构造函数

在一个子构造函数中，你可以通过调用父构造函数的 call 方法来实现继承，类似于Java中的写法。下例中，使用 Food 和 Toy 构造函数创建的对象实例都会拥有在 Product 构造函数中添加的 name 属性和 price 属性,但 category 属性是在各自的构造函数中定义的。

    function Product(name, price) {
      this.name = name;
      this.price = price;
    
      if (price < 0) {
        throw RangeError('Cannot create product ' +
                          this.name + ' with a negative price');
      }
    }
    
    function Food(name, price) {
      Product.call(this, name, price); 
      this.category = 'food';
    }
    
    //等同于
    function Food(name, price) { 
        this.name = name;
        this.price = price;
        if (price < 0) {
            throw RangeError('Cannot create product ' +
                    this.name + ' with a negative price');
        }
    
        this.category = 'food'; 
    }
    
    //function Toy 同上
    function Toy(name, price) {
      Product.call(this, name, price);
      this.category = 'toy';
    }
    
    var cheese = new Food('feta', 5);
    var fun = new Toy('robot', 40);

 - 使用call方法调用匿名函数

在下例中的for循环体内，我们创建了一个匿名函数，然后通过调用该函数的call方法，将每个数组元素作为指定的this值执行了那个匿名函数。这个匿名函数的主要目的是给每个数组元素对象添加一个print方法，这个print方法可以打印出各元素在数组中的正确索引号。当然，这里不是必须得让数组元素作为this值传入那个匿名函数（普通参数就可以），目的是为了演示call的用法。

      var animals = [
      {species: 'Lion', name: 'King'},
      {species: 'Whale', name: 'Fail'}
    ];
    for (var i = 0; i < animals.length; i++) {
      (function (i) { 
        this.print = function () { 
          console.log('#' + i  + ' ' + this.species + ': ' + this.name); 
        } 
        this.print();
      }).call(animals[i], i);
    }

 - 列表项使用call方法调用函数并且指定上下文的'this'

在下面的例子中，当调用 greet 方法的时候，该方法的 this 值会绑定到 i 对象。

    function greet() {
      var reply = [this.person, 'Is An Awesome', this.role].join(' ');
      console.log(reply);
    }
    
    var i = {
      person: 'Douglas Crockford', role: 'Javascript Developer'
    };
    
    greet.call(i); // Douglas Crockford Is An Awesome Javascript Developer


----------


##apply方法
**语法**
Edit
fun.apply(thisArg, [argsArray])
**参数**
thisArg
在 fun 函数运行时指定的 this 值。需要注意的是，指定的 this 值并不一定是该函数执行时真正的 this 值，如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动指向全局对象（浏览器中就是window对象），同时值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的自动包装对象。
argsArray
一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 fun 函数。如果该参数的值为null 或 undefined，则表示不需要传入任何参数。从ECMAScript 5 开始可以使用类数组对象。浏览器兼容性请参阅本文底部内容。
 
**描述**
在调用一个存在的函数时，你可以为其指定一个 this 对象。 this 指当前对象，也就是正在调用这个函数的对象。 使用 apply， 你可以只写一次这个方法然后在另一个对象中继承它，而不用在新对象中重复写该方法。
apply 与 call() 非常相似，不同之处在于提供参数的方式。apply 使用参数数组而不是一组参数列表（原文：a named set of parameters）。apply 可以使用数组字面量（array literal），如 fun.apply(this, ['eat', 'bananas'])，或数组对象， 如  fun.apply(this, new Array('eat', 'bananas'))。
你也可以使用 arguments  对象作为 argsArray 参数。 arguments 是一个函数的局部变量。 它可以被用作被调用对象的所有未指定的参数。 这样，你在使用apply函数的时候就不需要知道被调用对象的所有参数。 你可以使用arguments来把所有的参数传递给被调用对象。 被调用对象接下来就负责处理这些参数。
从 ECMAScript 第5版开始，可以使用任何种类的类数组对象，就是说只要有一个 length 属性和[0...length) 范围的整数属性。例如现在可以使用 NodeList 或一个自己定义的类似 {'length': 2, '0': 'eat', '1': 'bananas'} 形式的对象。
需要注意：Chrome 14 以及 Internet Explorer 9 仍然不接受类数组对象。如果传入类数组对象，它们会抛出异常。

**示例**
------
使用apply来链接构造器
你可以使用apply来给一个对象链接构造器，类似于Java. 在接下来的例子中我们会创建一个叫做construct的全局的Function函数,来使你能够在构造器中使用一个类数组对象而非参数列表。

    Function.prototype.construct = function (aArgs) {
      var oNew = Object.create(this.prototype);
      this.apply(oNew, aArgs);
      return oNew;
    };



