import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./components/main/Main";


export default function App() {
    return (<>
        <BrowserRouter>

            <Header />

            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/categoria/:idProductCategory" element={<Main />} />
            </Routes>
        </BrowserRouter>
    </>)
}