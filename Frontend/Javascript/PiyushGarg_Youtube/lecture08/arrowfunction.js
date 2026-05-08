// -------------------Arrow function --------------------------

// 1.syntax od arrow function
const sayhello = ()=>{
    console.log("jai shree swaminarayan")
}
sayhello();

// additon of two number with the arrow function
const add=(a,b)=>{
    return a+b;
}
let store=add(9,9);
console.log('the addition is :',store)



// =--------------------------------------------------
// 2. argument keywords 

// with the normal function the argument keyword work very porperly 
function addnumbers(){
    console.log(arguments)
}
addnumbers(1,2,3,4,5,6,7,8,9);


// but with the arrow function the argument keyword does not work properly

// const adds=()=>{
//     console.log(arguments);
// }
// adds(1,2,3,4,5,6,7,8,9);    
//   this will produe the error we only have the spread operator for the arrow functions 
const adds=(...nums)=>{
    console.log(nums)
}
adds(1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,);


// ----------------------------------------
// hoisting in the arrow function is not allowed while in the normal function the 
// hoisting can be done 

// hoisting ---we can call the function before defining the function 
// but cannot be call with the arrow function 

hoist();
function hoist(){
    console.log("ok");
}

// error will produce in the hoisting for the arrow function 
// hoist1();
// const hoist1= ()=>{
//    console.log('hoist');
// }



// ----------------------------------------------------------------
// 4. this keyword

// with the normal function this keyword reffer to the local object 
const obj = {
    value:20,
    myfunction: function(){
        console.log(this.value);
    }
}
obj.myfunction();


// but with the arrow function this keywords reffer to the window objects 

const obj1 ={

    value1:10,
    myfunction: ()=>{
        console.log(this);
    }
}

obj1.myfunction();



