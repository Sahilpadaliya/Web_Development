// array ka use hm to store the multiple things in a single variable we use the array 

//  array in javasript is the heterogenous because we can store the multiple things inside it 
//  like the string , number , object , etc but in other language like the c++ , java it is 
// the homogeneous we cannot store the multible thing we hhave the save the same thing 



const students = ['sahil', 'ritesh', 'Anmol'];
console.log(students);
console.log(students.length);
console.log(students[2]);
students[0]='sahil padaliya'
console.log(students);

//  ------ in the javascriot we have the heterogeneous array means we can store anything 
//          inside the array  

const myArray = [1,true,'piyush', '0']
myArray.push({name:'piyush'})
console.log(myArray);
console.log(myArray.indexOf('piyush'));



//    function in the array 
//   push method is used to insert the array in the last element of the array 
students.push('Alexa');
console.log(students);

// pop function in the array 
// pop is used to remove the last element from the array 
const save = ['sahil', 'ritesh', 'Anmol'];
save.pop()
console.log(save);

// Reverse the array (function)
// it reverse the array after applying this function 

const student = ['sahil', 'ritesh', 'Anmol']
student.reverse() 
console.log(student)
console.log('jai jai')