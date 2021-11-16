import { Grid } from "@mui/material"
import { memo } from "react";
import ControlledInput from "../ControlledInput";
import { RequiredRule } from "../../../rules/AddProduct";
import { StepProps } from "../../../typescript/interfaces/StepAddProduct";

const QuantityStep: React.FC<StepProps> = (props) => {
    return (
        <Grid item>
            <ControlledInput
                {...props}
                name="quantity"
                control={props.form.control}
                rules={RequiredRule}
                type="number"
                defaultValue=""
                />
        </Grid>
    )
}

export default memo(QuantityStep);
