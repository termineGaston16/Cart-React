import { createContext, useEffect, useState } from "react";
import { listOfProducts } from "../json/products.json"
import { getProducts } from "../firebase/firebase"

export const ProductContext = createContext();


/* MAPEAR LOS PRODUCTOS DESDE JSON */
/*const mappedProducts = listOfProducts.map(product => ({
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.price,
    rating: product.rating,
    stock: product.stock,
    brand: product.brand,
    category: product.category,
    thumbnail: product.thumbnail,
    quantity: 0
}))*/


const mapearProducts = (productos) => {
    return productos.map(product => {
        return {
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            rating: product.rating,
            stock: product.stock,
            brand: product.brand,
            category: product.category,
            thumbnail: product.thumbnail,
            quantity: product.quantity
        };
    });
};

export function ProductProvider({ children }) {

    /* MAPEAR LOS PRODUCTOS DESDE FIREBASE */
    const [listProducts, setListProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(product => {
                const mappedProducts = mapearProducts(product);
                setListProducts(mappedProducts)
            })
    }, [])

    if (listProducts.length == 0) {
        return (
            <div className="d-flex justify-content-center" style={{marginTop:"20%"}}>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    return (<ProductContext.Provider value={{ listProducts, setListProducts }}>
        {children}
    </ProductContext.Provider>)
}