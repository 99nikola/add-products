import { Grid } from "@mui/material";
import { useState } from "react";
import { useForm, ValidationMode } from "react-hook-form";
import { EAddProductSteps } from "../../typescript/interfaces/StepAddProduct";
import AddProductStepper from "../organisms/AddProductStepper";

const mode: {
    mode: keyof ValidationMode,
    reValidateMode: "onBlur" | "onChange" | "onSubmit"
} = {
    mode: "onChange",
    reValidateMode: "onChange"
}

const steps = ['Name', 'Description', 'Price', 'Quantity'];

const AddProductForm = () => {

    const [activeStep, setActiveStep] = useState<EAddProductSteps>(EAddProductSteps.NAME);

    const nameForm = useForm(mode);
    const descForm = useForm(mode);
    const priceForm = useForm(mode);
    const qntyForm = useForm(mode);

    const forms = {
        0: nameForm,
        1: descForm,
        2: priceForm,
        3: qntyForm
    }

    const onSubmit = (data: any) => {
        console.log("Success: ", data);
        if (activeStep === EAddProductSteps.QUANTITY) {
            console.log("Last step done");
            return;
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    const onError = (error: any) => {
        console.error("Error: ", error);
    }

    return (
        <form onSubmit={forms[activeStep].handleSubmit(onSubmit, onError)}>
            <Grid container justifyContent="center">
                <Grid container item xs={6}>
                    <AddProductStepper 
                        activeStep={activeStep}
                        setActiveStep={setActiveStep}
                        steps={steps}
                        forms={forms}
                        />
                </Grid>
            </Grid>
        </form>
    )
}

export default AddProductForm
