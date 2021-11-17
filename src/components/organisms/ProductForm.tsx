import { SubmitHandler, useForm, UseFormReturn } from "react-hook-form";
import { IProduct } from "../../typescript/interfaces/StepAddProduct";
import DescStep from "../molecules/Steps/DescStep";
import ImageStep from "../molecules/Steps/ImageStep";
import NameStep from "../molecules/Steps/NameStep"
import PriceStep from "../molecules/Steps/PriceStep";
import { QuantityStep } from "../molecules/Steps/Steps";

interface ProductFormProps {
    product: IProduct,
    form: UseFormReturn<IProduct, object>
}

const ProductForm: React.FC<ProductFormProps> = (props) => {
    return (
        <>
            <NameStep form={props.form} />
            <DescStep form={props.form} />
            <ImageStep form={props.form} />
            <PriceStep form={props.form} />
            <QuantityStep form={props.form} />
        </>
    )
}

export default ProductForm
