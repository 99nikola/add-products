import { Grid } from "@mui/material"
import { memo } from "react";
import Button from "../atoms/Button"

export interface ResetOrSubmitProps {
    handleReset: React.MouseEventHandler<HTMLButtonElement>
}

const ResetOrSubmit: React.FC<ResetOrSubmitProps> = (props) => {
    return (
        <Grid container direction="row" justifyContent="center" margin={5}>
            <Grid item padding={2}>
                <Button 
                    text="Submit"
                    type="submit"
                    />
            </Grid>

            <Grid item padding={2}>
                <Button 
                    onClick={props.handleReset}
                    text="Reset"
                    color="secondary"
                    />
            </Grid>
        </Grid>
    )
}

export default memo(ResetOrSubmit);
