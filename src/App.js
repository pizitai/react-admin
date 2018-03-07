import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { Button } from 'element-react';

import 'element-theme-default';


class App extends Component {
  render() {
    return (
      <Button type="primary">Hello</Button>
    );
  }
}

export default App;
