import React from 'react';
import Song from './Song';
import './Library.css';

function Library({ songs }) {
    return (
        <div className="library">
            <h2 className="section-title">Mi Biblioteca</h2>
            {songs.length === 0 ? (
                <p className="library__empty">Aún no has agregado canciones. Busca y agrega desde la izquierda.</p>
            ) : (
                <div className="songs-list">
                    {songs.map(song => (
                        <Song
                            key={song.id}
                            title={song.title}
                            artist={song.artist}
                            duration={song.duration}
                            albumCover={song.albumCover}
                            showAddButton={false}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Library;