import { TableCell, TableHead, TableRow as MuiTableRow } from "@mui/material"
import { useMemo } from "react"

export interface TableHeaderProps {
    header: string[]
}

const TableHeader: React.FC<TableHeaderProps> = (props) => {

    const TableRow = useMemo(() => (
        <MuiTableRow>
            {props.header.map((cell, index) => (
                <TableCell key={cell} align={index === 0 ? undefined : "right"}>{cell}</TableCell>
            ))}
        </MuiTableRow>
    ), [props.header]);

    return (
        <TableHead>
            {TableRow}
        </TableHead>
    )
}

export default TableHeader
