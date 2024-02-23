import ScrollToTopButton from "@/components/Button/ScrollToTopButton/ScrollToTopButton";
import { Footer } from "@/src/features/layout/Footer/Footer";
import { Header } from "@/src/features/layout/Header/Header";
import { ThemeProvider } from "@/src/theme/ThemeProvider";
import clsx from "clsx";
import { Inter } from "next/font/google";
import "./globals.css";
import CookiesWindow from "@/components/CookiesWindow/CookiesWindow";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full" suppressHydrationWarning>
      <body className={clsx(inter.className, "h-full")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className=" flex flex-col h-full">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
            <CookiesWindow />
            <ScrollToTopButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
