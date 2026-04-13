import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Song from './components/Song';

class App extends Component {
  // Datos ficticios de canciones con imágenes placeholder que funcionan siempre
  songs = [
    {
      id: 1,
      title: "Blinding Lights",
      artist: "The Weeknd",
      duration: "3:20",
      albumCover: "https://placehold.co/400x400/ff3b30/white?text=BL"
    },
    {
      id: 2,
      title: "Levitating",
      artist: "Dua Lipa",
      duration: "3:23",
      albumCover: "https://placehold.co/400x400/1db954/white?text=DL"
    },
    {
      id: 3,
      title: "Save Your Tears",
      artist: "The Weeknd",
      duration: "3:35",
      albumCover: "https://placehold.co/400x400/ff3b30/white?text=TW"
    },
    {
      id: 4,
      title: "Don't Start Now",
      artist: "Dua Lipa",
      duration: "3:03",
      albumCover: "https://placehold.co/400x400/1db954/white?text=DSN"
    },
    {
      id: 5,
      title: "Shape of You",
      artist: "Ed Sheeran",
      duration: "3:53",
      albumCover: "https://placehold.co/400x400/ffb347/white?text=ES"
    }
  ];

  componentDidMount() {
    console.log("🎵 App de Apple Music cargada correctamente");
  }

  render() {
    return (
      <div className="app">
        <Header />
        <main className="library">
          <h2 className="library__title">Biblioteca Musical</h2>
          <div className="songs-list">
            {this.songs.map(song => (
              <Song
                key={song.id}
                title={song.title}
                artist={song.artist}
                duration={song.duration}
                albumCover={song.albumCover}
              />
            ))}
          </div>
        </main>
      </div>
    );
  }
}

export default App;