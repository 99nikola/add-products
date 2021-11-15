import { memo } from "react";
import { EAddProductSteps, MultipleForm } from "../typescript/interfaces/StepAddProduct";
import { NameStep, PriceStep, DescStep, QuantityStep } from "../components/molecules/Steps/Steps";

interface FactoryAddProductStepsProps {
    step: EAddProductSteps,
    forms: MultipleForm
}

const FactoryAddProductSteps: React.FC<FactoryAddProductStepsProps> = (props) => {
    switch (props.step) {
        case EAddProductSteps.NAME:
            return (
                <NameStep form={props.forms[0]} />
            );
        
        case EAddProductSteps.DESCRIPTION:
            return (
                <DescStep form={props.forms[1]} />
            );

        case EAddProductSteps.PRICE:
            return (
                <PriceStep form={props.forms[2]} />
            );

        case EAddProductSteps.QUANTITY:
            return (
                <QuantityStep form={props.forms[3]} />
            );
    }
}

export default memo(FactoryAddProductSteps);
