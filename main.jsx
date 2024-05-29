import { createRoot } from "react-dom/client";
import App from "./src/App";
import "./src/css/main.css"
import { FiltersProvider } from "./src/constext/filters";
import { SearchProvider } from "./src/constext/search";

const root = createRoot(document.getElementById("app")).render(
    <FiltersProvider>
        <SearchProvider>
            <App />
        </SearchProvider>
    </FiltersProvider>
)