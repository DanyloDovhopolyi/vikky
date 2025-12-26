import { MobileNav, NavLink, Overlay } from "../styles";

type NavLinkType = {
  href: string;
  label: string;
};

type MobileNavigationProps = {
  links: NavLinkType[];
  isOpen: boolean;
  onClose: () => void;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
};

export function MobileNavigation({
  links,
  isOpen,
  onClose,
  onNavClick,
}: MobileNavigationProps) {
  return (
    <>
      <Overlay $isOpen={isOpen} onClick={onClose} />
      <MobileNav $isOpen={isOpen}>
        {links.map((link) => (
          <NavLink
            key={link.href}
            href={link.href}
            $scrolled={false}
            onClick={(e) => onNavClick(e, link.href)}
          >
            {link.label}
          </NavLink>
        ))}
      </MobileNav>
    </>
  );
}
