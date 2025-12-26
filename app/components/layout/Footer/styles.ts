import styled from "styled-components";
import Link from "next/link";
import { theme } from "@/app/styles/theme";
import { FlexRow } from "@/app/components/ui";

export const FooterWrapper = styled.footer`
  position: relative;
  color: ${theme.colors.white};
  padding: ${theme.spacing["3xl"]} 0 ${theme.spacing.xl};
  background-image: url("/images/bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const FooterContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
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

export const FooterColumn = styled.div``;

export const Logo = styled(Link)`
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

export const FooterDescription = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: rgba(255, 255, 255, 0.7);
  line-height: ${theme.typography.lineHeight.relaxed};
  max-width: 300px;
  margin-bottom: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.md}) {
    max-width: none;
    margin: 0 auto ${theme.spacing.md};
  }
`;

export const FooterTitle = styled.h4`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize.md};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing.lg};
`;

export const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;

export const FooterLink = styled.li`
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

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${theme.spacing.md};
  justify-content: flex-start;

  @media (max-width: ${theme.breakpoints.md}) {
    justify-content: center;
  }
`;

export const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-size: ${theme.typography.fontSize.sm};
  color: rgba(255, 255, 255, 0.7);
  transition: color ${theme.transitions.fast};
  white-space: nowrap;
  flex-shrink: 0;

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

export const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.md};
  justify-content: flex-start;

  @media (max-width: ${theme.breakpoints.md}) {
    justify-content: center;
  }
`;

export const SocialLink = styled.a`
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

export const FooterBottom = styled.div`
  margin-top: ${theme.spacing["2xl"]};
  padding-top: ${theme.spacing.xl};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const FooterBottomContent = styled(FlexRow)`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
  justify-content: space-between;

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${theme.spacing.md};
    text-align: center;
  }
`;

export const Copyright = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: rgba(255, 255, 255, 0.5);
`;

export const BottomLinks = styled.div`
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
