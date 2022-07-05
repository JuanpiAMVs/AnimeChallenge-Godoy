import { createContext, useState } from "react";


export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
 const [cartList, setCartList] = useState([])

 const addToCart = (item, stock) =>{    
     const substock = item.stock -= stock;
     const qty = item.qty = stock

     console.log(item)
     if (cartList.find(products => products.id === item.id)){
         item.qty = qty + stock
     } else{
        setCartList([...cartList, 
            item])
     }
 }

 const deleteItem = (id) => {
    const result = cartList.filter(item => item.id !== id)
        setCartList(result)
 }

 const Subtotal = (item) => {
     const sub = item.price * item.qty
     return sub
 }

 const total = () =>{
    let suma = 0
    cartList.forEach((item) => {
        suma += Subtotal(item)
    })
    return suma
 }


 const clear = () => {
     setCartList([])
     console.log(cartList)
 }
 const qtyItems =  () => {
    return cartList.length;
 }

 return (
        <CartContext.Provider value={{cartList, addToCart, deleteItem, Subtotal, clear, qtyItems, total}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;