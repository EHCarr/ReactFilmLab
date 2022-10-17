import React, { Component } from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB'

const films = TMDB.films 

export default class App extends Component {
 
  constructor(props){
    super(props)
    this.state={
      films: films,
      faves: [],
      current:{}
    }
    this.handleFaveToggle = this.handleFaveToggle.bind(this);
    this.handleDetailsClick = this.handleDetailsClick.bind(this);
  }
  handleFaveToggle = (film) => {
    const faves = this.state.faves.slice()
    const filmIndex = faves.indexOf(film)
    if (filmIndex !== -1) {
      faves.splice(filmIndex, 1)
      console.log("removing a favorite", film.title)
    } else {
      faves.push(film)
      console.log("adding a favorite", film.title)
    }
    this.setState({faves})
  }

  handleDetailsClick = (film) => {
    console.log("Fetching details for : " + film.title)
    
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
    
    fetch(url).then(response => {
      response.json().then(data => {
        console.log(data)
        this.setState({current: data})
        })
    })
  }
  
  render() {
    return (
      <div className="film-library">
      <FilmListing films={this.state.films} faves={this.state.faves} onFaveToggle={this.handleFaveToggle} onDetailsClick={this.handleDetailsClick}/>
      <FilmDetails film={this.state.current}/>
    </div>
    )
  }
}
