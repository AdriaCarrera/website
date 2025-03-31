import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { ScrollAnimation } from "./ui/scroll-animation";

export function Faqs() {
  return (
    <ScrollAnimation delay={0.2}>
      <section className="flex flex-col gap-8 max-w-4xl mx-auto w-full px-4 md:px-0" id="faqs">
        <h2 className="font-semibold text-[26px] leading-8">FAQs</h2>

        <Accordion type="single" collapsible className="w-full flex flex-col gap-3">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex flex-col gap-2">
                <h3 className="hover:underline hover:decoration-secondary">How do I get XRP on the XRPL EVM Sidechain?</h3>
                <h3 className="text-base font-light text-muted-foreground">
                  You can transfer XRP from XRPL to XRPL EVM Sidechain by using the Axelar Bridge
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3">
              <p>
                Visit{" "}
                <Link
                  className="font-semibold hover:underline hover:decoration-secondary"
                  href="https://testnet.xrpl.squidrouter.com"
                  target="_blank"
                >
                  testnet.xrpl.squidrouter.com
                </Link>
                and follow the prompts to connect your XRPL wallet (via XRPL Snap or Crossmark). Then, add the{" "}
                <Link
                  className="font-semibold hover:underline hover:decoration-secondary"
                  href="https://docs.xrplevm.org/pages/users/getting-started/connect-to-the-xrpl-evm"
                  target="_blank"
                >
                  XRPL EVM Sidechain Testnet network
                </Link>{" "}
                to MetaMask and swap XRP from XRPL to XRPL EVM Sidechain.
              </p>

              <p>
                Once your transaction completes, you will see the bridged XRP in your XRPL EVM Sidechain wallet. For full instructions, see
                the{" "}
                <Link
                  className="font-semibold hover:underline hover:decoration-secondary"
                  href="https://docs.xrplevm.org/pages/users/using-the-bridge"
                  target="_blank"
                >
                  Using the Bridge
                </Link>{" "}
                documentation.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className="flex flex-col gap-2">
                <h3 className="hover:underline hover:decoration-secondary">How is the XRPL EVM Sidechain related to the XRPL mainnet?</h3>
                <h3 className="text-base font-light text-muted-foreground">
                  The XRPL EVM Sidechain is a sidechain of the XRP Ledger, designed to extend its capabilities by introducing
                  Ethereum-compatible smart contracts.
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3">
              <p>
                It shares XRP as the native token and aligns closely with the mainnet’s attributes, including fast, low-cost transactions, a
                similar consensus model, and even some shared validators. The Axelar bridge connects the two networks, ensuring a 1-to-1
                relationship for XRP bridged between them, preserving XRP’s value across both chains.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              <div className="flex flex-col gap-2">
                <h3 className="hover:underline hover:decoration-secondary">
                  What are the main benefits of building on the XRPL EVM Sidechain?
                </h3>
                <h3 className="text-base font-light text-muted-foreground">
                  Building on the XRPL EVM Sidechain combines the power and efficiency of the XRP Ledger with Ethereum’s smart contract
                  compatibility.
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3">
              <p>
                Developers can deploy Solidity-based applications while benefiting from XRP’s liquidity and the XRPL’s robust ecosystem. As
                a pioneer in DeFi with its native DEX—introduced well before platforms like Uniswap—XRPL offers low transaction fees, high
                speed, and unmatched reliability. With the seamless interoperability brought by the XRPL EVM Sidechain, the ecosystem is
                poised to be the ideal home for DeFi, dApps, and other decentralized applications.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              <div className="flex flex-col gap-2">
                <h3 className="hover:underline hover:decoration-secondary">
                  What is Cosmos, and why is the XRPL EVM Sidechain built on it?
                </h3>
                <h3 className="text-base font-light text-muted-foreground">
                  The Cosmos SDK is a modular framework for building scalable, interoperable blockchains.
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3">
              <p>
                It offers flexibility, sovereignty, and pre-built modules for governance, staking, and consensus. XRPL EVM Sidechain
                leverages Cosmos SDK to enable seamless cross-chain communication via Inter-Blockchain Communication (IBC), ensuring high
                performance and interoperability within the broader blockchain ecosystem
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              <div className="flex flex-col gap-2">
                <h3 className="hover:underline hover:decoration-secondary">What is the Axelar bridge, and how does it work?</h3>
                <h3 className="text-base font-light text-muted-foreground">
                  The Axelar bridge is a trustless, decentralized interoperability network that securely connects the XRPL EVM with the XRP
                  Ledger.
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3">
              <p>
                It maintains a 1-to-1 ratio of bridged XRP between XRPL mainnet and the XRPL EVM Sidechain, ensuring seamless asset
                transfers. Additionally, Axelar extends XRPL EVM’s connectivity beyond XRPL, enabling interoperability with other
                EVM-compatible blockchains, expanding XRP’s utility across multiple networks.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>
              <div className="flex flex-col gap-2">
                <h3 className="hover:underline hover:decoration-secondary">How does the XRPL EVM Sidechain consensus model work?</h3>
                <h3 className="text-base font-light text-muted-foreground">
                  The XRPL EVM Sidechain uses a Proof of Authority (PoA) consensus model, which prioritizes speed, efficiency, and security.
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3">
              <p>
                In PoA, a set of trusted validators confirm transactions and produce blocks, ensuring fast finality and low-cost execution.
                This consensus mechanism aligns closely with the XRPL mainnet while optimizing for EVM compatibility.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </ScrollAnimation>
  );
}
