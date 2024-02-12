import { ThemeProvider } from "@/src/theme/ThemeProvider";
import { Header } from "@/src/features/layout/Header/Header";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/src/features/layout/Footer/Footer";
import ScrollToTopButton from "@/components/Button/ScrollToTopButton/ScrollToTopButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Les Galopins de Montélimar",
  description: "Bienvenue sur le site de notre club de randonnée pédestre situé à Montélimar !",
};

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
            <ScrollToTopButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
