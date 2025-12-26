import Image from "next/image";
import {
  CollectionCard as StyledCard,
  CardImageWrapper,
  CardContent,
  CardTitle,
  CardSubtitle,
} from "../styles";

type CollectionCardProps = {
  title: string;
  subtitle: string;
  image: string;
  isVisible: boolean;
  index: number;
};

export function CollectionCard({
  title,
  subtitle,
  image,
  isVisible,
  index,
}: CollectionCardProps) {
  return (
    <StyledCard $isVisible={isVisible} $index={index}>
      <CardImageWrapper>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
        />
      </CardImageWrapper>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
      </CardContent>
    </StyledCard>
  );
}
