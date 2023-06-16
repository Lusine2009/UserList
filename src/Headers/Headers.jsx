import { useState } from 'react';
import Layout from '../Layout/Layout';
import './Headers.css'
function Headers(){
    const[text,setText] = useState("Button")
    const[color,setColor] = useState("blue")
    function click(){
        setText('Hello Button')
        setColor('red')
    }
    return(
        <div className="button">
      <Layout/>
        </div>
    )
}
export default Headers;