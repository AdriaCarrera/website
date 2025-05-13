import dynamic from "next/dynamic";

export default function Home() {
  const HeroHomeAnimation = dynamic(() => import("@/components/hero-home-animation"));
  return (
    <main className="flex flex-col gap-[72px] w-full">
      <div className="w-full flex flex-col overflow-hidden justify-center items-center gap-[60px] md:pt-[108px]">
        <div id="heroAnimation" className="flex flex-col gap-4 px-4 sm:px-0 overflow-hidden">
          <HeroHomeAnimation />
        </div>
      </div>
    </main>
  );
}
