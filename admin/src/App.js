import './App.css';
import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductList from './pages/productList/ProductList';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import NewProduct from './pages/newProduct/NewProduct';
import Product from './pages/product/Product';
import Login from './pages/login/Login';

function App() {
  const Admin = JSON.parse((JSON.parse(localStorage.getItem("persist:root"))).user).currentUser.isAdmin
  console.log(Admin)
  // const Admin = true; // Temporarily set to true for testing

  return (
    <Router>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Routes>
          <Route path="/login" element={<Login />} />
          {Admin && (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/user/:userId" element={<User />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/newproduct" element={<NewProduct />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
