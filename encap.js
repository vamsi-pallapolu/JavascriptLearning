// Encapsulation is the mechanism that binds code and data together
class Student{
    
    name;
    marks;

    setName(name){
        this.name=name;
    }

    getName(){
        return this.name;
    }

    setMarks(marks){
        this.marks=marks;
    }

    getMarks(){
        return this.marks;
    }

}
let stu=new Student();
stu.setName("Vamsi");
stu.setMarks(10);
console.log(stu.getName()+":"+stu.getMarks());