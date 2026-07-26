import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
function App() {

  let [counter,Setcounter]= useState(15);

  // let counter = 15;
  function addvalue(){
    if(counter==20){
      counter=20;
    }
    else{
    // console.log('clicked', Math.random());
    counter=counter+1;
    Setcounter(counter)
    }
    
  }

  function removevalue(){
    if(counter==0){
      counter = 0 ;
    }else{
    counter = counter-1;
    Setcounter(counter);
    }
  }

  return (
    <>
     <h6>This counter is the basic usestate counter is used please find that above </h6>
     <h1>Making of the counter</h1>
     <h2>Counter App {"    "} {counter} </h2>
     <button 
      onClick={addvalue}
     >Add Value {counter}</button>
     <br/>
     <button
     onClick={removevalue}
     >Remove Value  {counter}</button>
     <footer>Footer is here with the value {counter}</footer>
    </>
  )
}

export default App
