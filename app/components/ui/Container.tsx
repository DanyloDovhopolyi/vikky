"use client";

import styled from "styled-components";
import { theme } from "@/app/styles/theme";

interface ContainerProps {
  $maxWidth?: string;
  $padding?: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: ${({ $maxWidth }) => $maxWidth || theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ $padding }) => $padding || theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0 ${theme.spacing.md};
  }
`;

export const Section = styled.section<{
  $background?: string;
  $padding?: string;
}>`
  width: 100%;
  padding: ${({ $padding }) => $padding || `${theme.spacing["4xl"]} 0`};
  background-color: ${({ $background }) => $background || "transparent"};

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing["2xl"]} 0;
  }
`;

export const FlexRow = styled.div<{
  $gap?: string;
  $align?: string;
  $justify?: string;
  $wrap?: string;
}>`
  display: flex;
  flex-direction: row;
  gap: ${({ $gap }) => $gap || theme.spacing.md};
  align-items: ${({ $align }) => $align || "center"};
  justify-content: ${({ $justify }) => $justify || "flex-start"};
  flex-wrap: ${({ $wrap }) => $wrap || "nowrap"};
`;

export const FlexColumn = styled.div<{
  $gap?: string;
  $align?: string;
  $justify?: string;
}>`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap || theme.spacing.md};
  align-items: ${({ $align }) => $align || "stretch"};
  justify-content: ${({ $justify }) => $justify || "flex-start"};
`;

export const Grid = styled.div<{
  $columns?: string;
  $gap?: string;
  $minChildWidth?: string;
}>`
  display: grid;
  grid-template-columns: ${({ $columns, $minChildWidth }) =>
    $columns ||
    ($minChildWidth
      ? `repeat(auto-fit, minmax(${$minChildWidth}, 1fr))`
      : "repeat(auto-fit, minmax(280px, 1fr))")};
  gap: ${({ $gap }) => $gap || theme.spacing.xl};
`;
