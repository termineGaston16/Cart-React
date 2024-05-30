import { createContext, useState } from "react";
import { listOfProducts } from "../json/products.json"

export const ProductContext = createContext();

const mappedProducts = listOfProducts.map(product => ({
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
}))

export function ProductProvider({ children }) {

    const [listProducts, setListProducts] = useState(mappedProducts)

    return (<ProductContext.Provider value={{listProducts, setListProducts}}>
        {children}
    </ProductContext.Provider>)
}