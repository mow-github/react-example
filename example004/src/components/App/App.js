import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';


import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Main from "../Main/Main";

class App extends Component {

  state = {

    navLinks: [
      {
        id:   "1",
        href: "https://www.du.se",
        text: "React patterns"
      },
      {
        id:   "2",
        href: "https://www.du.se",
        text: "React composition"
      }
    ],

    inputList: [
      "hej",
      "du"
    ],
    btnArray: ["increase", "decrease"],
    btnValue: 0,

    paragraphList: [
      {
        id: 1,
        text: `Fokusera inte på CSSen, den kan du bara kopiera om du vill,
          eller modifiera som du själv vill ha den. Fokusera istället
          på att få upp en struktur i react som du känner dig bekväm med
          och som stämmer överens med hur du ser DOMen. Vad skulle denna sida
          kunna bestå av för komponenter? Header? Navbar? Main?`
      },
      {
        id: 2,
        text: `Skapa först det statiska, försök sedan att få in state så att
          inputfältet och knapparna fungerar. Fundera också då på var state ska ligga.`
      }
    ]
  };


  inputSubmit = (e) => {
    if(e.key !== "Enter" ) { return; }

      const inputValue = e.target.value;
      this.setState({
        inputList: [...this.state.inputList, inputValue ]
      });

  };

  btnClick = (e) => {
    const btnText         = e.target.innerHTML;
    const btnChkWord      = this.state.btnArray.indexOf(btnText) === -1;
    if( btnChkWord ) { return; }

    const currentBtnValue = this.state.btnValue;
    let newBtnValue;

    newBtnValue = btnText === "increase" ?
      currentBtnValue +1 :
      currentBtnValue -1;

    this.setState({
      btnValue: newBtnValue
    });

  };


  render() {

    const {
      inputList,
      btnArray,
      btnValue,
      paragraphList
    } = this.state;

    return (
      <div className="App">

        <Header cssName="headerh1" hSize="h1">Reactive Components!</Header>
        <Nav navLinks={this.state.navLinks}/>
        <Main
          inputList={inputList}
          btnArray={btnArray}
          btnValue={btnValue}
          inputSubmit={this.inputSubmit}
          btnClick={this.btnClick}
          paragraphList={paragraphList}
        />

      </div>
    );
  }
}

export default App;





/*
https://github.com/xat/react-component-composition-cheatsheet

example 1: Basic containment
Elements can be passed as children into components

<Layout theme="dark">
  <Content />
</Layout>

const Layout = ({ children, theme }) => (
  <div className={`theme-${theme}`}>
    <main>{children}</main>
  </div>
);

const Content = () => (
  <div>Some fancy content</div>
);
*/

/*
example 2: Containment with multiple slots using children
Children are not limited to being elements. You can pass basically anything, including plain objects.



        <Layout theme='dark'>
          {{
            header: <Header />,
            content: <Content />,
            footer: <Footer />
          }}
        </Layout>

const Layout = ({ children, theme }) => (
  <div className={`theme-${theme}`}>
    <header>{children.header}</header>
    <main>{children.content}</main>
    <footer>{children.footer}</footer>
  </div>
);

const Header = () => (
  <h5>Header title</h5>
);

const Footer = () => (
  <em>footer note</em>
);

const Content = () => (
  <div>Some fancy content</div>
);

*/

/*
Example 3:  Containment with multiple slots using props
            Elements can also be passed in using props.


        <Layout
          theme='dark'
          header={<Header />}
          content={<Content />}
          footer={<Footer />}
        />

const Layout = ({ header, content, footer, theme }) => (
  <div className={`theme-${theme}`}>
    <header>{header}</header>
    <main>{content}</main>
    <footer>{footer}</footer>
  </div>
);

const Header = () => (
  <h5>Header title</h5>
);

const Footer = () => (
  <em>footer note</em>
);

const Content = () => (
  <div>Some fancy content</div>
);
*/

/*

Example 4:  Enhancing contained elements
            It's possible to enhance certain elements with additional props using React.cloneElement.


<Layout theme='dark'>
  <Content />
  </Layout>

const Layout = ({ children, theme }) => (
  <div className={`theme-${theme}`}>
    <main>{React.cloneElement(children, { theme })}</main>
  </div>
);

const Content = ({ theme }) => (
  <div>Currently using this theme: {theme}</div>
);


*/

/*

Example 5:  Passing components as props
            Like elements, you can also pass components in using props.

<Layout
  theme='dark'
  contentComponent={Content}
/>

const Layout = ({ contentComponent, theme }) => {
  const ContentComponent = contentComponent;
  return (
    <div className={`theme-${theme}`}>
      <main><ContentComponent theme={theme} /></main>
    </div>
  );
};

const Content = ({ theme }) => (
  <div>Currently using this theme: {theme}</div>
);

*/

/*
Example 5: Higher Order Components (HOC)
            Higher Order Components are functions which get a component passed in as argument and return a new component.

function createComponentWithDefaultProps(WrappedComponent, defaultProps) {
  return (props) => (
    <WrappedComponent {...defaultProps} {...props} />
  );
}

const Layout = ({ children, theme }) => (
  <div className={`theme-${theme}`}>
    <main>{children}</main>
  </div>
);

const DarkLayout = createComponentWithDefaultProps(Layout, { theme: 'dark' });

        <DarkLayout>Some content</DarkLayout>

*/



