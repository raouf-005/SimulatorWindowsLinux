import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "L'Écran Bleu de la Libération - Nuit de l'Info 2024",
  description:
    "Découvrez comment Linux peut libérer votre PC et votre budget ! Une expérience interactive pour la Nuit de l'Info.",
  keywords: ["Linux", "NIRD", "Open Source", "Gendarmerie", "Nuit de l'Info"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
