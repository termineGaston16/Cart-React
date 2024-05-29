import { Link } from "react-router-dom";

export default function NavBar() {
    return (<>
        <nav>
            <h2>Nuestra Categoría</h2>
            <ul style={{ display: "flex", justifyContent: "space-between", gap: "10px", listStyle: "none" }}>
                <Link to={"/"}><li>Home</li></Link>
                <Link to={"/categoria/home-decoration"}><li>Decoración para el Hogar</li></Link>
                <Link to={"/categoria/laptops"}><li>Laptops</li></Link>
                <Link to={"/categoria/smartphones"}><li>Smartphones</li></Link>
                <Link to={"/categoria/fragrances"}><li>Fragancias</li></Link>
                <Link to={"/categoria/skincare"}><li>Cremas</li></Link>
                <Link to={"/categoria/groceries"}><li>Alimentos</li></Link>
            </ul>
        </nav>

        <hr />
    </>)
}