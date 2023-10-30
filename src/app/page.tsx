import { Fragment } from "react";

import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <NavBar />
      <div className="w-full h-full scrollContainer">
        <main className="container mx-auto h-screen">
          <Banner />
          <Hero />
          <Experience />
          <Work />
          <Contact />
          <Footer />
        </main>
      </div>
    </Fragment>
  );
}
