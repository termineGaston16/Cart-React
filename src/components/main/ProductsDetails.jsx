import { useProductDetail } from "../../hooks/useProductDetail";
import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import "../../css/product-details.css"

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
            <section className="product-detail-index">
                <img src={productoUnico.thumbnail} alt={productoUnico.title} />
                <div>
                    <span className="productos-vendidos-product-detail">Nuevo | +{productosVendidos} vendidos.</span>
                    <span className="title-product-detail">{productoUnico.title}</span>
                    <span className="descripcion-product-detail">{productoUnico.description}</span>
                    <span className="rating-product-detail">✧{productoUnico.rating}</span>
                    <span className="price-product-detail">${productoUnico.price}</span>
                </div>
                <form>
                    <span className="form-text-product-detail">Brand: {productoUnico.brand}</span>
                    <span className="form-text-product-detail">Category: {productoUnico.category}</span>

                    <span className="form-text-product-detail">Stock: {productoUnico.stock}</span>
                    <label className="form-text-product-detail">Cantidad: </label>
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
