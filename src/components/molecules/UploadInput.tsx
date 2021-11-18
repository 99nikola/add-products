import { InputLabel } from "@mui/material";
import React from "react";
import { app } from "../../firebase/base";
import { fileToDataURL } from "../../utils/Utils";
import { InputFieldProps } from "../atoms/InputField";

interface UploadProps extends InputFieldProps {
    setImages: React.Dispatch<React.SetStateAction<Array<string>>>
}

const UploadInput: React.FC<UploadProps> = (props) => {

    const onChange = async (e: any) => {

        const fileToFirebaseURL = async (file: any) => {
            const storageRef = app.storage().ref("/images");
            const imageRef = storageRef.child(file.name);
            await imageRef.put(file);
            return await imageRef.getDownloadURL();
        }

        const files = Array.prototype.slice.call(e.target.files);

        const imageURLs = await Promise.all(files.map(fileToFirebaseURL));
        props.setImages(imageURLs);
        props.onChange(imageURLs);
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
