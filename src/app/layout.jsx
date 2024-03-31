import Header from "@/components/Organisms/Header/Header";
import "./globals.scss";
import "@/styles/index.scss";
import Footer from "@/components/Footer/Footer"

export const metadata = {
  title: "App Advisor",
  description:
    "Site web pour trouver des avis et informations sur des applications informatiques",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
