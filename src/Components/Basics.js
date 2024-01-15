import React, {useState} from "react";
const CounterApp=()=>{
    const[count, setCount] = useState(0);

    function increase(){
        setCount(count+1)
    }
    
    function decrease(){
        if(count>=1){
        setCount(count-1);
        }
        else{
            setCount(0);
        }
    }

    function reset(){
        setCount(0);
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterApp;