import { useProductDetail } from "../../hooks/useProductDetail"

export default function ProductsDetails() {

    const productoUnico = useProductDetail();
    const productosVendidos = Math.floor(Math.random() * 801) + 100;

    const opcionesStock = [];
    for (let i = 1; i <= productoUnico.stock; i++) {
        opcionesStock.push(i);
    }

    return (<>
        <section style={{ display: "flex", justifyContent: "space-between", gap: "15px" }}>
            <img src={productoUnico.thumbnail} alt={productoUnico.title} />
            <div style={{ display: "flex", flexDirection: "column" }}>
                <span>Nuevo | +{productosVendidos} vendidos.</span>
                <span>{productoUnico.title}</span>
                <span>{productoUnico.description}</span>
                <span>rating{productoUnico.rating}</span>
                <span>${productoUnico.price}</span>
            </div>
            <form style={{ display: "flex", flexDirection: "column" }}>
                <span>brand {productoUnico.brand}</span>
                <span>category {productoUnico.category}</span>
                <button type="submit">Comprar ahora</button>
                <button type="submit">Agregar al Carrito</button>
                <span>Stock: {productoUnico.stock}</span>

                <label>Cantidad</label>
                <select name="cantidad" id="cantidad">
                    {opcionesStock.map((cantidad, index) => (
                        <option key={index} value={cantidad}>{cantidad}</option>
                    ))}
                </select>
            </form>
        </section>
    </>)
}