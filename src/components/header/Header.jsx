import Cart from "./Cart";
import NavBar from "./NavBar";
import Search from "./Search";
import "../../css/header.css"
import logoDeLaPagina from "../../img/logoDeLaPagina.png"
import { Link } from "react-router-dom";

export default function Header() {
    return (<>
        <header className="header-index">
            <div>
                <Link className="header-index-link" to={"/"}><img src={logoDeLaPagina} alt="logo-principal-del-ecommerce" className="header-index-logo-principal-img" /></Link>
                <div className="div-search-and-cart">
                    <Search />
                    <Cart />
                </div>
            </div>
            <NavBar />
        </header>
    </>)
}