import { useMemo, memo } from "react";
import Table from "../organisms/Table";
import { IUser } from "../../typescript/interfaces/User";
import UserRow from "../molecules/UserRow";

export interface UsersTableProps {
    users: IUser[],
    setUsers: React.Dispatch<React.SetStateAction<IUser[]>>
}

const header = [ "Name", "Phone", "Inspect" ];

const UsersTable: React.FC<UsersTableProps> = (props) => {

    const UserList = useMemo(() => (
        props.users.map(user => (
            <UserRow 
                key={user.id}
                user={user}
                />
        ))
    ), [props.users]);

    return (
        <Table 
            header={header}
            body={UserList}
            />
    );
}

export default memo(UsersTable);
