"use client";

import { useMemo } from "react";
import { useTranslations } from "@/app/i18n";
import { FooterWrapper, FooterContainer } from "./styles";
import { FooterBrand, FooterLinksColumn, FooterContact } from "./components";

export default function Footer() {
  const t = useTranslations();

  const navigationLinks = useMemo(
    () => [
      { href: "#catalog", label: t.footer.navigation.catalog },
      { href: "#collections", label: t.footer.navigation.collections },
      { href: "#course", label: t.footer.navigation.education },
      { href: "#about", label: t.footer.navigation.about },
    ],
    [t.footer.navigation]
  );

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterBrand />
        <FooterLinksColumn
          title={t.footer.navigation.title}
          links={navigationLinks}
        />
        <FooterContact />
      </FooterContainer>
    </FooterWrapper>
  );
}
