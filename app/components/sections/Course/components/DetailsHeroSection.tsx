import { useTranslations } from "@/app/i18n";
import {
  DetailsHero,
  DetailsTitle,
  DetailsTagline,
  BlockText,
} from "../styles";

export function DetailsHeroSection() {
  const t = useTranslations();

  return (
    <DetailsHero>
      <DetailsTitle>{t.course.details.title}</DetailsTitle>
      <DetailsTagline>{t.course.details.tagline}</DetailsTagline>
      <BlockText>{t.course.details.intro}</BlockText>
    </DetailsHero>
  );
}
