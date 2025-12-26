import { useTranslations } from "@/app/i18n";
import { SectionHeader, SectionLabel, Title, Subtitle } from "../styles";

export function PhilosophyHeader() {
  const t = useTranslations();

  return (
    <SectionHeader>
      <SectionLabel>{t.philosophy.label}</SectionLabel>
      <Title>{t.philosophy.title}</Title>
      <Subtitle>{t.philosophy.subtitle}</Subtitle>
    </SectionHeader>
  );
}
