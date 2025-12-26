import { useTranslations } from "@/app/i18n";
import { renderTextWithEmphasis } from "@/app/lib/mappers";
import {
  TwoColumnSection,
  InfoCard,
  InfoCardTitle,
  InfoCardText,
} from "../styles";

export function FormatAndAtmosphere() {
  const t = useTranslations();

  return (
    <TwoColumnSection>
      <InfoCard>
        <InfoCardTitle>{t.course.details.format.title}</InfoCardTitle>
        {t.course.details.format.items.map((item, index) => (
          <InfoCardText key={index}>
            {renderTextWithEmphasis(item)}
          </InfoCardText>
        ))}
      </InfoCard>

      <InfoCard>
        <InfoCardTitle>{t.course.details.atmosphere.title}</InfoCardTitle>
        {t.course.details.atmosphere.items.map((item, index) => (
          <InfoCardText key={index}>
            {renderTextWithEmphasis(item)}
          </InfoCardText>
        ))}
      </InfoCard>
    </TwoColumnSection>
  );
}
