import React, { Component } from "react";
import Cart from '../Cart/Cart';
import Products from '../Products/Products';


import { connect } from 'react-redux';
import { logoutUser } from '../../actions/cartActions';

class MainContent extends Component{

  render(){

    const { formValid } = this.props.user[0];

    return (
      <div>
        {formValid &&
        <div>
          <button className="btn btn-warning" onClick={this.props.logoutUser}>Logout</button>
          <h1 className="text-center">Products</h1>
          <Products/>
          <Cart/>
        </div>
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
    logoutUser: item => dispatch(logoutUser(item)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainContent);

