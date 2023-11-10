import { EnergyTech, SecuredMobile } from "@/Data";
import Hero from "@/components/Hero/Hero";
import MarketValue from "@/components/MarketValue/MarketValue";
import Schedules from "@/components/Schedules/Schedules";

export default function Home() {
  return (
    <main>
      <Hero />
      <MarketValue
        header="Energy Tech and Climate in our Laundry Service"
        desc="At Kln Wash, we are committed to incorporating energy-efficient technologies and sustainable practices in our laundry service. We understand the importance of minimizing our environmental impact and contributing to a greener future."
        data={EnergyTech}
        image={"/landing/cart-phone.png"}
        styles="section"
      />
      <MarketValue
        header="Secured Mobile App"
        desc="At Kln Wash, we prioritize both user experience and security. Our well-designed mobile app offers a user-friendly interface that enhances usability and functionality."
        data={SecuredMobile}
        image={"/landing/login-phones.png"}
        styles="section__reverse"
        zigzag="/landing/zigzag.png"
      />
      <Schedules />
    </main>
  );
}


