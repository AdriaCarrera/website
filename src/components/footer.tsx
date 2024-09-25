import Link from "next/link";
import { Icons } from "./icons";

type FooterLinkProps = {
  href: string;
  label: string;
};

function FooterLink({ href, label }: FooterLinkProps): JSX.Element {
  return (
    <Link href={href} className="flex items-center gap-2">
      <span className="text-xs md:text-base">{label}</span>
      <Icons.ArrowUpRight />
    </Link>
  );
}

const links: FooterLinkProps[] = [
  {
    label: "Discord",
    href: "",
  },
  {
    label: "Twitter/X",
    href: "",
  },
  {
    label: "Cross-chain dApps",
    href: "",
  },
];

export function Footer(): JSX.Element {
  return (
    <footer className="px-4 py-8 md:p-20 flex flex-col gap-20">
      <div className="flex flex-col gap-6">
        <p className="font-bold md:text-2xl">XRPL EVM Sidechain</p>
        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
          <div className="flex justify-between md:justify-normal md:gap-14">
            {links.map((link) => (
              <FooterLink key={link.label} {...link} />
            ))}
          </div>
          <p className="text-xs text-[#838386]">v1.2.0 - Terms</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Icons.XRPLedgerLogo />
        <p className="text-xs text-[#838386]">©{new Date().getFullYear()} XRP Ledger. Open Source.</p>
      </div>
    </footer>
  );
}
