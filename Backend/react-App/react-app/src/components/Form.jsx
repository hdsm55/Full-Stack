import React from "react";

const Form = (props) => {

  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {props.isLogin === false ? <input type="password" placeholder="Confirm Password" /> : null}
      <button type="submit">{props.isLogin ? "login" : "Register"}</button>
    </form>
  );
}

export default Form;
