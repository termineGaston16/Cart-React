import NavBar from "./NavBar";
import Search from "./Search";

export default function Header() {
    return (<>
        <header>
            <div>
                <h1>Cart React</h1>
                <Search />
                <button>Mi Carrito</button>
            </div>
            <NavBar />
        </header>
    </>)
}