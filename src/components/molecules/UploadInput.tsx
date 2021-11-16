import { InputLabel } from "@mui/material";
import { useState } from "react";
import { InputFieldProps } from "../atoms/InputField";

const reader = new FileReader();

const UploadInput: React.FC<InputFieldProps> = (props) => {

    const onChange = (e: any) => {
        console.log(e.target.files, e.target.value);
        const files = e.target.files;
        // setValue(files);

        reader.onloadend = () => {

            const fileAsDataURL = reader.result;
            if (!fileAsDataURL) 
                return;
            const fileAsBase64String = (fileAsDataURL as string)
                .replace("data:", "")
                .replace(/^.+,/, "");

            props.onChange(fileAsBase64String);
        }
        reader.readAsDataURL(files[0]);

    }

    return (
        <InputLabel
            error={props.error}
            >
            <input
                accept="image/*" 
                multiple 
                type="file" 
                onChange={onChange}
                />
        </InputLabel>
    );
}

export default UploadInput
