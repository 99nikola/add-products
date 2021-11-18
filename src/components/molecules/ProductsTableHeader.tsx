import { TableCell, TableHead, TableRow } from "@mui/material"
import { memo } from "react";

const ProductsTableHeader = () => {
    return (
        <TableHead>
          <TableRow>
            <TableCell>Product name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Images</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Remove</TableCell>
            <TableCell align="right">Edit</TableCell>
          </TableRow>
        </TableHead>
    )
}

export default memo(ProductsTableHeader);
