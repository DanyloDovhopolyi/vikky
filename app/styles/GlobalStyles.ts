import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${theme.typography.fontFamily.body};
    font-size: ${theme.typography.fontSize.base};
    line-height: ${theme.typography.lineHeight.normal};
    color: ${theme.colors.text.primary};
    background-color: ${theme.colors.background.primary};
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.typography.fontFamily.heading};
    font-weight: ${theme.typography.fontWeight.semibold};
    line-height: ${theme.typography.lineHeight.tight};
    color: ${theme.colors.text.primary};
  }

  h1 {
    font-size: ${theme.typography.fontSize["5xl"]};
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.typography.fontSize["3xl"]};
    }
  }

  h2 {
    font-size: ${theme.typography.fontSize["4xl"]};
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.typography.fontSize["2xl"]};
    }
  }

  h3 {
    font-size: ${theme.typography.fontSize["2xl"]};
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.typography.fontSize.xl};
    }
  }

  p {
    margin-bottom: ${theme.spacing.md};
    
    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color ${theme.transitions.fast};
    
    &:hover {
      color: ${theme.colors.primary.main};
    }
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }

  ul, ol {
    list-style: none;
  }

  ::selection {
    background-color: ${theme.colors.primary.main};
    color: ${theme.colors.white};
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.secondary.main};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary.light};
    border-radius: ${theme.borderRadius.full};
    
    &:hover {
      background: ${theme.colors.primary.main};
    }
  }

  :focus-visible {
    outline: 2px solid ${theme.colors.primary.main};
    outline-offset: 2px;
  }

  .reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* Stagger animation delays */
  .stagger-1 { transition-delay: 0.1s; }
  .stagger-2 { transition-delay: 0.2s; }
  .stagger-3 { transition-delay: 0.3s; }
  .stagger-4 { transition-delay: 0.4s; }
  .stagger-5 { transition-delay: 0.5s; }
`;
