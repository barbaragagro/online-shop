import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetail from './pages/ProductDetail';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/online-shop" element={<ProductsPage />} />
          <Route path="/online-shop/shoppingcart" element={<ShoppingCart />} />
          <Route
            path="/online-shop/productdetail/:productUrl"
            element={<ProductDetail />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;