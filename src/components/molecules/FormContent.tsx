import { Grid } from "@mui/material"
import { memo } from "react"
import FactoryAddProductSteps from "../../factory/FactoryAddProductSteps"
import { EAddProductSteps } from "../../typescript/interfaces/StepAddProduct"
import Button from "../atoms/Button"

export interface FormContentProps {
    activeStep: EAddProductSteps,
    handleBack: React.MouseEventHandler<HTMLButtonElement>,
    handleNext: React.MouseEventHandler<HTMLButtonElement> 
    disableNext: boolean,
    finishOrNextText: string
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
                        text="Back"
                        />
                </Grid>
                <Grid item margin={1}>
                    <Button onClick={props.handleNext}
                        disabled={props.disableNext}
                        text={props.finishOrNextText}
                        />
                </Grid>
            </Grid>
        </Grid>
    )
}


export default memo(FormContent);

