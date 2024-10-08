import Link from "next/link";
import { Icons } from "./icons";

type BuilderProps = {
  name: string;
  description: string;
  logo: JSX.Element;
  link: string;
};

function Builder({ description, logo, name, link }: BuilderProps): JSX.Element {
  return (
    <div className="flex flex-col gap-6 items-center">
      <Link
        href={link}
        target="_blank"
        className="rounded-full border-[0.75px] border-white h-[118px] w-[118px] md:h-[200px] md:w-[200px] flex items-center justify-center hover:opacity-80"
      >
        {logo}
      </Link>
      <div className="flex flex-col text-center">
        <p className="text-xs md:text-xl font-bold">{name}</p>
        <p className="text-xs md:text-xl text-[#838386]">{description}</p>
      </div>
    </div>
  );
}

const builders: BuilderProps[] = [
  {
    name: "Peersyst",
    description: "Primary innovator and XRPL EVM Sidechain developer",
    logo: <Icons.PeersystLogo className="w-20 md:w-auto" />,
    link: "https://peersyst.com/",
  },
  {
    name: "Ripple",
    description: "Co-creator of the XRPL EVM Sidechain and one of many developers contributing to the XRP Ledger",
    logo: <Icons.RippleLogo className="w-20 md:w-auto" />,
    link: "https://ripple.com/",
  },
  {
    name: "Evmos",
    description: "Provides Evmos SDK that brings EVM compatibility on top of Cosmos client ",
    logo: <Icons.EvmosLogo className="w-20 md:w-auto" />,
    link: "https://evmos.org/",
  },
  {
    name: "Axelar",
    description: "Connecting XRP Ledger to EVM world via bridge secured by Axelar network validators",
    logo: <Icons.AxelarLogo className="w-20 md:w-auto" />,
    link: "https://www.axelar.network/",
  },
  {
    name: "Blockscout",
    description: "Building EVM block explorer",
    logo: <Icons.BlockscoutLogo className="w-20 md:w-auto" />,
    link: "https://www.blockscout.com/",
  },
];

export function Builders(): JSX.Element {
  return (
    <section className="py-8 px-4 md:py-[100px] md:px-20 flex flex-col gap-16">
      <p className="font-bold text-xl md:text-[40px]">Meet the XRPL EVM Sidechain builders</p>
      <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-x-10 gap-y-8 md:gap-12">
        {builders.map((builder) => (
          <Builder key={builder.name} {...builder} />
        ))}
      </div>
    </section>
  );
}
