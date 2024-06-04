import { useContext, useState } from "react"
import { CartContext } from "../constext/cart"
import { ProductContext } from "../constext/product";

export function useCart() {

    const { cartList, setCartList } = useContext(CartContext)
    const { listProducts, setListProducts } = useContext(ProductContext)
    const [acceptedPurchase, setAcceptedPurchase] = useState(true)

    const addToCart = (productToAdd, chosenStock) => {
        const productInCartIndex = cartList.findIndex(producto => producto.id === productToAdd.id);

        if (productInCartIndex !== -1) {
            const newList = structuredClone(cartList);
            newList[productInCartIndex].quantity += parseInt(chosenStock);
            setAcceptedPurchase(true)
            return setCartList(newList);
        }

        if (productToAdd.stock > 0) {
            setCartList(prevList => ([...prevList, { ...productToAdd, quantity: parseInt(chosenStock) }]));

            Swal.fire({
                position: "end-end",
                icon: "success",
                title: "Producto agregado al carrito",
                showConfirmButton: false,
                timer: 1000
            });

            return;

        }

        return setAcceptedPurchase(false);
    };

    const resetCart = () => {
        return setCartList([]);
    }

    const modifyQuantity = (productToModify, text) => {
        const indexProduct = cartList.findIndex(producto => producto.id === productToModify.id)
        const newList = structuredClone(cartList)

        if (text === "more") {
            newList[indexProduct].quantity += 1;
        } else if (text === "less" && newList[indexProduct].quantity > 1) {
            newList[indexProduct].quantity -= 1;
        }

        return setCartList(newList);
    }

    const cancelThisProduct = (productToCancel) => {
        const newList = cartList.filter(producto => producto.id !== productToCancel.id)
        return setCartList(newList)
    }

    const buyOnlyProduct = (productToBuy, chosenStock) => {
        if (productToBuy.stock === 0 || parseInt(chosenStock) > productToBuy.stock) return setAcceptedPurchase(false);

        resetCart();
        const indexProductToBuy = listProducts.findIndex(producto => producto.id === productToBuy.id)
        const newList = structuredClone(listProducts)
        newList[indexProductToBuy].stock -= parseInt(chosenStock)

        Swal.fire({
            position: "center",
            icon: "success",
            title: "¡Producto comprado!",
            showConfirmButton: false,
            timer: 1000
        });

        setAcceptedPurchase(true)
        return setListProducts(newList)

    }

    const buyProducts = () => {
        if (cartList.length === 0) return;

        const acceptedAmount = cartList.some(producto => producto.quantity > producto.stock)
        
        if (acceptedAmount) {
            setAcceptedPurchase(false);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Parece que hay problemas de stock...",
            });
            return;
        }

        const newList = listProducts.map(producto => {
            const cartItem = cartList.find(item => item.id === producto.id);
            if (cartItem) {
                return {
                    ...producto,
                    stock: producto.stock - cartItem.quantity
                };
            } else {
                return producto;
            }
        });

        setAcceptedPurchase(true)
        setListProducts(newList);

        Swal.fire({
            position: "center",
            icon: "success",
            title: "¡Compra realizada! Gracias!",
            showConfirmButton: false,
            timer: 2000
        });

        return resetCart();
    }

    return { cartList, acceptedPurchase, addToCart, resetCart, modifyQuantity, cancelThisProduct, buyOnlyProduct, buyProducts }
}