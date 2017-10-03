### React Fiber - React v16.0

#### Updated: 2017-09-29

#### [Ref - React Fiber DOC](https://facebook.github.io/react/blog/2017/09/26/react-v16.0.html)

#### Table of contents
1. [return an array](#return-an-array) of elements from a component's render method
2. new LCM (Life Cycle Method) for [error handling](#error-handling)
3. [Portals](#portals) for rendering components into a separate DOM node
4. [SSR - Server Side Rendering](#SSR) for ~3x faster performance: `streaming` bytes to he client
5. [Support - Custom DOM attributes](#cda) react will pass unrecognized HTML and SVG attributes through => `reduced file size`



<h5 id="return-an-array">Return an array</h5>

```

What:
    No need to wrap a component in etc. a parent-div

Note:
    Add key=id to every array element

Syntax:

    render(){

      return [
        <header key="header">Header</header>,
        <article key="article">Article</article>,
      ];

    }

```


<h5 id="error-handling">Error handling</h5>

```

What:
    Avoid broken state and handle errors

Note:
    error boundaries only catch errors in the components below them in the tree
    errors that were not caught by any error boundary will result in unmounting of the whole React component tree

Syntax:

    componentDidCatch(error, info){

    }

```


<h5 id="portals">Portals</h5>

```

What:
    render components into a separate DOM node

Note:
    1. Good for etc. modals
    2. Add a custom DOM-node in index.html ( container )

Syntax:

    // P.js
    import { Component } from "react";
    import ReactDOM from "react-dom";

    class P extends Component{

      render(){
        return ReactDOM.createPortal(
          this.props.children,
          document.getElementById("root2"),
        );
      }

    }

    export default P;

    // App.js
    return (
      [
        <header key="header">Header</header>,
        <article key="article">Article</article>,
        <P key="p2">paragraph text</P>
      ]
    );

```

<h5 id="SSR">SSR - Server Side Rendering</h5>

```

What:
    Rewritten server renderer (~3x faster)
    Better at hydrate SSR HTML once it reaches the client

Note:
    Read about: ReactDOMserver

Syntax:
    //  enables you to render components to static markup. Typically, it's used on a Node server:
    import ReactDOMServer from 'react-dom/server';


```

<h5 id="cda">Support for custom DOM attributes</h5>

```

What:
    Instead of ignoring unrecognized HTML and SVG attributes,
    React will now pass them through to the DOM.
    This has the added benefit of allowing us to get rid of most
    of React's attribute whitelist, resulting in reduced file sizes

```