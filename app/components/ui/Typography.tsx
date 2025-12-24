"use client";

import styled, { css } from "styled-components";
import { theme } from "@/app/styles/theme";

const baseTextStyles = css`
  margin: 0;
`;

export const H1 = styled.h1<{ $color?: string }>`
  ${baseTextStyles}
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize["5xl"]};
  font-weight: ${theme.typography.fontWeight.semibold};
  line-height: ${theme.typography.lineHeight.tight};
  color: ${({ $color }) => $color || theme.colors.text.primary};

  @media (max-width: ${theme.breakpoints.lg}) {
    font-size: ${theme.typography.fontSize["4xl"]};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize["3xl"]};
  }
`;

export const H2 = styled.h2<{ $color?: string; $accent?: boolean }>`
  ${baseTextStyles}
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize["3xl"]};
  font-weight: ${theme.typography.fontWeight.semibold};
  line-height: ${theme.typography.lineHeight.snug};
  color: ${({ $color }) => $color || theme.colors.text.primary};

  ${({ $accent }) =>
    $accent &&
    css`
      &::after {
        content: "";
        display: block;
        width: 60px;
        height: 3px;
        background-color: ${theme.colors.primary.main};
        margin-top: ${theme.spacing.md};
      }
    `}

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize["2xl"]};
  }
`;

export const H3 = styled.h3<{ $color?: string }>`
  ${baseTextStyles}
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.semibold};
  line-height: ${theme.typography.lineHeight.snug};
  color: ${({ $color }) => $color || theme.colors.text.primary};
`;

export const H4 = styled.h4<{ $color?: string }>`
  ${baseTextStyles}
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.medium};
  line-height: ${theme.typography.lineHeight.snug};
  color: ${({ $color }) => $color || theme.colors.text.primary};
`;

export const Paragraph = styled.p<{
  $size?: "sm" | "md" | "lg";
  $color?: string;
  $weight?: number;
}>`
  ${baseTextStyles}
  font-family: ${theme.typography.fontFamily.body};
  font-size: ${({ $size }) => {
    switch ($size) {
      case "sm":
        return theme.typography.fontSize.sm;
      case "lg":
        return theme.typography.fontSize.md;
      default:
        return theme.typography.fontSize.base;
    }
  }};
  font-weight: ${({ $weight }) =>
    $weight || theme.typography.fontWeight.regular};
  line-height: ${theme.typography.lineHeight.relaxed};
  color: ${({ $color }) => $color || theme.colors.text.secondary};
`;

export const Lead = styled.p<{ $color?: string }>`
  ${baseTextStyles}
  font-family: ${theme.typography.fontFamily.body};
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.regular};
  line-height: ${theme.typography.lineHeight.relaxed};
  color: ${({ $color }) => $color || theme.colors.text.secondary};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize.base};
  }
`;

export const SmallText = styled.span<{ $color?: string }>`
  font-family: ${theme.typography.fontFamily.body};
  font-size: ${theme.typography.fontSize.sm};
  color: ${({ $color }) => $color || theme.colors.text.light};
`;

export const Label = styled.span<{ $color?: string }>`
  font-family: ${theme.typography.fontFamily.body};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: ${theme.typography.letterSpacing.widest};
  color: ${({ $color }) => $color || theme.colors.primary.main};
`;

export const AccentText = styled.span`
  font-family: ${theme.typography.fontFamily.accent};
  font-style: italic;
  color: ${theme.colors.primary.main};
`;

export const Typography = {
  H1,
  H2,
  H3,
  H4,
  Paragraph,
  Lead,
  SmallText,
  Label,
  AccentText,
};
