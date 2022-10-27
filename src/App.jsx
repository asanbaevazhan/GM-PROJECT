import './App.scss';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header.jsx';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx'
import Registration from './pages/Registration/Registration.jsx';

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/registration" element={<Registration/>} />
      </Routes>
    </div>
  );
}

export default App;
