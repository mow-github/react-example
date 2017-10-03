import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { addToCart, addMovies } from '../actions/cartActions';

import * as actions from '../../actions/actions';
import { bindActionCreators } from 'redux';

class Products extends Component {



  componentDidMount(){
    this.props.actions.addMovies();

  }

  render() {
    const productList = this.props.products.map( (item,index)  => {
      return <div key={index}> 
        <p style={{ color: "#767676"}}>{item.name} - {item.price} $ </p>
        <button className="button"
                onClick={() => this.props.actions.addToCart(item)}>
          Add To Cart
        </button> 
      </div>
    });

    return (
      <div className= "products">
         { productList }
      </div>
    );
  }
}

function mapStateToProps(state, props) {
    return {
        products: state.products,
        movies: state.movies,
        errors: state.errors,
    };
}

function mapDispatchToProps(dispatch) {
    return {
/*        addToCart: item => dispatch(addToCart(item)),
        addMovies: movies => dispatch(addMovies(movies)),*/
      actions: bindActionCreators(actions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Products);

