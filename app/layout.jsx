import { Georama, Roboto } from "next/font/google";
import "./globals.css";

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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${georama.className} ${roboto.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
