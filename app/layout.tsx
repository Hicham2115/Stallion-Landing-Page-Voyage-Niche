import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

const title = "Site web et CRM pour agence de voyage au Maroc | Stallion";
const description =
  "Création de sites web, CRM et applications pour agences de voyage au Maroc. Présentez vos circuits, suivez vos devis et centralisez vos dossiers voyageurs.";

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  alternates: process.env.NEXT_PUBLIC_SITE_URL
    ? { canonical: new URL("/", process.env.NEXT_PUBLIC_SITE_URL).href }
    : undefined,
  title,
  description,
  applicationName: "Stallion Advertising",
  category: "Développement web pour agences de voyage",
  openGraph: {
    title,
    description,
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Stallion Advertising",
    locale: "fr_MA",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
  icons: { icon: "/unicorn.png", apple: "/unicorn.png" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col"><Providers>{children}</Providers></body>
    </html>
  );
}
