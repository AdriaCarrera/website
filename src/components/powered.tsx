import Link from "next/link";

export function Powered(): JSX.Element {
  return (
    <section className="relative h-[425px] md:h-full md:aspect-[2/1] overflow-hidden">
      <div className="absolute inset-0 powered-grid-overlay">
        <div className="grid grid-cols-[repeat(4,1fr)_0.5fr] grid-rows-[repeat(5,1fr)_0.5fr] md:grid-cols-16 md:grid-rows-8 h-full w-full">
          <div className="col-start-1 row-start-1 col-span-11 row-span-8 bg-black xl:border-[0.5px] xl:border-white py-8 px-4 md:pt-16 md:pl-20 md:pr-32 flex flex-col gap-8 md:gap-16">
            <p className="font-bold text-xl md:text-[40px]">Powered by Proven Technology</p>

            <ol className="list-decimal pl-5">
              <li className="mb-4">
                <p className="font-bold text-sm md:text-xl">Full EVM compatibility provided by Evmos</p>
                <p className="text-sm md:text-xl">EVM libraries and SDKs such as OpenZeppelin and Hardhat</p>
              </li>
              <li className="mb-4">
                <p className="font-bold text-sm md:text-xl">Powered by Cosmos SDK and connected with Cosmos Ecosystem</p>
                <p className="text-sm md:text-xl">
                  Connects to the Cosmos ecosystem with access to dApps through the IBC interoperability protocol
                </p>
              </li>
              <li className="mb-4">
                <p className="font-bold text-sm md:text-xl">Consensus layer enabled by CometBFT</p>
                <p className="text-sm md:text-xl">{`Enables low cost (<0.01$), fast and efficient transactions with an average 3.5s block time`}</p>
              </li>
              <li className="mb-4">
                <p className="font-bold text-sm md:text-xl">
                  Audited by{" "}
                  <Link href="" className="text-primary">
                    Bishop Fox
                  </Link>
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
