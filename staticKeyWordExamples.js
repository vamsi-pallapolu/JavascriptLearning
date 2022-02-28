class Test{
  constructor(){
      let a;
  }
}
let t=new Test();
console.log(t.a);

/*
// Understanding static keyword
class Test{
  static count=1;
  static add(){
    console.log("count:"+this.count);
  }
}
let ob=new Test();
ob.add();

class Test{
  static c=10;
  constructor(){
    this.a=10;
  }    
 count1(){
    let b=1;
    console.log(this.a++);
    console.log(this.b++);
  }

}
let ob=new Test();
ob.count1();
ob.count1();
ob.count1();

class Car {
    constructor(brand) {
      this.carname = brand;
    }
    static hello(x) {
      return "Hello " + x.carname;
    }
  }
  mycar = new Car("Ford");
  console.log(Car.hello(mycar));

class Test{
    static {
        console.log('Class static initialization block called');
      }
    a=10;
    m1(){
        console.log(this.a++);
    }
    m2(b){
        console.log(b++);
    }
}
let ob=new Test();
for(let i=0;i<3;i++){
    ob.m1();
    ob.m2(1);
}
*/