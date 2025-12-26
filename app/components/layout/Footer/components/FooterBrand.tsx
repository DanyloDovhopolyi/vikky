import { useTranslations } from "@/app/i18n";
import { InstagramIcon, FacebookIcon, TelegramIcon } from "@/app/images/icons";
import {
  FooterColumn,
  Logo,
  FooterDescription,
  SocialLinks,
  SocialLink,
} from "../styles";

export function FooterBrand() {
  const t = useTranslations();

  return (
    <FooterColumn>
      <Logo href="/">{t.common.brandName}</Logo>
      <FooterDescription>{t.footer.description}</FooterDescription>
      <SocialLinks>
        <SocialLink
          href="https://instagram.com/vikky_doch"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <InstagramIcon />
        </SocialLink>
        <SocialLink
          href="https://www.facebook.com/vika.viktoriya.9231"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FacebookIcon />
        </SocialLink>

        <SocialLink
          href="https://t.me/+380998466361"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
        >
          <TelegramIcon />
        </SocialLink>
      </SocialLinks>
    </FooterColumn>
  );
}
