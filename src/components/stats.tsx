import { NumberTicker } from "./number-ticker";

export async function Stats() {
  const [stats, dApps] = await Promise.all([
    fetch("https://explorer-stats.xrplevm.org/api/v1/counters"),
    fetch("https://explorer.xrplevm.org/assets/marketplace_config.json"),
  ]);
  const statsData = await stats.json();

  const dAppsData = await dApps.json();

  const completedTransactions = statsData.counters.find((stat: { id: string }) => stat.id === "completedTxns");
  const totalContracts = statsData.counters.find((stat: { id: string }) => stat.id === "totalContracts");
  const totalAddresses = statsData.counters.find((stat: { id: string }) => stat.id === "totalAddresses");
  const totalBlocks = statsData.counters.find((stat: { id: string }) => stat.id === "totalBlocks");
  const totalTokens = statsData.counters.find((stat: { id: string }) => stat.id === "totalTokens");

  return (
    <section className="relative h-[750px] md:h-auto md:aspect-[2/1] overflow-hidden">
      <div
        className="bg-cover bg-center h-full w-full"
        style={{
          backgroundImage: "url('/stats-bg.webp')",
        }}
      />

      <div className="absolute inset-0 stats-grid-overlay">
        <div className="grid grid-cols-[repeat(4,1fr)_0.2fr] grid-rows-[repeat(5,1fr)_0.66fr] md:grid-cols-16 md:grid-rows-8 h-full w-full">
          <div className="ml-4 my-8 md:mt-0 md:ml-0 md:my-0 h-[70px] md:h-auto col-span-4 col-start-1 row-start-1 md:col-start-2 md:row-start-2 md:col-span-9 md:row-span-1 bg-background border-[0.5px] border-white p-4 md:py-5 md:px-10">
            <p className="font-bold md:text-2xl">Devnet live since 2014</p>
          </div>

          <div
            className="ml-4 md:mt-0 md:ml-0 h-[95px] md:h-auto col-span-4 col-start-1 row-start-2 md:col-start-2 md:row-start-4 md:col-span-4 md:row-span-2 flex flex-col items-center justify-center md:gap-6 border-[0.5px] border-white bg-cover"
            style={{
              backgroundImage: "url('/stats-1.webp')",
            }}
          >
            <NumberTicker className="font-semibold text-xl md:text-[40px]" value={completedTransactions.value} />
            <p className="text-sm md:text-xl">Completed transactions</p>
          </div>

          <div
            className="ml-4 mt-[100px] my-2 md:mt-0 md:ml-0 md:my-0 h-[95px] md:h-auto col-span-4 col-start-1 row-start-2 md:col-start-7 md:row-start-4 md:col-span-4 md:row-span-2 flex flex-col items-center justify-center md:gap-6 border-[0.5px] border-white bg-cover"
            style={{
              backgroundImage: "url('/stats-2.webp')",
            }}
          >
            <NumberTicker className="font-semibold text-xl md:text-[40px]" value={totalContracts.value} />
            <p className="text-sm md:text-xl">Smart contracts</p>
          </div>

          <div
            className="ml-4 md:mt-0 md:ml-0 md:my-0 h-[95px] md:h-auto col-span-4 col-start-1 row-start-3 md:col-start-12 md:row-start-4 md:col-span-4 md:row-span-2 flex flex-col items-center justify-center md:gap-6 border-[0.5px] border-white bg-cover"
            style={{
              backgroundImage: "url('/stats-3.webp')",
            }}
          >
            <NumberTicker className="font-semibold text-xl md:text-[40px]" value={totalAddresses.value} />
            <p className="text-sm md:text-xl">Wallets/addresses</p>
          </div>

          <div
            className="ml-4 my-2 mt-[100px] md:mt-0 md:ml-0 md:my-0 h-[95px] md:h-auto col-span-4 col-start-1 row-start-3 md:col-start-2 md:row-start-7 md:col-span-4 md:row-span-2 flex flex-col items-center justify-center md:gap-6 border-[0.5px] border-white bg-cover"
            style={{
              backgroundImage: "url('/stats-3.webp')",
            }}
          >
            <NumberTicker className="font-semibold text-xl md:text-[40px]" value={totalBlocks.value} />
            <p className="text-sm md:text-xl">Blocks</p>
          </div>

          <div
            className="ml-4 md:mt-0 md:ml-0 md:my-0 h-[95px] md:h-auto col-span-4 col-start-1 row-start-4 md:col-start-7 md:row-start-7 md:col-span-4 md:row-span-2 flex flex-col items-center justify-center md:gap-6 border-[0.5px] border-white bg-cover"
            style={{
              backgroundImage: "url('/stats-1.webp')",
            }}
          >
            <NumberTicker className="font-semibold text-xl md:text-[40px]" value={totalTokens.value} />
            <p className="text-sm md:text-xl">Tokens</p>
          </div>

          <div
            className="ml-4 my-2 mt-[100px] md:mt-0 md:ml-0 md:my-0 h-[95px] md:h-auto col-span-4 col-start-1 row-start-4 md:col-start-12 md:row-start-7 md:col-span-4 md:row-span-2 flex flex-col items-center justify-center md:gap-6 border-[0.5px] border-white bg-cover"
            style={{
              backgroundImage: "url('/stats-2.webp')",
            }}
          >
            <NumberTicker className="font-semibold text-xl md:text-[40px]" value={dAppsData.length} />
            <p className="text-sm md:text-xl">dApps in testnet</p>
          </div>
        </div>
      </div>
    </section>
  );
}
