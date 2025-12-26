import styled from "styled-components";
import Link from "next/link";
import { theme } from "@/app/styles/theme";
import { FlexRow } from "@/app/components/ui";

export const HeaderWrapper = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${theme.zIndex.sticky};
  padding: ${({ $scrolled }) =>
      $scrolled ? theme.spacing.md : theme.spacing.lg}
    0;
  background-color: ${({ $scrolled }) =>
    $scrolled ? theme.colors.white : "transparent"};
  box-shadow: ${({ $scrolled }) => ($scrolled ? theme.shadows.md : "none")};
  transition: all ${theme.transitions.normal};
`;

export const HeaderContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(Link)<{ $scrolled: boolean }>`
  font-family: ${theme.typography.fontFamily.accent};
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.semibold};
  font-style: italic;
  color: ${({ $scrolled }) =>
    $scrolled ? theme.colors.primary.main : theme.colors.white};
  transition: color ${theme.transitions.normal};

  &:hover {
    color: ${({ $scrolled }) =>
      $scrolled ? theme.colors.primary.dark : theme.colors.secondary.main};
  }
`;

export const Nav = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.lg}) {
    display: none;
  }
`;

export const MobileNav = styled.nav<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: ${theme.breakpoints.lg}) {
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    max-width: 320px;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacing.xl};
    background-color: ${theme.colors.primary.main};
    transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "100%")});
    transition: transform ${theme.transitions.normal};
    z-index: ${theme.zIndex.mobileNav};
  }
`;

export const NavLink = styled.a<{ $scrolled: boolean }>`
  font-family: ${theme.typography.fontFamily.body};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: ${theme.typography.letterSpacing.wider};
  color: ${({ $scrolled }) =>
    $scrolled ? theme.colors.text.primary : theme.colors.white};
  position: relative;
  padding: ${theme.spacing.xs} 0;
  transition: color ${theme.transitions.fast};

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ $scrolled }) =>
      $scrolled ? theme.colors.primary.main : theme.colors.white};
    transition: width ${theme.transitions.normal};
  }

  &:hover {
    color: ${({ $scrolled }) =>
      $scrolled ? theme.colors.primary.main : theme.colors.secondary.main};

    &::after {
      width: 100%;
    }
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    color: ${theme.colors.white};
    font-size: ${theme.typography.fontSize.lg};
    cursor: pointer;
    pointer-events: auto;
    -webkit-tap-highlight-color: transparent;

    &::after {
      background-color: ${theme.colors.white};
    }
  }
`;

export const HeaderActions = styled(FlexRow)`
  gap: ${theme.spacing.lg};
`;

export const IconButton = styled.button<{ $scrolled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${theme.borderRadius.full};
  color: ${({ $scrolled }) =>
    $scrolled ? theme.colors.text.primary : theme.colors.white};
  transition: all ${theme.transitions.fast};

  &:hover {
    background-color: ${({ $scrolled }) =>
      $scrolled ? theme.colors.secondary.main : "rgba(255, 255, 255, 0.1)"};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const MobileMenuButton = styled(IconButton)`
  display: none;
  z-index: ${theme.zIndex.modal + 1};

  @media (max-width: ${theme.breakpoints.lg}) {
    display: flex;
  }
`;

export const Overlay = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: ${theme.breakpoints.lg}) {
    display: block;
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
    transition: all ${theme.transitions.normal};
    z-index: ${theme.zIndex.overlay};
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};

  @media (max-width: ${theme.breakpoints.lg}) {
    display: none;
  }
`;

export const SocialIcon = styled.a<{ $scrolled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${theme.borderRadius.full};
  color: ${({ $scrolled }) =>
    $scrolled ? theme.colors.text.secondary : theme.colors.white};
  transition: all ${theme.transitions.fast};

  &:hover {
    color: ${({ $scrolled }) =>
      $scrolled ? theme.colors.primary.main : theme.colors.secondary.main};
    transform: translateY(-2px);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;
