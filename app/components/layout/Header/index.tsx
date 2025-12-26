"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { theme } from "@/app/styles/theme";
import { useTranslations } from "@/app/i18n";
import { HeaderWrapper, HeaderContainer, HeaderActions } from "./styles";
import {
  HeaderLogo,
  Navigation,
  MobileNavigation,
  HeaderSocial,
  MobileMenuToggle,
} from "./components";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations();

  const navLinks = useMemo(
    () => [
      { href: "#about", label: t.nav.about },
      { href: "#collections", label: t.nav.collection },
      { href: "#course", label: t.nav.courses },
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

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      e.stopPropagation();

      setMenuOpen(false);
      document.body.style.overflow = "";

      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);

      if (element) {
        setTimeout(() => {
          const headerHeight = 80;
          const top = element.offsetTop - headerHeight;
          window.scrollTo({ top, behavior: "smooth" });
        }, 500);
      }
    },
    []
  );

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
          <HeaderLogo scrolled={scrolled} />

          <Navigation
            links={navLinks}
            scrolled={scrolled}
            onNavClick={handleNavClick}
          />

          <HeaderActions $gap={theme.spacing.md}>
            <HeaderSocial scrolled={scrolled} />
            <MobileMenuToggle
              scrolled={scrolled}
              isOpen={menuOpen}
              onToggle={toggleMenu}
            />
          </HeaderActions>
        </HeaderContainer>
      </HeaderWrapper>

      <MobileNavigation
        links={navLinks}
        isOpen={menuOpen}
        onClose={closeMenu}
        onNavClick={handleNavClick}
      />
    </>
  );
}
