
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Landing from './pages/Landing/Landing.jsx'
import Main from './pages/Dashboard/Main/Main.jsx'
import Admin from './pages/Admin/Admin.js'
import { ProtectedRoute } from './ProtectedRoute.js';
import NewLogin from './pages/NewLogin/NewLogin.jsx'
import NewRegistration from './pages/NewRegistration/NewRegistration.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx';
export const App = () => {
const [user, setUser] = React.useState(null);

const handleLogin = () => 
  setUser({ 
    id: '1', 
    name: 'robin',
    roles: ['admin'],
  });

const handleLogout = () => 
  setUser(null);

return (
    <div>
      {/* {user ? (
        <button onClick={handleLogout}>Выйти</button>
      ) : (
        <button onClick={handleLogin}>Войти</button>
      )} */}

      {/* <Routes>
        <Route index element={<Landing />} />
        <Route path="landing" element={<Landing />} />

        <Route path="login" element={<NewLogin/>} />
        <Route path="registration" element={<NewRegistration />} />

        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path="dashboard" element={<Main/>} />

        </Route>

        <Route
          path="admin"
          element={
            <ProtectedRoute
              redirectPath="/landing"
              isAllowed={!!user && user.roles.includes('admin')}
            >
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />

      
      </Routes> */}

      <Dashboard/>
    
    </div>
  );
};


