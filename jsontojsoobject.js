let text='{"employees":[{"firstName":"vamsi", "lastName":"pallapolu"},{"firstName":"nani", "lastName":"pallapolu"}]}';
let obj=JSON.parse(text);
console.log(obj.employees[0].firstName+":"+obj.employees[0].lastName);