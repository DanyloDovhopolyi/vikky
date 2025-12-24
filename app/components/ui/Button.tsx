"use client";

import styled, { css } from "styled-components";
import { theme } from "@/app/styles/theme";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  $variant?: ButtonVariant;
  $size?: ButtonSize;
  $fullWidth?: boolean;
}

const sizeStyles = {
  sm: css`
    padding: ${theme.spacing.sm} ${theme.spacing.lg};
    font-size: ${theme.typography.fontSize.sm};
  `,
  md: css`
    padding: ${theme.spacing.md} ${theme.spacing.xl};
    font-size: ${theme.typography.fontSize.base};
  `,
  lg: css`
    padding: ${theme.spacing.lg} ${theme.spacing["2xl"]};
    font-size: ${theme.typography.fontSize.md};
  `,
};

const variantStyles = {
  primary: css`
    background-color: ${theme.colors.primary.main};
    color: ${theme.colors.white};
    border: 2px solid ${theme.colors.primary.main};

    &:hover {
      background-color: ${theme.colors.primary.dark};
      border-color: ${theme.colors.primary.dark};
      transform: translateY(-2px);
      box-shadow: ${theme.shadows.lg};
    }

    &:active {
      transform: translateY(0);
    }
  `,
  secondary: css`
    background-color: ${theme.colors.secondary.main};
    color: ${theme.colors.primary.main};
    border: 2px solid ${theme.colors.secondary.main};

    &:hover {
      background-color: ${theme.colors.secondary.dark};
      border-color: ${theme.colors.secondary.dark};
      transform: translateY(-2px);
    }
  `,
  outline: css`
    background-color: transparent;
    color: ${theme.colors.primary.main};
    border: 2px solid ${theme.colors.primary.main};

    &:hover {
      background-color: ${theme.colors.primary.main};
      color: ${theme.colors.white};
      transform: translateY(-2px);
    }
  `,
  ghost: css`
    background-color: transparent;
    color: ${theme.colors.text.primary};
    border: 2px solid transparent;

    &:hover {
      background-color: ${theme.colors.secondary.main};
    }
  `,
};

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};
  font-family: ${theme.typography.fontFamily.body};
  font-weight: ${theme.typography.fontWeight.medium};
  letter-spacing: ${theme.typography.letterSpacing.wide};
  text-transform: uppercase;
  border-radius: ${theme.borderRadius.sm};
  cursor: pointer;
  transition: all ${theme.transitions.normal};
  white-space: nowrap;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};

  ${({ $size = "md" }) => sizeStyles[$size]}
  ${({ $variant = "primary" }) => variantStyles[$variant]}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.accent.main};
    outline-offset: 2px;
  }
`;

export const ButtonLink = styled.a<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};
  font-family: ${theme.typography.fontFamily.body};
  font-weight: ${theme.typography.fontWeight.medium};
  letter-spacing: ${theme.typography.letterSpacing.wide};
  text-transform: uppercase;
  border-radius: ${theme.borderRadius.sm};
  cursor: pointer;
  transition: all ${theme.transitions.normal};
  text-decoration: none;
  white-space: nowrap;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};

  ${({ $size = "md" }) => sizeStyles[$size]}
  ${({ $variant = "primary" }) => variantStyles[$variant]}

  &:focus-visible {
    outline: 2px solid ${theme.colors.accent.main};
    outline-offset: 2px;
  }
`;
