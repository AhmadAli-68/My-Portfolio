'use client';

import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { Toaster } from 'react-hot-toast';
import Certifications from './components/Certifications';

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
            backgroundColor: '#12544fB3',
            color: '#B0E4CC',
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
      <Header />
      <About />
      <Services />
      <Work />
      <Certifications />
      <Contact />
    </>
  );
}