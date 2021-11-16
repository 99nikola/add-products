import { Grid } from "@mui/material";
import { useState } from "react";
import { useForm, ValidationMode } from "react-hook-form";
import { EProduct } from "../../typescript/interfaces/StepAddProduct";
import AddProductStepper from "../organisms/AddProductStepper";

const mode: {
    mode: keyof ValidationMode,
    reValidateMode: "onBlur" | "onChange" | "onSubmit"
} = {
    mode: "onChange",
    reValidateMode: "onChange"
}

const steps = ['Name', 'Description', 'Image', 'Price', 'Quantity'];

const AddProductForm = () => {

    const [activeStep, setActiveStep] = useState<EProduct>(EProduct.NAME);

    const nameForm = useForm(mode);
    const descForm = useForm(mode);
    const priceForm = useForm(mode);
    const qntyForm = useForm(mode);
    const imageForm = useForm(mode);

    const forms = {
        [EProduct.NAME]: nameForm,
        [EProduct.DESC]: descForm,
        [EProduct.IMAGE]: imageForm,
        [EProduct.PRICE]: priceForm,
        [EProduct.QUANTITY]: qntyForm
    }


    const onSubmit = (data: any) => {
        console.log("Success: ", activeStep, data);

        if (activeStep === EProduct.QUANTITY) {
            const productInfo = {
                name: nameForm.getValues().name,
                desc: descForm.getValues().desc,
                price: priceForm.getValues().price,
                quantity: qntyForm.getValues().quantity,
                image: imageForm.getValues().image
            }

            console.log(productInfo);
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
