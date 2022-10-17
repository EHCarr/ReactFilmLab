import React, { Component } from 'react'
import Poster from './Poster';
import Fave from './Fave';

export default class FilmRow extends Component {


  render() {
  
    const { title, date, url } = this.props
    const posterUrl = "https://image.tmdb.org/t/p/w780/" + url
    const year = new Date(date).getFullYear()

    return (
      <div className="film-row" onClick={this.props.onDetailsClick}>
      <Poster title={title} url={posterUrl} />
      <div className="film-summary">
        <h1>{title}</h1>
        <p>{year}</p>
      </div>
      <Fave isFave={this.props.isFave} onFaveToggle={this.props.onFaveToggle} />
    </div>
    )
  }
}
