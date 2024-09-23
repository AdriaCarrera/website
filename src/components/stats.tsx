export function Stats(): JSX.Element {
  return (
    <section className="relative h-[588px] md:h-auto md:aspect-[2/1] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-blue-950" />

      <div className="absolute inset-0 grid-overlay">
        <div className="grid grid-cols-[repeat(4,1fr)_0.5fr] grid-rows-[repeat(5,1fr)_0.5fr] md:grid-cols-16 md:grid-rows-8 h-full w-full">
          <div className="ml-4 my-4 mt-8 md:mt-0 md:ml-0 md:my-0 col-span-4 col-start-1 row-start-1 md:col-start-2 md:row-start-2 md:col-span-9 md:row-span-1 bg-background border-[0.5px] border-white p-4 md:py-5 md:px-10">
            <p className="font-bold md:text-2xl">Devnet live since 2014</p>
          </div>

          <div className="ml-4 my-2 md:mt-0 md:ml-0 md:my-0 h-[95px] md:h-auto col-span-4 col-start-1 row-start-2 md:col-start-2 md:row-start-4 md:col-span-4 md:row-span-2 flex flex-col items-center justify-center md:gap-6 border-[0.5px] border-white bg-purple-950">
            <p className="font-semibold text-xl md:text-[40px]">511k+</p>
            <p className="text-sm md:text-xl">Completed transactions</p>
          </div>

          <div className="ml-4 my-2 md:mt-0 md:ml-0 md:my-0 h-[95px] md:h-auto col-span-4 col-start-1 row-start-3 md:col-start-7 md:row-start-4 md:col-span-4 md:row-span-2 flex flex-col items-center justify-center md:gap-6 border-[0.5px] border-white bg-purple-950">
            <p className="font-semibold text-xl md:text-[40px]">46k+</p>
            <p className="text-sm md:text-xl">Smart contracts</p>
          </div>

          <div className="ml-4 my-2 md:mt-0 md:ml-0 md:my-0 h-[95px] md:h-auto col-span-4 col-start-1 row-start-4 md:col-start-12 md:row-start-4 md:col-span-4 md:row-span-2 flex flex-col items-center justify-center md:gap-6 border-[0.5px] border-white bg-purple-950">
            <p className="font-semibold text-xl md:text-[40px]">54k+</p>
            <p className="text-sm md:text-xl">Wallets/addresses</p>
          </div>

          <div className="ml-4 my-2 md:mt-0 md:ml-0 md:my-0 h-[95px] md:h-auto col-span-4 col-start-1 row-start-5 md:col-start-2 md:row-start-7 md:col-span-4 md:row-span-2 flex flex-col items-center justify-center md:gap-6 border-[0.5px] border-white bg-purple-950">
            <p className="font-semibold text-xl md:text-[40px]">15</p>
            <p className="text-sm md:text-xl">dApps in testnet</p>
          </div>
        </div>
      </div>
    </section>
  );
}
