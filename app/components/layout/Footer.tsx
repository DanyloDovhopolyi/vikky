"use client";

import { useMemo } from "react";
import styled from "styled-components";
import Link from "next/link";
import { theme } from "@/app/styles/theme";
import { Container, FlexRow } from "@/app/components/ui";
import { useTranslations } from "@/app/i18n";
import {
  InstagramIcon,
  FacebookIcon,
  YouTubeIcon,
  TelegramIcon,
  PhoneIcon,
  EmailIcon,
  LocationIcon,
} from "@/app/images/icons";

const FooterWrapper = styled.footer`
  position: relative;
  color: ${theme.colors.white};
  padding: ${theme.spacing["3xl"]} 0 ${theme.spacing.xl};
  background-image: url("/images/bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const FooterContainer = styled(Container)`
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr) 1.5fr;
  gap: ${theme.spacing["2xl"]};

  @media (max-width: ${theme.breakpoints.xl}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xl};
    text-align: center;
  }
`;

const FooterColumn = styled.div``;

const Logo = styled(Link)`
  display: inline-block;
  font-family: ${theme.typography.fontFamily.accent};
  font-size: ${theme.typography.fontSize["2xl"]};
  font-weight: ${theme.typography.fontWeight.semibold};
  font-style: italic;
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing.lg};
  transition: color ${theme.transitions.fast};

  &:hover {
    color: ${theme.colors.secondary.main};
  }
`;

const FooterDescription = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: rgba(255, 255, 255, 0.7);
  line-height: ${theme.typography.lineHeight.relaxed};
  max-width: 300px;

  @media (max-width: ${theme.breakpoints.md}) {
    max-width: none;
    margin: 0 auto;
  }
`;

const FooterTitle = styled.h4`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize.md};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing.lg};
`;

const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;

const FooterLink = styled.li`
  a {
    font-size: ${theme.typography.fontSize.sm};
    color: rgba(255, 255, 255, 0.7);
    transition: all ${theme.transitions.fast};

    &:hover {
      color: ${theme.colors.white};
      padding-left: ${theme.spacing.sm};
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-size: ${theme.typography.fontSize.sm};
  color: rgba(255, 255, 255, 0.7);
  transition: color ${theme.transitions.fast};

  @media (max-width: ${theme.breakpoints.md}) {
    justify-content: center;
  }

  &:hover {
    color: ${theme.colors.white};
  }

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.md}) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: ${theme.borderRadius.full};
  color: ${theme.colors.white};
  transition: all ${theme.transitions.fast};

  &:hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary.main};
    transform: translateY(-3px);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const FooterBottom = styled.div`
  margin-top: ${theme.spacing["2xl"]};
  padding-top: ${theme.spacing.xl};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterBottomContent = styled(FlexRow)`
  justify-content: space-between;

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${theme.spacing.md};
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: rgba(255, 255, 255, 0.5);
`;

const BottomLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};

  a {
    font-size: ${theme.typography.fontSize.sm};
    color: rgba(255, 255, 255, 0.5);
    transition: color ${theme.transitions.fast};

    &:hover {
      color: ${theme.colors.white};
    }
  }
`;

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

  const supportLinks = useMemo(
    () => [
      { href: "#delivery", label: t.footer.help.delivery },
      { href: "#returns", label: t.footer.help.returns },
      { href: "#sizing", label: t.footer.help.sizes },
      { href: "#faq", label: t.footer.help.faq },
    ],
    [t.footer.help]
  );

  const legalLinks = useMemo(
    () => [
      { href: "#privacy", label: t.footer.legal.privacy },
      { href: "#terms", label: t.footer.legal.terms },
      { href: "#cookies", label: t.footer.legal.cookies },
    ],
    [t.footer.legal]
  );

  return (
    <FooterWrapper>
      <Container>
        <FooterContainer>
          <FooterColumn>
            <Logo href="/">{t.common.brandName}</Logo>
            <FooterDescription>{t.footer.description}</FooterDescription>
            <SocialLinks>
              <SocialLink
                href="https://instagram.com/vikky.doch"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </SocialLink>
              <SocialLink
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </SocialLink>
              <SocialLink
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <YouTubeIcon />
              </SocialLink>
              <SocialLink
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <TelegramIcon />
              </SocialLink>
            </SocialLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>{t.footer.navigation.title}</FooterTitle>
            <FooterLinks>
              {navigationLinks.map((link) => (
                <FooterLink key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </FooterLink>
              ))}
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>{t.footer.help.title}</FooterTitle>
            <FooterLinks>
              {supportLinks.map((link) => (
                <FooterLink key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </FooterLink>
              ))}
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>{t.footer.legal.title}</FooterTitle>
            <FooterLinks>
              {legalLinks.map((link) => (
                <FooterLink key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </FooterLink>
              ))}
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>{t.footer.contact.title}</FooterTitle>
            <ContactInfo>
              <ContactItem href="tel:+380501234567">
                <PhoneIcon />
                {t.footer.contact.phone}
              </ContactItem>
              <ContactItem href="mailto:info@vikky-doch.ua">
                <EmailIcon />
                {t.footer.contact.email}
              </ContactItem>
              <ContactItem href="#">
                <LocationIcon />
                {t.footer.contact.address}
              </ContactItem>
            </ContactInfo>
          </FooterColumn>
        </FooterContainer>

        <FooterBottom>
          <FooterBottomContent>
            <Copyright>{t.footer.copyright}</Copyright>
            <BottomLinks>
              <Link href="#privacy">{t.footer.privacyPolicy}</Link>
              <Link href="#terms">{t.footer.termsOfUse}</Link>
            </BottomLinks>
          </FooterBottomContent>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
}
