import "./App.css";
import { useState, useEffect } from "react";
import TheSideNav from "./components/TheSideNav";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shopinglists from "./pages/Shopinglist";
import AddShopinglist from "./pages/AddShopinglist";
import DeleteShopinglist from "./pages/DeleteShopinglist";
import SingleShopinglist from "./pages/SingleShopinglist";
import UpdateShopinglist from "./pages/UpdateShopinglist";
import AddItem from "./pages/AddItem";
import Stock from "./pages/Stock";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("authtoken"));

  useEffect(() => {
    if (token) {
      setLoggedIn(true);
    }
  }, [token]);

  return (
    <Router>
      <TheSideNav
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        setToken={setToken}
      />
      <Routes>
        {/*SHOPINGLIST */}
        <Route path="/shopinglist" element={<Shopinglists />} />
        <Route path="/addshopinglist" element={<AddShopinglist />} />
        <Route path="/deleteshopinglist" element={<DeleteShopinglist />} />
        <Route path="/updateshopinglist" element={<UpdateShopinglist />} />
        <Route path="/shopinglist/:_id" element={<SingleShopinglist />} />
        <Route path="/shopinglist/:_id" element={<AddItem />} />

        <Route path="/" element={<Landing />} />
        <Route path="/stock" element={<Stock />} />

        <Route path="/home" element={<Home loggedIn={loggedIn} />} />
        <Route
          path="/login"
          element={
            <Login
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              setToken={setToken}
            />
          }
        />
        <Route path="/signup" element={<SignUp />} />
        {/* protected routes*/}
        <Route
          path="/protected"
          element={<PrivateRoute loggedIn={loggedIn} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
