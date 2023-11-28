import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Works from "./pages/Works/Works";
import Login from "./pages/User/Login/Login";
import SignUp from "./pages/User/Sign_Up/SignUp";
import ShopRegister from "./pages/User/Shop_Register/ShopRegister.jsx";
import Advertise from "./pages/Advertise/Advertise";
import DepartmentalStore from "./pages/Category_Pages/Departmental_Store/DepartmentalStore";
import C_Profile from "./pages/C_Profile/C_Profile";
import Products from "./pages/Products/Products";
import StoreContext from "./pages/Home/StoreContext.js";
import React from "react";
import ShopDetails from "./components/ShopDetails/ShopDetails.jsx";

function App() {
  const [storeName, setStoreName] = React.useState(null);
  return (
    <div className="App">
      <Router>
        <StoreContext.Provider value={{ storeName, setStoreName }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<Works />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/shop-signup" element={<ShopRegister />} />
            <Route path="/advertise-with-us" element={<Advertise />} />
            <Route path="/DepartmentalStore" element={<DepartmentalStore />} />
            <Route path="/shop_profile" element={<C_Profile />} />
            <Route path="/products/:storeName" element={<Products />} />
            <Route path="/shop-details/:number" element={<ShopDetails />} />
          </Routes>
        </StoreContext.Provider>
      </Router>
    </div>
  );
}

export default App;
