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
            total: test.total(),
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
    <h1 className="mb-5">Shopping cart</h1>
        {
             test.cartList.length > 0 ?
             
              test.cartList.map((item) => <> <div class="main">       
              <section className="shopping-cart">
                 <ol className="ui-list shopping-cart--list" id="shopping-cart--list">    
                 <button onClick={() => test.deleteItem(item.id)}>X</button>
                     <li className="_grid shopping-cart--list-item">               
                       <div className="_column product-image">   
                         <img className="product-image--img" src={item.thumbnail} alt="Item image" />  
                       </div>
                       <div className="_column product-info"> 
                         <h4 className="product-name">{item.title}</h4>
                         <p className="product-desc">{item.description}</p>
                         <p> Cantidad: {item.qty}</p>   
                         <div className="price product-single-price">${test.Subtotal(item)}</div>                
                       </div>
                     </li>      
                 </ol>  
               </section>
             </div>
             </>
            )
            : <p>carrito vacio</p>       
        }
        { <h2> Total: $ {test.total()}</h2>}
        <button onClick={createOrder}>Buy</button>
        
        
    </>
    )
}
export default Cart