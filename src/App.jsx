import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login.jsx'
import Registration from './pages/Registration/Registration.jsx';
import Header from './components/Header/Header.jsx';
import TopHeader from './components/TopHeader/TopHeader';
import Main from './pages/Landing/Landing';

function App() {
  return (
    <div className="App">
      <TopHeader/>
      <Header/>

      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/registration" element={<Registration/>} />
      </Routes>
    </div>
  );
}

export default App;
