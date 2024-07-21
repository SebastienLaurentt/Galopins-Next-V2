import ScrollToTopButton from "@/components/Button/ScrollToTopButton/ScrollToTopButton";
import CookiesWindow from "@/components/CookiesWindow/CookiesWindow";
import { Footer } from "@/src/features/layout/Footer/Footer";
import { Header } from "@/src/features/layout/Header/Header";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1 flex-col justify-center">{children} </div>
      <Footer />
      <CookiesWindow />
      <ScrollToTopButton />
    </div>
  );
}
