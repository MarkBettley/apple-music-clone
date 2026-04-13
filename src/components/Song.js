import React, { Component } from 'react';

class Song extends Component {
  render() {
    const { title, artist, duration, albumCover } = this.props;
    return (
      <div className="song-card">
        <div className="song-card__cover">
          <img src={albumCover || 'https://placehold.co/60x60?text=Album'} alt={title} />
        </div>
        <div className="song-card__info">
          <h3 className="song-card__title">{title}</h3>
          <p className="song-card__artist">{artist}</p>
        </div>
        <div className="song-card__duration">{duration}</div>
      </div>
    );
  }
}

export default Song;