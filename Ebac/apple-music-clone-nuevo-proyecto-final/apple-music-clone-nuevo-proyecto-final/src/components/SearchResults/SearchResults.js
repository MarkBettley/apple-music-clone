import React, { useState, useEffect } from 'react';
import {
  ResultsWrapper,
  ResultsHeader,
  ResultsTitle,
  ResultsCount,
  Grid,
  StatusMessage,
  Spinner,
} from './SearchResultsStyles';
import SongCard from '../SongCard/SongCard';
import useFetch from '../../hooks/useFetch';

const SearchResults = ({ query, onSelectSong }) => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (query && query.trim().length > 1) {
      const encoded = encodeURIComponent(query.trim());
      setUrl(
        `https://itunes.apple.com/search?term=${encoded}&entity=song&limit=20`
      );
    } else {
      setUrl('');
    }
  }, [query]);

  const { data, loading, error } = useFetch(url);
  const results = data?.results || [];

  if (!query || query.trim().length <= 1) {
    return (
      <ResultsWrapper>
        <StatusMessage>🎧 Empieza a buscar para descubrir música</StatusMessage>
      </ResultsWrapper>
    );
  }

  if (loading) return <Spinner />;

  if (error) {
    return (
      <ResultsWrapper>
        <StatusMessage $error>⚠️ Error al buscar: {error}</StatusMessage>
      </ResultsWrapper>
    );
  }

  if (results.length === 0) {
    return (
      <ResultsWrapper>
        <StatusMessage>😔 No se encontraron resultados para "{query}"</StatusMessage>
      </ResultsWrapper>
    );
  }

  return (
    <ResultsWrapper>
      <ResultsHeader>
        <ResultsTitle>Resultados</ResultsTitle>
        <ResultsCount>{results.length} canciones encontradas</ResultsCount>
      </ResultsHeader>
      <Grid>
        {results.map((song) => (
          <SongCard key={song.trackId} song={song} onClick={onSelectSong} />
        ))}
      </Grid>
    </ResultsWrapper>
  );
};

export default SearchResults;