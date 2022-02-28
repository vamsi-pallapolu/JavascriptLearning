let n=123;
n=new Number();

let x=12;
let y=1.2;
let z="x";

// isInteger()
console.log(Number.isInteger(x));
console.log(Number.isInteger(y));
console.log(Number.isInteger(z));

// parseInt() - converts a string into Integer
console.log(parseInt("123"));

s="1234";
console.log(typeof(s));
console.log(typeof(parseInt(s)));

// parseFloat()
s="12.34";
console.log(typeof(s));
console.log(typeof(parseInt(s)));

n=123;
console.log(n.toString());
console.log(typeof(n.toString()));