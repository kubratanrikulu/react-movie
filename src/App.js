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
        "id": "3",
        "name": "Instellar",
        "rating": 6.3,
        "overview": " This is a wider card with supporting text below as a natural lead in to additional content.",
        "imageURL": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/3oyVnJLplWD22jRwD8ZYkFoJWhn.jpg"
      },
      {
        "id": "2",
        "name": "Arrow",
        "rating": 2.3,
        "overview": " This is a wider card with supporting text below as a natural lead in to additional content.",
        "imageURL": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/3oyVnJLplWD22jRwD8ZYkFoJWhn.jpg"
      }

    ],
    searchQuery: ""
  }
  deleteMovie = (movie) => {
    const newMovieList = this.state.movies.filter(
      m => m.id !== movie.id
    );
    this.setState(state => (
      { movies: newMovieList }
    ))
  }

  searchMovie = (event) => {
    this.setState({ searchQuery: event.target.value })

  }
  render() {
    let filteredMovies = this.state.movies.filter(
      (movie) => {
        return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
      }
    )
    return (
      <div className="App">
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <SearchBar
                searchMovieProp={this.searchMovie} />
            </div>
          </div>
          <MovieList
            movies={filteredMovies}
            deleteMovieProp={this.deleteMovie} />
        </div>
      </div>
    );
  }
}


export default App;
