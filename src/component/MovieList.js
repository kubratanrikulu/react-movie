import React from 'react';


const MovieList = (props) => {
    return (
        <div className='row'>
            {props.movies.map((movie) => (
                <div className='col-lg-4 key' key={movie.id}>
                    <div className='card mb-4 shadow-sm'>
                        <img src={movie.imageURL} className='card-img-top' />
                        <div className='card-body'>
                            <h5 className='card-title'>{movie.name}</h5>
                            <p className='card-text'>{movie.overview}</p>
                            <div className='d-flex justify-content-between alighn-items-center'>
                                <button className='btn btn-md btn-outline-danger'>Delete</button>
                                <h2><span className='badge bg-info'>{movie.rating}</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}
export default MovieList;