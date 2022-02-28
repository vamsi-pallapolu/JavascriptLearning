class A{
    a="A";
    b="superB";
    display(){
        console.log(this.a);
    }
}
class B extends A{
    b="B";
    show(){
        console.log(super.a);
        console.log(super.b);
        console.log(this.a);
        console.log(this.b);
    }
}
ob=new B();
ob.display();
ob.show();