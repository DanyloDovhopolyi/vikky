import { ButtonLink } from "@/app/components/ui";
import { useTranslations } from "@/app/i18n";
import { CTAWrapper } from "../styles";

export function InstagramCTA() {
  const t = useTranslations();

  return (
    <CTAWrapper>
      <ButtonLink
        href="https://www.instagram.com/vikky_doch/"
        target="_blank"
        rel="noopener noreferrer"
        $variant="outline"
      >
        {t.instagram.subscribeBtn}
      </ButtonLink>
    </CTAWrapper>
  );
}
