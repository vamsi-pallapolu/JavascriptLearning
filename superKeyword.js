class Animal{
    color;
    constructor(color){
        this.color=color;
    }
    printColor(){
        console.log(this.color);
    }
}
class Dog extends Animal{
    food;
    constructor(color, food){
        super(color);
        this.food=food;
    }
    eating(){
        console.log("Eating:"+this.food);
    }
    display(){
        this.printColor();
        this.eating();
    }
}
b=new Dog("Red", "Bread");
b.display();