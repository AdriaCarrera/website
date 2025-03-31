import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { GetStarted } from "@/components/get-started";
import { WhatIsXRPL } from "@/components/what-is-xrpl-evm";
import { Builders } from "@/components/builders";
import { PoweredBy } from "@/components/powered-by";
import { Faqs } from "@/components/faqs";
import { Footer } from "@/components/footer";
import { Stats } from "@/components/stats";
import { WhyBuild } from "@/components/why-build";

export default function Home() {
  return (
    <main className="flex flex-col gap-[72px] w-full">
      <Header />
      <div className="-mt-[550px]">
        <Hero />
      </div>
      <Stats />
      <GetStarted />
      <WhatIsXRPL />
      <PoweredBy />
      <Builders />
      <WhyBuild />
      <Faqs />
      <Footer />
    </main>
  );
}
