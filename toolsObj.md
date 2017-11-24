# 工具类对象

标签（空格分隔）： 未分类

---

##Math
Math 对象并不像 Date 和 String 那样是对象的类，因此没有构造函数 Math()，像 Math.sin() 这样的函数只是函数，不是某个对象的方法。您无需创建它，通过把 Math 作为对象使用就可以调用其所有属性和方法。
属性：
E 返回算术常量 e，即自然对数的底数（约等于2.718）。
LN2 返回 2 的自然对数（约等于0.693）。
LN10 返回 10 的自然对数（约等于2.302）。
LOG2E 返回以 2 为底的 e 的对数（约等于 1.414）。
LOG10E 返回以 10 为底的 e 的对数（约等于0.434）。
PI 返回圆周率（约等于3.14159）。
SQRT1_2 返回返回 2 的平方根的倒数（约等于 0.707）。
SQRT2 返回 2 的平方根（约等于 1.414）。
方法：
random() 返回 0 ~ 1 之间的随机数。
若想获取MIN和MAX之间的值，可通过公式((max-min)*Math.random())+min获取
floor(x) 对数进行下舍入。
ceil(x) 对数进行上舍入。
round(x) 把数四舍五入为最接近的整数。

##Date
var Udate=new Date(); 
Udate;//Date {Fri Nov 10 2017 11:27:31 GMT+0800}
方法：
getDate() 从 Date 对象返回一个月中的某一天 (1 ~ 31)。
getDay() 从 Date 对象返回一周中的某一天 (0 ~ 6即星期天到星期六)。
getMonth() 从 Date 对象返回月份 (0 ~ 11)。
getFullYear() 从 Date 对象以四位数字返回年份。
getMinutes() 返回 Date 对象的分钟 (0 ~ 59)。
getSeconds() 返回 Date 对象的秒数 (0 ~ 59)。
getMilliseconds() 返回 Date 对象的毫秒(0 ~ 999)。

