console.log("jai shree krishna");


// normal function 
function sayhello(){
    console.log('jai shree radhe ');
}

sayhello();
sayhello();

// function to add a number
function add(num1, num2){
    return  num1+num2;
}

let addition= add(5,4);
console.log("the addition of the number is :", addition );

// --------------------------------
// function to multiply a number

function multiply(num1,num2){
    return num1*num2;
}
let multi = multiply(3,2);
console.log("the multiply value is :" ,multi)


// sum of n number using function to add the n numbers  
function addnumber(){
    let  sum=0;
    for(let i=0;i<arguments.length;i++){
        sum = sum + arguments[i];
    }
    return sum;
}

let ans=addnumber(10,10,10,10,10);
console.log("the sum of n number is : ", ans);


// sum of n numbers using the spread operator 
function add(...number){
     let ans=0;
    for(let i=0; i<number.length; i++){
        ans=ans+number[i];
    }
    return ans
}
let solution = add(1,2,3,4,5);
console.log("the soltion of the add is :",solution);















