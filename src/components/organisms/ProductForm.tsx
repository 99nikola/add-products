import { memo } from "react";
import { UseFormReturn } from "react-hook-form";
import { IProduct } from "../../typescript/interfaces/StepAddProduct";
import DescField from "../molecules/product-form-fields/DescField";
import ImageField from "../molecules/product-form-fields/ImageField";
import NameField from "../molecules/product-form-fields/NameField";
import PriceField from "../molecules/product-form-fields/PriceField";
import QuantityField from "../molecules/product-form-fields/QuantityField";

interface ProductFormProps {
    product: IProduct,
    form: UseFormReturn<IProduct, object>
}

const ProductForm: React.FC<ProductFormProps> = (props) => {
    return (
        <>
            <NameField control={props.form.control} autoFocus/>
            <DescField control={props.form.control} />
            <ImageField form={props.form} images={props.product.images}/>
            <QuantityField control={props.form.control} />
            <PriceField control={props.form.control} />
        </>
    )
}

export default memo(ProductForm);
