import {useState} from "react";
import TableComponent from "./TableComponent";
function OurComponet(props){
    const [count, setCount]= useState(0);
    function handelClick(action){
        action ==="incre"? setCount(x=>x+1): setCount(x=>x-1);
    }
    return(
        <div>

            <h1>Welcome To {props.desi}</h1>
            <p>This is my new project create using vite on vs code </p>
            <p> count changes displayed here {count}</p>
            <TableComponent/>
            <button onClick={()=>handelClick("incre")}> Add {props.desi} count </button>
            <button onClick={()=>handelClick("decre")}> Decrement {props.desi}  count </button>
        </div>
        )
}
export default OurComponet;