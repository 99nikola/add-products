import { StandardTextFieldProps, TextField } from "@mui/material";

export interface InputFieldProps {
    variant?: "outlined" | "standard" | "filled"
    type?: string,
    label?: string,
    onChange?: any,
    error?: any,
    helperText?: string,
    value?: string,
}

const InputField: React.FC<InputFieldProps> = (props) => {
    
    return (
        <TextField 
            type={props.type}
            variant={props.variant}
            label={props.label}
            onChange={props.onChange}
            error={props.error}
            helperText={props.helperText}
            value={props.value}
            />
    );
}

InputField.defaultProps = {
    type: "text",
    variant: "outlined",
}

export default InputField
