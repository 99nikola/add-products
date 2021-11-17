import { Grid } from "@mui/material"
import { memo } from "react"
import { FieldValues, UseFormReturn } from "react-hook-form"
import FactoryAddProductSteps from "../../factory/FactoryAddProductSteps"
import { EProduct, EProductValues } from "../../typescript/interfaces/StepAddProduct"
import Button from "../atoms/Button"
import { ProductForms } from "../templates/AddProductForm"

export interface FormContentProps {
    activeStep: EProductValues,
    handleBack: React.MouseEventHandler<HTMLButtonElement>,
    finishOrNextText: string,
}

const FormContent: React.FC<FormContentProps> = (props) => {
    return (
        <Grid container direction="column" alignItems="center" padding={2}>
            <Grid item padding={2}>
                <FactoryAddProductSteps
                    step={props.activeStep}
                    />
            </Grid>
            <Grid container item direction="row" justifyContent="center" alignItems="center">
                <Grid item margin={1}>
                    <Button
                        color="inherit"
                        disabled={props.activeStep === 0}
                        onClick={props.handleBack}
                        >Back</Button>
                </Grid>
                <Grid item margin={1}>
                    <Button
                        type="submit"
                        >{props.finishOrNextText}</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default memo(FormContent);

