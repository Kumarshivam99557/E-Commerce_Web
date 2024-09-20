
import './App.css';
import Cart from './Components/Cart';
import Wishlist from './Components/Wishlist';
import Header from './Components/Header';
import { Routes ,Route} from 'react-router-dom';
import Home from './Components/home';
import Footer from './Components/Footer';
import Registration from './Components/Registration';
import Login from './Components/Login';
import Service from './Components/Service';
import Error from './Components/Error';
import Logout from './Components/Logout';
import ProductCard from './Components/productCard';
import AdminLayout from './Components/AdminLayout';
import AdminUserList from './Components/Admin-UserList';
import PaymentSuccess from './Components/PaymentSuccess';
function App() {
  return (
      <div>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/registration' element={<Registration/>}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/contact' element={<Service/>}/>
      <Route path='/logout' element={<Logout/>} />
      <Route path="/product" element={<ProductCard />}/>
      <Route path='/layout' element={<AdminLayout />}>
      <Route  path='userlist' element={< AdminUserList/>} />
      </Route>
      <Route  path='/paymentsuccess' element={< PaymentSuccess/>} />
      <Route path='*' element={<Error />} />
      </Routes>
      <Footer/>
      </div>
      
  );
}

export default App;
