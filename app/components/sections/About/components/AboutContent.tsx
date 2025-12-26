import { useTranslations } from "@/app/i18n";
import {
  ContentWrapper,
  SectionLabel,
  Title,
  Description,
  DescParagraph,
  Signature,
  SignatureText,
} from "../styles";

type AboutContentProps = {
  isVisible: boolean;
};

export function AboutContent({ isVisible }: AboutContentProps) {
  const t = useTranslations();

  return (
    <ContentWrapper $isVisible={isVisible}>
      <SectionLabel>{t.about.label}</SectionLabel>
      <Title>{t.about.title}</Title>

      <Description>
        <DescParagraph>{t.about.lead}</DescParagraph>
        <DescParagraph>{t.about.p1}</DescParagraph>
        <DescParagraph>{t.about.p2}</DescParagraph>
        <DescParagraph>{t.about.p3}</DescParagraph>
        <DescParagraph>{t.about.p4}</DescParagraph>
        <DescParagraph>{t.about.p5}</DescParagraph>
        <DescParagraph>{t.about.p6}</DescParagraph>
        <DescParagraph>{t.about.p7}</DescParagraph>
      </Description>

      <Signature>
        <SignatureText>{t.about.signature}</SignatureText>
      </Signature>
    </ContentWrapper>
  );
}
