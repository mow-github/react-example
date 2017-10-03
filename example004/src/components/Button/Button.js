import React from "react";
import PropTypes from 'prop-types';

const Button = ({btnClick, children}) => <button onClick={(e) => btnClick(e) }>{ children }</button>;

export default Button;


Button.propTypes = {
  btnClick:       PropTypes.func,
  children:       PropTypes.string,
};