import { Grid } from "@mui/material"
import { memo } from "react";
import InputController from "../InputController";
import { RequiredRule } from "../../../rules/AddProduct";
import { StepProps } from "../../../typescript/interfaces/StepAddProduct";
import InputField from "../../atoms/InputField";


const DescStep: React.FC<StepProps> = (props) => {
    return (
        <Grid item>
            <InputController
                {...props}
                name="desc"
                rules={RequiredRule}
                control={props.form.control}
                defaultValue=""
                Componenet={InputField}
                />
        </Grid>
    )
}

export default memo(DescStep);
