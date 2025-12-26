"use client";

import { GlobalStyles } from "./styles/GlobalStyles";
import { Header, Footer } from "./components/layout";
import {
  Hero,
  About,
  Philosophy,
  Course,
  Instagram,
} from "./components/sections";

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <About />
        <Philosophy />
        {/* <Collections /> */}
        <Course />
        <Instagram />
      </main>
      <Footer />
    </>
  );
}
