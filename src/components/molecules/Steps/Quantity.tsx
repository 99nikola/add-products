import { Grid } from "@mui/material"
import { memo } from "react";
import ControlledInput, { ControlledInputProps } from "../ControlledInput";
import { useFormContext, useFormState } from "react-hook-form";
import { RequiredRule } from "../../../rules/AddProduct";

const QuantityStep: React.FC<Omit<ControlledInputProps, "control" | "name">> = (props) => {

    const { control } = useFormContext();

    return (
        <Grid item>
            <ControlledInput
                {...props}
                name="quantity"
                control={control}
                rules={RequiredRule}
                type="number"
                />
        </Grid>
    )
}

export default memo(QuantityStep);
