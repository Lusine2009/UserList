import { useEffect, useState } from 'react';
import './UserList.css'
import { user } from './user';

function UserList() {
    const [modal,setModal] = useState(true)
    const [name,setName] = useState("")
    const [lastName,setLastName] = useState("")
    const [age,setAge] = useState("")
    const [email,setEmail] = useState("")
    const [city,setCity] = useState("")
    const [user,setUser] = useState([
        {
            id:1,
            name:"Aram",
            lastName:"Gevorgyan",
            age:25,
            email:"aramgevorgyan@mail.ru",
            city:"Gyumri"
        },
        {
            id:2,
            name:"Mike",
            lastName:"Jekson",
            age:65,
            email:"mikejekson@gmail.ru",
            city:"Anglia"
        },
        {
            id:3,
            name:"Lusine",
            lastName:"Hayrapetyan",
            age:20,
            email:"lusinehayrapetya793@gmail.ru",
            city:"Haravayin Korea"
        },
        {
            id:4,
            name:"Armine",
            lastName:"Poxosyan",
            age:35,
            email:"arminepoxosyan@gmail.ru",
            city:"Russia"
        },
    ]
    )
    //   const[user,setUser] = useState() 
    //   function api(){
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(json => setUser(json))
    //   }
    //   useEffect(()=>{
    //     api()
    //   },[])
    //   console.log(user);
    return(
        <div className="container">
            <div className="max-width">
            {user.map((item) =>
                <div key={item.id} className="container-userList">
                    <div className="container-userlist-lastname">
                        <p>{item.name}</p>
                        <p>{item.lastName}</p>
                    </div>
                    <div className="container-userList-data">
                        <p>{item.email}</p>
                        <p>{item.age}</p>
                        <p>{item.city}</p>
                    </div>
                </div>
            )}
        </div>
       {modal ? null: <div className="container-modal">
            <div className="container-modal-content">
                <div className="input">
                    <input type="text" onChange={(e)=>setName(e.target.value)}/>
                </div>
                {name}
                <div className="input">
                    <input type="text"  onChange={(e)=>setLastName(e.target.value)}/>
                </div>
                {lastName}
                <div className="input">
                    <input type="text" onChange={(e)=>setAge(e.target.value)} />
                </div>
                {age}
                <div className="input">
                    <input type="text"  onChange={(e)=>setEmail(e.target.value)} />
                </div>
                {email}
                <div className="input">
                    <input type="text"  onChange={(e)=>setCity(e.target.value)} />
                </div>
                {city}
                <div className="button"> 
                    <button className="button2">Add User</button>
                </div> 
            </div>
        </div>}
        <div className="add-user-button">
            
            <button className="button1" onClick={()=>{setModal(!modal)}}>Add User</button>
        </div>
    </div>
    )
}
export default UserList;
