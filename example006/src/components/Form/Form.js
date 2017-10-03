import React, { Component } from "react";

import Header from "../Header/Header";

class Form extends Component{


/*  state = {
    validLogin: false
  };*/

  render(){

    const {
      loginForm,
      submitLoginform,
      checkedHeaderAndImgages
    } = this.props;

    const loginFormErrors = loginForm.errors.map((error) => <div className="alert alert-warning" key={error}>{ error }</div> );


    return (

      <div>
        { checkedHeaderAndImgages && <Header text="LoginForm" /> }
        <form onSubmit={submitLoginform}>
          <input type="text"     className="form-control" name="username" defaultValue={loginForm.username} />
          <input type="password" className="form-control" name="password" defaultValue={loginForm.password} />
          <input type="submit"   className="form-control" value="Submit Form" />
          { loginForm.errors.length >= 1 && loginFormErrors }
        </form>
      </div>

    );
  }

}

export default Form;

