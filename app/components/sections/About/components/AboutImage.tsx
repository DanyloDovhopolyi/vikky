import Image from "next/image";
import { useTranslations } from "@/app/i18n";
import { ImageWrapper, MainImage, FloatingAccent } from "../styles";

type AboutImageProps = {
  isVisible: boolean;
};

export function AboutImage({ isVisible }: AboutImageProps) {
  const t = useTranslations();

  return (
    <ImageWrapper $isVisible={isVisible}>
      <MainImage>
        <Image
          src="/images/family.jpg"
          alt={t.about.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </MainImage>
      <FloatingAccent />
    </ImageWrapper>
  );
}
