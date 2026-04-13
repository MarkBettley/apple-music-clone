import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import './SongDetail.css';

function SongDetail() {
    const { id } = useParams();

    const { data, loading, error, retry } = useFetch(
        `https://theaudiodb.com/api/v1/json/2/album.php?m=${id}`
    );

    const album = data?.album?.[0];

    return (
        <div className="song-detail">
            <Link to="/" className="song-detail__back">
                ← Volver
            </Link>

            {loading && <p className="status-message">Cargando...</p>}

            {error && (
                <div className="error-message">
                    <p>Hubo un problema al cargar los datos. Intenta nuevamente.</p>
                    <button onClick={retry}>Reintentar</button>
                </div>
            )}

            {!loading && !error && album && (
                <div className="song-detail__content">
                    <img
                        src={album.strAlbumThumb || 'https://via.placeholder.com/300x300?text=Album'}
                        alt={album.strAlbum}
                        className="song-detail__cover"
                    />
                    <div className="song-detail__info">
                        <h2 className="song-detail__title">{album.strAlbum}</h2>
                        <p className="song-detail__artist">
                            <strong>Artista:</strong> {album.strArtist}
                        </p>
                        <p className="song-detail__year">
                            <strong>Año:</strong> {album.intYearReleased}
                        </p>
                        <p className="song-detail__genre">
                            <strong>Género:</strong> {album.strGenre}
                        </p>
                        {album.strDescriptionES && (
                            <p className="song-detail__description">
                                {album.strDescriptionES}
                            </p>
                        )}
                    </div>
                </div>
            )}

            {!loading && !error && !album && (
                <p className="no-results">No se encontró información para este álbum.</p>
            )}
        </div>
    );
}

export default SongDetail;