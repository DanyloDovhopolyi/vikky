import { ReactNode } from "react";
import {
  PhilosophyCard,
  IconWrapper,
  CardTitle,
  CardDescription,
} from "../styles";

type PhilosophyCardItemProps = {
  title: string;
  description: string;
  icon: ReactNode;
  isVisible: boolean;
  index: number;
};

export function PhilosophyCardItem({
  title,
  description,
  icon,
  isVisible,
  index,
}: PhilosophyCardItemProps) {
  return (
    <PhilosophyCard $isVisible={isVisible} $index={index}>
      <IconWrapper>{icon}</IconWrapper>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </PhilosophyCard>
  );
}
