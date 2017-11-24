function Shape(){}
Shape.prototype.name = 'shape';
Shape.prototype.toString = function(){
	var result = [];
	if(this.constuctor.uber){
		result[result.length] = this.constuctor.uber.toString();
	}
	result[result.length] = this.name;
	return result.join(', ');
};



function TwoDShape(){}
//临时构造器F()
var F = function(){};
F.prototype = Shape.prototype;
TwoDShape.prototype = new F();
TwoDShape.prototype.constuctor = TwoDShape;

TwoDShape.prototype.name = '2D shape';

function Triangle(side,height){

	this.side = side;
	this.height = height;
}
var F = function(){};
F.prototype = Shape.prototype;
Triangle.prototype = new F();
Triangle.prototype.constuctor = Triangle;
Triangle.prototype.name = 'Triangle';
Triangle.prototype.getArea = function(){return this.side*this.height/2;};

var my = new Triangle(5,10);
Triangle.prototype.name = "Triang";
var s = new Shape();
s.name;