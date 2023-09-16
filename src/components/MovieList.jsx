import PropTypes from 'prop-types';

import './MovieList.css';

import data from '../film.json';

import Movie from './Movie';
import filterMovies from './utils/filterMovies';

const MovieList = ({ value }) => {
    const filteredMovies = filterMovies(data, value);
    return (
        <div className="movie-list">
            {filteredMovies.map((movie, index) => (
                <Movie key={index} movie={movie} />
            ))}
        </div>
    );
};

MovieList.propTypes = {
    value: PropTypes.string
};

export default MovieList;
