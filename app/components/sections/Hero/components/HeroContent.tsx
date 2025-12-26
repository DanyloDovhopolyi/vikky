import { useTranslations } from "@/app/i18n";
import {
  HeroContentWrapper,
  HeroTitle,
  HeroSubtitle,
  HeroButtons,
  PrimaryButton,
  OutlineButton,
} from "../styles";

export function HeroContent() {
  const t = useTranslations();

  return (
    <HeroContentWrapper>
      <HeroTitle>{t.hero.title}</HeroTitle>
      <HeroSubtitle>{t.hero.subtitle}</HeroSubtitle>
      <HeroButtons>
        <PrimaryButton href="#course" $size="lg">
          {t.hero.catalogBtn}
        </PrimaryButton>
        <OutlineButton href="#about" $size="lg" $variant="outline">
          {t.hero.aboutBtn}
        </OutlineButton>
      </HeroButtons>
    </HeroContentWrapper>
  );
}
