export function Why(): JSX.Element {
  return (
    <section className="w-full p-0 md:pt-[100px] md:pb-[47px]">
      <div className="px-4 py-8 md:pl-20 md:pb-16">
        <p className="font-bold text-xl md:text-[40px]">Why build on the XRPL EVM Sidechain</p>
      </div>
      <div className="relative h-[776px] md:h-auto md:aspect-[2/1] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-black to-pink-500"></div>

        <div className="absolute inset-0 grid-overlay">
          <div className="grid grid-cols-[repeat(4,1fr)_0.5fr] grid-rows-[repeat(5,1fr)_0.5fr] md:grid-cols-16 md:grid-rows-8 h-full w-full">
            <div className="ml-4 my-4 mt-8 md:mt-0 md:ml-0 md:my-0 col-span-4 col-start-1 row-start-1 md:col-start-3 md:row-start-2 md:col-span-5 md:row-span-3 bg-background border-[0.5px] border-white flex flex-col gap-6 p-5">
              <p className="font-semibold text-sm md:text-lg xl:text-xl">First-Mover Advantage</p>
              <p className="text-sm xl:text-xl">
                Deploy the first dApps and tap into an established community of over 5M XRP Ledger wallet holders 
              </p>
            </div>

            <div className="ml-4 my-4 md:ml-0 md:my-0 col-span-4 col-start-1 row-start-2 md:col-start-9 md:row-start-2 md:col-span-4 md:row-span-3 bg-background border-[0.5px] border-white flex flex-col gap-6 p-5">
              <p className="font-semibold text-xs md:text-lg xl:text-xl">Develop XRPL Cross-Chain dApps</p>
              <p className="text-sm xl:text-xl">
                Combine the strengths of XRPL and EVM chains, harnessing the power of XRP liquidity in an EVM-compatible environment 
              </p>
            </div>

            <div className="ml-4 my-4 md:ml-0 md:my-0 col-span-4 col-start-1 row-start-3 md:col-start-5 md:row-start-5 md:col-span-4 md:row-span-3 bg-background border-[0.5px] border-white flex flex-col gap-6 p-5">
              <p className="font-semibold text-xs md:text-lg xl:text-xl">Build with Confidence</p>
              <p className="text-sm xl:text-xl">
                XRP is one of the most liquid cryptocurrencies, ranking among the top 10 by market cap since 2015, and is one of only two
                assets with regulatory clarity in the US
              </p>
            </div>

            <div className="ml-4 my-4 mb-8 md:ml-0 md:my-0 md:mb-0 col-span-4 col-start-1 row-start-4 md:col-start-11 md:row-start-5 md:col-span-4 md:row-span-3 bg-background border-[0.5px] border-white flex flex-col gap-6 p-5">
              <p className="font-semibold text-xs md:text-lg xl:text-xl">Accelerated Deployment for EVM Developers</p>
              <p className="text-sm xl:text-xl">
                Easy to build, port or fork a dApp using familiar EVM tools in a fully permissionless way
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
