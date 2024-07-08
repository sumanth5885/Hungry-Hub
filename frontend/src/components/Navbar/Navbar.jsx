import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useContext, useEffect, useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home");

    const [hide, setHide] = useState(false);

    const { getTotalCartAmount, getCartItems, token, setToken, userName, handleLogout } =
        useContext(StoreContext);

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    };

    const handleMenu = () => {
        hide ? setHide(false) : setHide(true);
    };

    // const [isScrolled, setIsScrolled] = useState(false)

    // useEffect(() => {
    //   window.addEventListener('scroll', (evt) => {
    //     window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false)
    //   })
    // }, [])

    return (
        <div className={`navbar`}>
            <Link to="/">
                <img src={assets.logo} alt="" className="logo" />
            </Link>
            <ul className={`menu-list ${hide && "show"}`}>
                <Link
                    to="/"
                    onClick={() => setMenu("home")}
                    className={menu === "home" && "active"}
                >
                    Home
                </Link>
                <a
                    href="#explore-menu"
                    onClick={() => setMenu("menu")}
                    className={menu === "menu" && "active"}
                >
                    Menu
                </a>
                <a
                    href="#app-download"
                    onClick={() => setMenu("mobile-app")}
                    className={menu === "mobile-app" && "active"}
                >
                    Mobile-App
                </a>
                <a
                    href="#footer"
                    onClick={() => setMenu("contact-us")}
                    className={menu === "contact-us" && "active"}
                >
                    Contact us
                </a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" className="search-icon" />
                <div className="navbar-search-icon">
                    <Link to="/cart">
                        <img
                            src={assets.basket_icon}
                            alt=""
                            className="basket-icon"
                        />
                    </Link>
                    <div className={getTotalCartAmount() !== 0 && "dot"}>
                        {getTotalCartAmount() !== 0 && getCartItems()}
                    </div>
                </div>
                {!token ? (
                    <button
                        onClick={() => {
                            setShowLogin(true);
                        }}
                    >
                        Sign in
                    </button>
                ) : (
                    <div className="navbar-profile">
                        <img src={assets.profile_icon} alt="" />

                        <ul className="nav-profile-drop-down">
                            <li style={{color: "tomato", textAlign: "center"}}>
                                <p className="user-name">{userName}</p>
                            </li>
                            <hr />
                            <li>
                                <img src={assets.bag_icon} alt="" />
                                <Link to="/myorders">
                                    <p>Orders</p>
                                </Link>
                            </li>
                            <hr />
                            <li onClick={logout}>
                                <img src={assets.logout_icon} alt="" />
                                <p onClick={handleLogout}>Logout</p>
                            </li>
                        </ul>
                    </div>
                )}

                <div className="menu-icon" onClick={handleMenu}>
                    <AiOutlineMenuFold size={30} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
