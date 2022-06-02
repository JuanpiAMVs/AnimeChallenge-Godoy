import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "../components/NavBar"
import ItemDetailContainer from "../containers/ItemDetailContainer"
import ItemListContainer from "../containers/ItemListContainer"

const Home = () =>{
    return(
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            </Routes>
        </BrowserRouter>
    )
}


export default Home;