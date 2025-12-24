"use client";

import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import { theme } from "@/app/styles/theme";
import { Container, Section, H2, Button } from "@/app/components/ui";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { useTranslations } from "@/app/i18n";
import { CheckIcon } from "@/app/images/icons";

const CourseSection = styled(Section)`
  background-color: ${theme.colors.background.secondary};
  position: relative;
  overflow: hidden;
`;

const CourseContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: ${theme.spacing["3xl"]};
  align-items: center;

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing["2xl"]};
  }
`;

const ImageWrapper = styled.div<{ $isVisible: boolean }>`
  position: relative;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: translateX(${({ $isVisible }) => ($isVisible ? "0" : "-50px")});
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${theme.breakpoints.lg}) {
    order: 2;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.md};
`;

const ImageCard = styled.div<{ $aspectRatio?: string }>`
  position: relative;
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio || "4/5"};
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${theme.shadows.md};
  transition: transform ${theme.transitions.normal};

  &:nth-child(2) {
    margin-top: ${theme.spacing.xl};
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: ${theme.shadows.xl};
  }

  img {
    object-fit: cover;
  }
`;

const ContentWrapper = styled.div<{ $isVisible: boolean }>`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: translateX(${({ $isVisible }) => ($isVisible ? "0" : "50px")});
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0.2s;

  @media (max-width: ${theme.breakpoints.lg}) {
    order: 1;
    text-align: center;
  }
`;

const SectionLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  letter-spacing: ${theme.typography.letterSpacing.wide};
  color: ${theme.colors.primary.main};
  margin-bottom: ${theme.spacing.md};

  &::before {
    content: "—";
    color: ${theme.colors.primary.main};
  }
`;

const Title = styled(H2)`
  margin-bottom: ${theme.spacing.lg};
`;

const Subtitle = styled.p`
  font-size: ${theme.typography.fontSize.xl};
  color: ${theme.colors.text.primary};
  font-weight: ${theme.typography.fontWeight.medium};
  margin-bottom: ${theme.spacing.md};
`;

const Description = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeight.relaxed};
  margin-bottom: ${theme.spacing.xl};
`;

const FeaturesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.lg}) {
    align-items: center;
  }
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.base};
`;

const FeatureIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background-color: ${theme.colors.primary.main};
  color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.full};
  flex-shrink: 0;

  svg {
    width: 16px;
    height: 16px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.lg}) {
    justify-content: center;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

// Accordion Styles
const AccordionWrapper = styled.div<{ $isOpen: boolean; $height: number }>`
  max-height: ${({ $isOpen, $height }) => ($isOpen ? `${$height}px` : "0")};
  overflow: hidden;
  transition: max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1);
`;

const AccordionContent = styled.div`
  background: linear-gradient(
    180deg,
    ${theme.colors.background.primary} 0%,
    ${theme.colors.secondary.light} 100%
  );
`;

const AccordionInner = styled(Container)`
  padding-top: ${theme.spacing["4xl"]};
  padding-bottom: ${theme.spacing["4xl"]};
`;

// Hero section of accordion
const DetailsHero = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${theme.spacing["3xl"]};
`;

const DetailsTitle = styled.h2`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize["4xl"]};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.primary.main};
  margin-bottom: ${theme.spacing.lg};
  line-height: ${theme.typography.lineHeight.tight};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize["2xl"]};
  }
`;

const DetailsTagline = styled.p`
  font-family: ${theme.typography.fontFamily.accent};
  font-size: ${theme.typography.fontSize["2xl"]};
  color: ${theme.colors.text.secondary};
  font-style: italic;
  margin-bottom: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize.lg};
  }
`;

const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${theme.spacing["2xl"]};
`;

const CloseBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: transparent;
  border: 1px solid ${theme.colors.primary.main};
  color: ${theme.colors.primary.main};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  letter-spacing: ${theme.typography.letterSpacing.wide};
  text-transform: uppercase;
  cursor: pointer;
  transition: all ${theme.transitions.fast};

  &:hover {
    background: ${theme.colors.primary.main};
    color: ${theme.colors.white};
  }

  &::before {
    content: "×";
    font-size: 1.2em;
  }
