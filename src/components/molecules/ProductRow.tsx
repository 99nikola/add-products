import { TableCell, TableRow } from "@mui/material"
import { IProduct } from "../../typescript/interfaces/StepAddProduct"
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import ImagePreview from "../atoms/Image";
import { useCallback, memo, useState } from "react";
import Button from "../atoms/Button";
import FormDialog from "../organisms/FormDialog";

interface ProductRowProps {
    product: IProduct,
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
}

const style = { 
    width: "30px", 
    height: "30px",
}

const ProductRow: React.FC<ProductRowProps> = (props) => {

    const [ openDialog, setOpenDialog ] = useState<boolean>(false);


    const handleRemove = useCallback(() => {
        const confirm = window.confirm(`Are you sure you want to remove ${props.product.name}`);
        if (!confirm)
            return;
        
        props.setProducts(products => products.filter(product => product.id !== props.product.id));

    }, [props.product.name, props.product.id]);

    const handleEditandCloseDialog = (editedProduct: IProduct) => {

        props.setProducts(products => {
            let clone = products.filter(product => product.id !== editedProduct.id);
            clone.push(editedProduct);
            return clone;
        });

        setOpenDialog(false);
    };

    return (
        <TableRow
            key={props.product.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
            {props.product.name}
            </TableCell>
            <TableCell align="right">{props.product.desc}</TableCell>
            <TableCell align="right">
                <ImagePreview file={props.product.image[0]} />
            </TableCell>
            <TableCell align="right">{props.product.price}</TableCell>
            <TableCell align="right">{props.product.quantity}</TableCell>
            <TableCell align="right">
                <Button
                    onClick={handleRemove}
                    color="error"
                    >
                    <RemoveCircleIcon 
                        style={style}
                        />
                </Button>
            </TableCell>
            <TableCell align="right">
                <FormDialog 
                    product={props.product} 
                    handleEditAndCloseDialog={handleEditandCloseDialog}
                    open={openDialog}
                    setOpen={setOpenDialog}
                    />
            </TableCell>
        </TableRow>
    )
}

export default memo(ProductRow);
