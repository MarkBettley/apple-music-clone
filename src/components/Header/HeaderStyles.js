import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.surface} 0%,
    transparent 100%
  );
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xxl};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const LogoIcon = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
`;

export const LogoText = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 900;
  letter-spacing: -0.5px;
  color: ${({ theme }) => theme.colors.text};

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const NavLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transitions.fast};
  letter-spacing: 0.5px;
  text-transform: uppercase;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }

  /* Prop-based active style */
  ${({ $active, theme }) =>
    $active &&
    `
    color: ${theme.colors.primary};
    &:hover { color: ${theme.colors.primaryDark}; }
  `}
`;