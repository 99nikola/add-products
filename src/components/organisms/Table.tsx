import { Paper, TableContainer, Table as MuiTable } from "@mui/material"
import TableHeader, { TableHeaderProps } from "../atoms/TableHeader"
import TableBody, { TableBodyProps } from "../atoms/TableBody";

interface TableProps extends TableHeaderProps, TableBodyProps {
}

const Table: React.FC<TableProps> = (props) => {
    return (
        <TableContainer component={Paper}>
            <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHeader header={props.header} />
                <TableBody body={props.body} />
            </MuiTable>
        </TableContainer>
    )
}

export default Table
