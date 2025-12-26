import Link from "next/link";
import { FooterColumn, FooterTitle, FooterLinks, FooterLink } from "../styles";

type LinkItem = {
  href: string;
  label: string;
};

type FooterLinksColumnProps = {
  title: string;
  links: LinkItem[];
};

export function FooterLinksColumn({ title, links }: FooterLinksColumnProps) {
  return (
    <FooterColumn>
      <FooterTitle>{title}</FooterTitle>
      <FooterLinks>
        {links.map((link) => (
          <FooterLink key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </FooterLink>
        ))}
      </FooterLinks>
    </FooterColumn>
  );
}
