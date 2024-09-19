import { Icons } from "./icons";
import { Button } from "./ui/button";
import "./grid.css";

export function Hero() {
  return (
    <section className="relative h-[512px] w-full md:h-auto md:aspect-[2/1] overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E54D00] via-black to-primary"></div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay">
        <div className="grid grid-cols-[repeat(4,1fr)_0.5fr] grid-rows-[repeat(5,1fr)_0.5fr] md:grid-cols-16 md:grid-rows-8 h-full w-full">
          <div className="ml-4 md:ml-0 col-span-4 col-start-1 row-start-2 md:col-start-3 md:col-span-12 md:row-start-2 md:row-span-3 bg-background py-4 px-6 md:py-10 md:px-6 lg:py-16 lg:px-10 z-10 border-white border-[0.5px]">
            <h1 className="font-semibold text-2xl leading-[28px] md:text-4xl xl:text-6xl xl:leading-[70px]">
              Be the first to build a Unicorn on the XRPL EVM Sidechain
            </h1>
          </div>

          <div className="ml-4 md:ml-0 col-span-1 row-span-1 col-start-1 row-start-4 md:col-start-1 md:row-start-6 md:col-span-2 md:row-span-2 bg-background flex items-center justify-center border-white border-[0.5px]">
            <Icons.Logo className="w-[50px] md:w-full" />
          </div>

          <div className="ml-4 md:ml-0 col-span-4 col-start-1 row-start-3 h-[129px] md:h-auto md:col-start-5 md:row-start-5 md:col-span-7 md:row-span-3 bg-background px-6 pt-4 lg:px-10 lg:pt-10 flex flex-col gap-2 lg:gap-10 z-10 border-white border-[0.5px]">
            <h2 className="text-sm md:text-lg xl:text-2xl xl:leading-9 font-normal">
              Access a vast network of 5M+ XRP wallet holders tap into the best of both the XRP Ledger and EVM worlds.
            </h2>
            <p className="font-normal text-xs md:text-sm leading-4 md:leading-5">*Currently on Devnet</p>
          </div>

          <div className="col-span-2 col-start-3 row-start-4 h-[45px] md:h-auto md:col-start-12 md:row-start-7 md:col-span-3 md:row-span-1 z-10 border-white border-[0.5px]">
            <Button className="w-full h-full rounded-none font-semibold text-xl md:text-2xl hover:bg-[#7919FF]">Get Started</Button>
          </div>

          <div className="hidden md:block md:col-start-3 md:row-start-4 md:col-span-3 md:row-span-3">
            <div className="h-full w-full border border-white rounded-full" />
          </div>

          <div className="hidden md:block md:col-start-14 md:row-start-1 md:col-span-1 md:row-span-1">
            <div className="w-full h-full rounded-full border border-white" />
          </div>
          <div className="hidden md:block md:col-start-15 md:row-start-1 md:col-span-1 md:row-span-1">
            <div className="w-full h-full rounded-full border border-white" />
          </div>
          <div className="hidden md:block md:col-start-15 md:row-start-2 md:col-span-1 md:row-span-1">
            <div className="w-full h-full rounded-full border border-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
