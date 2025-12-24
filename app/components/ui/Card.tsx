"use client";

import styled from "styled-components";
import { theme } from "@/app/styles/theme";

export const Card = styled.div<{
  $padding?: string;
  $background?: string;
  $hover?: boolean;
}>`
  background-color: ${({ $background }) => $background || theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: ${({ $padding }) => $padding || theme.spacing.xl};
  box-shadow: ${theme.shadows.sm};
  transition: all ${theme.transitions.normal};

  ${({ $hover }) =>
    $hover &&
    `
    &:hover {
      transform: translateY(-5px);
      box-shadow: ${theme.shadows.lg};
    }
  `}
`;

export const CardImage = styled.div<{ $aspectRatio?: string }>`
  position: relative;
  width: 100%;
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio || "4/5"};
  overflow: hidden;
  border-radius: ${theme.borderRadius.md};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${theme.transitions.slow};
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const CardContent = styled.div<{ $padding?: string }>`
  padding: ${({ $padding }) => $padding || `${theme.spacing.lg} 0 0`};
`;

export const CardTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
`;

export const CardDescription = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeight.relaxed};
`;

export const ProductCard = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  transition: all ${theme.transitions.normal};
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${theme.shadows.xl};
  }
`;

export const ProductImage = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 3/4;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${theme.transitions.slower};
  }

  &:hover img {
    transform: scale(1.08);
  }
`;

export const ProductInfo = styled.div`
  padding: ${theme.spacing.lg};
  text-align: center;
`;

export const ProductTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize.md};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.xs};
`;

export const ProductPrice = styled.span`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};
`;
