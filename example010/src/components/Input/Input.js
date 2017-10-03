import React, { Component } from "react";

class Input extends Component{

  render(){

    const { inputEnter, placeholder } = this.props;

    return (

      <form onSubmit={inputEnter}>
        <div className="form-group row has-success">
          <label htmlFor="postTODO" className="col-sm-2 col-form-label">POST TODO</label>
          <div className="col-sm-6">
            <input type="search" className="form-control form-control-success" id="postTODO" placeholder={placeholder} />
{/*              <div className="form-control-feedback">Success! You've done it.</div>
              <small className="form-text text-muted">Example help text that remains unchanged.</small>*/}
          </div>
        </div>
      </form>
    );
  }

}

export default Input;