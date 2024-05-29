import Filters from "./Filters";
import Products from "./Products";

export default function Main(){
    return(<>

        <main style={{width:"100%"}}>
            <Filters />
            <Products />
        </main>
    </>)
}