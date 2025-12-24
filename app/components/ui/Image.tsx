"use client";

import styled from "styled-components";
import { theme } from "@/app/styles/theme";
import NextImage from "next/image";

export const ImageWrapper = styled.div<{
  $aspectRatio?: string;
  $borderRadius?: string;
  $shadow?: boolean;
}>`
  position: relative;
  width: 100%;
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio || "auto"};
  overflow: hidden;
  border-radius: ${({ $borderRadius }) =>
    $borderRadius || theme.borderRadius.lg};
  ${({ $shadow }) => $shadow && `box-shadow: ${theme.shadows.lg};`}

  img {
    object-fit: cover;
  }
`;

export const HeroImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 500px;

  @media (max-width: ${theme.breakpoints.md}) {
    min-height: 400px;
  }

  img {
    object-fit: cover;
    object-position: center top;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      ${theme.colors.overlay} 0%,
      rgba(92, 36, 52, 0.4) 50%,
      transparent 100%
    );
  }
`;

export const CircleImage = styled.div<{ $size?: string }>`
  position: relative;
  width: ${({ $size }) => $size || "120px"};
  height: ${({ $size }) => $size || "120px"};
  border-radius: ${theme.borderRadius.full};
  overflow: hidden;
  border: 3px solid ${theme.colors.white};
  box-shadow: ${theme.shadows.md};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const GalleryImage = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${theme.transitions.slow};
  }

  &:hover img {
    transform: scale(1.1);
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${theme.colors.overlay};
    opacity: 0;
    transition: opacity ${theme.transitions.normal};
    z-index: 1;
  }

  &:hover::before {
    opacity: 0.3;
  }
`;

export { NextImage };
