import { Grid } from "@mui/material"
import { memo } from "react";
import ControlledInput from "../ControlledInput";
import { RequiredRule } from "../../../rules/AddProduct";
import { StepProps } from "../../../typescript/interfaces/StepAddProduct";


const DescStep: React.FC<StepProps> = (props) => {
    return (
        <Grid item>
            <ControlledInput
                {...props}
                name="desc"
                rules={RequiredRule}
                control={props.form.control}
                />
        </Grid>
    )
}

export default memo(DescStep);
