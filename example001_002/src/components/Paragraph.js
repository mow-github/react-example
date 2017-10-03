import React, { Component } from 'react';

class Paragraph extends Component {
  render() {

    const { styleObj } = this.props;

    return (
      <div>
        <p style={ styleObj } >Praesent sapien massa, convalli
          s a pellentesque nec, egestas non nisi. Curabitur arcu erat,
          accumsan id imperdiet et, porttitor at sem. Praesent sapien
          massa, convallis a pellentesque nec, egestas non nisi.</p>
      </div>
    );
  }
}

export default Paragraph;