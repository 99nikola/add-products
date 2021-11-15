import { Grid } from "@mui/material";
import { memo } from "react";
import { EAddProductSteps, MultipleForm } from "../../typescript/interfaces/StepAddProduct";
import { UseFormReturn, useFormState } from "react-hook-form";
import StepperLabel from "../molecules/StepperLabel";
import FactoryContentOrFinish from "../../factory/FactoryContentOrFinish";

interface AddProductsStepperProps {
    activeStep: EAddProductSteps,
    setActiveStep: React.Dispatch<React.SetStateAction<EAddProductSteps>>,
    steps: Array<string>,
    forms: MultipleForm
}

const AddProductStepper: React.FC<AddProductsStepperProps> = (props) => {

    const formState = props.forms[props.activeStep].formState;

    const handleNext = () => {
        props.setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        props.setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        props.setActiveStep(0);
    };

    return (
        <Grid container item direction="column" xs={12} padding={3}>
            <StepperLabel 
                steps={props.steps} 
                activeStep={props.activeStep}
                />

            <FactoryContentOrFinish 
                isFinish={props.activeStep === props.steps.length}
                handleReset={handleReset}
                handleNext={handleNext}
                handleBack={handleBack}
                activeStep={props.activeStep}
                disableNext={!formState.isValid}
                finishOrNextText={props.activeStep === props.steps.length - 1 ? 'Finish' : 'Next'}
                forms={props.forms}
                />
        </Grid>
    );
}

export default memo(AddProductStepper);
