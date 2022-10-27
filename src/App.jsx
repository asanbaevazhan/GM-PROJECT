import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing/Landing.jsx";
import Admin from "./pages/Admin/Admin.js";
import { ProtectedRoute } from "./ProtectedRoute.js";
import NewLogin from "./pages/NewLogin/NewLogin.jsx";
import NewRegistration from "./pages/NewRegistration/NewRegistration.jsx";
import Dashboard from "./pages/Dashboard/Dashboard";

import Main from "./pages/Dashboard/Main/Main.jsx";
import MyProfile from "./pages/Dashboard/MyProfile/MyProfile";
import MyFriends from "./pages/Dashboard/MyFriends/MyFriends";
import MyGifts from "./pages/Dashboard/MyGifts/MyGifts";
import MyHolidays from "./pages/Dashboard/MyHolidays/MyHolidays";
import Wishlist from "./pages/Dashboard/Wishlist/Wishlist";
import Cart from "./pages/Dashboard/Cart/Cart";
import Settings from "./pages/Dashboard/Settings/Settings";
import Help from "./pages/Dashboard/Help/Help";
import AboutUsPage from "./pages/Dashboard/AboutUsPage/AboutUsPage";
import StoreHome from "./pages/StoreHome/StoreHome.jsx";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/landing" element={<Landing />} />

        <Route path="/login" element={<NewLogin />} />
        <Route path="/registration" element={<NewRegistration />} />

        <Route path="*" element={<p>There's nothing here: 404!</p>} />

        {/* <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Main />} />
          <Route path="dashboard/main" element={<Main />} />
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/my-friends" element={<MyFriends />} />
          <Route path="dashboard/my-gifts" element={<MyGifts />} />
          <Route path="dashboard/my-holidays" element={<MyHolidays />} />
          <Route path="dashboard/wishlist" element={<Wishlist />} />
          <Route path="dashboard/cart" element={<Cart />} />
          <Route path="dashboard/settings" element={<Settings />} />
          <Route path="dashboard/help" element={<Help />} />
          <Route path="dashboard/about-us" element={<AboutUsPage />} />
        </Route> */}
        <Route path="/store-home" element={<Main/>}>
          <Route index element={<Main/>} />
        </Route>

        <Route path="/store-wishlist" element={<Wishlist/>} />

      </Routes>
    </div>
  );
};
