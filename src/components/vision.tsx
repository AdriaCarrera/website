import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function Vision(): JSX.Element {
  return (
    <section className="px-4 py-8 sm:p-20 w-full flex flex-col gap-8 sm:gap-16">
      <p className="font-bold text-xl sm:text-[40px]">Vision</p>
      <div className="p-4 sm:p-10 bg-[#232325] max-w-[900px] mx-auto">
        <Accordion type="single" collapsible>
          <AccordionItem value="vision">
            <div className="flex flex-col gap-4 sm:gap-6">
              <p className="font-bold text-xl sm:text-2xl">XRP Ledger Origin</p>
              <p className="text-sm sm:text-xl">
                In 2011, David Schwartz, Jed McCaleb, and Arthur Britto began developing the XRP Ledger. Inspired by Bitcoin, they set out
                to create a new and better way of transferring value without mining. Learn about its evolution from the original vision.
              </p>
            </div>
            <AccordionContent className="flex flex-col  gap-4 sm:gap-6">
              <p className="font-bold  text-xl sm:text-2xl">Pioneering Decentralized Exchange (DEX)</p>
              <p className="text-sm sm:text-xl">
                Launched in 2012, the XRP Ledger introduced the world&apos;s first DEX, which aggregates all liquidity into a single
                protocol for capital-efficient trading and asset tokenization.  Its unique ability to find optimal trading paths sets it
                apart in the blockchain world.
              </p>

              <p className="font-bold  text-xl sm:text-2xl">XLS-20 Launch</p>
              <p className="text-sm sm:text-xl">
                The XLS-20 protocol goes live, enhancing the XRP Ledger with native NFT capabilities and broader tokenization functionality.
              </p>

              <p className="font-bold  text-xl sm:text-2xl">Decade of Innovation and Security</p>
              <p className="text-sm sm:text-xl">
                For over a decade, the XRP Ledger has expanded its functionality, enabling tokenization, trading, escrow, and asset movement
                through API calls. It has processed over 2.8+ billion transactions with its unique Proof-of-Association protocol and a
                network of 100+ validators.
              </p>

              <p className="font-bold  text-xl sm:text-2xl">Embracing a Multi-Chain Future</p>
              <p className="text-sm sm:text-xl">
                With the XRPL EVM Sidechain launch, native DEX, ultra-low transaction fees and a large pre-existing community of 5M+ wallet
                holders, the XRP Ledger aims to serve as a versatile multi-chain trading hub for any type of asset 
              </p>
            </AccordionContent>
            <AccordionTrigger className="pt-4 sm:pt-8 group text-sm sm:text-xl">
              <span className="hidden group-data-[state=open]:inline">Read less</span>
              <span className="inline group-data-[state=open]:hidden">Read more</span>
            </AccordionTrigger>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
