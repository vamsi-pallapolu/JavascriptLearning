//break, continue
for(let i=1;i<=5;i++){
    if(i==1 || i==3 || i==5)
        continue;
    console.log(i);
}
console.log("-----------------");
for(let i=1;i<=5;i++){
    if(i==5)
        continue;
    console.log(i);
}
console.log("-----------------");
for(let i=1;i<=5;i++){
    if(i==5)
        break;
    console.log(i);
}
/*
for(let i=2;i<=10;i++){
    if(i%2==0)
        console.log(i);
}
for(let i=1;i<=10;i++)
    console.log(i);


let i=10;
do{
    console.log(i--);
}while(i>0);

let i=1;
do{
    console.log(i++);
}while(i<=10);

//Print numbers in descending order
let i=10;
while(i>=1){
    console.log(i--);
}

//Print even numbers between 1 and 10
let i=1;
while(i<=10){
    if(i%2==0)
        console.log(i);
    i++;
}

//1...10
let i=1;
while(i<=10){
    console.log(i++);
}
*/