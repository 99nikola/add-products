import { Grid } from "@mui/material";
import { memo, useState } from "react";
import { EAddProductSteps } from "../../typescript/interfaces/StepAddProduct";
import { useFormState } from "react-hook-form";
import StepperLabel from "../molecules/StepperLabel";
import FactoryContentOrFinish from "../../factory/FactoryContentOrFinish";

const steps = ['Name', 'Description', 'Price', 'Quantity'];

const AddProductStepper = () => {

    const [activeStep, setActiveStep] = useState<EAddProductSteps>(EAddProductSteps.NAME);
    const formState = useFormState();


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Grid container item direction="column" xs={12} padding={3}>
            <StepperLabel 
                steps={steps} 
                activeStep={activeStep}
                />

            <FactoryContentOrFinish 
                isFinish={activeStep === steps.length}
                handleReset={handleReset}
                handleNext={handleNext}
                handleBack={handleBack}
                activeStep={activeStep}
                disableNext={!formState.isValid || formState.isValidating}
                finishOrNextText={activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                />
        </Grid>
    );
}

export default memo(AddProductStepper);
