import { EnergyTech, MoreFun, Pricing, SecuredMobile } from "@/Data";
import AppAdvert from "@/components/AppAdvert/AppAdvert";
import Hero from "@/components/Hero/Hero";
import MarketValue from "@/components/MarketValue/MarketValue";
import Schedules from "@/components/Schedules/Schedules";
import Services from "@/components/Services/Services";

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
      {/* <Schedules /> */}
      <MarketValue
        header="Pricing"
        desc="At Kln Wash, we are committed to incorporating energy-efficient technologies and sustainable practices in our laundry service. We understand the importance of minimizing our environmental impact and contributing to a greener future."
        data={Pricing}
        image={"/landing/Handphone.png"}
        styles="section"
      />
      <MarketValue
        header="More Fun"
        desc="Reclaim your weekends with Kln Wash's laundry pickup and delivery service. Say goodbye to the hassle of washing clothes or wasting time commuting to laundromats."
        data={MoreFun}
        image={'/landing/fun-phone.png'}
        styles='section__reverse'
        star={'/landing/star.png'}
      />
      <Services />
      <AppAdvert />
    </main>
  );
}
