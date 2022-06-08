import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "../components/NavBar"
import ItemDetailContainer from "../containers/ItemDetailContainer"
import ItemListContainer from "../containers/ItemListContainer"
import Cart from "../containers/Cart"

const Home = () =>{
    return(
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path='/category/:idCategory' element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart/>} />
            </Routes>
        </BrowserRouter>
    )
}


export default Home;