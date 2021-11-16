import { Grid } from "@mui/material"
import { memo } from "react";
import ControlledInput from "../ControlledInput";
import { RequiredRule } from "../../../rules/AddProduct";
import { StepProps } from "../../../typescript/interfaces/StepAddProduct";


const NameStep: React.FC<StepProps> = (props) => {
    return (
        <Grid item>
            <ControlledInput
                {...props}
                name="name"
                rules={RequiredRule}
                control={props.form.control}
                defaultValue=""
                />
        </Grid>
    )
}

export default memo(NameStep);
