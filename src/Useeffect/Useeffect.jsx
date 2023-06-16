import { useEffect, useState } from "react";

function Useeffect(){
    const[count,setCount] = useState(1)
    const[count2,setCount2] = useState(1)
    useEffect(()=>{
        setCount(count + 1)
    },[count2])
    return(
        <div>
            {count}
            <button onClick={()=>{setCount2(count2 + 1)}}>button</button>
            {count2}
        </div>
    )
}
export default Useeffect;