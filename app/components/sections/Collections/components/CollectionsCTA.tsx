import { ButtonLink } from "@/app/components/ui";
import { useTranslations } from "@/app/i18n";
import { CTAWrapper } from "../styles";

export function CollectionsCTA() {
  const t = useTranslations();

  return (
    <CTAWrapper>
      <ButtonLink href="#catalog" $variant="secondary" $size="lg">
        {t.collections.viewAllBtn}
      </ButtonLink>
    </CTAWrapper>
  );
}
