import { keyframes, css } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const scaleUp = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;

export const slideInFromBottom = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const slideInFromTop = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
`;

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const staggerChild = (index: number, baseDelay: number = 0.1) => css`
  animation-delay: ${index * baseDelay}s;
`;

export const animationMixins = {
  fadeInUp: css`
    animation: ${fadeInUp} 0.6s ease forwards;
  `,
  fadeInDown: css`
    animation: ${fadeInDown} 0.6s ease forwards;
  `,
  fadeInLeft: css`
    animation: ${fadeInLeft} 0.6s ease forwards;
  `,
  fadeInRight: css`
    animation: ${fadeInRight} 0.6s ease forwards;
  `,
  scaleIn: css`
    animation: ${scaleIn} 0.5s ease forwards;
  `,
  float: css`
    animation: ${float} 3s ease-in-out infinite;
  `,
};

export const revealOnScroll = css`
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
