class Student{

    constructor(sid, sname, grade){
        this.sid=sid;
        this.sname=sname;
        this.grade=grade;
    }
   /*setDetails(sid, sname, grade){
        this.sid=sid;
        this.sname=sname;
        this.grade=grade;
    }

    setDetails(){
        this.sid=1;
        this.sname="vamsi";
        this.grade="A";
    }*/

    display(){
        console.log(this.sid+":"+this.sname+":"+this.grade);
    }
}

let stu=new Student();
//stu.setDetails();
//stu.display()
//stu.setDetails(1, "krishna", "B");
//stu.display()
stu=new Student(1, "krishna", "B");
stu.display();
let stu2=new Student(2, "ram", "c");
stu2.display();
let stu3=new Student(3, "bob", "d");
stu3.display();
