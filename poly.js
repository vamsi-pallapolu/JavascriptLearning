/*
class Calculator{
    a;
    b;
    
     add(a, b){
         this.a=a;
         this.b=b;
         this.res=this.a+this.b;
        console.log(this.res);
     }

     add(a, b, c){
        this.a=a;
        this.b=b;
        this.c=c;
        this.res=this.a+this.b+this.c;
        console.log(this.res);
     }

     add(a, b){
        this.a=a;
        this.b=b;
        return this.a+this.b;
     }
}

ob=new Calculator();
//ob.add(1, 1);
//ob.add(1,2,3);
console.log(ob.add(1,1));

*/

class Shape{
    draw(){
        console.log("This is generic shape");
    }
}
class Square extends Shape{
    draw(){
        console.log("This is Square shape");
    }
}
class Circle extends Shape{
    draw(){
        console.log("This is Circle shape");
    }
}
let ob=new Shape();
ob.draw();
ob=new Square();
ob.draw();
ob=new Circle();
ob.draw();
