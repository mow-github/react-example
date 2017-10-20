import React, { Component } from "react";
import "./LoadingHOC.css";


// https://www.youtube.com/watch?v=LTunyI2Oyzw&t=480s

// HOC - High Order Component: a fn that takes a fn as a arg AND return a enhanced component

// decorator - meta styling for a class: @LoaderHOC etc
// decorator is an alternative to: HOC



const LoaderHOC = (propName) => (WrappedComponent) => {
  return class LoaderHOC extends Component {

    componentDidMount(){
      this.startTime = Date.now();
    }

    componentWillUpdate(){
      this.endTime = Date.now();
    }

    isEmpty = (prop) => (
      prop === null ||
      prop === undefined ||
      (prop.hasOwnProperty('length') && prop.length === 0) ||
      (prop.constructor === Object && Object.keys(prop).length === 0)
    );

    render(){
      const myProps = {
        loadTime: ((this.endTime - this.startTime) / 1000).toFixed(2),
      };
      return this.isEmpty(this.props[propName]) ?
        <div className="loader"></div> :
        <WrappedComponent {...this.props} {...myProps} />
    }
  }
};

export default LoaderHOC;