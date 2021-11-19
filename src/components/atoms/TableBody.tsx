import { TableBody as MuiTableBody } from "@mui/material"

export interface TableBodyProps {
    body: any
}

const TableBody: React.FC<TableBodyProps> = (props) => {
    return (
        <MuiTableBody>
            {props.body}
        </MuiTableBody>
    );
}

export default TableBody
