import React, { Component } from 'react';

class Header extends Component {


  render() {

    const { greeting, name } = this.props.obj;
    const { isVisible } = this.props;
    console.log( isVisible  );

    const h1tag = isVisible ?
      <h1>Frontendbloggen1 {greeting} {name} </h1>
      : null;


    return (
      <div style={styles}>

        {h1tag}

      </div>
    );
  }
}

export default Header;

const styles = {
  backgroundColor: "lightsalmon"
};