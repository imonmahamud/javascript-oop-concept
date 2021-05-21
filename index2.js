/* var rect = {
  width: 100,
  height: 50,

  draw: function () {
    console.log("I am a Rectangle");
    this.printProperties()
    console.log(this);
    
  },
  printProperties: function () {
    console.log("My width is :" + this.width);
    console.log("My height is :" + this.height);
  },
};
rect.draw();

function myFunc(){
    console.log(this);    
}
new myFunc()

var anotherObject={
    width:50,
    height:25,
    print:rect.printProperties
}
anotherObject.print()
 */

/* var createRect = function (width, height) {
  return {
    width: width,
    height: height,

    draw: function () {
      console.log("I am Rectangle");
      this.printProperties();
      console.log(this);
      
    },
    printProperties: function () {
      console.log("My width is :" + this.width);
      console.log("My height is :" + this.height);
    },
  };
};

var rect1 = createRect(10, 5);
rect1.draw(); */

/* var rect2 = createRect(20, 15);
rect2.draw(); */

/* var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;

  this.draw = function () {
    console.log("I am Rectangle");
    this.printProperties();
    console.log(this);
  };
  this.printProperties = function () {
    console.log("My width is " + this.width);
    console.log("My height is " + this.height);
  };
}; */

/* var rect3=new Rectangle(15,25)
rect3.draw() */
/* var rect4=myNew(Rectangle,35,25)
rect4.draw()

function myNew(constructor){
    var obj={}
    Object.setPrototypeOf(obj, constructor.prototype)
    var argsArray=Array.prototype.slice.apply(arguments)
    constructor.apply(obj,argsArray.slice(1))
    return obj
} */

/* function test(){
    console.log('Something');    
}

var Rect=new Function('width','height',`this.width = width;
this.height = height;

this.draw = function () {
  console.log("I am Rectangle");
  this.printProperties();
  console.log(this);
};
this.printProperties = function () {
  console.log("My width is " + this.width);
  console.log("My height is " + this.height);
};`) */

/* var rect5=new Rect(4,5)
console.log(rect5); */

/* function myFunc(c,d){
    console.log(this);    
    console.log(this.a+this.b+c+d);    
}
myFunc.call({a:5,b:10},10,5)
myFunc.apply({a:15,b:100},[10,5])
myFunc()
var testBind=myFunc.bind({a:7,b:3})
testBind(5,5) */

/* var n=10

function change(n){
    n=n+100
    console.log(n)
}
change(n)
console.log(n);

var obj={
    a:10,
    b:20
}
function changeMe(obj){
    obj.a=obj.a+100
    obj.b=obj.b+100
    console.log(obj);    
}
changeMe(obj)
console.log(obj); */
var Rectangle = function (width, height) {
    var position ={
        x:56,
        y:-100
    }
    this.width = width;
    this.height = height;    
    var printProperties = function () {
        console.log("My width is " + this.width);
        console.log("My height is " + this.height);
      }.bind(this);

      /* this.getPosition=function () {
          return position
      } */

    this.draw = function () {
      console.log("I am Rectangle");
      printProperties();
      console.log("position X :"+position.x+" Y"+position.y);
    };
    Object.defineProperty(this,'position',{
        get: function () {
            return position
        },
        set: function (value) {
            position = value
        }
    })
    
  };
  var rect7=new Rectangle(45,60)
  rect7.draw()
  rect7.position={
      x:256,
      y:320
  }
  console.log(rect7.position);
  
  


