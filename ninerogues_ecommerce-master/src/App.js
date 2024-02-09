import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './containers/Home';
import Error404 from './containers/errors/Error404';

import Signup from './containers/auth/Signup';
import Login from './containers/auth/Login';
import Activate from './containers/auth/Activate';
import ResetPassword from './containers/auth/ResetPassword';
import ResetPasswordConfirm from './containers/auth/ResetPasswordConfirm';

import Shop from './containers/Shop';
import ProductDetail from './containers/pages/productDetail';

import Search from './containers/pages/Search';
import Cart from './containers/pages/Cart';
import Checkout from './containers/pages/Checkout';
import ThankYou from './containers/pages/ThankYou';
import Dashboard from './containers/pages/Dashboard';
import DashboardPayments from './containers/pages/DashboardPayments';
import DashboardPaymentDetail from './containers/pages/DashboardPaymentDetail';
import DashboardProfile from './containers/pages/DashboardProfile';
import DashboardEmploy from './containers/pages/DashboardEmploy';
import DashboardEmploy_product from './containers/pages/DashboardEmploy_product';
import DashboardEmploy_newproduct from './containers/pages/DashboardEmploy_newproduct';
import DashboardEmploy_updateproduct from './containers/pages/DashboardEmploy_updateproduct';
import DashboardEmploy_product_search from './containers/pages/DashboardEmploy_product search';
import DashboardEmploy_search from './containers/pages/DashboardEmploy_search';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error Display */}
          <Route path="*" element={<Error404/>}/>

          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/checkout' element={<Checkout/>}/>
          
          {/* Authentication */}
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/activate/:uid/:token' element={<Activate/>}/>
          <Route exact path='/reset_password' element={<ResetPassword/>} />
          <Route exact path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm/>} />

          <Route exact path='/shop' element={<Shop/>}/>
          <Route exact path='/product/:productId' element={<ProductDetail/>}/>
          <Route exact path='/search' element={<Search/>}/>

          <Route exact path='/thankyou' element={<ThankYou/>}/>
          
          <Route exact path='/dashboard' element={<Dashboard/>}/>
          <Route exact path='/dashboard/payments' element={<DashboardPayments/>}/>
          <Route exact path='/dashboard/payment/:transaction_id' element={<DashboardPaymentDetail/>}/>
          <Route exact path='/dashboard/profile' element={<DashboardProfile/>}/>

          <Route  path='/dashboard_employee' element={<DashboardEmploy/>}/>
          <Route exact path='/dashboard_employee_product' element={<DashboardEmploy_product/>}/>
          <Route exact path='/dashboard_employee_newproduct' element={<DashboardEmploy_newproduct/>}/>
          <Route exact path='/dashboard_employee_product/:product_id' element={<DashboardEmploy_updateproduct/>}/>
          <Route exact path='/searchProduct' element={<DashboardEmploy_product_search/>}/>
          <Route exact path='/searchOrder' element={<DashboardEmploy_search/>}/>
          
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
