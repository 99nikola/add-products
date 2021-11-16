import { Step, StepLabel, Stepper } from "@mui/material"
import React, { memo, useCallback, useMemo } from "react"
import { EProduct } from "../../typescript/interfaces/StepAddProduct"

interface StepperLabelProps {
    steps: Array<string>
    activeStep: EProduct,
    setActiveStep: React.Dispatch<React.SetStateAction<EProduct>>
}

const StepperLabel: React.FC<StepperLabelProps> = (props) => {

    const onClickChangeStep = useCallback((step: EProduct) => {
        if (step > props.activeStep)
            return;
            
        props.setActiveStep(step);
    }, [props.activeStep]);

    const Steps = useMemo(() =>(
        props.steps.map((label, index) => (
            <Step key={label}>
                <StepLabel
                    onClick={() => onClickChangeStep(index)}
                    >{label}</StepLabel>
            </Step>
        ))
    ), [props.steps, onClickChangeStep]);

    return (
        <Stepper activeStep={props.activeStep}>
            {Steps}
        </Stepper>
    )
}


export default memo(StepperLabel);
