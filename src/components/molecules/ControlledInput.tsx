import { memo } from "react";
import { Control, Controller } from "react-hook-form"
import InputField, { InputFieldProps } from "../atoms/InputField"

interface ControlledInputProps extends InputFieldProps {
    name: any,
    control: any,
    rules?: any
}

const ControlledInput: React.FC<ControlledInputProps> = ({ name, control, rules, ...rest }) => {
    return (
        <Controller 
            name={name}
            control={control}
            rules={rules}
            render={({ field, fieldState }) => (
                <InputField 
                    {...rest}
                    value={field.value}
                    onChange={field.onChange}
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error?.message || ''}
                    />
            )}  
            />
            
    )
}

export default memo(ControlledInput);
