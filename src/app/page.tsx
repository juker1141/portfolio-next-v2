import { Fragment } from "react";

import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
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
          <Work />
          <Contact />
          <Footer />
        </main>
      </div>
    </Fragment>
  );
}
