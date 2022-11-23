import React from "react";
import { Routes, Route} from "react-router-dom";
import './App.scss';

import Landing from "./pages/Landing/Landing.jsx";
import NewLogin from "./pages/NewLogin/NewLogin.jsx";
import NewRegistration from "./pages/NewRegistration/NewRegistration.jsx";
import Main from "./pages/Dashboard/Main/Main.jsx";
import MyProfile from "./pages/Dashboard/MyProfile/MyProfile";
import MyFriends from "./pages/Dashboard/MyFriends/MyFriends";
import MyGifts from "./pages/Dashboard/MyGifts/MyGifts";
import MyHolidays from "./pages/Dashboard/MyHolidays/MyHolidays";
import Wishlist from "./pages/Dashboard/Wishlist/Wishlist";
import Cart from "./pages/Dashboard/Cart/Cart";
import Help from "./pages/Dashboard/Help/Help";
import AboutUsPage from "./pages/Dashboard/AboutUsPage/AboutUsPage";
import { OrderPage } from "./pages/order-page";
import { ProductPage } from "./pages/product-page/product-page";
import { Provider } from "react-redux";
import { store } from "./store";

export const App = () => {
  return (
      <Provider store={ store }>
        <Routes>
        <Route index element={<Landing />} />
        <Route path="/landing" element={<Landing />} />

        <Route path="/login" element={<NewLogin />} />
        <Route path="/registration" element={<NewRegistration />} />

        <Route path="*" element={<p>There's nothing here: 404!</p>} />

        <Route path="/store-home" element={<Main/>}>
          <Route index element={<Main/>} />
          <Route path="/store-home/order" element={ <OrderPage /> } />
          <Route path="/store-home/:title" element={ <ProductPage /> } />
        </Route>

        <Route path="/store-wishlist" element={<Wishlist/>} />
        <Route path="/store-my-profile" element={<MyProfile/>} />
        <Route path="/store-my-friends" element={<MyFriends/>} />
        <Route path="/store-my-gifts" element={<MyGifts/>} />
        <Route path="/store-my-holidays" element={<MyHolidays/>} />
        <Route path="/store-help" element={<Help/>} />
        <Route path="/store-about-us" element={<AboutUsPage/>} />
        <Route path="/store-cart" element={<Cart/>} />

        

      </Routes>
      </Provider>
  );
};
