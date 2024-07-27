import { Lato, Merriweather } from "next/font/google";

const lato_init = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const anton_init = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-anton",
});

export const lato = lato_init.className;

export const anton = anton_init.className;