`;

// Main content grid
const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing["3xl"]};

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing["2xl"]};
  }
`;

const ContentBlock = styled.div`
  &:first-child {
    padding-right: ${theme.spacing.xl};
    border-right: 1px solid ${theme.colors.secondary.dark};

    @media (max-width: ${theme.breakpoints.lg}) {
      padding-right: 0;
      border-right: none;
      border-bottom: 1px solid ${theme.colors.secondary.dark};
      padding-bottom: ${theme.spacing["2xl"]};
    }
  }
`;

const BlockTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.lg};
  position: relative;
  padding-left: ${theme.spacing.lg};

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 100%;
    background: ${theme.colors.primary.main};
  }
`;

const BlockSubtitle = styled.h4`
  font-size: ${theme.typography.fontSize.md};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.primary.main};
  margin: ${theme.spacing.lg} 0 ${theme.spacing.md};
`;

const BlockText = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeight.relaxed};
  margin-bottom: ${theme.spacing.md};
`;

const BlockList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;

const BlockListItem = styled.li`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeight.relaxed};
  padding-left: ${theme.spacing.lg};
  position: relative;

  &::before {
    content: "→";
    position: absolute;
    left: 0;
    color: ${theme.colors.primary.main};
  }
`;

// Image showcase
const ImageShowcase = styled.div`
  margin: ${theme.spacing["3xl"]} 0;
`;

const ShowcaseGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: ${theme.spacing.md};
  height: 400px;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, 150px);
    height: auto;
  }
`;

const ShowcaseImage = styled.div<{ $span?: boolean }>`
  position: relative;
  border-radius: ${theme.borderRadius.md};
  overflow: hidden;

  ${({ $span }) =>
    $span &&
    `
    grid-row: span 2;
    
    @media (max-width: ${theme.breakpoints.md}) {
      grid-row: span 1;
    }
  `}

  img {
    object-fit: cover;
    transition: transform ${theme.transitions.slow};
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

// Results section
const ResultsSection = styled.div`
  background: ${theme.colors.white};
  padding: ${theme.spacing["2xl"]};
  margin: ${theme.spacing["3xl"]} 0;
  border-radius: ${theme.borderRadius.lg};
`;

const ResultsTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize["2xl"]};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ResultItem = styled.div`
  text-align: center;
`;

const ResultIcon = styled.div`
  width: 48px;
  height: 48px;
  margin: 0 auto ${theme.spacing.sm};
  background: ${theme.colors.primary.main};
  color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 24px;
    height: 24px;
  }
`;

const ResultText = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeight.snug};
`;

// Format & Atmosphere
const TwoColumnSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing["2xl"]};
  margin: ${theme.spacing["3xl"]} 0;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  background: ${theme.colors.white};
  padding: ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.lg};
  border-left: 4px solid ${theme.colors.primary.main};
`;

const InfoCardTitle = styled.h4`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
`;

const InfoCardText = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeight.relaxed};
  margin-bottom: ${theme.spacing.sm};
`;

// CTA Section
const CTASection = styled.div`
  background: ${theme.colors.primary.main};
  padding: ${theme.spacing["3xl"]};
  border-radius: ${theme.borderRadius.xl};
  text-align: center;
  margin-top: ${theme.spacing["3xl"]};
`;

const CTATitle = styled.h3`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize["2xl"]};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing.md};
`;

const CTAText = styled.p`
  font-size: ${theme.typography.fontSize.md};
  color: ${theme.colors.white};
  opacity: 0.9;
  margin-bottom: ${theme.spacing.xl};
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled(Button)`
  background-color: ${theme.colors.white};
  color: ${theme.colors.primary.main};
  font-size: ${theme.typography.fontSize.md};
  padding: ${theme.spacing.md} ${theme.spacing["2xl"]};

  &:hover {
    background-color: ${theme.colors.secondary.light};
  }
`;

