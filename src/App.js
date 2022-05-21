import React from 'react';
import './App.css';
import SearchBar from './component/SearchBar'
import MovieList from './component/MovieList'

class App extends React.Component {
  state = {
    movies: [
      {
        "id": "1",
        "name": "The Flash",
        "rating": 8.3,
        "overview": " This is a wider card with supporting text below as a natural lead in to additional content.",
        "imageURL": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/3oyVnJLplWD22jRwD8ZYkFoJWhn.jpg"
      },
      {
        "id": "1",
        "name": "Instellar",
        "rating": 6.3,
        "overview": " This is a wider card with supporting text below as a natural lead in to additional content.",
        "imageURL": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/3oyVnJLplWD22jRwD8ZYkFoJWhn.jpg"
      },
      {
        "id": "1",
        "name": "Arrow",
        "rating": 2.3,
        "overview": " This is a wider card with supporting text below as a natural lead in to additional content.",
        "imageURL": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/3oyVnJLplWD22jRwD8ZYkFoJWhn.jpg"
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
            </div>
          </div>
          <MovieList 
          movies = {this.state.movies}/>
        </div>
      </div>
    );
  }
}


export default App;
