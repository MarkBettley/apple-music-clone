import React from 'react';
import './SearchBar.css';

function SearchBar({ searchTerm, setSearchTerm, onSearch }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            onSearch(searchTerm.trim());
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    };

    return (
        <div className="search-bar">
            <form className="search-bar__form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="search-bar__input"
                    placeholder="Buscar artista..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button type="submit" className="search-bar__btn">
                    Buscar
                </button>
            </form>
        </div>
    );
}

export default SearchBar;