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
                <NameStep form={form} />
            );
        
        case EProduct.DESC:
            return (
                <DescStep form={form} />
            );

        case EProduct.PRICE:
            return (
                <PriceStep form={form} />
            );

        case EProduct.QUANTITY:
            return (
                <QuantityStep form={form} />
            );
        
        case EProduct.IMAGE: 
            return (
                <ImageStep form={form} />
            )
    }
}

export default memo(FactoryAddProductSteps);
