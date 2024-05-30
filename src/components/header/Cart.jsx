import { useId } from "react"
import "../../css/cart.css"
import { useCart } from "../../hooks/useCart";

export default function Cart() {

    const idCart = useId();
    const { cartList, resetCart, modifyQuantity, cancelThisProduct } = useCart()


    return (<>

        <label htmlFor={idCart} className='cart-button'>Mi Carrito</label>
        <input type="checkbox" id={idCart} hidden />
        <aside className='cart'>
            {(cartList.length > 0) ? (
                <div>
                    <ul>
                        {cartList.map(producto => (
                            <li key={producto.id + producto.title} style={{ border: "1px solid red" }}>
                                <button onClick={() => cancelThisProduct(producto)}>cancel this product</button>
                                <div>
                                    <h6>{producto.title}</h6>
                                    <h6>{producto.price}</h6>
                                </div>
                                <div>
                                    <button onClick={() => modifyQuantity(producto, "less")}>-</button>
                                    <h6>{producto.quantity}</h6>
                                    <button onClick={() => modifyQuantity(producto, "more")}>+</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => resetCart()}>Clear Cart</button>
                    <button >Finalizar compra</button>
                </div>
            ) : (
                <p>Carrito Vacío</p>
            )}
        </aside>


    </>)
}