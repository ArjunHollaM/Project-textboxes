import React, { Component } from "react";
import Editor from './Editor'


class App extends Component {
  
  render() { 
    return (
      <div className = 'Editors'>
        <Editor id = 'html' placeholder = 'Write HTML code here' editorTitle = "HTML"/>
        <Editor id = 'css' placeholder = 'Write CSS code here' editorTitle = "CSS"/>
        <Editor id = 'js' placeholder = 'Write JavaScript code here' editorTitle = "Java Script"/>
      </div>
      );
  }
}

export default App;

