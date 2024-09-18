import { Icons } from "./icons";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E54D00] via-black to-primary"></div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "calc(100% / 16) calc(100% / 8)",
        }}
      >
        <div className="grid grid-cols-16 grid-rows-8 h-full w-full">
          <div className="col-start-3 col-span-12 row-start-2 row-span-3 bg-background py-16 px-10 z-10">
            <h1 className="text-white font-semibold text-6xl leading-[70px]">Be the first to build a Unicorn on the XRPL EVM Sidechain</h1>
          </div>

          <div className="col-start-1 row-start-6 col-span-2 row-span-2 bg-background flex items-center justify-center">
            <Icons.Logo />
          </div>

          <div className="col-start-5 row-start-5 col-span-7 row-span-3 bg-background px-10 pt-10 flex flex-col gap-10 border-t border-t-white/50 z-10">
            <h2 className="text-2xl leading-9 font-normal">
              Access a vast network of 5M+ XRP wallet holders tap into the best of both the XRP Ledger and EVM worlds.
            </h2>
            <p className="font-normal text-sm leading-5">*Currently on Devnet</p>
          </div>

          <div className="col-start-12 row-start-7 col-span-3 row-span-1 z-10">
            <Button className="w-full h-full rounded-none font-semibold text-2xl hover:bg-[#7919FF]">Get Started</Button>
          </div>

          <div className="col-start-3 row-start-4 col-span-3 row-span-3">
            <div className="h-full w-full border border-white/50 rounded-full" />
          </div>

          <div className="col-start-14 row-start-1 col-span-1 row-span-1">
            <div className="w-full h-full rounded-full border border-white/50" />
          </div>
          <div className="col-start-15 row-start-1 col-span-1 row-span-1">
            <div className="w-full h-full rounded-full border border-white/50" />
          </div>
          <div className="col-start-15 row-start-2 col-span-1 row-span-1">
            <div className="w-full h-full rounded-full border border-white/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
