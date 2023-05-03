import React from "react";
import { useDispatch, useSelector } from "react-redux";

const LogIn = () => {
  const dispatchFunc = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const isLoggedOut = useSelector((state) => state.isLoggedOut)

  const submit = (e) => {
    e.preventDefault();
    dispatchFunc({ type: "logIn" });
  };

  const logOut = () => {
    dispatchFunc({ type: "logOut" });
  };
  return (
    <form onSubmit={submit}>
      {!isLoggedIn && (
        <>
          {" "}
          <label htmlFor="email">Email</label>
          <input id="email" name="email" />
          <button type="submit">Log in</button>{" "}
        </>
      )}
      {isLoggedIn && (
        <button type="button" onClick={logOut}>
          Log Out
        </button>
      )}
    </form>
  );
};

export default LogIn;
