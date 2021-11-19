import { TableCell, TableRow } from "@mui/material"
import { IUser } from "../../typescript/interfaces/User"
import InfoDialog from "../organisms/InfoDialog";
import { useState } from "react";

interface UserRowProps {
    user: IUser;
}

const UserRow: React.FC<UserRowProps> = (props) => {

    const [ open, setOpen ] = useState(false);

    return (
        <TableRow
            key={props.user.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
            {props.user.name}
            </TableCell>
            <TableCell align="right">{props.user.phone}</TableCell>
            <TableCell align="right">
                <InfoDialog 
                    open={open}
                    setOpen={setOpen}
                    id={props.user.id}
                    />
            </TableCell>

        </TableRow>
    )
}

export default UserRow
