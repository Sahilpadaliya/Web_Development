console.log('jai shree krishna');

// Variables in javascript 

// datatype varname = value  ---> strongly typed language like (java , c++)
//javascript  ---> loosely typed language

// 1. var 
// var scope is global 
var age =22;
console.log(age);
age ='sahil '
console.log(age);

if (true){
    var room= 'done';
}
console.log(room);// global scope hai var ka bracket ke bahar bhi 

// ---------------------
console.log(gate); // undefined ayega because defined niche hua hai 
var gate = 'open'
console.log(gate);

{
    var a =10;
}
console.log(a);

// ------------------------------------------------------------------------------
// let -> scope is local 
let age = 22;
console.log(age)
age='riya'
console.log(age)

if(true){
    let b=20;
    console.log(b);
}
    console.log(b);

// -----------------------------------------------------------------------------
//const is a local scope variable and also the value assigned to its once cant be change 
// like the var and the const 

const set = 214;
console.log(set);
set ='go';
console.log(set);
if(true){
    const a =10;
    console.log(a)
}
console.log(a);
// -------------------------------------------------------------------------
// revise 

//var 
//var- global scope
//re-assign the variable can be done 
// kbhi bhi access kr lo 

//let 
// let - local scope 
// re assign the variable can be one 
// access sirf khud ke bloack ke andar hoga local scope 

// const 
// const - local scope hai 
// reassign nhi kr sakte constant variable hota hai 
// access sirf khud ke block ke andar hoga 

