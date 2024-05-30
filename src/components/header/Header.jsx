import Cart from "./Cart";
import NavBar from "./NavBar";
import Search from "./Search";

export default function Header() {
    return (<>
        <header>
            <div>
                <h1>Cart React</h1>
                <Search />
                <Cart />
            </div>
            <NavBar />
        </header>
    </>)
}