import { useTranslations } from "@/app/i18n";
import { Logo } from "../styles";

type HeaderLogoProps = {
  scrolled: boolean;
};

export function HeaderLogo({ scrolled }: HeaderLogoProps) {
  const t = useTranslations();

  return (
    <Logo href="/" $scrolled={scrolled}>
      {t.common.brandName}
    </Logo>
  );
}
