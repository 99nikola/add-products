export enum EProduct {
    ABOUT,
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
    images: any,
    price: number,
    quantity: number,
    id: string
}
 
export interface StepProps {
    form: any,
    autoFocus?: boolean
}

interface IProductForm {
    about: object
    image: any,
    price: number,
    quantity: number,
}

export type IProductFormSteps = keyof IProductForm;