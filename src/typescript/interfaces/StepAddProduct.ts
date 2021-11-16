import { FieldValues, UseFormReturn } from "react-hook-form";
import { ControlledInputProps } from "../../components/molecules/ControlledInput";

export enum EAddProductSteps {
    NAME,
    DESCRIPTION,
    PRICE,
    QUANTITY 
}

// export interface MultipleForm {
//     Record<EAddProductSteps, UseFormReturn<FieldValues, object>>
// }

export interface StepProps extends Omit<ControlledInputProps, "control" | "name"> {
    form: any
}