import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div className="App">
      <Nav></Nav>
      <ItemListContainer greeting="ItemListContainer"></ItemListContainer>
    </div>
  );
}

export default App;
