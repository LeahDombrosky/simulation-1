import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import router from './router.js';
import Shelf from './components/Shelf/Shelf.js';
import axios from 'axios';
import { Link } from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
      <div>
        { router }
      </div>
    );
  }
}

export default App;
