import React, { Component } from "react";
import CardInfo from "./CardInfo.js";
import data from "../data.js";


//data will live here
export default class Card extends Component {
constructor(){
    super();
    this.state = {
        data: data,
        position: 0
    }
}

addOne = () => {
this.setState({position: this.state.position + 1})
}

minusOne = () => {
    this.setState({position: this.state.position - 1})
}



    render(){
      let human = this.state.data[this.state.position];
        // let arr = this.state.data.map((element, index, arr) => <Card
        // dataId={element.id}
        // dataName={element.name}
        // dataCity={element.city}
        // dataCountry={element.country}
        // dataEmployer={element.employer}
        // dataTitle={element.title}
        // dataFavoriteMovies={element.favoriteMovies}
        // />);
        // console.log(data.id)

     var firstName = human.name.first;
     var lastName = human.name.last;
     var humanCity = human.city;
     var humanCountry = human.country;
     var humanEmployer = human.employer;
     var jobTitle = human.title;
     var favoriteMovies = human.favoriteMovies;





        return (
            <div>
              <CardInfo {...human} addOne={this.addOne} currentPosition={this.state.position} minusOne={this.minusOne} somethingFunction={this.somethingFunction}/>
            </div>
        )
    }
}