import Link from "next/link";
import { buttonVariants } from "./ui/button";

export function Cta(): JSX.Element {
  return (
    <section className="py-8 px-4 md:p-20 flex flex-col gap-8">
      <p className="font-bold text-xl md:text-[40px]">Join the future</p>
      <p className="text-sm md:text-xl">
        The XRPL EVM Sidechain expands XRP Ledger functionality and potential, opening a world of possibilities. Dive in and start building
        the future today!
      </p>
      <div>
        <Link
          href="https://docs.xrplevm.org/docs/evm-sidechain/get-started-evm-sidechain/"
          className={buttonVariants({ variant: "default" })}
        >
          Build the future
        </Link>
      </div>
    </section>
  );
}
