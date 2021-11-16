import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/products/new">
                <h2>ProductFormPage</h2>
            </Link>
            
        </div>
    )
}

export default Home
