import { useParams } from "react-router-dom"
import { listOfProducts } from "../json/products.json"
import { useEffect, useState } from "react"

export function useProductDetail() {

    const { idProductDetail } = useParams()
    const [productoUnico, setProductoUnico] = useState({})

    const getProductById = (idProduct) => {
        return listOfProducts.find(producto => producto.id == idProduct);
    }

    useEffect(() => {
        setProductoUnico(getProductById(idProductDetail))
    }, [idProductDetail])

    return productoUnico;
}