import Filters from "./Filters";
import Products from "./Products";
import "../../css/main-products.css"

export default function Main(){
    return(<>

        <main>
            <Filters />
            <Products />
        </main>
    </>)
}