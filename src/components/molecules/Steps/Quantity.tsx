import { Grid } from "@mui/material"
import { memo } from "react";
import InputController from "../InputController";
import { RequiredRule } from "../../../rules/AddProduct";
import { StepProps } from "../../../typescript/interfaces/StepAddProduct";
import InputField from "../../atoms/InputField";

const QuantityStep: React.FC<StepProps> = (props) => {
    return (
        <Grid item>
            <InputController
                {...props}
                name="quantity"
                control={props.form.control}
                rules={RequiredRule}
                type="number"
                defaultValue=""
                Componenet={InputField}
                />
        </Grid>
    )
}

export default memo(QuantityStep);
