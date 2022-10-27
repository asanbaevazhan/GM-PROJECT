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

export const App = () => {
  const [user, setUser] = React.useState(null);

  const handleLogin = () =>
    setUser({
      id: "1",
      name: "robin",
      roles: ["admin"],
    });

  const handleLogout = () => setUser(null);

  return (
    <div>
      {/* {user ? (
        <button onClick={handleLogout}>Выйти</button>
      ) : (
        <button onClick={handleLogin}>Войти</button>
      )} */}

      <Routes>
        <Route index element={<Landing />} />
        <Route path="/landing" element={<Landing />} />

        <Route path="/login" element={<NewLogin />} />
        <Route path="/registration" element={<NewRegistration />} />

        {/* <Route element={<ProtectedRoute isAllowed={!!user} />}>
        </Route> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}

        <Route
          path="admin"
          element={
            <ProtectedRoute
              redirectPath="/landing"
              isAllowed={!!user && user.roles.includes("admin")}
            >
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />

        <Route path="/dashboard" element={<Dashboard />}>
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
        </Route>
      </Routes>

      {/* <Dashboard/> */}
    </div>
  );
};
