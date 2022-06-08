import {useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import ItemCount from "./ItemCount";
import ItemDetailBtn from "./ItemDetailBtn";


const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext)


    const onAdd = (stock) => {
        alert('Seleccionaste ' + stock + ' items')
        setItemCount(stock);
        // envia el producto al carrito
        test.addToCart(item)
    }
    return (
        <>
            <div className="ItemDetail">
                {
                    item && item.id
                        ?
                        <div className="d-flex">
                            <img src={item.thumbnail}/>
                            <div>
                                <h1 className="my-5">{item.title}</h1>
                                <h3>{item.description}</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit scelerisque, suscipit eget nostra vitae aenean euismod ligula pulvinar, ac ante tortor pretium mi nisl habitasse. Lorem ipsum dolor sit amet consectetur adipiscing elit scelerisque, suscipit eget nostra vitae aenean euismod ligula pulvinar, ac ante tortor pretium mi nisl habitasse.
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit scelerisque, suscipit eget nostra vitae aenean euismod ligula pulvinar, ac ante tortor pretium mi nisl habitasse.
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit scelerisque, suscipit eget nostra vitae aenean euismod ligula pulvinar, ac ante tortor pretium mi nisl habitasse
                                </p>
                                <p>{item.stock} stock available</p>
                          
                                {
                                    itemCount == 0
                                    ?     <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd}></ItemCount>
                                    :     <ItemDetailBtn/>
                                
                                }
                                  
                              
                            </div>
                        </div>
                        : <p>Cargando...........</p>
                }
            </div>
        </>
        
    )
}

export default ItemDetail;