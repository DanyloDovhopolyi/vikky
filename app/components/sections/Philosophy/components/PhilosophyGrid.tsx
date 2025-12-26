import { ReactNode } from "react";
import { useStaggeredReveal } from "@/app/hooks/useScrollReveal";
import { PhilosophyGridWrapper } from "../styles";
import { PhilosophyCardItem } from "./PhilosophyCardItem";

type PhilosophyItem = {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
};

type PhilosophyGridProps = {
  items: PhilosophyItem[];
};

export function PhilosophyGrid({ items }: PhilosophyGridProps) {
  const { containerRef, visibleItems } = useStaggeredReveal(items.length, 150);

  return (
    <PhilosophyGridWrapper ref={containerRef}>
      {items.map((item, index) => (
        <PhilosophyCardItem
          key={item.id}
          title={item.title}
          description={item.description}
          icon={item.icon}
          isVisible={visibleItems[index]}
          index={index}
        />
      ))}
    </PhilosophyGridWrapper>
  );
}
