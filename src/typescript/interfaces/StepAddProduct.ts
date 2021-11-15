import { FieldValues, UseFormReturn } from "react-hook-form";
import { ControlledInputProps } from "../../components/molecules/ControlledInput";

export enum EAddProductSteps {
    NAME,
    DESCRIPTION,
    PRICE,
    QUANTITY 
}

export interface MultipleForm {
    0: UseFormReturn<{
        name: string;
    }, object>;
    1: UseFormReturn<{
        desc: string;
    }, object>;
    2: UseFormReturn<{
        price: string;
    }, object>;
    3: UseFormReturn<{
        qnty: string;
    }, object>;
}

export interface StepProps extends Omit<ControlledInputProps, "control" | "name"> {
    form: any
}