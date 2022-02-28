let employee={
    empid:4046,
    empname:"Vamsi Krishna Pallapolu",
    job:"Software Engineer",
    salary:100000,
    bonus:function(){
        return((this.salary*10)/100);
    }
};

console.log(employee.bonus());