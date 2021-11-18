import { memo } from "react";
import { UseFormReturn } from "react-hook-form";
import { IProduct } from "../../typescript/interfaces/StepAddProduct";
import AboutStep from "../molecules/Steps/AboutStep";
import ImageStep from "../molecules/Steps/ImageStep";
import PriceStep from "../molecules/Steps/PriceStep";
import { QuantityStep } from "../molecules/Steps/Steps";

interface ProductFormProps {
    product: IProduct,
    form: UseFormReturn<IProduct, object>
}

const ProductForm: React.FC<ProductFormProps> = (props) => {
    return (
        <>
            <AboutStep form={props.form} autoFocus/>
            <ImageStep form={props.form} />
            <QuantityStep form={props.form} />
            <PriceStep form={props.form} />
        </>
    )
}

export default memo(ProductForm);
