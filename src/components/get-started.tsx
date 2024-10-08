import Link from "next/link";
import { Icons } from "./icons";
import "./get-started.css";

type ExternalLinkProps = {
  href: string;
  label: string;
};

function ExternalLink({ href, label }: ExternalLinkProps) {
  return (
    <Link href={href} target="_blank" className="flex h-full items-center justify-center hover:text-primary">
      <div className="flex flex-1">
        <p className="font-bold text-sm md:text-lg xl:text-xl">{label}</p>
      </div>
      <div className="p-1">
        <Icons.ArrowUpRight />
      </div>
    </Link>
  );
}

export function GetStarted(): JSX.Element {
  return (
    <section>
      <div className="px-4 py-8 md:pt-[100px] md:pl-20 md:pb-16 bg-background">
        <p className="font-bold text-xl md:text-[40px]">Get started on the XRPL EVM Sidechain</p>
      </div>

      <div className="relative h-[396px] md:h-auto md:aspect-[2/1] overflow-hidden get-started-gradient-effect">
        <div className="absolute inset-0 grid-overlay">
          <div className="grid grid-cols-[repeat(4,1fr)_0.2fr] grid-rows-[repeat(5,1fr)_0.66fr] md:grid-cols-16 md:grid-rows-8 h-full w-full gap-4 md:gap-0">
            <div className="ml-4 mt-4 md:m-0 h-[50px] md:h-auto col-span-4 col-start-1 row-start-1 md:col-start-3 md:row-start-2 md:col-span-4 md:row-span-1 bg-[#232325] border-[0.5px] border-white p-4 md:p-5">
              <ExternalLink href="https://crosschain.xrplevm.org/" label="Build an XRPL cross-chain dApp" />
            </div>

            <div className="ml-4 mt-[64px] md:m-0 h-[50px] md:h-auto col-span-4 col-start-1 row-start-1 md:col-start-3 md:row-start-3 md:col-span-4 md:row-span-1 bg-[#232325] border-[0.5px] border-white p-4 md:p-5">
              <ExternalLink href="https://docs.xrplevm.org/docs/evm-sidechain/get-started-evm-sidechain/" label="Build an EVM-only dApp" />
            </div>

            <div className="ml-4 md:m-0 h-[50px] md:h-auto col-span-4 col-start-1 row-start-2 md:col-start-7 md:row-start-4 md:col-span-4 md:row-span-1 bg-[#232325] border-[0.5px] border-white p-4 md:p-5">
              <ExternalLink
                href="https://docs.xrplevm.org/docs/evm-sidechain/connect-metamask-to-xrpl-evm-sidechain/"
                label="Select a wallet"
              />
            </div>

            <div className="ml-4 mt-[50px] md:m-0 h-[50px] md:h-auto col-span-4 col-start-1 row-start-2 md:col-start-7 md:row-start-5 md:col-span-4 md:row-span-1 bg-[#232325] border-[0.5px] border-white p-4 md:p-5">
              <ExternalLink href="https://explorer.xrplevm.org/apps" label="Try a dApp" />
            </div>

            <div className="ml-4 md:m-0 h-[50px] md:h-auto col-span-4 col-start-1 row-start-3 md:col-start-11 md:row-start-5 md:col-span-4 md:row-span-1 bg-[#232325] border-[0.5px] border-white p-4 md:p-5">
              <ExternalLink href="https://xrplgrants.org/" label="Explorer Grants" />
            </div>

            <div className="ml-4 mt-[50px] md:m-0 h-[50px] md:h-auto col-span-4 col-start-1 row-start-3 md:col-start-11 md:row-start-6 md:col-span-4 md:row-span-1 bg-[#232325] border-[0.5px] border-white p-4 md:p-5">
              <ExternalLink href="https://discord.gg/xrplevm" label="Join the community" />
            </div>

            <div className="hidden md:block md:col-start-13 md:row-start-2 md:col-span-3 md:row-span-3">
              <div className="h-full w-full border border-white rounded-full" />
            </div>

            <div className="hidden md:block md:col-start-2 md:row-start-3 md:col-span-1 md:row-span-1">
              <div className="w-full h-full rounded-full border border-white" />
            </div>
            <div className="hidden md:block md:col-start-2 md:row-start-4 md:col-span-1 md:row-span-1">
              <div className="w-full h-full rounded-full border border-white" />
            </div>
            <div className="hidden md:block md:col-start-3 md:row-start-4 md:col-span-1 md:row-span-1">
              <div className="w-full h-full rounded-full border border-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
