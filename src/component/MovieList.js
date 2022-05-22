import React from 'react';


const MovieList = (props) => {
    return (
        <div className='row'>
            {props.movies.map((movie) => (
                <div className='col-lg-3 key' key={movie.id}>
                    <div className='card mb-4 shadow-sm bg-black'>
                        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} className='card-img-top w-75 d-flex jutfiy-content-center' />
                        <div className='content position-relative d-flex'>
                        <div className='badge position-absolute'><h4><span className='badge bg-danger position-absolute d-flex align-items-center text-center'>{movie.vote_average}</span></h4></div>
                        
                        </div>
                        <div className='card-body'>
                            <h5 className='card-title'>{movie.title}</h5>
                            <p className='card-text'>{movie.textContent}</p>
                            <div className='d-flex justify-content-between alighn-items-center'>
                                <button onClick={(event) => props.deleteMovieProp(movie)} className='btn btn-md btn-outline-danger d-none'>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}
export default MovieList;