import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "../components/NavBar"
import ItemDetailContainer from "../containers/ItemDetailContainer"
import ItemListContainer from "../containers/ItemListContainer"
import Cart from "../containers/Cart"
import CartContextProvider from "../context/cartContext"

const Home = () =>{
    return(
        <CartContextProvider>
            <BrowserRouter>
                <Nav/>
                <Routes>
                    <Route path="/" element={<ItemListContainer/>}/>
                    <Route path='/category/:idCategory' element={<ItemListContainer />} />
                    <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
                    <Route path="/cart" element={<Cart/>} />
                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    )
}


export default Home;