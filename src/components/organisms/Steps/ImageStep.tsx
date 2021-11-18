import { Typography } from "@mui/material"
import { StepProps } from "../../../typescript/interfaces/StepAddProduct"
import ImageField from "../../molecules/product-form-fields/ImageField"

const ImageStep: React.FC<StepProps> = (props) => {
    return (
        <>
            <Typography variant="h6" align="center">
                Select your product image
            </Typography>
            <ImageField form={props.form} autoFocus={props.autoFocus} />
        </>
    )
}

export default ImageStep
