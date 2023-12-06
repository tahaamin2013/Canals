"use client";
import Services from "@/components/Services";
import Contact from "@/components/ContactSection/Contact";
import Link from "next/link";
import WhoWeAre from "@/components/Who-We-Are-Section/WhoWeAre";
import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
  return (
    <>
    <div className='pt-[24px]'>
      <HeroSection />
      </div>
      <h1 className="text-center mt-5 font-bold text-3xl">Our Services</h1>
      <Services />
      <Contact />
      <WhoWeAre />
    </>
  );
}
