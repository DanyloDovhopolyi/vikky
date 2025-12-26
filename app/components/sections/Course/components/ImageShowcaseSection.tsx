import Image from "next/image";
import { useTranslations } from "@/app/i18n";
import { getProperty } from "@/app/lib/mappers";
import { ImageShowcase, ShowcaseGrid, ShowcaseImage } from "../styles";

export function ImageShowcaseSection() {
  const t = useTranslations();

  return (
    <ImageShowcase>
      <ShowcaseGrid>
        {t.course.details.showcaseImages.map((image, index) => (
          <ShowcaseImage
            key={index}
            $position={
              getProperty(
                image,
                "position" as keyof typeof image,
                "center"
              ) as string
            }
          >
            <Image src={image.src} alt={image.alt} fill />
          </ShowcaseImage>
        ))}
      </ShowcaseGrid>
    </ImageShowcase>
  );
}
