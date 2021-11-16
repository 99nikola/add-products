import { Grid } from "@mui/material";
import { useState } from "react";
import { useForm, UseFormReturn, ValidationMode } from "react-hook-form";
import { EProduct, EProductValues, IProductFormSteps } from "../../typescript/interfaces/StepAddProduct";
import { ProductFormStepperContextProvider } from "../atoms/ProductFormStepperContext";
import AddProductStepper from "../organisms/AddProductStepper";

const mode: {
    mode: keyof ValidationMode,
    reValidateMode: "onBlur" | "onChange" | "onSubmit"
} = {
    mode: "onChange",
    reValidateMode: "onChange"
}

const steps: IProductFormSteps[] = ['name', 'desc', 'image', 'price', 'quantity'];

type ImageStepForm = {image: string[]};
type NameStepForm = {name: string};
type DescriptionStepForm = {desc: string};
type PriceStepForm = {price: number};
type QuantityStepForm = {quantity: number};
export interface ProductForms {
    [EProduct.NAME]: UseFormReturn<NameStepForm, object>;
    [EProduct.DESC]: UseFormReturn<DescriptionStepForm, object>;
    [EProduct.PRICE]: UseFormReturn<PriceStepForm, object>;
    [EProduct.IMAGE]: UseFormReturn<ImageStepForm, object>;
    [EProduct.QUANTITY]: UseFormReturn<QuantityStepForm, object>;
}

const AddProductForm = () => {

    const [activeStep, setActiveStep] = useState<EProductValues>(EProduct.NAME);

    const nameForm = useForm<NameStepForm>({
        ...mode,
        defaultValues: {
            name: ""
        }
    });

    const descForm = useForm<DescriptionStepForm>({
        ...mode,
        defaultValues: {
            desc: ""
        }
    });

    const priceForm = useForm<PriceStepForm>({
        ...mode,
        defaultValues: {
            price: 0
        }
    });

    const qntyForm = useForm<QuantityStepForm>({
        ...mode,
        defaultValues: {
            quantity: 0
        }
    });

    const imageForm = useForm<ImageStepForm>({
        ...mode,
        defaultValues: {
            image: []
        }
    });

    const forms: ProductForms = {
        [EProduct.NAME]: nameForm,
        [EProduct.DESC]: descForm,
        [EProduct.IMAGE]: imageForm,
        [EProduct.PRICE]: priceForm,
        [EProduct.QUANTITY]: qntyForm
    } as const;

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
        <ProductFormStepperContextProvider forms={forms}>
            <form onSubmit={forms[activeStep].handleSubmit(onSubmit, onError)}>
                <Grid container justifyContent="center">
                    <Grid container item xs={6}>
                        <AddProductStepper 
                            activeStep={activeStep}
                            setActiveStep={setActiveStep}
                            steps={steps}
                            />
                    </Grid>
                </Grid>
            </form>
        </ProductFormStepperContextProvider>
    )
}

export default AddProductForm
