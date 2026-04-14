import React from 'react';
import Song from './Song';
import './Library.css';

const Library = ({ songs }) => {
  return (
    <div className="library">
      <h2 className="section-title">Mi Biblioteca</h2>
      {songs.length === 0 ? (
        <p className="empty-library">No hay canciones en tu biblioteca.</p>
      ) : (
        <div className="songs-list">
          {songs.map(song => (
            <Song
              key={song.id}
              id={song.id}
              title={song.title}
              artist={song.artist}
              duration={song.duration}
              albumCover={song.cover}
              showAddButton={false}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Library;