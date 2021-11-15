import { memo } from "react";
import { EAddProductSteps } from "../typescript/interfaces/StepAddProduct";
import { NameStep, PriceStep, DescStep, QuantityStep } from "../components/molecules/Steps/Steps";

interface FactoryAddProductStepsProps {
    step: EAddProductSteps
}

const FactoryAddProductSteps: React.FC<FactoryAddProductStepsProps> = (props) => {
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

export default memo(FactoryAddProductSteps);
