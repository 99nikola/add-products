import { Step, StepLabel, Stepper, Typography, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Button from "../atoms/Button";
import FactoryAddProduct from "../../factory/FactoryAddProduct";
import { EAddProductSteps } from "../../typescript/interfaces/StepAddProduct";
import { useFormContext, useFormState } from "react-hook-form";

const steps = ['Name', 'Description', 'Price', 'Quantity'];

const AddProductStepper = () => {

    const [activeStep, setActiveStep] = useState<EAddProductSteps>(EAddProductSteps.NAME);
    // const formState = useFormState();
    const { formState } = useFormContext();

    useEffect(() => {
        console.log(formState);
    }, [formState]);


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
            <Stepper activeStep={activeStep}>
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length ? (
            <>
                <Typography>
                    All steps completed
                </Typography>
                <Grid container item direction="row">
                    <Button 
                        onClick={handleReset}
                        text="Reset"
                        />
                </Grid>
            </>
            ) : (
            <Grid container direction="column" alignItems="center" padding={2}>
                <Grid item padding={2}>
                    <FactoryAddProduct 
                        step={activeStep}
                        />
                </Grid>
                <Grid container item direction="row" justifyContent="center" alignItems="center">
                    <Grid item margin={1}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            text="Back"
                            />
                    </Grid>
                    <Grid item margin={1}>
                        <Button onClick={handleNext}
                            disabled={!formState.isValid || formState.isValidating}
                            text={activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            />
                    </Grid>
                </Grid>
            </Grid>
            )}
        </Grid>
    );
}

export default AddProductStepper;
