import { useContext, useState } from "react"
import { CartContext } from "../constext/cart"

export function useCart() {

    const { cartList, setCartList } = useContext(CartContext)

    const addToCart = (productToAdd, chosenStock) => {
        const productInCartIndex = cartList.findIndex(producto => producto.id === productToAdd.id);

        if (productInCartIndex !== -1) {
            const newList = structuredClone(cartList);
            newList[productInCartIndex].quantity += parseInt(chosenStock);
            setCartList(newList);
            return;
        }

        return setCartList(prevList => ([...prevList, { ...productToAdd, quantity: parseInt(chosenStock) }]));
    };

    const resetCart = () => {
        return setCartList([]);
    }

    const modifyQuantity = (productToModify, text) => {
        const indexProduct = cartList.findIndex(producto => producto.id === productToModify.id)
        const newList = structuredClone(cartList)

        if (text === "more") {
            newList[indexProduct].quantity += 1;
        } else if (text === "less" && newList[indexProduct].quantity > 0) {
            newList[indexProduct].quantity -= 1;
        }

        return setCartList(newList);
    }

    const cancelThisProduct=(productToCancel)=>{
        const newList = cartList.filter(producto => producto.id !== productToCancel.id)
        return setCartList(newList)
    }

    return { cartList, addToCart, resetCart, modifyQuantity, cancelThisProduct}
}