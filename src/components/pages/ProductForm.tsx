import { Link } from "@mui/material"
import { IProduct } from "../../typescript/interfaces/StepAddProduct"
import AddProductForm, { AddProductFormProps } from "../templates/AddProductForm"

interface ProductFormProps extends AddProductFormProps {
}

const ProductForm: React.FC<ProductFormProps> = (props) => {
    return (
        <AddProductForm setProducts={props.setProducts} />
    )
}

export default ProductForm
