import { Grid } from "@mui/material";
import { memo } from "react";
import { EProduct, EProductValues } from "../../typescript/interfaces/StepAddProduct";
import StepperLabel from "../molecules/StepperLabel";
import FormContent from "./FormContent";

interface AddProductsStepperProps {
    activeStep: EProductValues,
    setActiveStep: React.Dispatch<React.SetStateAction<EProduct>>,
    steps: Array<string>,
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
                />
        </Grid>
    );
}

export default memo(AddProductStepper);
