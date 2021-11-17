import { TableCell, TableRow } from "@mui/material"
import { IProduct } from "../../typescript/interfaces/StepAddProduct"
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import ImagePreview from "../atoms/Image";
import { useCallback, memo } from "react";

interface ProductRowProps {
    product: IProduct,
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
}

const ProductRow: React.FC<ProductRowProps> = (props) => {

    const handleRemove = useCallback(() => {
        const confirm = window.confirm(`Are you sure you want to remove ${props.product.name}`);
        if (!confirm)
            return;
        
        props.setProducts(products => products.filter(product => product.id !== props.product.id));

    }, [props.product]);

    return (
        <TableRow
            key={props.product.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
            {props.product.name}
            </TableCell>
            <TableCell align="right">{props.product.desc}</TableCell>
            {/* <TableCell align="right">
                <ImagePreview file={product.image[0]} />
            </TableCell> */}
            <TableCell align="right">{props.product.price}</TableCell>
            <TableCell align="right">{props.product.quantity}</TableCell>
            <TableCell align="right">
                <RemoveCircleIcon 
                    style={{ width: "40px", height: "40px" }}
                    onClick={handleRemove}
                    />
            </TableCell>
        </TableRow>
    )
}

export default memo(ProductRow);
