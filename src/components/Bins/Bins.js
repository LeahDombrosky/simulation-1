import React, {Component} from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import axios from 'axios';
import './Bins.css';

export default class Bins extends Component{

    getItem(letter,num){
        axios.get(`http://localhost:3000/api/bin/?l=${letter}&n=${num}`).then(response => console.log(response));
    }


    render(){
        const letter = this.props.match.params.shelf;

        return(
            <div>
                {this.props.match.params.shelf}
                {letter}
                <Link to={`/bin/${letter}1`}>
                <div className="binClick" onClick={this.getItem(letter,1)}>Bueno</div></Link>
                <Link to={`/bin/${letter}2`}>
                <div className="binClick" onClick={this.getItem(letter,2)}>Mui Bueno</div></Link>
                <Link to={`/bin/${letter}3`}>
                <div className="binClick" onClick={this.getItem(letter,3)}></div></Link>
                <Link to={`/bin/${letter}4`}>
                <div className="binClick" onClick={this.getItem(letter,4)}></div></Link>
                <Link to={`/bin/${letter}5`}>
                <div className="binClick" onClick={this.getItem(letter,5)}></div></Link>
            </div>
        )
    }
}