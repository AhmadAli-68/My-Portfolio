'use client';

import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { Toaster } from 'react-hot-toast';
import Certifications from './components/Certifications';

export default function Home() {
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