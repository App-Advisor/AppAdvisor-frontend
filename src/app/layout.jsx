import "./globals.scss";
import "@/styles/index.scss";

export const metadata = {
  title: "App Advisor",
  description:
    "Site web pour trouver des avis et informations sur des applications informatiques",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
