// Variables of same type in same array
let cars=["bmw","honda","suzuki"];
console.log(cars);
let bikes=new Array("duke","pulzar","ducati");
console.log(bikes);
// Variables of different types in same array
let data=["vamsi", 'a', 1, true, null];
console.log(data);

// Array of objects
let person1={
    name:"vamsi",
    age:24
};
let person2={
    name:"krishna",
    age:25
};

let objectArray=[person1,person2];
console.log(objectArray);
console.log(objectArray[1]);

//Looping elements from array
let fruits=["Apple", "Banana", "Mango", "Orange"];
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

//Looping elements using "for of" loop
for(let fruit of fruits)
    console.log(fruit);

// Looping elements using "for/in" loop
for(let x in fruits)
    console.log(fruits[x]);

//Recognize an array
console.log(typeof fruits);

console.log(Array.isArray(fruits));


