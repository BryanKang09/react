import logo from './logo.svg';
import './App.css';
import Bb from './component/box' // upper, lower
import { useState } from 'react';

function App() {
  let counter = 0;
  const increase = ()=>{
    // counter = counter+1;
    setCounter2(counter2 + 1);
  }
  const [counter2, setCounter2] = useState(0);
  return (
    <>      
      <Bb name="lisa" boxNo={1}/>
      <Bb name="bryan" boxNo={2}/>
      

      <div>{counter}</div>
      <div>state: {counter2}</div>
      <button onClick ={increase}>click</button>
    </>
  );
}

export default App;
