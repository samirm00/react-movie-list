import { useState } from 'react';

import './App.css';

import Header from './components/Header';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';

const App = () => {
    const [searchUpdate, setSearchUpdate] = useState('');
    const getInput = (value) => {
        setSearchUpdate(value);
    };

    return (
        <div>
            <Header text="🎬 Movies" />
            <SearchBar getInput={getInput} />
            <MovieList value={searchUpdate} />
        </div>
    );
};

export default App;
