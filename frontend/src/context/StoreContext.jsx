import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const url = "http://localhost:4000";
    const [token, setTokenState] = useState(
        localStorage.getItem("token") || ""
    );
    const [userName, setUserNameState] = useState(
        localStorage.getItem("userName") || ""
    );
    const [food_list, setFoodList] = useState([]);

    const setToken = (newToken) => {
        setTokenState(newToken);
        localStorage.setItem("token", newToken);
        if (newToken) {
            loadCartData(newToken);
        } else {
            setCartItems({});
        }
    };

    const setUserName = (newUserName) => {
        setUserNameState(newUserName);
        localStorage.setItem("userName", newUserName);
    };

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }

        if (token) {
            await axios.post(
                url + "/api/cart/add",
                { itemId },
                { headers: { token } }
            );
        }
    };

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

        if (token) {
            await axios.post(
                url + "/api/cart/remove",
                { itemId },
                { headers: { token } }
            );
        }
    };

    // const getTotalCartAmount = () => {
    //     let totalAmount = 0;
    //     for (const item in cartItems) {
    //         if (cartItems[item] > 0) {
    //             let itemInfo = food_list.find(
    //                 (product) => product._id === item
    //             );
    //             totalAmount += itemInfo.price * cartItems[item];
    //             console.log(itemInfo);
    //         }
    //     }
    //     return totalAmount;
    // };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find(
                    (product) => product._id === item
                );
                if (itemInfo) {
                    // Check if itemInfo exists
                    totalAmount += itemInfo.price * cartItems[item];
                } else {
                    console.warn(`Item with ID ${item} not found in food_list`);
                }
            }
        }
        return totalAmount;
    };

    const getCartItems = () => {
        let totalCartItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalCartItems++;
                // totalCartItems += cartItems[item]
            }
        }
        return totalCartItems;
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        setToken("");
        setUserName("");
        setCartItems({});
    };

    const fetchFoodList = async () => {
        const response = await axios.get(url + "/api/food/list");
        setFoodList(response.data.data);
    };

    const loadCartData = async (token) => {
        const response = await axios.post(
            url + "/api/cart/get",
            {},
            { headers: { token } }
        );
        setCartItems(response.data.cartData || {});
    };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"));
        }
        if (localStorage.getItem("userName")) {
            setUserName(localStorage.getItem("userName")); // Retrieve userName from localStorage
        }

        async function loadData() {
            fetchFoodList();
            await loadCartData(localStorage.getItem("token"));
        }
        loadData();
    }, []);

    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getCartItems,
        url,
        token,
        setToken,
        userName,
        setUserName,
        handleLogout,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
