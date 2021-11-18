import { Grid, Typography } from "@mui/material"
import { memo } from "react";
import { StepProps } from "../../../typescript/interfaces/StepAddProduct";
import NameField from "../../molecules/product-form-fields/NameField";
import DescField from "../../molecules/product-form-fields/DescField";

const AboutStep: React.FC<StepProps> = (props) => {
    return (
        <Grid container item direction="column" >
            <Typography variant="h6">
                Describe your product
            </Typography> 
            <NameField control={props.form.control} autoFocus={props.autoFocus} />
            <DescField control={props.form.control} />
        </Grid>
    )
}

export default memo(AboutStep);
