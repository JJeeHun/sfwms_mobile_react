import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./views/login/Login";
import MenuList from "./views/menulist/MenuList";
import MoveLocation from "./views/move_location/MoveLocation";
import MenuHeader from "./components/menu_header/MenuHeader";
import OrderScan from "./views/orderscan/OrderScan";

function App() {
    const [isLogin, setLogin] = useState(false);
    const menus = [
        { title: "Move Location (Pallet)", path: "/move-location" },
        { title: "Order Scan (Pallet Replace)", path: "/order-scan" },
        { title: "Pallet Check", path: "/" },
        { title: "Order Check", path: "/" },
        { title: "Stock Check", path: "/" },
        { title: "Pallet + Pallet", path: "/" },
        { title: "Full Pallet Return", path: "/" },
    ];

    return (
        <BrowserRouter>
            <div className="App">
                {isLogin ? (
                    <Login />
                ) : (
                    <>
                        <MenuHeader
                            companyName={"WMS"}
                            client={"Samyang"}
                            warehouse={"Samyang Fontana"}
                            menus={menus}
                        />
                        <Routes>
                            <Route
                                path="/"
                                element={<MenuList menus={menus} />}
                            />
                            <Route path="/login" element={<Login />} />
                            <Route
                                path="/move-location"
                                element={<MoveLocation />}
                            />
                            <Route path="/order-scan" element={<OrderScan />} />
                        </Routes>
                    </>
                )}
            </div>
        </BrowserRouter>
    );
}

export default App;
