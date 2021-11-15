import { Grid } from "@mui/material";
import { useState } from "react";
import { FormProvider, useForm, ValidationMode } from "react-hook-form";
import { EAddProductSteps, MultipleForm } from "../../typescript/interfaces/StepAddProduct";
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

    const nameForm = useForm({
        ...mode,
        defaultValues: {
            name: ""
        }
    });
    const descForm = useForm({
        ...mode,
        defaultValues: {
            desc: ""
        }
    });
    const priceForm = useForm({
        ...mode,
        defaultValues: {
            price: ""
        }
    });
    const qntyForm = useForm({
        ...mode,
        defaultValues: {
            qnty: ""
        }
    });

    const forms: MultipleForm = {
        0: nameForm,
        1: descForm,
        2: priceForm,
        3: qntyForm
    }

    const methods = useForm({ 
        mode: "onSubmit",
        reValidateMode: "onChange",
        defaultValues: {
          name: "",
          desc: "",
          price: "",
          quantity: "",
        },
        criteriaMode: "firstError",
        shouldFocusError: true,
    });

    const onSubmit = (data: any) => {
        console.log("Success: ", data);
    }

    const onError = (error: any) => {
        console.error("Error: ", error);
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
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
        </FormProvider>
    )
}

export default AddProductForm
