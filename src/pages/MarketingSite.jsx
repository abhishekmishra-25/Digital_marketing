import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function MarketingSite() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <Team />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
