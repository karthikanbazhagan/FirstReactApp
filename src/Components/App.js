import React, { Component } from 'react';
import './App.css';
import Slider from './Slider';
import TopNavigationBar from './TopNavigationBar';
import Grid from './Grid';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <TopNavigationBar />
        <Slider />
        <Grid />
        <Footer />
      </div>
    );
  }
}

export default App;
