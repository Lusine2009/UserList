import { useState } from 'react';
import Home from '../Home/Home';
import UserList from '../UserList/UserLIst';
import './Login.css'
function Login(){
    const[login,setLogin] = useState("")
    const[password,setPassword] = useState("")
    const[booleanTrue,setBooleanTrue] = useState("true")
    function click(){
        if(login === "Gyumri" && password === "2023"){
            setBooleanTrue(false)
        }
    }
    return(
        <>
        {
            booleanTrue ? <div className="Login">
        <div className="Login">
            <div>
            <div>
                <input type="text" placeholder="Login" onChange={(event)=>{setLogin(event.target.value)}}/>
            </div>
                <input type="password" placeholder='Password'onChange={(event)=>{setPassword(event.target.value)}}></input>
            <div>
                <button onClick={click}>Login</button>
            </div>
            </div>
            </div>
        </div>:
      <Home/>
        }
        </>
    )
}
export default Login;
