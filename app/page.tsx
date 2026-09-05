import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Ticker from "@/components/Ticker";
import FilmStrip from "@/components/FilmStrip";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Pillars from "@/components/Pillars";
import Journey from "@/components/Journey";
import Health from "@/components/Health";
import Pledge from "@/components/Pledge";
import Transmedia from "@/components/Transmedia";
import Archetypes from "@/components/Archetypes";
import Passport from "@/components/Passport";
import Awards from "@/components/Awards";
import Finale from "@/components/Finale";
import Challenges from "@/components/Challenges";
import Governance from "@/components/Governance";
import EcosystemStrip from "@/components/EcosystemStrip";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* ACT I */}
        <Hero />
        <Ticker />
        <Vision />
        <Pillars />

        <FilmStrip label="ACT II · THE METHOD" />

        {/* ACT II */}
        <Journey />
        <Health />
        <Pledge />
        <Transmedia />
        <Archetypes />
        <Passport />

        <FilmStrip label="ACT III · RECOGNITION" />

        {/* ACT III */}
        <Awards />
        <Finale />
        <Challenges />
        <Governance />
        <EcosystemStrip />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
