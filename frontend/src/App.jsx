import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Verify from "./pages/Verify/Verify";
import MyOrders from "./pages/MyOrders/MyOrders";

const App = () => {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <>
            {showLogin && <LoginPopup setShowLogin={setShowLogin}></LoginPopup>}
            <div className="app">
                <ToastContainer></ToastContainer>
                <Navbar setShowLogin={setShowLogin}></Navbar>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/order" element={<PlaceOrder />} />
                    <Route path="/verify" element={<Verify />} />
                    <Route path="/myorders" element={<MyOrders />} />
                </Routes>
            </div>
            <Footer></Footer>
        </>
    );
};

export default App;
