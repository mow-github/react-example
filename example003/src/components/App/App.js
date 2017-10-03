import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import InputField from '../InputField/InputField';
import Button from '../Button/Button';



class App extends Component {


  state = {
    name: "inputValue",
    btnNumber: 0,
    list: [
      "list 1",
      "list 2",
      "list 3",
    ],
    listObject: [
      {a: "list1"},
      {a: "list2"},
      {a: "list3"},
    ],

    products: [
      { id: 1, namn: "a", pris: 10 },
      { id: 2, namn: "b", pris: 20 },
      { id: 3, namn: "c", pris: 30 }
    ],
    cart: [

    ]
  };

  handleClick = () => {
    this.setState({ visible: !this.state.visible });
  };

  handleChange = (e) => {

    this.setState(
      {name: e.target.value}
    );
  };


  reverse = (s) => {
    return s.split("").reverse().join("");
  };


  buttonClick = (e) => {
    console.log(e.target.innerHTML); // increase OR decrease

    e.target.innerHTML === "increase" ?
      this.setState({ btnNumber: this.state.btnNumber+1 }) :
      this.setState({ btnNumber: this.state.btnNumber-1 });
  };


  addToCart = (product) => {
    console.log(product);

    const newCart = [...this.state.cart, product];

    this.setState({
      cart: newCart
    });

    console.log(this.state.cart);
  };

  render() {


    let name = this.reverse(this.state.name); // reverse the string order
    name = name.indexOf("z") === -1 && name;   // name is false/empty if char: z exist


    const listOfElements = this.state.list.map( (item, index) => {
      return <p key={index}> {item} </p>;
    });

    const listOfElementsObj =
      Object.keys(this.state.listObject)
        .map( (key) => {
          return <p key={key}>{ this.state.listObject[key].a }</p>
    });

    const productsList =
      Object.keys(this.state.products)
        .map( (key) => {
          return (
            <div key={this.state.products[key].id}>
            { this.state.products[key].namn } - { this.state.products[key].pris }


            <button onClick={() => this.addToCart( this.state.products[key] )} >Add to cart</button>
            </div>
          )
        });


    return (
      <div>
        <p>--> { name }</p>
        <button onClick={this.handleClick}>
          Click me!
        </button>

        <InputField handleChange={this.handleChange} />
        <InputField handleChange={this.handleChange} />

        <div>
          <p>{ this.state.btnNumber }</p>
          <Button buttonClick={this.buttonClick}>increase</Button>
          <Button buttonClick={this.buttonClick}>decrease</Button>
        </div>


        <div>
          { listOfElements }
        </div>

        <div>
          { listOfElementsObj }
        </div>

        <div>
          { productsList }
        </div>

      </div>
    );
  }
}

export default App;




