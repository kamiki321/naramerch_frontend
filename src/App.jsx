import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {Login} from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./pages/About";

const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>  
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/product/:productid" element={<Product/>} />
            <Route path="/about" element={<About />} />
            <Route path="/productlist" element={<ProductList />} />
          </Routes>
      </BrowserRouter>
    </div>

  );

};

export default App;