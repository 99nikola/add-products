import { Grid } from "@mui/material"
import React from "react"
import { RequiredRule } from "../../../rules/AddProduct"
import InputField from "../../atoms/InputField"
import InputController, { InputControllerProps } from "../InputController"

interface NameFieldProps extends Omit<InputControllerProps, "Componenet" | "name"> {
}

const NameField: React.FC<NameFieldProps> = (props) => {
    return (
        <Grid item paddingTop={1} paddingBottom={1}>
            <InputController
                autoFocus={props.autoFocus}
                label="Product name"
                name="name"
                rules={RequiredRule}
                control={props.control}
                defaultValue=""
                Componenet={InputField}
                />
        </Grid>
    )
}

export default NameField
