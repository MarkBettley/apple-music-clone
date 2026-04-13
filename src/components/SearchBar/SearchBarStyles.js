import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
  max-width: 680px;
  margin: ${({ theme }) => theme.spacing.xxl} auto ${({ theme }) => theme.spacing.xl};
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

export const SearchTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
  font-weight: 900;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  letter-spacing: -1px;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SearchForm = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.surfaceLight};
  border: 2px solid ${({ theme, $focused }) =>
    $focused ? theme.colors.primary : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  transition: border-color ${({ theme }) => theme.transitions.fast},
              box-shadow ${({ theme }) => theme.transitions.fast};
  box-shadow: ${({ theme, $focused }) => $focused ? theme.shadows.glow : 'none'};
`;

export const SearchIcon = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-right: ${({ theme }) => theme.spacing.sm};
  opacity: 0.6;
`;

export const SearchInput = styled.input`
  flex: 1;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-family: ${({ theme }) => theme.fonts.body};
  padding: ${({ theme }) => theme.spacing.sm} 0;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const ClearButton = styled.button`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  padding: ${({ theme }) => theme.spacing.xs};
  transition: color ${({ theme }) => theme.transitions.fast};
  display: ${({ $visible }) => ($visible ? 'block' : 'none')};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;