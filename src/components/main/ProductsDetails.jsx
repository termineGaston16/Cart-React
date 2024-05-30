import { useProductDetail } from "../../hooks/useProductDetail";
import { useRef, useState } from "react";
import { useCart } from "../../hooks/useCart";

export default function ProductsDetails() {
    const productoUnico = useProductDetail();
    const [cantStock, setCantStock] = useState(1)
    const { addToCart } = useCart();
    const [productosVendidos, setProductosVendidos] = useState((Math.floor(Math.random() * 801) + 100));

    const opcionesStock = [];
    for (let i = 1; i <= productoUnico.stock; i++) {
        opcionesStock.push(i);
    }

    const handleChangeStock = (event) => {
        setCantStock(event.target.value)
    };

    return (
        <>
            <section style={{ display: "flex", justifyContent: "space-between", gap: "15px" }}>
                <img src={productoUnico.thumbnail} alt={productoUnico.title} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <span>Nuevo | +{productosVendidos} vendidos.</span>
                    <span>{productoUnico.title}</span>
                    <span>{productoUnico.description}</span>
                    <span>rating {productoUnico.rating}</span>
                    <span>${productoUnico.price}</span>
                </div>
                <form style={{ display: "flex", flexDirection: "column" }}>
                    <span>brand {productoUnico.brand}</span>
                    <span>category {productoUnico.category}</span>

                    <span>Stock: {productoUnico.stock}</span>
                    <label>Cantidad</label>
                    <select onChange={handleChangeStock}>
                        {opcionesStock.map((cantidad, index) => (
                            <option key={index} value={cantidad}>{cantidad}</option>
                        ))}
                    </select>

                    <button type="button">Comprar ahora</button>
                    <button type="button" onClick={() => addToCart(productoUnico, cantStock)}>Agregar al Carrito</button>
                </form>
            </section>
        </>
    );
}
