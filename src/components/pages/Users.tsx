import React, { useEffect, useState } from "react"
import { IUser } from "../../typescript/interfaces/User";
import UsersTable from "../templates/UsersTable";

const fetchUsers = () => fetch("https://jsonplaceholder.typicode.com/users");


const Users = () => {

    const [ users, setUsers ] = useState<IUser[]>();

    useEffect(() => {
        fetchUsers()
            .then(res => res.json())
            .then(users => setUsers(users))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            {users  
                ?   <UsersTable 
                        users={users}
                        setUsers={setUsers as React.Dispatch<React.SetStateAction<IUser[]>>}
                        />
                :   "Loading"
            }
        </div>
    );
}

export default Users
