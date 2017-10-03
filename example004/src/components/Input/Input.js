import React from "react";
import PropTypes from 'prop-types';

const Input = ({placeholder, inputSubmit}) => <input  type="text"
                                                      name="name"
                                                      className="input"
                                                      placeholder={ placeholder }
                                                      onKeyPress={(e) => {
                                                        inputSubmit(e)
                                                      }}
                                              />;
export default Input;

Input.propTypes = {
  placeholder:  PropTypes.string,
  inputSubmit:  PropTypes.func,
};


