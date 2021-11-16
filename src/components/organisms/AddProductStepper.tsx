import { Grid } from "@mui/material";
import { memo } from "react";
import { EProduct } from "../../typescript/interfaces/StepAddProduct";
import { FieldValues, UseFormReturn, useFormState } from "react-hook-form";
import StepperLabel from "../molecules/StepperLabel";
import FormContent from "../molecules/FormContent";

interface AddProductsStepperProps {
    activeStep: EProduct,
    setActiveStep: React.Dispatch<React.SetStateAction<EProduct>>,
    steps: Array<string>,
    forms: Record<EProduct, UseFormReturn<FieldValues, object>>
}

const AddProductStepper: React.FC<AddProductsStepperProps> = (props) => {

    const handleBack = () => {
        props.setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Grid container item direction="column" xs={12} padding={3}>
            <StepperLabel 
                steps={props.steps} 
                activeStep={props.activeStep}
                setActiveStep={props.setActiveStep}
                />
            
            <FormContent 
                activeStep={props.activeStep}
                handleBack={handleBack}
                finishOrNextText={props.activeStep === props.steps.length-1 ? 'Finish' : 'Next'}
                forms={props.forms}
                />
        </Grid>
    );
}

export default memo(AddProductStepper);
