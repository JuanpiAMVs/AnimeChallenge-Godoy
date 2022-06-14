import { useContext } from "react"
import { CartContext } from "../context/cartContext"

const Cart = () =>{
    const test = useContext(CartContext)

    return(
    <>
    <button onClick={() => test.clear()}>Clear</button>
        {
             test.cartList.length > 0 ?
              test.cartList.map((item) => <div className="d-flex justify-content-around">
                 <p>{item.title}</p>
                 <p> Cantidad: {item.qty}</p>
                 <p> Subtotal: ${test.Subtotal(item)}</p>
                 <button onClick={() => test.deleteItem(item.id)}>X</button>
                 
                 
                 {console.log(test.cartList)}

             </div>
            ) 
            : <p>carrito vacio</p> 
               
        }
        
        
    </>
    )
}
export default Cart