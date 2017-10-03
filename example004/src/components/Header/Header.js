import React from "react";
import PropTypes from 'prop-types';

const Header = ({children,cssName, hSize}) => React.createElement( hSize, {className: cssName}, children )

export default Header;

Header.propTypes = {
  children: PropTypes.string,
  cssName:  PropTypes.string,
  hSize:    PropTypes.string,
};