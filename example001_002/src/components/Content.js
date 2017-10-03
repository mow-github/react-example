import React, { Component } from 'react';

import Paragraph from "./Paragraph";


class Content extends Component {
  render() {
    return (
      <div>
        <h1>content header</h1>
        <Paragraph styleObj={{fontSize: 50, color:  "blue"}} />
        <Paragraph styleObj={{fontSize: 12, color:  "green"}}/>
        <Paragraph styleObj={{fontSize: 16, color:  "pink"}}/>
      </div>
    );
  }
}

export default Content;