import React from 'react';
import {
  Overlay,
  Modal,
  ModalContainer,
  ModalHero,
  AlbumArt,
  SongInfo,
  SongTitle,
  ArtistName,
  AlbumName,
  ModalBody,
  DetailRow,
  DetailLabel,
  DetailValue,
  PreviewSection,
  PreviewLabel,
  AudioPlayer,
  CloseButton,
} from './SongDetailStyles';

const formatDuration = (ms) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

const SongDetail = ({ song, onClose }) => {
  const {
    trackName,
    artistName,
    collectionName,
    artworkUrl100,
    primaryGenreName,
    trackTimeMillis,
    releaseDate,
    previewUrl,
  } = song;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer>
        <Modal>
          <CloseButton onClick={onClose}>✕</CloseButton>
          <ModalHero>
            <AlbumArt
              src={artworkUrl100?.replace('100x100', '300x300')}
              alt={trackName}
            />
            <SongInfo>
              <SongTitle>{trackName}</SongTitle>
              <ArtistName>{artistName}</ArtistName>
              <AlbumName>{collectionName}</AlbumName>
            </SongInfo>
          </ModalHero>
          <ModalBody>
            <DetailRow>
              <DetailLabel>Género</DetailLabel>
              <DetailValue>{primaryGenreName || 'N/A'}</DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailLabel>Duración</DetailLabel>
              <DetailValue>
                {trackTimeMillis ? formatDuration(trackTimeMillis) : 'N/A'}
              </DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailLabel>Lanzamiento</DetailLabel>
              <DetailValue>
                {releaseDate
                  ? new Date(releaseDate).getFullYear()
                  : 'N/A'}
              </DetailValue>
            </DetailRow>
          </ModalBody>
          {previewUrl && (
            <PreviewSection>
              <PreviewLabel>Vista previa</PreviewLabel>
              <AudioPlayer controls src={previewUrl} />
            </PreviewSection>
          )}
        </Modal>
      </ModalContainer>
    </Overlay>
  );
};

export default SongDetail;