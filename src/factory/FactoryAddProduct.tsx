import { memo } from "react";
import NameProductStep from "../components/molecules/NameStep";
import { EAddProductSteps } from "../typescript/interfaces/StepAddProduct";

interface FactoryAddProductProps {
    step: EAddProductSteps
}

const FactoryAddProduct: React.FC<FactoryAddProductProps> = ({ step }) => {
    switch (step) {
        case EAddProductSteps.NAME:
            return (
                <NameProductStep name="name"/>
            );
        
        case EAddProductSteps.DESCRIPTION:
            return (
                <h1>DESCTRIPTION STEP</h1>
            );

        case EAddProductSteps.PRICE:
            return (
                <h1>PRICE STEP</h1>
            );

        case EAddProductSteps.QUANTITY:
            return (
                <h1>QUANTITY STEP</h1>
            );
    }
}

export default memo(FactoryAddProduct);
