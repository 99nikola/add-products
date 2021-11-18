import { Grid } from "@mui/material"
import React from "react"
import { RequiredRule } from "../../../rules/AddProduct"
import InputField from "../../atoms/InputField"
import InputController, { InputControllerProps } from "../InputController"

interface DescFieldProps extends Omit<InputControllerProps, "Componenet" | "name"> {
}

const DescField: React.FC<DescFieldProps> = (props) => {
    return (
        <Grid item paddingTop={1} paddingBottom={1}>
            <InputController
                name="desc"
                label="Description"
                rules={RequiredRule}
                control={props.control}
                defaultValue=""
                Componenet={InputField}
                />
        </Grid>
    );
}

export default DescField
