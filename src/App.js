import React, { Component } from 'react';
import './App.css';
import GenreDisplay from './components/GenreDisplay/GenreDisplay.js'
import Favorites from './components/Favorites/Favorites.js'
import Nav from './components/Nav/Nav.js'
import { Route } from 'react-router-dom';



class App extends Component { 
  constructor() {
    super();
    this.state = {
        randomGenre: '',
        favoriteGenres: []
    }
  }

  returnGenre = () => {
    fetch('https://binaryjazz.us/wp-json/genrenator/v1/genre/')
    .then(res => res.json())
    .then(data => this.setState({ randomGenre: data}))
  }

  addToFavorites = () => {
    this.setState({ favoriteGenres: [this.state.randomGenre, ...this.state.favoriteGenres]})
  }

  componentDidMount = () => {
    this.returnGenre()
  }

  render() {
    return (
      <div className="home-page">
      <Nav />
      <Route exact path='/' render={() => 
      <>
          <div className="title-container">
          <h1 className='title'>Genreator</h1>
        </div>
        <div className="random-container">
          <button onClick={this.returnGenre}>Random Genre</button>
        </div>
        <div className="card-container">
          <GenreDisplay addToFavorites={this.addToFavorites} genre={this.state.randomGenre}/>
        </div>
        </>
        }/>

        <Route exact path='/favorites' render={() => 
        <div className="favorites-container">
          <Favorites state={this.state} />
        </div>  
        }/>
        
              
      </div>
    )
  }
}


export default App;
