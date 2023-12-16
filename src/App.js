import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Add from './pages/product/Add';
import Edit from './pages/product/Edit';
import Products from './pages/product/Products';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route  path="/" exact element={<Home/>} />
        <Route  path="/home" exact element={<Home/>} />
        <Route  path="/products/:id" exact element={<Products/>} />
        <Route  path="/add-product" exact element={<Add/>} />
        <Route  path="/edit-product/:id" exact element={<Edit/>} />
      </Routes>
    </div>
  );
}

export default App;
