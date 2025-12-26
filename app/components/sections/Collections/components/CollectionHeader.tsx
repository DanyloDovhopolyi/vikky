import { useTranslations } from "@/app/i18n";
import { SectionHeader, SectionLabel, Title, Subtitle } from "../styles";

export function CollectionHeader() {
  const t = useTranslations();

  return (
    <SectionHeader>
      <SectionLabel>{t.collections.label}</SectionLabel>
      <Title>{t.collections.title}</Title>
      <Subtitle>{t.collections.subtitle}</Subtitle>
    </SectionHeader>
  );
}
