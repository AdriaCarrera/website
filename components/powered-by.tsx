import Link from "next/link";
import { Card } from "./ui/card";
import { ScrollAnimation } from "./ui/scroll-animation";

const poweredBy = [
  {
    logo: "/powered-by/ethereum.webp",
    title: "Full EVM compatibility provided by Ethereum",
    description: "All Ethereum libraries, smart contracts and EVM development tools like Oppen Zeppelin or Hardhat",
    link: "https://ethereum.org/",
  },
  {
    logo: "/powered-by/cosmos-atom.webp",
    title: "Built with Cosmos SDK and connected with Cosmos Ecosystem",
    description: "Connects to the Cosmos ecosystem with access to dApps through the IBC interoperability protocol",
    link: "https://cosmos.network/",
  },
  {
    logo: "/powered-by/cometbft.webp",
    title: "Consensus layer enabled by CometBFT",
    description: "Enables low cost (<0.01$), fast and efficient transactions with an average 3.5s block time",
    link: "https://cometbft.com/",
  },
];

export function PoweredBy() {
  return (
    <ScrollAnimation delay={0.5}>
      <section className="flex flex-col gap-8 max-w-4xl mx-auto px-4 md:px-0 z-50">
        <h2 className="font-semibold text-[26px] leading-8">Powered by Proven Technology</h2>

        <div className="grid md:grid-cols-2 gap-3">
          {poweredBy.map((item) => (
            <Link key={item.title} href={item.link} target="_blank" className="group">
              <Card className="p-6 md:p-8 flex flex-col h-auto md:h-[292px] gap-6">
                <img src={item.logo} alt={item.title} className="size-[68px] group-hover:scale-120 transition-all duration-300" />
                <div className="flex flex-col gap-3">
                  <p className="text-[22px] leading-7">{item.title}</p>
                  <p className="font-light">{item.description}</p>
                </div>
              </Card>
            </Link>
          ))}
          <Card className="p-6 md:p-8 flex flex-col h-auto md:h-[292px] gap-6">
            <div className="flex">
              <Link href="https://www.certik.com/" target="_blank" className="group">
                <img src="/powered-by/certik.webp" alt="Certik" className="size-[68px] group-hover:scale-120 transition-all duration-300" />
              </Link>
              <Link href="https://www.bishopsaudit.co.uk/" target="_blank" className="group translate-x-[-10px]">
                <img
                  src="/powered-by/bishop.webp"
                  alt="Bishops"
                  className="size-[68px] group-hover:scale-120 transition-all duration-300"
                />
              </Link>
              <Link href="https://informal.systems/" target="_blank" className="group translate-x-[-20px]">
                <img
                  src="/powered-by/informal.webp"
                  alt="Informal"
                  className="size-[68px] group-hover:scale-120 transition-all duration-300"
                />
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[22px] leading-7">Audited by the best</p>
              <p className="font-light">All components and infrastructure have been audited end-to-end by the best.</p>
            </div>
          </Card>
        </div>
      </section>
    </ScrollAnimation>
  );
}
