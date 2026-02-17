console.log('radhe radhe');
// And ---> logical and operator(&&) All condition must be true 
const age =20;
const gender='male';
if(age>=18 && gender=='male'){
    console.log('you are an adult male')
}
// OR  --->(||) or operator atleast one condition should be true 
const age1=0;
gender1 = 'female';
if(age1>=18 || gender1=='female'){
  console.log('you are female')
}
// Not -> not operator true=> false  and false -> true 
const number = 5;
if(!(number%2==0)){
 console.log('odd')
}
else{
   console.log('even')  
}
// ----------
const number1 = 5;
if(number1%2!=0){
 console.log('odd')
}
//  not operator converts the true into false and false into true
 console.log(!true);
 console.log(!false);

 getby(){
  console.log('shree krishna');
 }