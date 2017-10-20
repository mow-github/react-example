import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContactList from "../ContactList/ContactList";
import SearchBar from "../SearchBar/SearchBar";

import LoaderHOC from "../HOC/LoaderHOC";


class ContactsApp extends Component {

  state = {
    filterText: ""
  };

  static PropTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        thumbnail: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string,
      })
    ).isRequired,
    loadTime: PropTypes.string
  };

  handleUserInput = (searchTerm) => {
    this.setState({
      filterText: searchTerm
    });
  };

  render() {
    return (
      <div className="container">
        <p>Load Time: {this.props.loadTime}</p>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput} />
        <ContactList contacts={this.props.contacts} filterText={this.state.filterText} />
      </div>
    );
  }
}

export default LoaderHOC("contacts")(ContactsApp);
