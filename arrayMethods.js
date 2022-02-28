let fruits=["Apple", "Banana", "Mango", "Orange"];

// toString(), join()
console.log(fruits.toString());
console.log(fruits.join());
console.log(fruits.join('-'));

// pop() - It removes the last element from the array and prints it in console
console.log(fruits.pop());
console.log(fruits);

// push() - It adds a new element at the end of the array and returns the length of the updated array
let len=fruits.push("carrot");
console.log(len);
console.log(fruits);

// shift() - It removes and returns the first element and shifts the remaining elements into the lower index
fruits=["Apple", "Banana", "Mango", "Orange"];
console.log(fruits.shift());
console.log(fruits);

// unshift() - It adds new element in first postion and shifts the remaining elements into higher index
fruits=["Apple", "Banana", "Mango", "Orange"];
len=fruits.unshift("carrot");
console.log(len);
console.log(fruits);

// Deleting elements from an array
delete fruits[3];
console.log(fruits);

// concat() - To join two arrays
let arr1=[1,2,3];
let arr2=["A", "B", "C"];
console.log(arr1.concat(arr2));

let arr3=['a', 'b'];
let res=arr1.concat(arr2, arr3);
console.log(res);

// slice() - slices the array from the index position and returns a new array
let arr=[1,2,3,4,5];
let res2=arr.slice(1);
console.log(res2);
console.log(arr);

// sort() - sorts the existing array and also returns a new array
arr3=[3,6,9,4,1];
res=arr3.sort();
console.log("res:"+res);
console.log(arr3);

// reverse() - reverse the existing array and also returns a new array
arr3=[3,6,9,4,1];
res=arr3.reverse();
console.log("res:"+res);
console.log(arr3);
