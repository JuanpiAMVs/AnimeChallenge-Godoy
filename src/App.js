import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './containers/ItemDetailContainer';

const App = () => {
  return (
    <>
    <div className="App">
      <Nav></Nav>
     {/*  <ItemListContainer></ItemListContainer> */}
     <ItemDetailContainer></ItemDetailContainer>
    </div>
    </>
  );
}

export default App;
