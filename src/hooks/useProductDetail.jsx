import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { ProductContext } from "../constext/product"

export function useProductDetail() {

    const {listProducts} = useContext(ProductContext)
    const { idProductDetail } = useParams()
    const [productoUnico, setProductoUnico] = useState({})

    const getProductById = (idProduct) => {
        return listProducts.find(producto => producto.id == idProduct);
    }

    useEffect(() => {
        setProductoUnico(getProductById(idProductDetail))
    }, [idProductDetail, listProducts])

    return productoUnico;
}