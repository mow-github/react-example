import React, { Component } from "react";
import PropTypes from 'prop-types';

import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";
import Input from "../Input/Input";
import Button from "../Button/Button";


class Main extends Component{

  render(){


    const {
      inputList,
      btnArray,
      btnValue,
      inputSubmit,
      btnClick,
      paragraphList
    } = this.props;

    const btnArrayMapped     = btnArray.map((item, key) => <Button key={key} btnClick={btnClick}>{item}</Button>);

    const inputListMapped     = inputList.map((item, key) => <p key={key}>{item}</p>);
    const paragraphListMapped = paragraphList.map((item) => <Paragraph key={item.id}>{item.text}</Paragraph>);


    return (
      <main>
        <Header cssName="headerh2" hSize="h2">Exempelsida med React</Header>
        { paragraphListMapped}

        <Input placeholder="Skriv något->här" inputSubmit={inputSubmit}/>
        { inputListMapped }

        <div>{ btnValue }</div>
        { btnArrayMapped }


      </main>
    );
  }

}

export default Main;



Main.propTypes = {
  inputList:      PropTypes.array,
  btnArray:       PropTypes.array,
  btnValue:       PropTypes.number,
  inputSubmit:    PropTypes.func,
  btnClick:       PropTypes.func,
  paragraphList:  PropTypes.array,
};