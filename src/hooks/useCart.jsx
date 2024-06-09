import { useContext, useState } from "react"
import { CartContext } from "../constext/cart"
import { ProductContext } from "../constext/product";
import { addOrder } from "../firebase/firebase"
import { PerfilContext } from "../constext/perfil";

export function useCart() {

    const { perfil } = useContext(PerfilContext)
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

        setAcceptedPurchase(true)
        const fechaActual = new Date();
        const fechaFormateada = `${fechaActual.getDate()}/${fechaActual.getMonth() + 1}/${fechaActual.getFullYear()}`;
        addOrder({ productToBuy, perfil }).then(id =>

            Swal.fire({
                position: "center",
                icon: "success",
                title: `¡Producto comprado!`,
                footer: `<p>Cart React Company no se hace responsable de los efectos secundarios que puede generar consumir el producto con el id: ${id} - Fecha: ${fechaFormateada}</p>`,
                showConfirmButton: false,
                timer: 1000
            }));


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
        const fechaActual = new Date();
        const fechaFormateada = `${fechaActual.getDate()}/${fechaActual.getMonth() + 1}/${fechaActual.getFullYear()}`;

        addOrder({ cartList, perfil }).then(id =>
            Swal.fire({
                position: "center",
                icon: "success",
                title: "¡Compra realizada! Gracias!",
                footer: `<p>Cart React Company no se hace responsable de los efectos secundarios que puede generar consumir los productos. - Fecha: ${fechaFormateada}</p>`,
                showConfirmButton: false,
                timer: 2000
            })
        );

        return resetCart();
    }

    const priceTotal = () => {
        return cartList.reduce((total, producto) => {
            return total + producto.price;
        }, 0);
    };

    const allQuantity =()=>{
        return cartList.reduce((total, producto) => {
            return total + producto.quantity;
        }, 0);
    }


    return { cartList, acceptedPurchase, addToCart, resetCart, modifyQuantity, cancelThisProduct, buyOnlyProduct, buyProducts, priceTotal, allQuantity }
}