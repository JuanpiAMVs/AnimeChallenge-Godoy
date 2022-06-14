import { useEffect } from "react";
import { createContext, useState } from "react";


export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
 const [cartList, setCartList] = useState([])
 const [Total, setTotal] = useState([])
 const [suma, setSuma] = useState(0)

 const addToCart = (item, stock) =>{    
     const substock = item.stock -= stock;
     const qty = item.qty = stock

     console.log(item)
     if (cartList.find(products => products.id === item.id)){
         item = ""
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
     useEffect(() => {
            return setTotal([...Total, sub])
     },[setTotal])
   
     return(sub)
 }

 const total = () =>{
    let suma = 0
    for (let i = 0; i < Total.length; ++i){
        suma += Total[i]
    }
    return setSuma(suma)
 }


 const clear = () => {
     setCartList([])
     console.log(cartList)
 }
 const qtyItems =  () => {
    return cartList.length;
 }

 return (
        <CartContext.Provider value={{cartList, addToCart, deleteItem, Subtotal, clear, qtyItems, Total, total, suma}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;