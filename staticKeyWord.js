class Test{
    static a=10;
    b=20;
    static m1(){
        console.log("Static method");
    }

    m2(){
        console.log("non-static method");
    }
}

// We can access static variables and methods through class name
// but we can't access object variables and methods through class name
console.log(Test.a);
Test.a=100;
console.log(Test.a);
console.log(Test.b); //undefined

Test.m1();
//Test.m2(); TypeError

// We can access non-static variables and methods through objects
// but we can't access static variables and methods through objects
let t=new Test();
console.log(t.a);
console.log(t.b);
//t.m1(); TypeError
t.m2();