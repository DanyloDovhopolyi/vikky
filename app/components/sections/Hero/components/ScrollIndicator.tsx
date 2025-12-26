import { useCallback } from "react";
import { useTranslations } from "@/app/i18n";
import { ScrollIndicatorWrapper, ScrollText, ScrollIcon } from "../styles";

export function ScrollIndicator() {
  const t = useTranslations();

  const scrollToContent = useCallback(() => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <ScrollIndicatorWrapper onClick={scrollToContent}>
      <ScrollText>{t.common.scrollDown}</ScrollText>
      <ScrollIcon />
    </ScrollIndicatorWrapper>
  );
}
