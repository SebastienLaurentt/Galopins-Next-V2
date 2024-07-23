import { AuthProvider } from "@/components/AccountComponent/Auth/Auth";
import clsx from "clsx";
import { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers/Providers";
import { Toaster } from "@/components/ui/toaster";

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
        <Providers>
          <body className={clsx(lato.className, "h-full")}>
            <div className=" flex h-full flex-col">
              <div className="flex-1">{children} <Toaster /></div>
            </div>
          </body>
        </Providers>
      </html>
    </AuthProvider>
  );
}
