import { serverTimestamp, setDoc, doc, collection, updateDoc, increment } from "firebase/firestore";
import db from "../utils/firebaseConfig";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { async } from "@firebase/util";

const Cart = () =>{
    const test = useContext(CartContext)
    const createOrder = () => {
        const itemsForDB = test.cartList.map(item => ({
            id: item.id,
            price: item.price,
            title: item.title,
            qty: item.qty
        }))

        let order = {
            buyer: {
                email: "bokita@h.com",
                name:  "bokita",
                phone: "1232132321"
            },
            date: serverTimestamp(),
            total: test.suma,
            items: itemsForDB
        }
        console.log(order)
    
    const createOrderInFirestore = async () => {
        const newOrderRef = doc(collection(db, "orders"));
        await setDoc(newOrderRef, order);
        return newOrderRef;
      }
    
      createOrderInFirestore()
        .then(result => alert('Your order has been created. Please take note of the ID of your order.\n\n\nOrder ID: ' + result.id + '\n\n'))
        .catch(err => console.log(err));
      test.cartList.forEach(async (item) => {
        const itemRef = doc(db, "products", item.id);
        await updateDoc(itemRef, {
            stock: increment(-item.qty)
        })
      });
        test.clear()
    }

    return(
    <>
    <button onClick={() => test.clear()}>Clear</button>
        {
             test.cartList.length > 0 ?
              test.cartList.map((item) => <div className="d-flex justify-content-around">
                 <p>{item.title}</p>
                 <p> Cantidad: {item.qty}</p>
                 <p> Subtotal: ${test.Subtotal(item)}{console.log(test.Subtotal(item))}</p>
                 <button onClick={() => test.deleteItem(item.id)}>X</button>         
                 {console.log(test.cartList)}

             </div>
            )
            : <p>carrito vacio</p> 
               
        }
        { <p> Total: $ {test.total()}{test.suma}{console.log(test.Total)}</p>}
        <button onClick={createOrder}>Buy</button>
        
        
    </>
    )
}
export default Cart