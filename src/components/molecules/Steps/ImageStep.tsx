import { Grid } from "@mui/material"
import { RequiredRule } from "../../../rules/AddProduct"
import { StepProps } from "../../../typescript/interfaces/StepAddProduct"
import InputField from "../../atoms/InputField"
import UploadInput from "../../atoms/UploadInput"
import InputController from "../ControlledInput"

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
