/* var rect={
    width:100,
    height:50,
    draw:function(){
        console.log('I am a Rectangle');
        this.printProperty()
        console.log(this);
          
    },
    printProperty:function(){
        console.log('My width is :'+this.width);
        console.log('My height is :'+this.height); 
    }
}
rect.draw()
 rect.height=100
rect.draw()

//this keyword meaning
function myFunc(){
    console.log(this);  
}
myFunc()//it will show us window object for this step 
new myFunc()//And now it will show us object for this

var anotherObject={
    width:45,
    height:40,
    print:rect.printProperty
};
console.log(anotherObject.print);

anotherObject.print() */


//Factory pattern ......................................
var createRect = function (width, height) {
  return {
    width: width,
    height: height,

    draw: function () {
      console.log("I am Rectangle");
      this.printProperty()
      console.log(this);
      
    },
    printProperty: function () {
      console.log("My width is:" + this.width);
      console.log("My height is:" + this.height);
    },
  };
};
/* var rect1 = createRect(15, 25);
rect1.draw();

var rect2 = createRect(35, 25);
rect2.draw(); */

//Constructor pattern..............................................
var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;

  this.draw = function () {
    console.log("I am Rectangle");
    this.printProperty();
    console.log(this);
  };
  this.printProperty = function () {
    console.log("My width is:" + this.width);
    console.log("My height is:" + this.height);
  };
};
/* var rect3= new Rectangle(38,29)
rect3.draw() */

function myNew(constructor){
    var obj={}
    Object.setPrototypeOf(obj,constructor.prototype);
    var argsArray=Array.prototype.slice.apply(arguments)
    constructor.apply(obj,argsArray.slice(1));

    return obj
}

var rect4=myNew(Rectangle,45,48)
rect4.draw()