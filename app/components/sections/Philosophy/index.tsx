"use client";

import { useMemo, ReactNode } from "react";
import { Container } from "@/app/components/ui";
import { useTranslations } from "@/app/i18n";
import { UserIcon, SparkleIcon, HeartIcon, SunIcon } from "@/app/images/icons";
import { PhilosophySection } from "./styles";
import { PhilosophyHeader, PhilosophyGrid } from "./components";

const icons: ReactNode[] = [
  <UserIcon key="1" />,
  <SparkleIcon key="2" />,
  <HeartIcon key="3" />,
  <SunIcon key="4" />,
];

export default function Philosophy() {
  const t = useTranslations();

  const philosophyItems = useMemo(
    () =>
      t.philosophy.items.map((item, index) => ({
        id: index + 1,
        title: item.title,
        description: item.description,
        icon: icons[index],
      })),
    [t.philosophy.items]
  );

  return (
    <PhilosophySection id="philosophy">
      <Container>
        <PhilosophyHeader />
        <PhilosophyGrid items={philosophyItems} />
      </Container>
    </PhilosophySection>
  );
}
