import React,{useState} from 'react';
const FunctionCounter=()=>{
const [count,setCount]=useState(0);
return(
<>
<button onClick={()=>{setCount(count+1)}}>Function Count: {count}</button>
</>
);
}
export default FunctionCounter;