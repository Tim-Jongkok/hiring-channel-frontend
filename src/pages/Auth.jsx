import React, { useState } from "react";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import { useHistory } from "react-router-dom";

const Auth = () => {
  let history = useHistory();
  const redirectHome = () => {
    history.push(`/`);
  };

  const [login, setLogin] = useState(true);

  const changeToRegister = () => setLogin(false);
  const changeToLogin = () => setLogin(true);

  if (login) {
    return (
      <Login changeToRegister={changeToRegister} redirectHome={redirectHome} />
    );
  } else {
    return (
      <Register changeToLogin={changeToLogin} redirectHome={redirectHome} />
    );
  }
};

export default Auth;
