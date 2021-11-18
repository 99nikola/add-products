import { Grid } from "@mui/material"
import React from "react"
import { RequiredRule } from "../../../rules/AddProduct"
import InputField from "../../atoms/InputField"
import InputController, { InputControllerProps } from "../InputController"

interface QuantityFieldProps extends Omit<InputControllerProps, "Componenet" | "name"> {
}


const QuantityField: React.FC<QuantityFieldProps> = (props) => {
    return (
        <Grid item paddingTop={1} paddingBottom={1}>
            <InputController
                {...props}
                name="quantity"
                label="QUantity"
                control={props.control}
                rules={RequiredRule}
                type="number"
                defaultValue=""
                Componenet={InputField}
                />
        </Grid>
    )
}

export default QuantityField
