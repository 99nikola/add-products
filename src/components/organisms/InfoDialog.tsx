import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import React from 'react';
import { DialogActions, DialogContent } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '../atoms/Button';
import UserInfo from '../molecules/UserInfo';

export interface InfoDialogProps {
    id: number;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const style = {
    width: "30px",
    height: "30px"
}

const InfoDialog: React.FC<InfoDialogProps> = (props) => {

    const handleOpen = () => {
        props.setOpen(true);
    }

    const handleClose = () => {
        props.setOpen(false);
    }
  return (
    <>
        <Button onClick={handleOpen}>
            <VisibilityIcon style={style}/>
        </Button>
        
        <Dialog onClose={handleClose} open={props.open}>
            <DialogTitle>User info</DialogTitle>
            
            <DialogContent>
                <UserInfo 
                    id={props.id}
                    />
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose} color="info">OK</Button>
            </DialogActions>
        </Dialog>
    </>
    );
}

export default InfoDialog;