import { memo } from "react";
import { RequiredRule } from "../rules/AddProduct";
import { EAddProductSteps } from "../typescript/interfaces/StepAddProduct";
import { NameStep, PriceStep, DescStep, QuantityStep } from "../components/molecules/Steps/Steps";

interface FactoryAddProductProps {
    step: EAddProductSteps
}

const FactoryAddProduct: React.FC<FactoryAddProductProps> = (props) => {
    switch (props.step) {
        case EAddProductSteps.NAME:
            return (
                <NameStep />
            );
        
        case EAddProductSteps.DESCRIPTION:
            return (
                <DescStep />
            );

        case EAddProductSteps.PRICE:
            return (
                <PriceStep />
            );

        case EAddProductSteps.QUANTITY:
            return (
                <QuantityStep />
            );
    }
}

export default FactoryAddProduct;
