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
    default: "Vikky-doch | Український бренд  одягу",
    template: "%s | Vikky-doch",
  },
  description:
    "Vikky-Doch — український бренд одягу, створений з теплом і сенсом.",
  keywords: [
    "український одяг",
    "етнічний одяг",
    "вишиванки",
    "українська мода",
    "ручна робота",
    "Vikky-doch",
    "українські традиції",
    "весільні сукні",
    "авторський одяг",
    "костюм",
    "курс крою та шиття",
    "курс шиття",
    "курс крою",
    "курс шиття для початківців",
    "курс крою для початківців",
  ],
  authors: [{ name: "Vikky-doch" }],
  creator: "Vikky-doch",
  publisher: "Vikky-doch",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: "/",
    languages: {
      "uk-UA": "/uk",
    },
  },
  openGraph: {
    type: "website",
    locale: "uk_UA",

    siteName: "Vikky-doch",
    title: "Vikky-doch | Український бренд одягу",
    description:
      "Vikky-Doch — український бренд одягу, створений з теплом і сенсом.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vikky-doch - Український бренд одягу",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikky-doch | Український бренд одягу",
    description:
      "Vikky-Doch — український бренд одягу, створений з теплом і сенсом.",
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
