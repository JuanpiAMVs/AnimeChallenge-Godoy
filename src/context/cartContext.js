import { createContext, useState } from "react";


export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
  /*   const find = cartList.find(product => product.id === item.id);
    if (find === undefined){
        setCartList([
            ...cartList,
            {
               nameItem: item.title 
            }
        ]);
    } else{

    }
 */

    const addToCart = (item) => {
        setCartList([item])
    }
    return(
        <CartContextProvider value={{
            cartList, addToCart


        }}>
            {children}
        </CartContextProvider>
    )
}
export default CartContextProvider;