##RegExp
创建RegExp的语法：new RegExp(pattern, attributes);
直接量语法
/pattern/attributes;
参数 pattern 是一个字符串，指定了正则表达式的模式或其他正则表达式。
参数 attributes 是一个可选的字符串，包含属性 "g"、"i" 和 "m"，分别用于指定全局匹配、区分大小写的匹配和多行匹配。ECMAScript 标准化之前，不支持 m 属性。如果 pattern 是正则表达式，而不是字符串，则必须省略该参数。
例子：var re = new RegExp("j.*t");或var re = /j.*t/;
表示以j开头，t结尾的字符串，其中可包含1个或多个字符
**方括号**用于查找某个范围内的字符：
[abc]
查找方括号之间的任何字符。
[^abc]
查找任何不在方括号之间的字符。
[0-9]
查找任何从 0 至 9 的数字。
[a-z]
查找任何从小写 a 到小写 z 的字符。
[A-Z]
查找任何从大写 A 到大写 Z 的字符。
[A-z]
查找任何从大写 A 到小写 z 的字符。
[adgk]
查找给定集合内的任何字符。
[^adgk]
查找给定集合外的任何字符。
(red|blue|green)
查找任何指定的选项。
**元字符**
.
查找单个字符，除了换行和行结束符。
\w
查找单词字符。
\W
查找非单词字符。
\d
查找数字。
\D
查找非数字字符。
\s
查找空白字符。
\S
查找非空白字符。
\b
匹配单词边界。
\B
匹配非单词边界。
\0
查找 NUL 字符。
\n
查找换行符。
\f
查找换页符。
\r
查找回车符。
\t
查找制表符。
\v
查找垂直制表符。
\xxx
查找以八进制数 xxx 规定的字符。
\xdd
查找以十六进制数 dd 规定的字符。
\uxxxx
查找以十六进制数 xxxx 规定的 Unicode 字符。
**量词**
n+
匹配任何包含至少一个 n 的字符串。
n*
匹配任何包含零个或多个 n 的字符串。
n?
匹配任何包含零个或一个 n 的字符串。
n{X}
匹配包含 X 个 n 的序列的字符串。
比如，/a{2}/不会匹配“candy”中的'a',但是会匹配“caandy”中所有的a，以及“caaandy”中的前两个'a'。
n{X,Y}
匹配包含 X 至 Y 个 n 的序列的字符串。
n{X,}
匹配包含至少 X 个 n 的序列的字符串。
n$
匹配任何结尾为 n 的字符串。
^n
匹配任何开头为 n 的字符串。
?=n
匹配任何其后紧接指定字符串 n的字符串。
例如，/Jack(?=Sprat)/会匹配到'Jack'仅仅当它后面跟着'Sprat'。/Jack(?=Sprat|Frost)/匹配‘Jack’仅仅当它后面跟着'Sprat'或者是‘Frost’。但是‘Sprat’和‘Frost’都不是匹配结果的一部分。
?!n
匹配任何其后没有紧接指定字符串 n 的字符串。
匹配'x'仅仅当'x'后面不跟着'y',这个叫做正向否定查找。
例如，/\d+(?!\.)/匹配一个数字仅仅当这个数字后面没有跟小数点的时候。正则表达式/\d+(?!\.)/.exec("3.141")匹配‘141’但是不是‘3.141’
(x)
匹配 'x' 并且记住匹配项，就像下面的例子展示的那样。括号被称为 捕获括号。
模式 /(foo) (bar) \1 \2/ 中的 '(foo)' 和 '(bar)' 匹配并记住字符串 "foo bar foo bar" 中前两个单词。模式中的 \1 和 \2 匹配字符串的后两个单词。注意 \1、\2、\n 是用在正则表达式的匹配环节。在正则表达式的替换环节，则要使用像 $1、$2、$n 这样的语法，例如，'bar foo'.replace( /(...) (...)/, '$2 $1' )。
(?:x)
匹配 'x' 但是不记住匹配项。这种叫作非捕获括号，使得你能够定义为与正则表达式运算符一起使用的子表达式。来看示例表达式 /(?:foo){1,2}/。如果表达式是 /foo{1,2}/，{1,2}将只对 ‘foo’ 的最后一个字符 ’o‘ 生效。如果使用非捕获括号，则{1,2}会匹配整个 ‘foo’ 单词。
###属性
**global** 属性用于返回正则表达式是否具有标志 "g"。
它声明了给定的正则表达式是否执行全局匹配。若为false则在找到第一个匹配位置时就会停止，若要找到所有匹配位置则将其设置为true。
如果 g 标志被设置，则该属性为 true，否则为 false。
**ignoreCase** 属性规定是否设置 "i" 标志。设置大小写相关性，如果使用了 ignoreCase 标志，则该标志将指示被搜索字符串中执行模式匹配的一个搜索应该不区分大小写。
如果设置了 "i" 标志，则返回 true，否则返回 false。
必需的 rgExp 参数是 RegExp 对象的实例
**multiline** 属性在 multiline 标志是为正则表达式设置时，返回 true，否则返回 false。如果使用 m 标志创建正则表达式对象，那么 multiline 属性就是 true。设置是否跨行搜索。
如果 multiline 为 false，那么“^”与字符串的开始位置相匹配，而“$”与字符串的结束位置相匹配。如果 multiline 为 true，那么“^”与字符串开始位置以及“\n”或“\r”之后的位置相匹配，而“$”与字符串结束位置以及“\n”或“\r”之前的位置相匹配。
**source**属性用于存储正则表达式匹配模式的属性
**lastline**：搜索开始的索引位，默认为0。
除lastline外，上面所有属性在对象创建后不能再被修改了。
例子：
var re = new RegExp('j.*t','gmi');或者
var re = /j.*t/ig;
###方法
**test()**和**exec()**方法查找匹配内容，test返回布尔值，exec返回由匹配字符串组成的数组
**compile()** 方法在脚本执行过程中编译正则表达式。
**支持正则表达式的 String 对象的方法**
match()返回包含匹配内容的数组
search()返回匹配字符串的索引位置
replace()可将相关的匹配文本替换成某些其他字符串


