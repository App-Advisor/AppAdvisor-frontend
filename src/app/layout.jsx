import Header from "@/components/Organisms/Header/Header";
import "./globals.scss";
import "@/styles/index.scss";
import { ThemeProvider } from 'next-themes';

export const metadata = {
  title: "App Advisor",
  description:
    "Site web pour trouver des avis et informations sur des applications informatiques",
};

export default function RootLayout({ children }) {

  return (
    <html lang="fr">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}


