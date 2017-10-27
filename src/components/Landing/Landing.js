import React, { Component } from 'react';
import './Landing.css';
import router from '../../router.js';
import Shelf from '../Shelf/Shelf.js';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Landing extends Component {

  constructor(){
    super()
    this.state = {
      shelves: '',
      bin: ''

    }
    this.getBins = this.getBins.bind(this);
  }

  getBins(val){
      axios.get(`http://localhost:3000/api/bins/${val}`)
      .then(response => {console.log(response)
    })
  }

  render() {
    return (
      <div className="App">
      <div className="header">
        SHELFIE
      </div>
      <Link to={`/bins/${'A'}`}>
        <Shelf getBins={ this.getBins } letter="A" />
      </Link>
      <Link to={`/bins/B`}>
        <Shelf getBins={ this.getBins } letter="B" />
      </Link>
      <Link to={`/bins/C`}>
        <Shelf getBins={ this.getBins } letter="C" />
      </Link>
      <Link to={`/bins/D`}>
        <Shelf getBins={ this.getBins } letter="D" />
      </Link>  
      </div>
    );
  }
}

export default Landing;
