import { Link } from "react-router-dom";
import "../../css/navbar.css"

export default function NavBar() {
    return (<>
        <nav className="navbar-index">
            <span>Nuestra Categoría</span>
            <ul>
                <Link className="navbar-index-link" to={"/"}><li>Home</li></Link>
                <Link className="navbar-index-link" to={"/categoria/home-decoration"}><li>Decoración para el Hogar</li></Link>
                <Link className="navbar-index-link" to={"/categoria/laptops"}><li>Laptops</li></Link>
                <Link className="navbar-index-link" to={"/categoria/smartphones"}><li>Smartphones</li></Link>
                <Link className="navbar-index-link" to={"/categoria/fragrances"}><li>Fragancias</li></Link>
                <Link className="navbar-index-link" to={"/categoria/skincare"}><li>Cremas</li></Link>
                <Link className="navbar-index-link" to={"/categoria/groceries"}><li>Alimentos</li></Link>
            </ul>
        </nav>
    </>)
}