import { useContext, useState } from "react"
import "../../css/cart.css"
import { useCart } from "../../hooks/useCart";
import { CartContext } from "../../constext/cart";

export default function Cart() {

    const [cartIsChecked, setCartIsChecked] = useState(false)
    const { cartList, resetCart, modifyQuantity, cancelThisProduct, buyProducts, priceTotal, allQuantity } = useCart()
    const { wearing } = useContext(CartContext)

    const handleClick = () => {
        setCartIsChecked(!cartIsChecked)
        wearing()
    }

    document.title = cartList.length > 0 ? `(${cartList.length}) Your Cart | Cart React` : "Your Cart | Cart React";

    return (<>

        <button className='cart-button' onClick={handleClick} type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart2 cart-button-svg" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
            </svg>
        </button>

        <aside className={`cart ${cartIsChecked ? "cart-show" : "cart-hide"}`}>

            <header>
                <button onClick={handleClick} type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-caret-left" viewBox="0 0 16 16">
                        <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753" />
                    </svg>
                </button>
                <span>Tu carrito - ({allQuantity()})</span>
            </header>

            <div className="separator"></div>

            {cartList.length > 0 ? (
                <div className="cart-inside">
                    <ul>
                        {cartList.map(producto => (
                            <li key={producto.id + producto.title}>
                                <button onClick={() => cancelThisProduct(producto)} className="btn-cancel-product">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-octagon" viewBox="0 0 16 16">
                                        <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z" />
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </button>
                                <div className="product-inside-div">
                                    <img src={producto.thumbnail} alt={producto.title} className="product-inside-img" />
                                    <div className="product-inside-div-details">
                                        <span>{producto.title}</span>
                                        <span>${producto.price} </span>
                                    </div>
                                </div>
                                <div className="container-quantity">
                                    <button onClick={() => modifyQuantity(producto, "less")}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8" />
                                        </svg>
                                    </button>
                                    <span>{producto.quantity}</span>
                                    <button onClick={() => modifyQuantity(producto, "more")}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                                        </svg>
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <span style={{fontSize:"2rem"}}>Total: {priceTotal()}</span>
                    <button className="cart-inside-btn" onClick={() => resetCart()}>Clear Cart</button>
                    <button className="cart-inside-btn" onClick={() => buyProducts()}>Finalizar compra</button>
                </div>
            ) : (
                <div className="cart-inside-empty">
                    <span>Tu carrito está vacío</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-bag-x" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M6.146 8.146a.5.5 0 0 1 .708 0L8 9.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 10l1.147 1.146a.5.5 0 0 1-.708.708L8 10.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 10 6.146 8.854a.5.5 0 0 1 0-.708" />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                    </svg>
                    <span>¡Compra o agrega productos para llenarlo!</span>
                </div>
            )}
        </aside>




    </>)
}