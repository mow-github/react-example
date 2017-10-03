import React, { Component } from "react";
import PropTypes from 'prop-types';

class Nav extends Component{

  render(){

    const { navLinks } = this.props;
    const aLists = navLinks.map((item) => <a href={ item.href } key={item.id}>{ item.text }</a> );

    return (
      <nav className="nav-react">
        { aLists }
      </nav>
    );
  }

}

export default Nav;

Nav.propTypes = {
  navLinks:       PropTypes.array,
};