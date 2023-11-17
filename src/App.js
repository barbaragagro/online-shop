import { HashRouter, Routes, Route } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetail from './pages/ProductDetail';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route
            path="/productdetail/:productUrl"
            element={<ProductDetail />}
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
