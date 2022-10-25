import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Login from "./../NewLogin/NewLogin.jsx";
import { useNavigate } from "react-router-dom";
import './NewRegistration.scss'
import icons1 from "../../assets/img/Facebook - Original.svg"
import icons2 from "../../assets/img/VK - Original.svg"
import icons3 from "../../assets/img/Google - Original.svg"
import icons4 from "../../assets/img/path4.svg"
import { Link } from "react-router-dom";
function NewRegistration() {  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  const navigate = useNavigate();
  
  function handleFormSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("sanskarEmail", JSON.stringify(email));
      localStorage.setItem(
        "sanskarPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }


  return (
        <div className="registration-body">
          {" "}
          {login ? (
            <form
            className="registration-form"  
            onSubmit={handleFormSubmit}>
              <h2>Регистрация</h2>

              <div className="form-group">
                <label>Почта</label>
                <input
                  autoComplete="off"
                  type="email"
                  className="form-control"
                  // placeholder="Введите почту"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Пароль</label>
                <input
                  autoComplete="off"
                  type="password"
                  className="form-control"
                  // placeholder="Введите пароль"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Повторите пароль</label>
                <input
                  autoComplete="off"
                  type="password"
                  className="form-control"
                  // placeholder="Повторите пароль"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-dark btn-lg btn-block">
                Зарегистрироваться
              </button>
              <p onClick={handleClick} className="forgot-password text-right">
               Уже есть аккаунт?{" "} 
              </p>
              <p onClick={handleClick} className="under-p">
              Зарегистрироваться с помощью{" "} 
              </p>
              <div className="svg-icons">
              <img src={icons1} alt="an icon" />
              <img src={icons2} alt="an icon" />
              <img src={icons3} alt="an icon" />
              <img src={icons4} alt="an icon" />
              </div>  

              {flag && (
                <Alert color="primary" variant="danger">
                  Не торопитесь! Каждое поле важно!
                </Alert>
              )}
            </form>
          ) : (
            navigate('/login')
          )}
        </div>
  );
}

export default NewRegistration;