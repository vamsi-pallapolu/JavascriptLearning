class Test{
    static a;
    setA(a){
        this.a=a;
    }
}
Test.a=10;
console.log(Test.a);