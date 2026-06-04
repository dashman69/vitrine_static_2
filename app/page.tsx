// app/page.tsx — 100% statique, données depuis salon.config.ts
import { salonConfig } from "@/config/salon.config";
import { Navbar }     from "@/components/layout/Navbar";
import { Footer }     from "@/components/layout/Footer";
import { Hero }       from "@/components/sections/Hero";
import { Services }   from "@/components/sections/Services";
import { Gallery }    from "@/components/sections/Gallery";
import { Reviews }    from "@/components/sections/Reviews";
import { BookingCTA } from "@/components/sections/BookingCTA";

export default function HomePage() {
  return (
    <>
      <Navbar    config={salonConfig} />
      <main>
        <Hero       config={salonConfig} />
        <Services   config={salonConfig} />
        <Gallery    config={salonConfig} />
        <Reviews    config={salonConfig} />
        <BookingCTA config={salonConfig} />
      </main>
      <Footer config={salonConfig} />
    </>
  );
}
