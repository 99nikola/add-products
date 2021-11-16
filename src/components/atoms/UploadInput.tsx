import { InputLabel } from "@mui/material";
import { InputFieldProps } from "./InputField";

const UploadInput: React.FC<InputFieldProps> = (props) => {
    return (
        <InputLabel
            error={props.error}
            >
            <input
                accept="image/*" 
                multiple 
                type="file" 
                onChange={props.onChange}
                value={props.value}
                />
        </InputLabel>
    );
}

export default UploadInput
