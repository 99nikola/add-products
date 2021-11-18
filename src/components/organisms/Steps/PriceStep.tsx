import { Typography } from "@mui/material";
import { memo } from "react";
import { StepProps } from "../../../typescript/interfaces/StepAddProduct";
import PriceField from "../../molecules/product-form-fields/PriceField";


const PriceStep: React.FC<StepProps> = (props) => {
    return (
        <>
            <Typography variant="h6">
                Define your price
            </Typography>
            <PriceField control={props.form.control} autoFocus={props.autoFocus}/>
        </>
    );
}

export default memo(PriceStep);
