import { Grid } from "@mui/material"
import { memo } from "react";
import ControlledInput from "./ControlledInput";
import { useFormContext, useFormState } from "react-hook-form";
import { RequiredRule } from "../../rules/AddProduct";

interface NameProductStepProps {
    name: string
}

const NameProductStep: React.FC<NameProductStepProps> = (props) => {

    const { control } = useFormContext();

    return (
        <Grid item>

            <ControlledInput
                name={props.name}
                control={control}
                rules={RequiredRule}
                />

        </Grid>
    )
}

export default NameProductStep;
