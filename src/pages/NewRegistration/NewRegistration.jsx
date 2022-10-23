import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Login from "./../NewLogin/NewLogin.jsx";
import './NewRegistration.scss'

function NewRegistration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  
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
        <div>
          {" "}
          {login ? (
            <form onSubmit={handleFormSubmit}>
              <h2>Регистрация</h2>

              <div className="form-group">
                <label>Почта</label>
                <input
                  autoComplete="off"
                  type="email"
                  className="form-control"
                  placeholder="Введите почту"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Пароль</label>
                <input
                  autoComplete="off"
                  type="password"
                  className="form-control"
                  placeholder="Введите пароль"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Повторите пароль</label>
                <input
                  autoComplete="off"
                  type="password"
                  className="form-control"
                  placeholder="Повторите пароль"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>


              <button type="submit" className="btn btn-dark btn-lg btn-block">
                Зарегистрироваться
              </button>
              <p onClick={handleClick} className="forgot-password text-right">
               Уже есть аккаунт?{" "} 
                
              </p>
              {flag && (
                <Alert color="primary" variant="danger">
                  Не торопитесь! Каждое поле важно!
                </Alert>
              )}
            </form>
          ) : (
            <Login />
          )}
        </div>
  );
}

export default NewRegistration;