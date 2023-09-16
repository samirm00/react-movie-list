const filterMovies = (movies, value) => {
    if (!value.trim()) {
        return movies;
    } else {
        return movies.filter((movie) => {
            return movie.Title.toLowerCase().includes(value.trim());
        });
    }
};

export default filterMovies;
