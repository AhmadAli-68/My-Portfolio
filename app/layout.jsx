import { Georama, Roboto, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

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
  title: "Ahmad Ali Dev - Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={cn("scroll-smooth", "font-sans", geist.variable)}
    >
      <body
        className={`${georama.className} ${roboto.className} min-h-full flex flex-col antialiased leading-8 overflow-x-hidden bg-darkTheme text-white`}
      >
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
