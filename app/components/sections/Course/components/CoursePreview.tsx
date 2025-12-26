import Image from "next/image";
import { Button } from "@/app/components/ui";
import { CheckIcon } from "@/app/images/icons";
import { useTranslations } from "@/app/i18n";
import {
  ImageWrapper,
  ImageGrid,
  ImageCard,
  ContentWrapper,
  SectionLabel,
  Title,
  Subtitle,
  Description,
  FeaturesList,
  FeatureItem,
  FeatureIcon,
  ButtonWrapper,
  CTAButton,
} from "../styles";

type CoursePreviewProps = {
  isVisible: boolean;
  isOpen: boolean;
  onToggle: () => void;
};

export function CoursePreview({
  isVisible,
  isOpen,
  onToggle,
}: CoursePreviewProps) {
  const t = useTranslations();

  return (
    <>
      <ImageWrapper $isVisible={isVisible}>
        <ImageGrid>
          <ImageCard>
            <Image
              src="/images/course-logo.jpg"
              alt={t.course.image1Alt}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </ImageCard>
          <ImageCard $aspectRatio="3/4">
            <Image
              src="/images/course-logo1.jpg"
              alt={t.course.image2Alt}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </ImageCard>
        </ImageGrid>
      </ImageWrapper>

      <ContentWrapper $isVisible={isVisible}>
        <SectionLabel>{t.course.label}</SectionLabel>
        <Title>{t.course.title}</Title>
        <Subtitle>{t.course.subtitle}</Subtitle>
        <Description>{t.course.description}</Description>

        <FeaturesList>
          {t.course.features.map((feature, index) => (
            <FeatureItem key={index}>
              <FeatureIcon>
                <CheckIcon />
              </FeatureIcon>
              {feature}
            </FeatureItem>
          ))}
        </FeaturesList>

        <ButtonWrapper>
          <CTAButton
            href="https://ig.me/m/vikky_doch"
            target="_blank"
            rel="noopener noreferrer"
            $size="lg"
            $variant="primary"
          >
            {t.course.registerBtn}
          </CTAButton>
          <Button $variant="outline" $size="lg" onClick={onToggle}>
            {isOpen ? t.course.details.closeBtn : t.course.detailsBtn}
          </Button>
        </ButtonWrapper>
      </ContentWrapper>
    </>
  );
}
