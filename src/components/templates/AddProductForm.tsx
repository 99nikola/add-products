import { Grid } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import AddProductStepper from "../organisms/AddProductStepper";

const AddProductForm = () => {

    const methods = useForm({ 
        mode: "all",
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
                        <AddProductStepper />
                    </Grid>
                </Grid>
            </form>
        </FormProvider>
    )
}

export default AddProductForm
