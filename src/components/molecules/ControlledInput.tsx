import { memo } from "react";
import { Control, Controller } from "react-hook-form"
import InputField, { InputFieldProps } from "../atoms/InputField"

export interface ControlledInputProps extends InputFieldProps {
    name: any,
    control: any,
    rules?: any,
    defaultValue?: any
}

const ControlledInput: React.FC<ControlledInputProps> = ({ name, control, rules, defaultValue, ...rest }) => {
    return (
        <Controller 
            name={name}
            control={control}
            rules={rules}
            defaultValue={defaultValue}
            render={({ field, fieldState }) => {
                return (
                    <InputField 
                        {...rest}
                        value={field.value}
                        onChange={field.onChange}
                        error={Boolean(fieldState.error)}
                        helperText={fieldState.error?.message || ''}
                        />
                );
            }}  
            />
            
    )
}

export default ControlledInput;
