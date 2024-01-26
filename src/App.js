import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/admin/DashBoard';
import AdminProducts from './pages/admin/AdminProducts';
import AdminCoupons from './pages/admin/AdminCoupon';
import AdminOrders from './pages/admin/AdminOrder';
import FrontLayout from './pages/front/FrontLayout';
import Home from './pages/front/Home';
import Product from './pages/front/Product';
import ProductDetail from './pages/front/ProductDetail';
import Cart from './pages/front/Cart';
import Checkout from './pages/front/CheckOut';
import Success from './pages/front/Success';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<FrontLayout />}>
          <Route path='' element={<Home />}></Route>
          <Route path='products' element={<Product />}></Route>
          <Route path='product/:id' element={<ProductDetail />}></Route>
          <Route path='cart' element={<Cart />}></Route>
          <Route path='checkout' element={<Checkout />}></Route>
          <Route path='success/:orderId' element={<Success />}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/admin' element={<Dashboard />}>
          <Route path='products' element={<AdminProducts />}></Route>
          <Route path='coupons' element={<AdminCoupons />}></Route>{' '}
          <Route path='orders' element={<AdminOrders />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
