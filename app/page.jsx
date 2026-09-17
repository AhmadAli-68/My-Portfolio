'use client';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from 'react-hot-toast';

export default function Home() {
  // const [isDarkMode, setIsDarkMode] = useState(false)

  // useEffect(() => {
  //   if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  //     setIsDarkMode(true);
  //   } else {
  //     setIsDarkMode(false)
  //   }
  // }, [])

  // useEffect(() => {
  //   if (isDarkMode) {
  //     document.documentElement.classList.add('dark');
  //     localStorage.theme = "dark";
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //     localStorage.theme = "";
  //   }
  // }, [isDarkMode])

  return (
    <>
      <Toaster
        position='top-center'
        toastOptions={{
          style: {
            backgroundColor: '#040D12',
            color: '#ffffff',
            border: '0.5px solid #183D3D',
            borderRadius: '12px',
            padding: '16px'
          },
          duration: 3000,

          error: {
            style: {
              backgroundColor: '#BF092F',
              color: '#ffffff',
              border: '0.5px solid #C3110C',
              borderRadius: '12px',
              padding: '16px'
            }
          }
        }}
      />
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}