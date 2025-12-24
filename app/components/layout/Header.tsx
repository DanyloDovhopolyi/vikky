"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import styled from "styled-components";
import Link from "next/link";
import { theme } from "@/app/styles/theme";
import { Container, FlexRow } from "@/app/components/ui";
import { useTranslations } from "@/app/i18n";
import {
  FacebookIcon,
  InstagramIcon,
  SearchIcon,
  CartIcon,
  MenuIcon,
  CloseIcon,
} from "@/app/images/icons";

const HeaderWrapper = styled.header<{ $scrolled: boolean }>`
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

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)<{ $scrolled: boolean }>`
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

const Nav = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.lg}) {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    max-width: 320px;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    gap: ${theme.spacing.xl};
    background-color: ${theme.colors.primary.main};
    transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "100%")});
    transition: transform ${theme.transitions.normal};
    z-index: ${theme.zIndex.modal};
  }
`;

const NavLink = styled(Link)<{ $scrolled: boolean }>`
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

    &::after {
      background-color: ${theme.colors.white};
    }
  }
`;

const HeaderActions = styled(FlexRow)`
  gap: ${theme.spacing.lg};
`;

const IconButton = styled.button<{ $scrolled: boolean }>`
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

const MobileMenuButton = styled(IconButton)`
  display: none;
  z-index: ${theme.zIndex.modal + 1};

  @media (max-width: ${theme.breakpoints.lg}) {
    display: flex;
  }
`;

const Overlay = styled.div<{ $isOpen: boolean }>`
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

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};

  @media (max-width: ${theme.breakpoints.lg}) {
    display: none;
  }
`;

const SocialIcon = styled.a<{ $scrolled: boolean }>`
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

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations();

  const navLinks = useMemo(
    () => [
      { href: "#catalog", label: t.nav.catalog },
      { href: "#about", label: t.nav.ethnoDesign },
      { href: "#philosophy", label: t.nav.nature },
      { href: "#collections", label: t.nav.collection },
      { href: "#course", label: t.nav.education },
      { href: "#instagram", label: t.nav.instagram },
    ],
    [t.nav]
  );

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <>
      <HeaderWrapper $scrolled={scrolled}>
        <HeaderContainer>
          <Logo href="/" $scrolled={scrolled}>
            {t.common.brandName}
          </Logo>

          <Nav $isOpen={menuOpen}>
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                $scrolled={scrolled}
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            ))}
          </Nav>

          <HeaderActions $gap={theme.spacing.md}>
            <SocialLinks>
              <SocialIcon href="#" $scrolled={scrolled} aria-label="Facebook">
                <FacebookIcon />
              </SocialIcon>
              <SocialIcon href="#" $scrolled={scrolled} aria-label="Instagram">
                <InstagramIcon />
              </SocialIcon>
            </SocialLinks>

            <IconButton $scrolled={scrolled} aria-label="Пошук">
              <SearchIcon />
            </IconButton>

            <IconButton $scrolled={scrolled} aria-label="Кошик">
              <CartIcon />
            </IconButton>

            <MobileMenuButton
              $scrolled={scrolled}
              onClick={toggleMenu}
              aria-label={menuOpen ? "Закрити меню" : "Відкрити меню"}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </MobileMenuButton>
          </HeaderActions>
        </HeaderContainer>
      </HeaderWrapper>
      <Overlay $isOpen={menuOpen} onClick={closeMenu} />
    </>
  );
}
