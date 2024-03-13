"use client"
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'
import "./globals.css";
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react";
import SplashScreen from "./components/common/SplashScreen";
import { NavbarDemo } from './components/common/Navbar';
import Footer from "./components/common/Footer"

import Head from 'next/head';
import NavBarTwo from './components/common/NavBarTwo';

// Fonts declaration - start

const poppins= Poppins({
  weight:['400','500','600','700'],
  subsets:['latin']
})

const inter = Inter({ subsets: ["latin"] });

// Fonts - end

export default function RootLayout({ children }:any) {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const  [isLoading, setIsLoading] = useState(isHome)

  useEffect(() =>{
    if(isLoading){
      return
    }
  },[isLoading])

  return (
    <html lang="en">
      <Head>
        <title>Health House</title>
        <meta name="description" content="Health house ia medical tourism agency started officially in 2020 in the medical tourism industry with the objective to bring to African patients in India with personalized care. We believe that everyone deserves access to quality medical care, no matter where they are in the world." />
      </Head>
      <body className={`${poppins.className} antialiased`}>
        {
          isLoading && isHome ? (
            <SplashScreen finishLoading={() => setIsLoading(false)}/>
          ) : (
          <>
          {/* <NavbarDemo/> */}
          <NavBarTwo/>
          <main>
          {children}
          </main>
          </>
          )
        }
        <Footer/>
      </body>
    </html>
  );
}
