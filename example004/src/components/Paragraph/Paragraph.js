import React from "react";
import PropTypes from 'prop-types';

const Paragraph = ({children}) => <p>{ children }</p>;

export default Paragraph;

Paragraph.propTypes = {
  children: PropTypes.string,
};