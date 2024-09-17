import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from "./component/Box"

function App() {
  const count = useSelector(state => state.count)
  // const [count,setCount] = useState(1);
  const dispatch = useDispatch()
  const increase = ()=>{
    dispatch({type:"increment"})
    // setCount(count + 1);
  }

  return (
    <div >
      <h1>{count}</h1>
      <Box/>
      <button onClick = {increase}>increase</button>
    </div>
  );
}

export default App;
