import React from 'react';
import { Link } from 'react-router-dom';
import Song from './Song';
import './SearchResults.css';

function SearchResults({ results, onAdd }) {
    if (!results || results.length === 0) {
        return (
            <div className="search-results">
                <h2 className="section-title">Resultados de búsqueda</h2>
                <p className="no-results">Busca un artista para ver sus álbumes.</p>
            </div>
        );
    }

    return (
        <div className="search-results">
            <h2 className="section-title">Resultados de búsqueda</h2>
            <div className="songs-list">
                {results.map((song) => (
                    <div key={song.id} className="song-with-link">
                        <Link to={`/song/${song.id}`} className="song-detail-link">
                            Ver detalles
                        </Link>
                        <Song
                            title={song.title}
                            artist={song.artist}
                            album={song.album}
                            albumCover={song.albumCover}
                            onAdd={() => onAdd(song)}
                            showAddButton={true}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchResults;