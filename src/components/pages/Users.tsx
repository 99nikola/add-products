import React, { useEffect, useState } from "react"
import { IUser } from "../../typescript/interfaces/User";
import UsersTable from "../templates/UsersTable";



const Users = () => {

    const [ users, setUsers ] = useState<IUser[]>();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(users => setUsers(users))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            {users  && (
                <UsersTable 
                    users={users}
                    setUsers={setUsers as React.Dispatch<React.SetStateAction<IUser[]>>}
                    />
                )}
        </div>
    );
}

export default Users
