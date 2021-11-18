import { Grid } from "@mui/material"
import React, { useMemo, useState } from "react"
import { RequiredRule } from "../../../rules/AddProduct"
import InputField from "../../atoms/InputField"
import InputController, { InputControllerProps } from "../InputController"
import Image from "../../atoms/Image";
import UploadInput from "../UploadInput"

interface ImageFieldProps extends Omit<InputControllerProps, "Componenet" | "name"> {
    form: any
}

const ImageField: React.FC<ImageFieldProps> = (props) => {

    const [ images, setImages ] = useState<string[]>(props.form.getValues().images);

    const Images = useMemo(() => {
        return (
            images.map((image,index) => {
              return  (
                <Image key={index} file={image} />  // change index as key
            )})
        );
    }, [images]);

    return (
        <Grid item paddingTop={1} paddingBottom={1}>
            <InputController
                {...props}
                setImages={setImages}
                name="images"
                rules={RequiredRule}
                control={props.form.control}
                defaultValue={[]}
                Componenet={UploadInput}
                />
            {Images}
        </Grid>
    );
}

export default ImageField
