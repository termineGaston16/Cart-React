import { createRoot } from "react-dom/client";
import App from "./src/App";
import "./src/css/main.css"
import { FiltersProvider } from "./src/constext/filters";
import { SearchProvider } from "./src/constext/search";
import { CartProvider } from "./src/constext/cart";
import { ProductProvider } from "./src/constext/product";

const root = createRoot(document.getElementById("app")).render(
    <ProductProvider>
        <FiltersProvider>
            <SearchProvider>
                <CartProvider>
                    <App />
                </CartProvider>
            </SearchProvider>
        </FiltersProvider>
    </ProductProvider>
)