例子：

    代码：
    // The name string contains multiple spaces and tabs,
    // and may have multiple spaces between first and last names.
    var names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ; Chris Hand ";
    
    var output = ["---------- Original String\n", names + "\n"];
    
    // Prepare two regular expression patterns and array storage.
    // Split the string into array elements.
    
    // pattern: possible white space then semicolon then possible white space
    var pattern = /\s*;\s*/;
    
    // Break the string into pieces separated by the pattern above and
    // store the pieces in an array called nameList
    var nameList = names.split(pattern);
    
    // new pattern: one or more characters then spaces then characters.
    // Use parentheses to "memorize" portions of the pattern.
    // The memorized portions are referred to later.
    pattern = /(\w+)\s+(\w+)/;
    
    // New array for holding names being processed.
    var bySurnameList = [];
    
    // Display the name array and populate the new array
    // with comma-separated names, last first.
    //
    // The replace method removes anything matching the pattern
    // and replaces it with the memorized string—second memorized portion
    // followed by comma space followed by first memorized portion.
    //
    // The variables $1 and $2 refer to the portions
    // memorized while matching the pattern.
    
    output.push("---------- After Split by Regular Expression");
    
    var i, len;
    for (i = 0, len = nameList.length; i < len; i++){
      output.push(nameList[i]);
      bySurnameList[i] = nameList[i].replace(pattern, "$2, $1");
    }
    
    // Display the new array.
    output.push("---------- Names Reversed");
    for (i = 0, len = bySurnameList.length; i < len; i++){
      output.push(bySurnameList[i]);
    }
    
    // Sort by last name, then display the sorted array.
    bySurnameList.sort();
    output.push("---------- Sorted");
    for (i = 0, len = bySurnameList.length; i < len; i++){
      output.push(bySurnameList[i]);
    }
    
    output.push("---------- End");
    
    console.log(output.join("\n"));
    
    

    输出结果：
        "---------- Original String
        
        Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ; Chris Hand 
        
        ---------- After Split by Regular Expression
        Harry Trump
        Fred Barney
        Helen Rigby
        Bill Abel
        Chris Hand 
        ---------- Names Reversed
        Trump, Harry
        Barney, Fred
        Rigby, Helen
        Abel, Bill
        Hand, Chris 
        ---------- Sorted
        Abel, Bill
        Barney, Fred
        Hand, Chris 
        Rigby, Helen
        Trump, Harry
        ---------- End"
        
##Error
try语句允许我们定义在执行时进行错误测试的代码块。
catch 语句允许我们定义当 try 代码块发生错误时，所执行的代码块。
finally 语句在 try 和 catch 之后无论有无异常都会执行。
注意： catch 和 finally 语句都是可选的，但你在使用 try 语句时必须至少使用一个。
语法
try {
    tryCode - 尝试执行代码块
}
catch(err) {
    catchCode - 捕获错误的代码块
} 
finally {
    finallyCode - 无论 try / catch 结果如何都会执行的代码块
}
  例子：

      try{
     var total = maybeExists();
      if (total === 0)
      {
        throw new Error('Division by 0');
      }else{
        alert(50/total);
      }
    }
    catch(e){
      alert(e.name+":"+e.message);
    }finally{
      alert("finally");
    }
若maybeExists()函数不存在则弹出错误信息ReferenceError:maybeExists is not defined。
若maybeExists()函数返回值为0，则得到Error:Division by 0
若maybeExists()函数返回值非0，如为2，则得到alert信息为25.
在以上所有情况弹出的第二个alert窗口均为finally