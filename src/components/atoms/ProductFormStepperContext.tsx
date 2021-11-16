import { createContext, useCallback, useContext } from "react";
import { EProductValues } from "../../typescript/interfaces/StepAddProduct";
import { ProductForms } from "../templates/AddProductForm";

const ProductFormStepperContext = createContext({
  getForm: (stepType: EProductValues) => {}
});

export function useProductFormStepperContext() {
  return useContext(ProductFormStepperContext);
}

interface ProductFormStepperContextProviderProps {
  children: any;
  forms: ProductForms;
}

export function ProductFormStepperContextProvider(props: ProductFormStepperContextProviderProps) {
  const getForm = useCallback((stepType: EProductValues) => {
    return props.forms[stepType];
  }, [props.forms]);

  return (
    <ProductFormStepperContext.Provider value={{ getForm }}>
      {props.children}
    </ProductFormStepperContext.Provider>
  )
}