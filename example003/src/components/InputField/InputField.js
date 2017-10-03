import React from 'react';

const InputField = (props) => {

  return <input type="text" onChange={props.handleChange} />


};


export default InputField;




/*
class InputField extends Component {


  render(){

    return (
      <input type="text" onChange={this.props.handleChange} />
    );

  }

}*/
