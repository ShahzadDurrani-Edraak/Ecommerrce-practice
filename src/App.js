import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home'
import SingleProduct from "./components/single-product";
import Cart from "./components/cart";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/product/:id" element={<SingleProduct/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
