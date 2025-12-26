import { useTranslations } from "@/app/i18n";
import { PhoneIcon, LocationIcon } from "@/app/images/icons";
import { FooterColumn, FooterTitle, ContactInfo, ContactItem } from "../styles";

export function FooterContact() {
  const t = useTranslations();

  return (
    <FooterColumn>
      <FooterTitle>{t.footer.contact.title}</FooterTitle>
      <ContactInfo>
        <ContactItem href="tel:+380998466361">
          <PhoneIcon />
          {t.footer.contact.phone}
        </ContactItem>
        <ContactItem
          href="https://www.google.com/maps/search/?api=1&query=вул.+Пашутінська,+57а,+Кропивницький,+Україна"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LocationIcon />
          {t.footer.contact.address}
        </ContactItem>
      </ContactInfo>
    </FooterColumn>
  );
}
