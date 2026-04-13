import React from 'react';
import './Song.css';

function Song({ title, artist, duration, albumCover, onAdd, showAddButton = true }) {
    return (
        <div className="song-card">
            <div className="song-card__cover">
                <img src={albumCover || 'https://via.placeholder.com/60x60?text=Album'} alt={title} />
            </div>
            <div className="song-card__info">
                <h3 className="song-card__title">{title}</h3>
                <p className="song-card__artist">{artist}</p>
            </div>
            <div className="song-card__duration">{duration}</div>
            {showAddButton && (
                <button className="song-card__add-btn" onClick={onAdd}>Agregar</button>
            )}
        </div>
    );
}

export default Song;