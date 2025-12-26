import { Nav, NavLink } from "../styles";

type NavLink = {
  href: string;
  label: string;
};

type NavigationProps = {
  links: NavLink[];
  scrolled: boolean;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
};

export function Navigation({ links, scrolled, onNavClick }: NavigationProps) {
  return (
    <Nav $isOpen={false} className="desktop-nav">
      {links.map((link) => (
        <NavLink
          key={link.href}
          href={link.href}
          $scrolled={scrolled}
          onClick={(e) => onNavClick(e, link.href)}
        >
          {link.label}
        </NavLink>
      ))}
    </Nav>
  );
}
