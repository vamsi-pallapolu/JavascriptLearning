class Employee{
    constructor(eid, ename){
        this.eid=eid;
        this.ename=ename;
    }
}

Employee.prototype.salary=2500;
Employee.prototype.display=function(){
    console.log(this.eid, this.ename, this.salary);
}
let e1=new Employee(101, "Ban");
console.log(e1.eid, e1.ename, e1.salary);
let e2=new Employee(102, "Sam");
console.log(e2.eid, e2.ename, e2.salary);

e1.display();
e2.display();


/*
function student(){
    this.name="vamsi";
    this.gender="male";
}

student.prototype.age=35;

s1=new student();
console.log(s1.name, s1.gender);
s1.age=24;
console.log(s1.name, s1.gender, s1.age);
s2=new student();
console.log(s2.name, s2.gender, s2.age);
s3=new student();
console.log(s3.name, s3.gender, s3.age);
*/