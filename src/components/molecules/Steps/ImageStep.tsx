import { Grid } from "@mui/material"
import { RequiredRule } from "../../../rules/AddProduct"
import { StepProps } from "../../../typescript/interfaces/StepAddProduct"
import UploadInput from "../UploadInput"
import InputController from "../InputController"
import Image from "../../atoms/Image"
import { useMemo, useState } from "react"

const ImageStep: React.FC<StepProps> = (props) => {

    const [ images, setImages ] = useState<Array<string>>(props.form.getValues().image || []);

    const Images = useMemo(() => {
        return (
            images.map((image,index) => {
              return  (
                <Image key={index} file={image} />  // change index as key
            )})
        );
    }, [images]);

    return (
        <Grid item>
            <InputController
                {...props}
                setImages={setImages}
                name="image"
                rules={RequiredRule}
                control={props.form.control}
                defaultValue=""
                Componenet={UploadInput}
                />
            {Images}
        </Grid>
    )
}

export default ImageStep
