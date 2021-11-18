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

    const [ images, setImages ] = useState<string[]>(props.form.getValues().image);

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
                name="image"
                rules={RequiredRule}
                control={props.form.control}
                defaultValue={[]}
                Componenet={UploadInput}
                />
            {Images}
        </Grid>
    );
    return (
        <Grid item paddingTop={1} paddingBottom={1}>
            <InputController
                name="desc"
                label="Description"
                rules={RequiredRule}
                control={props.control}
                defaultValue=""
                Componenet={InputField}
                />
        </Grid>
    );
}

export default ImageField
