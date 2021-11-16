import { Grid } from "@mui/material"
import { RequiredRule } from "../../../rules/AddProduct"
import { StepProps } from "../../../typescript/interfaces/StepAddProduct"
import UploadInput from "../UploadInput"
import InputController from "../InputController"

const ImageStep: React.FC<StepProps> = (props) => {
    return (
        <Grid item>
            <InputController
                {...props}
                name="image"
                rules={RequiredRule}
                control={props.form.control}
                defaultValue=""
                Componenet={UploadInput}
                />
        </Grid>
    )
}

export default ImageStep
