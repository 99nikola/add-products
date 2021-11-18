import { Grid } from "@mui/material"
import React from "react"
import { RequiredRule } from "../../../rules/AddProduct"
import InputField from "../../atoms/InputField"
import InputController, { InputControllerProps } from "../InputController"

interface PriceFieldProps extends Omit<InputControllerProps, "Componenet" | "name"> {
}


const PriceField: React.FC<PriceFieldProps> = (props) => {
    return (
        <Grid item paddingTop={1} paddingBottom={1}>
            <InputController
                name="price"
                label="Price"
                control={props.control}
                rules={RequiredRule}
                type="number"
                defaultValue=""
                Componenet={InputField}
                />
        </Grid>
    )
}

export default PriceField
