import { Typography } from "@mui/material"
import { ICompany } from "../../typescript/interfaces/User"

const CompanyInfo: React.FC<ICompany> = (props) => {
    return (
        <div>
            <Typography variant="body2">
                Name: {props.name}
            </Typography>

            <Typography variant="body2">
                CatchPhrase: {props.catchPhrase}
            </Typography>

            <Typography variant="body2">
                BS: {props.bs}
            </Typography>
        </div>
    )
}

export default CompanyInfo