export default function Course() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>();
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      setTimeout(() => {
        const accordion = document.getElementById("course-details");
        if (accordion) {
          accordion.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  return (
    <>
      <CourseSection id="course" ref={sectionRef}>
        <CourseContainer>
          <ImageWrapper $isVisible={isVisible}>
            <ImageGrid>
              <ImageCard>
                <Image
                  src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80"
                  alt={t.course.image1Alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </ImageCard>
              <ImageCard $aspectRatio="3/4">
                <Image
                  src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&q=80"
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
              <Button $variant="primary" $size="lg">
                {t.course.registerBtn}
              </Button>
              <Button $variant="outline" $size="lg" onClick={toggleAccordion}>
                {isOpen ? "Закрити" : t.course.detailsBtn}
              </Button>
            </ButtonWrapper>
          </ContentWrapper>
        </CourseContainer>
      </CourseSection>

      <AccordionWrapper
        $isOpen={isOpen}
        $height={contentHeight}
        id="course-details"
      >
        <AccordionContent ref={contentRef}>
          <AccordionInner>
            {/* Hero */}
            <DetailsHero>
              <DetailsTitle>
                Курси крою та пошиття одягу для початківців
              </DetailsTitle>
              <DetailsTagline>
                Спокійно. Практично. З результатом.
              </DetailsTagline>
              <BlockText>
                Ми створили курси, на які хочеться прийти. Без поспіху. Без
                страху. З увагою, підтримкою і відчуттям, що ти на своєму місці.
              </BlockText>
            </DetailsHero>

            <CloseButtonWrapper>
              <CloseBtn onClick={toggleAccordion}>Закрити</CloseBtn>
            </CloseButtonWrapper>

            {/* Image showcase */}
            <ImageShowcase>
              <ShowcaseGrid>
                <ShowcaseImage $span>
                  <Image
                    src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80"
                    alt="Курси шиття"
                    fill
                  />
                </ShowcaseImage>
                <ShowcaseImage>
                  <Image
                    src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&q=80"
                    alt="Пошиття"
                    fill
                  />
                </ShowcaseImage>
                <ShowcaseImage>
                  <Image
                    src="https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=600&q=80"
                    alt="Майстерня"
                    fill
                  />
                </ShowcaseImage>
                <ShowcaseImage>
                  <Image
                    src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80"
                    alt="Тканини"
                    fill
                  />
                </ShowcaseImage>
                <ShowcaseImage>
                  <Image
                    src="https://images.unsplash.com/photo-1605289355680-75fb41239154?w=600&q=80"
                    alt="Швейна машинка"
                    fill
                  />
                </ShowcaseImage>
              </ShowcaseGrid>
            </ImageShowcase>

            {/* Two column content */}
            <ContentGrid>
              <ContentBlock>
                <BlockTitle>Що ти навчишся</BlockTitle>

                <BlockSubtitle>Основи крою</BlockSubtitle>
                <BlockList>
                  <BlockListItem>Зняття мірок</BlockListItem>
                  <BlockListItem>Робота з готовими викрійками</BlockListItem>
                  <BlockListItem>Розкрій тканини</BlockListItem>
                  <BlockListItem>Зметування та примірки</BlockListItem>
                </BlockList>

                <BlockSubtitle>Пошиття виробів</BlockSubtitle>
                <BlockList>
                  <BlockListItem>Спідниця</BlockListItem>
                  <BlockListItem>Сукня</BlockListItem>
                  <BlockListItem>Штани або шорти</BlockListItem>
                  <BlockListItem>Простий верх</BlockListItem>
                </BlockList>

                <BlockSubtitle>Обробка деталей</BlockSubtitle>
                <BlockList>
                  <BlockListItem>Горловина, пройми, низ</BlockListItem>
                  <BlockListItem>Блискавки та кишені</BlockListItem>
                  <BlockListItem>Манжети та комір</BlockListItem>
                  <BlockListItem>Основи прасування</BlockListItem>
                </BlockList>
              </ContentBlock>

              <ContentBlock>
                <BlockTitle>Для кого цей курс</BlockTitle>
                <BlockText>
                  Навчання підходить усім бажаючим, навіть якщо ти ніколи не
                  шила, не працювала зі швейною машинкою і не маєш жодного
                  досвіду.
                </BlockText>
                <BlockText>
                  <strong>Ми навчаємо з нуля</strong>, крок за кроком. Кожна
                  учениця отримує індивідуальну увагу та підтримку.
                </BlockText>

                <BlockSubtitle>Додатково</BlockSubtitle>
                <BlockList>
                  <BlockListItem>Виправлення помилок посадки</BlockListItem>
                  <BlockListItem>Перешив та ремонт одягу</BlockListItem>
                  <BlockListItem>Розрахунок витрат тканини</BlockListItem>
                  <BlockListItem>Основи роботи з клієнтами</BlockListItem>
                </BlockList>
              </ContentBlock>
            </ContentGrid>

            {/* Results */}
            <ResultsSection>
              <ResultsTitle>Після курсу ти зможеш</ResultsTitle>
              <ResultsGrid>
                <ResultItem>
                  <ResultIcon>
                    <CheckIcon />
                  </ResultIcon>
                  <ResultText>Пошити виріб від початку до кінця</ResultText>
                </ResultItem>
                <ResultItem>
                  <ResultIcon>
                    <CheckIcon />
                  </ResultIcon>
                  <ResultText>Підганяти одяг під свою фігуру</ResultText>
                </ResultItem>
                <ResultItem>
                  <ResultIcon>
                    <CheckIcon />
                  </ResultIcon>
                  <ResultText>Перешивати й ремонтувати речі</ResultText>
                </ResultItem>
                <ResultItem>
                  <ResultIcon>
                    <CheckIcon />
                  </ResultIcon>
                  <ResultText>Впевнено працювати з машинкою</ResultText>
                </ResultItem>
                <ResultItem>
                  <ResultIcon>
                    <CheckIcon />
                  </ResultIcon>
                  <ResultText>Мати 2–4 готові вироби</ResultText>
                </ResultItem>
              </ResultsGrid>
            </ResultsSection>

            {/* Format & Atmosphere */}
            <TwoColumnSection>
              <InfoCard>
                <InfoCardTitle>Формат навчання</InfoCardTitle>
                <InfoCardText>
                  Навчання проходить <strong>очно, у Кропивницькому</strong>.
                </InfoCardText>
                <InfoCardText>
                  Групові заняття (3–4 особи) або індивідуальні.
                </InfoCardText>
                <InfoCardText>
                  Заняття 1–2 рази на тиждень, по 2–4 години.
                </InfoCardText>
                <InfoCardText>
                  Тривалість курсу — <strong>2–3 місяці</strong>.
                </InfoCardText>
              </InfoCard>

              <InfoCard>
                <InfoCardTitle>Атмосфера</InfoCardTitle>
                <InfoCardText>
                  У нас спокійна, творча атмосфера, де можна ставити будь-які
                  запитання.
                </InfoCardText>
                <InfoCardText>
                  Не страшно помилятися — пояснюємо стільки разів, скільки
                  потрібно.
                </InfoCardText>
                <InfoCardText>
                  Тут важливий <strong>твій результат</strong>, а не
                  ідеальність.
                </InfoCardText>
              </InfoCard>
            </TwoColumnSection>

            {/* CTA */}
            <CTASection>
              <CTATitle>Готова розпочати?</CTATitle>
              <CTAText>
                Формат, графік та вартість обговорюємо індивідуально. Напиши — і
                ми все розкажемо.
              </CTAText>
              <CTAButton $size="lg">Записатись на курс</CTAButton>
            </CTASection>
          </AccordionInner>
        </AccordionContent>
      </AccordionWrapper>
    </>
  );
}
