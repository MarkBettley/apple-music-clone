import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import Library from './components/Library';

// Datos ficticios de canciones (resultados de búsqueda)
const initialSearchResults = [
    { id: 1, title: "Blinding Lights", artist: "The Weeknd", duration: "3:20", albumCover: "https://upload.wikimedia.org/wikipedia/en/9/9d/The_Weeknd_-_Blinding_Lights.png" },
    { id: 2, title: "Levitating", artist: "Dua Lipa", duration: "3:23", albumCover: "https://upload.wikimedia.org/wikipedia/en/5/54/Dua_Lipa_-_Levitating.png" },
    { id: 3, title: "Save Your Tears", artist: "The Weeknd", duration: "3:35", albumCover: "https://upload.wikimedia.org/wikipedia/en/5/5a/The_Weeknd_-_Save_Your_Tears.png" },
    { id: 4, title: "Don't Start Now", artist: "Dua Lipa", duration: "3:03", albumCover: "https://upload.wikimedia.org/wikipedia/en/3/3a/Dua_Lipa_-_Don%27t_Start_Now.png" },
    { id: 5, title: "Shape of You", artist: "Ed Sheeran", duration: "3:53", albumCover: "https://upload.wikimedia.org/wikipedia/en/4/45/Shape_of_You.png" }
];

function App() {
    const [searchResults] = useState(initialSearchResults);
    const [librarySongs, setLibrarySongs] = useState([]);

    useEffect(() => {
        console.log(`📚 Biblioteca actualizada. Tienes ${librarySongs.length} canciones.`);
    }, [librarySongs]);

    const addToLibrary = (song) => {
        if (!librarySongs.some(s => s.id === song.id)) {
            setLibrarySongs([...librarySongs, song]);
            console.log(`✅ Agregada: ${song.title}`);
        } else {
            console.warn(`⚠️ La canción "${song.title}" ya está en la biblioteca.`);
        }
    };

    return (
        <div className="app">
            <Header />
            <main className="main-content">
                <SearchResults results={searchResults} onAdd={addToLibrary} />
                <Library songs={librarySongs} />
            </main>
        </div>
    );
}

export default App;