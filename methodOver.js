class Bank{
    roi(){
        return 10;
    }
}
class SBI extends Bank{
    roi(){
        return 12.5;
    }
}
ob=new Bank();
console.log(ob.roi());
ob=new SBI();
console.log(ob.roi());