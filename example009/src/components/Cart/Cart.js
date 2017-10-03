import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart, removeOneFromCart } from '../../actions/cartActions';

class Cart extends Component {

  render() {
    const cartList = this.props.cart.map(( item, index) =>{
      return (

      <div className="col-4 d-flex" key={index}>
        <div className="card">
          <div className="card-block">
            <h3 className="card-title">{item.name}</h3>
            <p className="card-text">${item.price}</p>
            <p className="card-text">Count: <span className="badge badge-success">{item.count}</span></p>
            <button className="btn btn-warning" onClick={() => this.props.removeOneFromCart(item)}>Remove One From Cart</button>
            <button className="btn btn-danger" onClick={() => this.props.removeFromCart(item)}>Remove From Cart</button>
          </div>
        </div>
      </div>

      )
    });

    return (
      <div>
        <h1 className="text-center">Cart</h1>
        <div className="row">
          {cartList}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
    return {
        cart: state.cart
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: item => dispatch(removeFromCart(item)),
        removeOneFromCart: item => dispatch(removeOneFromCart(item)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
