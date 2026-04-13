import React from 'react';
import Song from './Song';
import './SearchResults.css';

function SearchResults({ results, onAdd }) {
    return (
        <div className="search-results">
            <h2 className="section-title">Resultados de búsqueda</h2>
            <div className="songs-list">
                {results.map(song => (
                    <Song
                        key={song.id}
                        title={song.title}
                        artist={song.artist}
                        duration={song.duration}
                        albumCover={song.albumCover}
                        onAdd={() => onAdd(song)}
                        showAddButton={true}
                    />
                ))}
            </div>
        </div>
    );
}

export default SearchResults;