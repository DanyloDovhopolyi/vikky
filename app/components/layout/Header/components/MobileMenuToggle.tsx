import { MenuIcon, CloseIcon } from "@/app/images/icons";
import { MobileMenuButton } from "../styles";

type MobileMenuToggleProps = {
  scrolled: boolean;
  isOpen: boolean;
  onToggle: () => void;
};

export function MobileMenuToggle({
  scrolled,
  isOpen,
  onToggle,
}: MobileMenuToggleProps) {
  return (
    <MobileMenuButton
      $scrolled={scrolled}
      onClick={onToggle}
      aria-label={isOpen ? "Закрити меню" : "Відкрити меню"}
    >
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </MobileMenuButton>
  );
}
