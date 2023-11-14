import './Users.css'
import { useState } from 'react';


const USERS = [
    {
        id: 1000,
        name: "Bob"
    },
    {
        id: 1001,
        name: "Jack"
    },
    {
        id: 1002,
        name: "John"
    }
]


function User()
{
    const [users, setUsers] = useState(USERS);

    const add = () => {
        const newUser = {id:users.length+1, name: "Oleg"};
        setUsers([...users, newUser]);
    }
    return(
        <div className='Users'>
            <h2>User list</h2>
            <ul>
                {USERS.map(i=><li key={i.id}>[{i.id}] - {i.name}</li>)}
                
            </ul>
            <button onClick={add}>Add User</button>
        </div>
    )
}

export default User;