import { useTranslations } from "@/app/i18n";
import { CheckIcon } from "@/app/images/icons";
import {
  ResultsSection as StyledResultsSection,
  ResultsTitle,
  ResultsGrid,
  ResultItem,
  ResultIcon,
  ResultText,
} from "../styles";

export function ResultsSection() {
  const t = useTranslations();

  return (
    <StyledResultsSection>
      <ResultsTitle>{t.course.details.results.title}</ResultsTitle>
      <ResultsGrid>
        {t.course.details.results.items.map((item, index) => (
          <ResultItem key={index}>
            <ResultIcon>
              <CheckIcon />
            </ResultIcon>
            <ResultText>{item}</ResultText>
          </ResultItem>
        ))}
      </ResultsGrid>
    </StyledResultsSection>
  );
}
