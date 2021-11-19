import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react"
import { IUser } from "../../typescript/interfaces/User";
import AddressInfo from "../atoms/AddressInfo";
import CompanyInfo from "../atoms/CompanyInfo";

interface UserInfoProps {
    id: number;
}

const UserInfo: React.FC<UserInfoProps> = (props) => {

    const [ user, setUser ] = useState<IUser>();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${props.id}`)
            .then(res => res.json())
            .then(user => {
                setUser(user)
                console.log(user);
            })
            .catch(err => console.error(err));
            
    }, []);

    return (
    <>
      {user && (
        <div>
            <Typography variant="body1">
                Name: {user.name}
            </Typography>

            <Typography variant="body1">
                Phone: {user.phone}
            </Typography>

            <Typography variant="body1">
                Website: {user.website}
            </Typography>

            <Typography variant="body1">
                Email: {user.email}
            </Typography>

            <Typography variant="body1" paddingBottom="3px">
                User: {user.username}
            </Typography>

            <Typography>
                Address:
            </Typography>
                <Grid container paddingLeft="10%">
                    <AddressInfo 
                        {...user.address}
                        />
                </Grid>

            <Typography>
                Company:
            </Typography>
                <Grid container paddingLeft="10%">
                    <CompanyInfo 
                        {...user.company}
                        />
                </Grid>
            
        </div>
      )}  
    </>
    )
}

export default UserInfo
