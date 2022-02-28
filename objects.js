let person={
    firstName:"vamsi",
    lastName:"pallapolu",
    height:160,
    weight:60
};

//Accessing the objects
console.log(person["firstName"]); 
console.log(person.lastName);

//Adding property to the existing object
person["color"]="blonde";
console.log(person.color);

//Updating existing property value
person.weight=65;
console.log(person["weight"]);

//Deleting existing property
delete person["weight"];
console.log(person.weight); //undefined

//for in loop
for(let x in person){
    console.log(x+":"+person.x);
}
for(let x in person){
    console.log(x+":"+person[x]);
}
