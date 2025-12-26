import Image from "next/image";
import { BackgroundImage, FloatingElements, FloatingShape } from "../styles";

export function HeroBackground() {
  return (
    <>
      <BackgroundImage>
        <Image
          src="/images/hero.png"
          alt="Vikky-doch - Ukrainian fashion brand"
          fill
          priority
        />
      </BackgroundImage>

      <FloatingElements>
        <FloatingShape $delay="0s" $size="300px" $top="10%" $left="60%" />
        <FloatingShape $delay="2s" $size="200px" $top="60%" $left="80%" />
        <FloatingShape $delay="4s" $size="150px" $top="30%" $left="85%" />
      </FloatingElements>
    </>
  );
}
