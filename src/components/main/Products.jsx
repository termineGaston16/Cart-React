import { Link } from "react-router-dom"
import { useNavegation } from "../../hooks/useNavegation"

export default function Products() {
    const { titleHome, listaFiltrada } = useNavegation()

    return (<>

        <h3>
            {(titleHome) ? titleHome : "Todos nuestros Productos"}
        </h3>
        <ul style={{ width: "100%", maxWidth: "800px", main: "100%", listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: "10px" }}>
            {
                ((listaFiltrada.length > 0) ?
                    listaFiltrada.map(producto => (
                        <Link key={producto.id} to={`/detalle-del-producto/${producto.id}`}>
                            <li style={{ listStyle: "none" }}>
                                <img src={producto.thumbnail} alt={producto.title} />
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <p>{producto.title}</p>
                                    <p>{producto.rating}</p>
                                    <p>{producto.brand}</p>
                                    <p>{producto.price}</p>
                                </div>
                            </li>
                        </Link>
                    ))
                    : "nop")
            }
        </ul>

    </>)
}