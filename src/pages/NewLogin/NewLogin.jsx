import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Header from "../../components/Header/Header.jsx";
import TopHeader from "../../components/TopHeader/TopHeader.jsx";
import Home from "./../Dashboard/Dashboard.jsx";
import './NewLogin.scss'

function NewLogin() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("sanskarPassword")
      .replace(/"/g, "");
    let mail = localStorage.getItem("sanskarEmail").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

  return (
    <div>
      {home ? (
        <form
         className="login-form" 
         onSubmit={handleLogin}>
          <h3>Логин</h3>
          <div className="form-login">
            <label>Почта</label>
            <input
              type="email"
              className="form-control"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-login">
            <label>Пароль</label>
            <input
              type="password"
              className="form-control"
              onChange={(event) => setPasswordlog(event.target.value)} />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Войти
          </button>
          <div className="under-login">
            <a href="#">забыли пароль</a>

            <p>или</p>
            <a href="#">Зарегистрироваться </a>

          </div>
          {flag && (
            <Alert color="primary" variant="warning">
              Заполните правильную информацию, иначе продолжайте попытки.
            </Alert>
          )}
        </form>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default NewLogin;

