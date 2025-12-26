import { useTranslations } from "@/app/i18n";
import { InstagramIcon } from "@/app/images/icons";
import { SectionHeader, SectionLabel, Title, Handle } from "../styles";

export function InstagramHeader() {
  const t = useTranslations();

  return (
    <SectionHeader>
      <SectionLabel>{t.instagram.label}</SectionLabel>
      <Title>{t.instagram.title}</Title>
      <Handle
        href="https://www.instagram.com/vikky_doch/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon />
        {t.instagram.handle}
      </Handle>
    </SectionHeader>
  );
}
