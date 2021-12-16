import React, { memo } from "react";
import { Controller, ControllerFieldState, ControllerRenderProps, FieldValues, UseFormStateReturn } from "react-hook-form"
import InputField, { InputFieldProps } from "../atoms/InputField"

export interface InputControllerProps extends InputFieldProps {
    name: any,
    control?: any,
    rules?: any,
    defaultValue?: any
    Componenet: any,
    setImages?: React.Dispatch<React.SetStateAction<Array<string>>>
}

interface RenderProp {
    field: ControllerRenderProps<FieldValues, any>,
    fieldState: ControllerFieldState,
    formState: UseFormStateReturn<FieldValues>,
}

const InputController: React.FC<InputControllerProps> = ({ name, control, rules, defaultValue, Componenet, ...rest }) => {
    const handleRender = (render: RenderProp) => {
        return (
            <Componenet 
                {...rest}
                value={render.field.value}
                onChange={render.field.onChange}
                error={Boolean(render.fieldState.error)}
                helperText={render.fieldState.error?.message || ''}
                />
        );
    }

    return (
        <Controller 
            name={name}
            control={control}
            rules={rules}
            defaultValue={defaultValue}
            render={handleRender}  
            />
            
    )
}

export default memo(InputController);
