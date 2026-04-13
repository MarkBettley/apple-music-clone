import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Library from './components/Library';
import SongDetail from './components/SongDetail';
import useFetch from './hooks/useFetch';

function Home({ librarySongs, setLibrarySongs }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [query, setQuery] = useState('');

    const url = query
        ? `https://theaudiodb.com/api/v1/json/2/searchalbum.php?s=${encodeURIComponent(query)}`
        : null;

    const { data, loading, error, retry } = useFetch(url);

    // Transformar álbumes → canciones
    const songs = data?.album
        ? data.album.map((album) => ({
              id: album.idAlbum,
              title: album.strAlbum,
              artist: album.strArtist,
              album: album.strAlbum,
              albumCover: album.strAlbumThumb,
              year: album.intYearReleased,
          }))
        : [];

    useEffect(() => {
        console.log(`📚 Biblioteca actualizada. Tienes ${librarySongs.length} canciones.`);
    }, [librarySongs]);

    const addToLibrary = (song) => {
        if (!librarySongs.some((s) => s.id === song.id)) {
            setLibrarySongs([...librarySongs, song]);
            console.log(`✅ Agregada: ${song.title}`);
        } else {
            console.warn(`⚠️ La canción "${song.title}" ya está en la biblioteca.`);
        }
    };

    const handleSearch = (term) => {
        setQuery(term);
    };

    return (
        <>
            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                onSearch={handleSearch}
            />
            <main className="main-content">
                {loading && <p className="status-message">Cargando...</p>}
                {error && (
                    <div className="error-message">
                        <p>Hubo un problema al cargar los datos. Intenta nuevamente.</p>
                        <button onClick={retry}>Reintentar</button>
                    </div>
                )}
                {!loading && !error && (
                    <SearchResults results={songs} onAdd={addToLibrary} />
                )}
                <Library songs={librarySongs} />
            </main>
        </>
    );
}

function App() {
    const [librarySongs, setLibrarySongs] = useState([]);

    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                librarySongs={librarySongs}
                                setLibrarySongs={setLibrarySongs}
                            />
                        }
                    />
                    <Route path="/song/:id" element={<SongDetail />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;