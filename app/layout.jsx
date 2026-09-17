import { Georama, Roboto, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const georama = Georama({
  variable: '--font-georama',
  subsets: ["latin"],
  // weight: ["400", "500", "600", "700"]
});

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ["latin"],
  // weight: ["400"]
});


export const metadata = {
  title: "My Portfolio - Ahmad",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <body
        className={`${georama.className} ${roboto.className} antialiased leading-8 overflow-x-hidden bg-darkTheme text-white`}
      >
        {children}
      </body>
    </html>
  );
}
