import React, { Component } from "react";

import { connect } from 'react-redux';
import { addUser, findUser } from '../../actions/cartActions';

class LoginForm extends Component{

  submitRegisterForm = (e) => {
    e.preventDefault();

    const username  = e.target.username_register.value;
    const password  = e.target.password_register.value;
    const id        = this.props.user.length;

    let User = { id, username, password };
    this.props.addUser(User);

  };

  submitLoginForm = (e) => {
    e.preventDefault();

    const username  = e.target.username_login.value;
    const password  = e.target.password_login.value;

    let User = { username, password };
    this.props.findUser(User);

  };

  render(){

    const { formValid,formError, formRegister } = this.props.user[0];
    const inputClassColor = formError ? "has-danger" : "has-success";

    return (

    <div>
      {!formValid && formRegister &&
      <form onSubmit={this.submitRegisterForm}>
        <h3>Register a new user</h3>
        <div className={`form-group row ${inputClassColor}`}>
          <label htmlFor="username_register" className="col-sm-2 col-form-label">Username</label>
          <div className="col-sm-10">
            <input type="text" className="form-control form-control-success" placeholder="username" id="username_register" />
          </div>
        </div>
        <div className={`form-group row ${inputClassColor}`}>
          <label htmlFor="password_register" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control form-control-success" placeholder="password" id="password_register" />
          </div>
        </div>
        <div className={`form-group row ${inputClassColor}`}>
          <div className="col-sm-12">
            <input type="submit" className="form-control form-control-success" value="Register" />
          </div>
        </div>
      </form>
      }

      {!formValid && !formRegister &&
      <form onSubmit={this.submitLoginForm}>
        <h3>Login a user</h3>
        <div className={`form-group row ${inputClassColor}`}>
          <label htmlFor="username_login" className="col-sm-2 col-form-label">Username</label>
          <div className="col-sm-10">
            <input type="text" className="form-control form-control-success" placeholder="username" id="username_login" name="username_login" />
          </div>
        </div>
        <div className={`form-group row ${inputClassColor}`}>
          <label htmlFor="password_login" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control form-control-success" placeholder="password" id="password_login" name="password_login" />
          </div>
        </div>
        <div className={`form-group row ${inputClassColor}`}>
          <div className="col-sm-12">
            <input type="submit" className="form-control form-control-success" value="Login" />
            {formError && <div className="form-control-feedback">{formError}</div>}
          </div>
        </div>
      </form>
      }

    </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addUser: item => dispatch(addUser(item)),
    findUser: item => dispatch(findUser(item)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);