import React, { Component } from "react";

class ContactList extends Component{

  render(){

    const { contacts, filterText } = this.props;

    const contactsMapped = contacts.map((contact,key) => {
      const { email, name, thumbnail } = contact;
      return (
        <div className="card" key={key} >
          <img className="card-img-top" src={thumbnail} alt={thumbnail} />
            <div className="card-block">
              <h4 className="card-title">{name}</h4>
              <p className="card-text">{email}</p>
            </div>
        </div>
      )
    });

    return (
      <div className="col-4">
        {contactsMapped}
      </div>
    );
  }

}

export default ContactList;

