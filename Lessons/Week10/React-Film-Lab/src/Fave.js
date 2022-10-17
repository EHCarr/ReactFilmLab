import React, { Component } from 'react'

export default class Fave extends Component {

  constructor(props){
    super(props)
  }

  handleClick = (e)=> {
    e.stopPropagation()
    console.log("handling click event")
    this.props.onFaveToggle()
  }
  
  render() {
    let isFave = (this.props.fav) ? 'remove_from_queue' : 'add_to_queue'
    return (
        <div className={`film-row-fave ${isFave}`} onClick={this.props.onFaveToggle}>
            <p className="material-icons">{isFave}</p>
        </div>

    )
  }
}
