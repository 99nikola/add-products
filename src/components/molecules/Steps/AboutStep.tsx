import { Grid } from "@mui/material"
import { memo } from "react";
import InputController from "../InputController";
import { RequiredRule } from "../../../rules/AddProduct";
import { StepProps } from "../../../typescript/interfaces/StepAddProduct";
import InputField from "../../atoms/InputField";


const AboutStep: React.FC<StepProps> = (props) => {
    return (
        <Grid container item direction="column" >
            <p>Describe your product</p>
            <Grid item paddingTop={2}>
                <InputController
                    autoFocus={props.autoFocus}
                    label="Product name"
                    name="name"
                    rules={RequiredRule}
                    control={props.form.control}
                    defaultValue=""
                    Componenet={InputField}
                    />
            </Grid>

            <Grid item paddingTop={2}>
                <InputController
                    name="desc"
                    label="Description"
                    rules={RequiredRule}
                    control={props.form.control}
                    defaultValue=""
                    Componenet={InputField}
                    />
            </Grid>
        </Grid>
    )
}

export default memo(AboutStep);
