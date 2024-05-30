import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import ProductsDetails from "./components/main/ProductsDetails";


export default function App() {
    return (<>
        <BrowserRouter>

            <Header />

            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/buscar/:nameProduct" element={<Main />} />
                <Route exact path="/categoria/:idProductCategory" element={<Main />} />
                <Route exact path="/detalle-del-producto/:idProductDetail" element={<ProductsDetails />} />
            </Routes>
        </BrowserRouter>
    </>)
}