import { AuthProvider } from "@/components/AccountComponent/Auth/Auth";
import ScrollToTopButton from "@/components/Button/ScrollToTopButton/ScrollToTopButton";
import CookiesWindow from "@/components/CookiesWindow/CookiesWindow";
import { Footer } from "@/src/features/layout/Footer/Footer";
import { Header } from "@/src/features/layout/Header/Header";
import clsx from "clsx";
import { Lato } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Les Galopins de Montélimar",
  description:
    "Bienvenue sur le site de notre club de randonnée pédestre situé à Montélimar !",
    metadataBase: new URL("https://lesgalopinsdemontelimar.com/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="fr" className="h-full" suppressHydrationWarning>
        <head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
        </head>
        <body className={clsx(lato.className, "h-full")}>
          <div className=" flex h-full flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
            <CookiesWindow />
            <ScrollToTopButton />
          </div>
        </body>
      </html>
    </AuthProvider>
  );
}
