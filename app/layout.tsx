import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import StyledComponentsRegistry from "./lib/registry";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vikky-Doch | Український бренд етнічного одягу",
    template: "%s | Vikky-Doch",
  },
  description:
    "Vikky-Doch — український бренд етнічного одягу. Унікальні вироби ручної роботи, що поєднують традиції та сучасність. Створюємо елегантний одяг для особливих моментів.",
  keywords: [
    "український одяг",
    "етнічний одяг",
    "вишиванки",
    "українська мода",
    "ручна робота",
    "Vikky-Doch",
    "українські традиції",
    "весільні сукні",
    "авторський одяг",
    "етнодизайн",
  ],
  authors: [{ name: "Vikky-Doch" }],
  creator: "Vikky-Doch",
  publisher: "Vikky-Doch",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://vikky-doch.ua"),
  alternates: {
    canonical: "/",
    languages: {
      "uk-UA": "/uk",
    },
  },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "https://vikky-doch.ua",
    siteName: "Vikky-Doch",
    title: "Vikky-Doch | Український бренд етнічного одягу",
    description:
      "Унікальні вироби ручної роботи, що поєднують українські традиції та сучасний стиль. Створюємо елегантний одяг для особливих моментів.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vikky-Doch - Український етнічний одяг",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikky-Doch | Український бренд етнічного одягу",
    description:
      "Унікальні вироби ручної роботи, що поєднують українські традиції та сучасний стиль.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#5C2434",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={`${playfair.variable} ${inter.variable} ${cormorant.variable}`}
    >
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
