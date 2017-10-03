import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../actions/actions';

class Cart extends Component {
  render() {
    /**
     * this.props.cart is populated through the redux store and mapStateToProps
     * this.props.removeFromCart is added through mapDispatchToProps
     */
    const cartList = this.props.cart.map(( item, index) =>{
      return <div key={index}> 
        <p style={{ color: "#767676"}}>{item.name} - {item.price} $ </p>
        <button className="button" 
                onClick={ () => this.props.removeFromCart(item)} > 
          Remove 
        </button>
      </div>;
    });

    return (
      <div>
        <h1>Cart</h1>
        <div  className="cart">
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
        removeFromCart: item => dispatch(removeFromCart(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
