import { Button as MButton } from "@mui/material";
import { memo } from "react";


interface ButtonProps {
    variant?: "text" | "outlined" | "contained",
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning",
    type?: "button" | "submit" | "reset"
    text?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <MButton 
            variant={props.variant}
            color={props.color}
            type={props.type}
            onClick={props.onClick}
            disabled={props.disabled}
            >
            {props.text}
        </MButton>
    );
}

Button.defaultProps = {
    variant: "contained",
    color: "primary",
    type: "button",
    disabled: false
}

export default memo(Button);
