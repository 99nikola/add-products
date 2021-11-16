import { InputLabel } from "@mui/material";
import React, { useState } from "react";
import { fileToDataURL } from "../../utils/Utils";
import { InputFieldProps } from "../atoms/InputField";

interface UploadProps extends InputFieldProps {
    setImages: React.Dispatch<React.SetStateAction<Array<string>>>
}

const UploadInput: React.FC<UploadProps> = (props) => {

    const onChange = async (e: any) => {
        const files = Array.prototype.slice.call(e.target.files);

        const images = (await Promise.all(files.map(fileToDataURL)) as string[]);
        props.setImages(images);
        props.onChange(images);
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
