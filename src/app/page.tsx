"use client";
import { Fragment } from "react";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Script from "next/script";

export default function Home() {
  return (
    <Fragment>
      <Script src="https://www.google.com/recaptcha/api.js?render=reCAPTCHA_site_key"></Script>
      <Header />
      <NavBar />
      <Banner />
      <Hero />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </Fragment>
  );
}
