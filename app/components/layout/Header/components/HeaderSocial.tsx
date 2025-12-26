import { FacebookIcon, InstagramIcon } from "@/app/images/icons";
import { SocialLinks, SocialIcon } from "../styles";

type HeaderSocialProps = {
  scrolled: boolean;
};

export function HeaderSocial({ scrolled }: HeaderSocialProps) {
  return (
    <SocialLinks>
      <SocialIcon
        href="https://www.facebook.com/vika.viktoriya.9231"
        $scrolled={scrolled}
        aria-label="Facebook"
        target="_blank"
      >
        <FacebookIcon />
      </SocialIcon>
      <SocialIcon
        href="https://www.instagram.com/vikky_doch/"
        $scrolled={scrolled}
        aria-label="Instagram"
        target="_blank"
      >
        <InstagramIcon />
      </SocialIcon>
    </SocialLinks>
  );
}
