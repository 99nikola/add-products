import { memo } from "react";
import { EProduct, EProductValues } from "../typescript/interfaces/StepAddProduct";
import { NameStep, PriceStep, DescStep, QuantityStep, ImageStep } from "../components/molecules/Steps/Steps";
import { useProductFormStepperContext } from "../components/atoms/ProductFormStepperContext";

interface FactoryAddProductStepsProps {
    step: EProductValues,
}

const FactoryAddProductSteps: React.FC<FactoryAddProductStepsProps> = (props) => {
    const { getForm } = useProductFormStepperContext();

    const form = getForm(props.step);

    switch (props.step) {
        case EProduct.NAME:
            return (
                <NameStep form={form} autoFocus/>
            );
        
        case EProduct.DESC:
            return (
                <DescStep form={form} autoFocus/>
            );

        case EProduct.PRICE:
            return (
                <PriceStep form={form} autoFocus/>
            );

        case EProduct.QUANTITY:
            return (
                <QuantityStep form={form} autoFocus/>
            );
        
        case EProduct.IMAGE: 
            return (
                <ImageStep form={form} autoFocus/>
            )
    }
}

export default memo(FactoryAddProductSteps);
