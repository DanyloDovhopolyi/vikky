import { useTranslations } from "@/app/i18n";
import { renderTextWithEmphasis } from "@/app/lib/mappers";
import {
  ContentGrid,
  ContentBlock,
  BlockTitle,
  BlockSubtitle,
  BlockList,
  BlockListItem,
  BlockText,
} from "../styles";

export function LearningContent() {
  const t = useTranslations();

  return (
    <ContentGrid>
      <ContentBlock>
        <BlockTitle>{t.course.details.whatYouLearn.title}</BlockTitle>
        {t.course.details.whatYouLearn.sections.map((section, idx) => (
          <div key={idx}>
            <BlockSubtitle>{section.title}</BlockSubtitle>
            <BlockList>
              {section.items.map((item, index) => (
                <BlockListItem key={index}>{item}</BlockListItem>
              ))}
            </BlockList>
          </div>
        ))}
      </ContentBlock>

      <ContentBlock>
        <BlockTitle>{t.course.details.forWhom.title}</BlockTitle>
        {t.course.details.forWhom.intro.map((item, index) => (
          <BlockText key={index}>{renderTextWithEmphasis(item)}</BlockText>
        ))}

        <BlockSubtitle>
          {t.course.details.forWhom.additional.title}
        </BlockSubtitle>
        <BlockList>
          {t.course.details.forWhom.additional.items.map((item, index) => (
            <BlockListItem key={index}>{item}</BlockListItem>
          ))}
        </BlockList>
      </ContentBlock>
    </ContentGrid>
  );
}
