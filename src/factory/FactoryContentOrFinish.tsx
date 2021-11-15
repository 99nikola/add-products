import { memo } from "react";
import FormContent, { FormContentProps } from "../components/molecules/FormContent";
import ResetOrSubmit, { ResetOrSubmitProps } from "../components/molecules/ResetOrSubmit";

interface FactoryContentOrFinishProps extends ResetOrSubmitProps, FormContentProps {
    isFinish: boolean
}

const FactoryContentOrFinish: React.FC<FactoryContentOrFinishProps> = (props) => {

    switch (props.isFinish) {
        case true:
            return (
                <ResetOrSubmit handleReset={props.handleReset} />
            );
        
        case false:
            return (
                <FormContent 
                    activeStep={props.activeStep}
                    handleBack={props.handleBack}
                    handleNext={props.handleNext}
                    disableNext={props.disableNext}
                    finishOrNextText={props.finishOrNextText}
                    />
            );
    }

}

export default memo(FactoryContentOrFinish);
