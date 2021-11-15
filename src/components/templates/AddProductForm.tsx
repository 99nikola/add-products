import { Grid, TextField } from "@mui/material";
import { useEffect } from "react";
import { Controller, FormProvider, useForm, useFormState } from "react-hook-form";
import { RequiredRule } from "../../rules/AddProduct";
import ControlledInput from "../molecules/ControlledInput";
import AddProductStepper from "../organisms/AddProductStepper";

const AddProductForm = () => {

    const methods = useForm({ 
        mode: "onSubmit",
        reValidateMode: "onChange",
        defaultValues: {
          name: "",
        //   desc: "",
        //   price: 0,
        //   quantity: 0,
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

                
                <input type="submit" />
            </form>
        </FormProvider>
    )
}

export default AddProductForm
