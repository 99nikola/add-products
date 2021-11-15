import { Grid } from "@mui/material"
import { memo } from "react";
import ControlledInput from "../ControlledInput";
import { RequiredRule } from "../../../rules/AddProduct";
import { StepProps } from "../../../typescript/interfaces/StepAddProduct";


const PriceStep: React.FC<StepProps> = (props) => {
    return (
        <Grid item>
            <ControlledInput
                {...props}
                name="price"
                control={props.form.control}
                rules={RequiredRule}
                type="number"
                />
        </Grid>
    )
}

export default memo(PriceStep);
