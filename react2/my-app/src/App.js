import React, { Component } from 'react';
import NavBar from "./components/NavBar.js";
import Card from "./components/Card.js";
import "./App.css";


class App extends Component {
render(){
  return(
    <div>
      {/* <h1 class='navbar'><NavBar /></h1> */}
      <NavBar />
      <Card />
    </div>
  )
}




}

export default App

