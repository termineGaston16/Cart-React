import { useId } from "react"
import "../../css/cart.css"

export default function Cart() {

    const idCart=useId();

    return (<>

        <label htmlFor={idCart} className='cart-button'>Mi Carrito</label>
        <input type="checkbox" id={idCart} hidden/>

        <aside className='cart'>
            <h3>Cart</h3>
        </aside>

    </>)
}