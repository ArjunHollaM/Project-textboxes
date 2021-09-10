import React, { Component } from "react";
import Editor from './Editor'


class App extends Component {
  
  render() { 
    return (
      <div className = 'Editors'>
        <Editor id = 'html' placeholder = 'Write HTML code here' />
        <Editor id = 'css' placeholder = 'Write CSS code here' />
        <Editor id = 'js' placeholder = 'Write JavaScript code here' />
      </div>
      );
  }
}

export default App;
