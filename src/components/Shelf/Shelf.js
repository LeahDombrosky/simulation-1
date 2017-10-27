import React, {Component} from 'react';
import './Shelf.css';
import Item from '../Item/Item';


export default class Shelf extends Component{
    render(){
        const {
            getBins,
            letter
        } = this.props

        return(
            <div className="shelf" onClick={() => {getBins(letter); console.log('Working')}} >
            THIS IS JUST A BUTTON 
            </div>
        )
    }

}