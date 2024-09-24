import { About } from "@/components/about";
import { Builders } from "@/components/builders";
import { GetStarted } from "@/components/get-started";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Vision } from "@/components/vision";
import { Why } from "@/components/why";

import "@/components/grid.css";
import { Powered } from "@/components/powered";
import { Governance } from "@/components/governance";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <Vision />
      <About />
      <Why />
      <GetStarted />
      <Builders />
      <Stats />
      <Powered />
      <Governance />
    </div>
  );
}
