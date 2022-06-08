import { useContext } from "react"
import { CartContext } from "../context/cartContext"

const Cart = () =>{
    const test = useContext(CartContext)
    console.log(test)

    return(
    <>
       {
           test.cartList.length === 0 ? <p>carrito vacio</p> 
           : test.cartList.map(item => <p>{item.title}</p>)

          
       }
    </>
    )
}
export default Cart