import { Grid } from "@mui/material";
import { useState } from "react";
import { useForm, UseFormReturn, ValidationMode } from "react-hook-form";
import { EProduct, EProductValues, IProduct, IProductFormSteps } from "../../typescript/interfaces/StepAddProduct";
import { ProductFormStepperContextProvider } from "../atoms/ProductFormStepperContext";
import AddProductStepper from "../organisms/AddProductStepper";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom"
import { saveProducts } from "../../utils/localStorage";
import { uploadFilesAndGetURLs } from "../../utils/firebase";

const mode: {
    mode: keyof ValidationMode,
    reValidateMode: "onBlur" | "onChange" | "onSubmit"
} = {
    mode: "onChange",
    reValidateMode: "onChange"
}

const steps: IProductFormSteps[] = ['about', 'images', 'price', 'quantity'];

type ImageStepForm = {images: File[]};
type AboutStepForm = {name: string; desc: string};
type PriceStepForm = {price: number};
type QuantityStepForm = {quantity: number};
export interface ProductForms {
    [EProduct.ABOUT]: UseFormReturn<AboutStepForm, object>;
    [EProduct.PRICE]: UseFormReturn<PriceStepForm, object>;
    [EProduct.IMAGE]: UseFormReturn<ImageStepForm, object>;
    [EProduct.QUANTITY]: UseFormReturn<QuantityStepForm, object>;
}

export interface AddProductFormProps {
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
}

const AddProductForm: React.FC<AddProductFormProps> = (props) => {

    const [activeStep, setActiveStep] = useState<EProductValues>(EProduct.ABOUT);
    const navigate = useNavigate();

    const aboutForm = useForm<AboutStepForm>({
        ...mode,
        defaultValues: {
            name: "",
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
            images: []
        }
    });

    const forms: ProductForms = {
        [EProduct.ABOUT]: aboutForm,
        [EProduct.IMAGE]: imageForm,
        [EProduct.PRICE]: priceForm,
        [EProduct.QUANTITY]: qntyForm
    } as const;

    const onSubmit = async (data: any) => {
        console.log("Success: ", activeStep, data);

        if (activeStep === EProduct.QUANTITY) {
            try {
                const imageURLs = await uploadFilesAndGetURLs(imageForm.getValues().images, "/images");
                console.log(imageURLs);

                const product: IProduct = {
                    name: aboutForm.getValues().name,
                    desc: aboutForm.getValues().desc,
                    price: priceForm.getValues().price,
                    quantity: qntyForm.getValues().quantity,
                    images: imageURLs,
                    id: uuid()
                }
                console.log(product);
    
                props.setProducts(products => {
                    const newProducts = [
                        ...products,
                        product
                    ];
    
                    saveProducts(newProducts);
                    
                    return newProducts;
                });
    
    
                navigate("/products");
            } catch (err) {
                console.error(err);
            }

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
