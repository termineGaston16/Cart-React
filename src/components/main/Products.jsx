import { Link } from "react-router-dom"
import { useNavegation } from "../../hooks/useNavegation"
import "../../css/products.css"
import { useEffect } from "react"

export default function Products() {
    const { titleHome, listaFiltrada } = useNavegation()

    useEffect(() => { titleHome ? document.title = `${titleHome} | Cart React` : document.title = `Home | Cart React` }, [titleHome])


    return (<>

        <span className="title-products">{(titleHome) ? titleHome : "Todos nuestros Productos"}</span>

        <ul className="ul-products">
            {
                ((listaFiltrada.length > 0) ?
                    listaFiltrada.map(producto => (
                        <Link className="products-link" key={producto.id} to={`/detalle-del-producto/${producto.id}`}>
                            <li style={{ listStyle: "none" }}>
                                <img src={producto.thumbnail} alt={producto.title} />
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <span className="title-products">{producto.title}</span>
                                    <span className="rating-products">☆{producto.rating}☆</span>
                                    <span className="brand-products">Producto de {producto.brand}</span>
                                    <span className="price-products">${producto.price}</span>
                                </div>
                            </li>
                        </Link>
                    ))
                    : <span className="title-products">Productos no encontrados</span>)
            }
        </ul>

    </>)
}