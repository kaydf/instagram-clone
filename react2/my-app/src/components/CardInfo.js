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
     <div>
         <h1>something / 25 </h1>
         <div>
           <h1>{this.props.name.first} {this.props.name.last}</h1>
           <h3>From: {this.props.city},{this.props.country}</h3>
           <h3>Job Title: {this.props.country}</h3>
           <h3>Employer: {this.props.employer}</h3>
         </div>
         <div>
             <h1>Favorite Movies: </h1>
             <ol>
                 {moviesArray}
                 
             </ol>
         </div>
         <div>
             <button>Previous</button>
             <button>Next</button>
         </div>
     </div>   
     )
    }

}

