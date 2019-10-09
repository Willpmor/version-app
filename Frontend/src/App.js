import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Index from "./pages/Index"
import Thumbnail from "./pages/Thumbnail"

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/Thumbnail" exact component={Thumbnail} />
      </Switch>
    </BrowserRouter>
    
    
    
    // <BrowserRouter>
    //   
    // </BrowserRouter>
    );
  }
}

export default App;
