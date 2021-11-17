import { Link } from "react-router-dom"
import classes from "./sidebar.module.css"
import { ReactComponent as PlusIcon} from "../../../res/plus.svg";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/products" className={classes.link}>
                <div className={classes.products}>
                    <p>Products</p>

                    <Link to="/products/new">
                        <PlusIcon className={classes.plusIcon} />
                    </Link>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar
