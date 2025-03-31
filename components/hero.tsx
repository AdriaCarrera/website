"use client";

import dynamic from "next/dynamic";

const HeroHomeAnimation = dynamic(() => import("./hero-home-animation"), {
  ssr: false,
});

export function Hero() {
  return (
    <div className="w-full flex flex-col overflow-hidden justify-center items-center gap-[60px] md:pt-[108px]">
      <div id="heroAnimation" className="flex flex-col gap-4 px-4 sm:px-0 overflow-hidden">
        <HeroHomeAnimation />
      </div>
      <div className="flex flex-col gap-4 px-4 sm:px-0 max-w-[748px] justify-center -mt-[500px] md:-mt-[412px] relative z-40">
        <h1 className="font-semibold text-[36px] leading-[40px] md:text-[56px] md:leading-[64px] text-center">
          Ethereum-Compatible Smart Contracts now on the XRP Ledger Ecosystem
        </h1>
        <p className="gap-2 flex flex-col px-2 sm:px-0 text-center text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] font-normal text-muted-foreground">
          Access a vast network of 6M+ XRP wallet holders and tap into the best of both the XRP Ledger and EVM worlds.
        </p>
      </div>
    </div>
  );
}
