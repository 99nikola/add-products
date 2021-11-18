import { Typography } from "@mui/material";
import { memo } from "react";
import { StepProps } from "../../../typescript/interfaces/StepAddProduct";
import QuantityField from "../../molecules/product-form-fields/QuantityField";

const QuantityStep: React.FC<StepProps> = (props) => {
    return (
        <>
            <Typography variant="h6">
                How many do you sell
            </Typography> 
            <QuantityField control={props.form.control} autoFocus={props.autoFocus} />
        </>
    )
}

export default memo(QuantityStep);
