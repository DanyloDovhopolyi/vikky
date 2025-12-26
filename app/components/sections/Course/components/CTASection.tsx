import { useTranslations } from "@/app/i18n";
import {
  CTASection as StyledCTASection,
  CTATitle,
  CTAText,
  CTAButton,
} from "../styles";

export function CTASection() {
  const t = useTranslations();

  return (
    <StyledCTASection>
      <CTATitle>{t.course.details.cta.title}</CTATitle>
      <CTAText>{t.course.details.cta.description}</CTAText>
      <CTAButton
        href="https://ig.me/m/vikky_doch"
        target="_blank"
        rel="noopener noreferrer"
        $size="lg"
        $variant="secondary"
      >
        {t.course.details.cta.button}
      </CTAButton>
    </StyledCTASection>
  );
}
