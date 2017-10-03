import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, updateProductPrice, addRandomProduct } from '../../actions/cartActions';

class Products extends Component {

  updateProductPrice = (e,item) => {
    if(e.key !== "Enter"){ return }

    const newPrice = e.target.value;
    item.price = Number(newPrice);
    this.props.updateProductPrice(item);
  };


  render() {
    const productList = this.props.products.map( (item,index)  => {
      return (
        <div className="col-4 d-flex" key={index}>
          <div className="card">
            <div className="card-block">
            <h3 className="card-title">{item.name}</h3>
            <p className="card-text">${item.price}</p>
            <input type="number" className="form-control" placeholder="New product price" onKeyPress={(e) => this.updateProductPrice(e, item) } />
            <button className="btn btn-success" onClick={() => this.props.addToCart(item)}>Add To Cart</button>
            </div>
          </div>
        </div>
      )
    });

    return (
      <div className="row">

        <div className="col-12 d-flex">
          <div className="card">
            <div className="card-block">
              <button className="btn btn-primary" onClick={this.props.addRandomProduct}>Add a random Product</button>
            </div>
          </div>
        </div>

         { productList }
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        products: state.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
      addToCart: item => dispatch(addToCart(item)),
      updateProductPrice: item => dispatch(updateProductPrice(item)),
      addRandomProduct: item => dispatch(addRandomProduct(item)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Products);

