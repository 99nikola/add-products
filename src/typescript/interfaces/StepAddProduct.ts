import { ControlledInputProps } from "../../components/molecules/InputController";

export enum EProduct {
    NAME,
    DESC,
    IMAGE,
    PRICE,
    QUANTITY 
};

export type EProductType = typeof EProduct;
export type EProductKeys = keyof EProductType;
export type EProductValues = EProductType[EProductKeys];

export interface IProduct {
    name: string,
    desc: string,
    image: any,
    price: number,
    quantity: number
}
 
export interface StepProps extends Omit<ControlledInputProps, "control" | "name" | "Componenet"> {
    form: any
}

export type IProductFormSteps = keyof IProduct;