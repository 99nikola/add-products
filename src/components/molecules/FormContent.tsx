import { Grid } from "@mui/material"
import { memo } from "react"
import { FieldValues, UseFormReturn } from "react-hook-form"
import FactoryAddProductSteps from "../../factory/FactoryAddProductSteps"
import { EAddProductSteps } from "../../typescript/interfaces/StepAddProduct"
import Button from "../atoms/Button"

export interface FormContentProps {
    activeStep: EAddProductSteps,
    handleBack: React.MouseEventHandler<HTMLButtonElement>,
    finishOrNextText: string,
    forms: Record<EAddProductSteps, UseFormReturn<FieldValues, object>>
}

const FormContent: React.FC<FormContentProps> = (props) => {
    return (
        <Grid container direction="column" alignItems="center" padding={2}>
            <Grid item padding={2}>
                <FactoryAddProductSteps
                    step={props.activeStep}
                    forms={props.forms}
                    />
            </Grid>
            <Grid container item direction="row" justifyContent="center" alignItems="center">
                <Grid item margin={1}>
                    <Button
                        color="inherit"
                        disabled={props.activeStep === 0}
                        onClick={props.handleBack}
                        text="Back"
                        />
                </Grid>
                <Grid item margin={1}>
                    <Button
                        text={props.finishOrNextText}
                        type="submit"
                        />
                </Grid>
            </Grid>
        </Grid>
    )
}


export default memo(FormContent);
