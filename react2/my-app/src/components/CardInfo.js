import React, { Component } from "react";
import data from "../data.js";
import Card from './Card.js'

export default class CardInfo extends Component{

render(){
     return (
     <div>
         <h1>something / 25 </h1>
         <div>
           <h1>Human Name</h1>
           <h3>From:</h3>
           <h3>Job Title:</h3>
           <h3>Employer:</h3>
         </div>
         <div>
             <h1>Favorite Movies </h1>
             <ol>
                 <li></li>
                 <li></li>
                 <li></li>
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

