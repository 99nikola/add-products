import { Grid } from "@mui/material"
import { memo } from "react";
import ControlledInput, { ControlledInputProps } from "../ControlledInput";
import { useFormContext, useFormState } from "react-hook-form";
import { RequiredRule } from "../../../rules/AddProduct";


const NameStep: React.FC<Omit<ControlledInputProps, "control" | "name">> = (props) => {

    const { control } = useFormContext();
    return (
        <Grid item>
            <ControlledInput
                {...props}
                name="name"
                rules={RequiredRule}
                control={control}
                />
        </Grid>
    )
}

export default memo(NameStep);
