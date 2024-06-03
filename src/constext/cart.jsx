import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartList, setCartList] = useState([])
    const [wearingCart, setWearingCart] = useState(false);

    const wearing = () => {
        setWearingCart(prevState => (!prevState))
    }

    return (
        <CartContext.Provider value={{ cartList, setCartList, wearingCart, wearing }}>
            {children}
        </CartContext.Provider>
    )
}