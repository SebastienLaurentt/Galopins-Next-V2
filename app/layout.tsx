import ScrollToTopButton from "@/components/Button/ScrollToTopButton/ScrollToTopButton";
import CookiesWindow from "@/components/CookiesWindow/CookiesWindow";
import { Footer } from "@/src/features/layout/Footer/Footer";
import { Header } from "@/src/features/layout/Header/Header";
import clsx from "clsx";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full" suppressHydrationWarning>
      <body className={clsx(inter.className, "h-full")}>
        <div className=" flex flex-col h-full">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
          <CookiesWindow />
          <ScrollToTopButton />
        </div>
      </body>
    </html>
  );
}
