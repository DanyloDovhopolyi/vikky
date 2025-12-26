import Image from "next/image";
import { InstagramPostLink } from "../styles";

type InstagramPostProps = {
  image: string;
  link: string;
  alt: string;
  position: string;
  isVisible: boolean;
  index: number;
};

export function InstagramPost({
  image,
  link,
  alt,
  position,
  isVisible,
  index,
}: InstagramPostProps) {
  return (
    <InstagramPostLink
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      $isVisible={isVisible}
      $index={index}
    >
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 16vw"
        style={{ objectPosition: position }}
      />
    </InstagramPostLink>
  );
}
