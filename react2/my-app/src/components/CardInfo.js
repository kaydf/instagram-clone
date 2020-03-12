import React, { Component } from "react";
import data from "../data.js";
import Card from './Card.js'

export default class CardInfo extends Component{

render(){
let moviesArray = [];
for (let i = 0; i < this.props.favoriteMovies.length; i++){
moviesArray.push(<li>{this.props.favoriteMovies[i]}</li>)
}


     return (
     <div className="card">
         <h1 className="counter"> {this.props.currentPosition} / 25 </h1>
         <div>
           <h1 className="divName anotherName">{this.props.name.first} {this.props.name.last}</h1>
           <h3 className='anotherName'><bold>From: </bold>{this.props.city},{this.props.country}</h3>
           <h3 className="anotherName">Job Title: {this.props.country}</h3>
           <h3 className="anotherName">Employer: {this.props.employer}</h3>
         </div>
         <div>
             <h1 className="anotherName">Favorite Movies: </h1>
             <ol className="anotherName">
                 {moviesArray}
                 
             </ol>
         </div>
         <div className="toggleButtons">
             <button onClick={this.props.minusOne}>Previous</button>
             <button onClick={this.props.addOne}>Next</button>
         </div>
     </div>   
     )
    }

}

