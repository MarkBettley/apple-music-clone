import React from 'react';
import {
  Card,
  CardImage,
  PlayOverlay,
  CardBody,
  SongTitle,
  ArtistName,
  PopularBadge,
} from './SongCardStyles';

const SongCard = ({ song, onClick }) => {
  const { trackName, artistName, artworkUrl100, primaryGenreName, trackTimeMillis } = song;
  const isPopular = trackTimeMillis > 240000; // más de 4 minutos = destacado

  return (
    <Card onClick={() => onClick(song)}>
      <CardImage>
        <img
          src={artworkUrl100?.replace('100x100', '300x300')}
          alt={trackName}
        />
        <PlayOverlay>▶</PlayOverlay>
      </CardImage>
      <CardBody>
        <SongTitle title={trackName}>{trackName}</SongTitle>
        <ArtistName title={artistName}>{artistName}</ArtistName>
        {isPopular && (
          <PopularBadge $type="hot">🔥 Destacado</PopularBadge>
        )}
        {primaryGenreName && (
          <PopularBadge $type="genre" style={{ marginLeft: '4px' }}>
            {primaryGenreName}
          </PopularBadge>
        )}
      </CardBody>
    </Card>
  );
};

export default SongCard;