import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import ProductsDetails from "./components/main/ProductsDetails";
import { useContext } from "react";
import { CartContext } from "./constext/cart";
import PerfilData from "./components/main/PerfilData";


export default function App() {

    const { wearingCart } = useContext(CartContext);


    return (<>
        <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "black", zIndex: "998", opacity: "0.7", display: wearingCart ? "block" : "none" }}></div>
        <BrowserRouter>
            <PerfilData />
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