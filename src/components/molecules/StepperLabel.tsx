import { Step, StepLabel, Stepper } from "@mui/material"
import { memo } from "react"
import { EAddProductSteps } from "../../typescript/interfaces/StepAddProduct"

interface StepperLabelProps {
    steps: Array<string>
    activeStep: EAddProductSteps
}

const StepperLabel: React.FC<StepperLabelProps> = (props) => {
    return (
        <Stepper activeStep={props.activeStep}>
            {props.steps.map(label => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    )
}


export default memo(StepperLabel);
