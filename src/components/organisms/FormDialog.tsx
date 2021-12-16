import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import React, { memo } from "react"
import Button from "../atoms/Button";
import EditIcon from '@mui/icons-material/Edit';
import { IProduct } from "../../typescript/interfaces/StepAddProduct";
import ProductForm from "./ProductForm";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormDialogProps {
    product: IProduct,
    handleEditAndCloseDialog: SubmitHandler<IProduct>,
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const style = { 
    width: "30px", 
    height: "30px",
}

const FormDialog: React.FC<FormDialogProps> = (props) => {

    const form = useForm({
        mode: "onSubmit",
        defaultValues: props.product
    });

    const handleOpen = () => {
        props.setOpen(true);
    }
    
    const handleClose = () => {
        props.setOpen(false);
    }

    return (
        <>
            <Button variant="contained" color="warning" onClick={handleOpen}>
                <EditIcon style={style} />
            </Button>

            <Dialog open={props.open} onClose={handleClose}>
                    <DialogTitle>Edit Product</DialogTitle>
                    
                    <DialogContent>
                        <form onSubmit={form.handleSubmit(props.handleEditAndCloseDialog)}>
                            <ProductForm 
                                product={props.product}
                                form={form}
                                />
                            <Button type="submit" color="warning">Upadte</Button>
                        </form>
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={handleClose} color="info">Cancel</Button>
                    </DialogActions>
            </Dialog>
        </>
    )
}

export default memo(FormDialog);
