import styled from 'styled-components';

export const Card = styled.article`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  cursor: pointer;
  transition: transform ${({ theme }) => theme.transitions.normal},
              box-shadow ${({ theme }) => theme.transitions.normal},
              background ${({ theme }) => theme.transitions.normal};
  border: 1px solid ${({ theme }) => theme.colors.border};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.md};
    background: ${({ theme }) => theme.colors.surfaceLight};
  }
`;

export const CardImage = styled.div`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surfaceLight};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${({ theme }) => theme.transitions.slow};
  }

  ${Card}:hover & img {
    transform: scale(1.05);
  }
`;

export const PlayOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity ${({ theme }) => theme.transitions.fast};
  font-size: 3rem;

  ${Card}:hover & {
    opacity: 1;
  }
`;

export const CardBody = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
`;

export const SongTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ArtistName = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

/* Prop-based: destacar canciones populares */
export const PopularBadge = styled.span`
  display: inline-block;
  background: ${({ theme, $type }) =>
    $type === 'hot'
      ? theme.colors.accent
      : theme.colors.primary};
  color: #fff;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 700;
  padding: 2px 8px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  margin-top: ${({ theme }) => theme.spacing.sm};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;