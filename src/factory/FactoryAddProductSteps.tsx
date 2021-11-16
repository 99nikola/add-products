import { memo } from "react";
import { EProduct } from "../typescript/interfaces/StepAddProduct";
import { NameStep, PriceStep, DescStep, QuantityStep, ImageStep } from "../components/molecules/Steps/Steps";
import { FieldValues, UseFormReturn } from "react-hook-form";

interface FactoryAddProductStepsProps {
    step: EProduct,
    forms: Record<EProduct, UseFormReturn<FieldValues, object>>
}

const FactoryAddProductSteps: React.FC<FactoryAddProductStepsProps> = (props) => {
    
    const form = props.forms[props.step];

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
