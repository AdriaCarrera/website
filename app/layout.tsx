import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";

const workSans = Work_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XRPL EVM – Scalability & Compatibility for Ethereum with XRP",
  description:
    "Discover XRPL EVM Sidechain, combining XRPL's security and speed with full Ethereum compatibility powered by XRP. Build and run your dApps with low fees, fast settlements, and maximum efficiency.",
  keywords: [
    "XRPL EVM Sidechain",
    "Ethereum Virtual Machine",
    "XRPL",
    "Smart Contracts",
    "Blockchain",
    "DeFi",
    "dApps",
    "Ethereum Compatibility",
    "XRP Staking",
    "Interoperability",
    "Web3",
  ],
  openGraph: {
    title: "XRPL EVM Sidechain – The Future of Ethereum Compatibility",
    description:
      "Integrate and scale your applications with XRPL EVM Sidechain, the ultimate blend of security, speed, and Ethereum compatibility.",
    url: "https://xrplevm.org",
    type: "website",
  },
  alternates: {
    canonical: "https://xrplevm.org",
  },
  other: {
    "application/ld+json": [
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "XRPL EVM",
        url: "https://xrplevm.org",
        description:
          "Discover XRPL EVM Sidechain, combining XRPL's security and speed with full Ethereum compatibility powered by XRP. Build and run your dApps with low fees, fast settlements, and maximum efficiency.",
      }),
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "XRPL EVM",
        url: "https://xrplevm.org",
        logo: "https://xrplevm.org/favicon.ico",
        description:
          "XRPL EVM is a sidechain of the XRP Ledger that provides Ethereum compatibility while maintaining XRPL's security and efficiency.",
        sameAs: ["https://x.com/xrpl_evm", "https://github.com/xrplevm", "https://docs.xrplevm.org"],
        foundingDate: "2023",
        areaServed: "Worldwide",
        keywords: "XRPL, EVM, Sidechain, Blockchain, Smart Contracts, DeFi, dApps, Ethereum Compatibility",
      }),
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How do I get XRP on the XRPL EVM Sidechain?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can transfer XRP from XRPL to XRPL EVM Sidechain by using the Axelar Bridge. Visit testnet.xrpl.squidrouter.com and follow the prompts to connect your XRPL wallet (via XRPL Snap or Crossmark). Then, add the XRPL EVM Sidechain Testnet network to MetaMask and swap XRP from XRPL to XRPL EVM Sidechain. Once your transaction completes, you will see the bridged XRP in your XRPL EVM Sidechain wallet. For full instructions, see the Using the Bridge documentation.",
            },
          },
          {
            "@type": "Question",
            name: "How is the XRPL EVM Sidechain related to the XRPL mainnet?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The XRPL EVM Sidechain is a sidechain of the XRP Ledger, designed to extend its capabilities by introducing Ethereum-compatible smart contracts. It shares XRP as the native token and aligns closely with the mainnet's attributes, including fast, low-cost transactions, a similar consensus model, and even some shared validators. The Axelar bridge connects the two networks, ensuring a 1-to-1 relationship for XRP bridged between them, preserving XRP's value across both chains.",
            },
          },
          {
            "@type": "Question",
            name: "What are the main benefits of building on the XRPL EVM Sidechain?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Building on the XRPL EVM Sidechain combines the power and efficiency of the XRP Ledger with Ethereum's smart contract compatibility. Developers can deploy Solidity-based applications while benefiting from XRP's liquidity and the XRPL's robust ecosystem. As a pioneer in DeFi with its native DEX—introduced well before platforms like Uniswap—XRPL offers low transaction fees, high speed, and unmatched reliability. With the seamless interoperability brought by the XRPL EVM Sidechain, the ecosystem is poised to be the ideal home for DeFi, dApps, and other decentralized applications.",
            },
          },
          {
            "@type": "Question",
            name: "What is Cosmos, and why is the XRPL EVM Sidechain built on it?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Cosmos SDK is a modular framework for building scalable, interoperable blockchains. It offers flexibility, sovereignty, and pre-built modules for governance, staking, and consensus. XRPL EVM Sidechain leverages Cosmos SDK to enable seamless cross-chain communication via Inter-Blockchain Communication (IBC), ensuring high performance and interoperability within the broader blockchain ecosystem.",
            },
          },
          {
            "@type": "Question",
            name: "What is the Axelar bridge, and how does it work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Axelar bridge is a trustless, decentralized interoperability network that securely connects the XRPL EVM with the XRP Ledger. It maintains a 1-to-1 ratio of bridged XRP between XRPL mainnet and the XRPL EVM Sidechain, ensuring seamless asset transfers. Additionally, Axelar extends XRPL EVM's connectivity beyond XRPL, enabling interoperability with other EVM-compatible blockchains, expanding XRP's utility across multiple networks.",
            },
          },
          {
            "@type": "Question",
            name: "How does the XRPL EVM Sidechain consensus model work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The XRPL EVM Sidechain uses a Proof of Authority (PoA) consensus model, which prioritizes speed, efficiency, and security. In PoA, a set of trusted validators confirm transactions and produce blocks, ensuring fast finality and low-cost execution. This consensus mechanism aligns closely with the XRPL mainnet while optimizing for EVM compatibility.",
            },
          },
        ],
      }),
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-KJN0XF1YMF" strategy="afterInteractive" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KJN0XF1YMF');
          `}
      </Script>
      <body className={`${workSans.className} antialiased`}>
        {children}
        <Toaster richColors />
        <TailwindIndicator />
      </body>
    </html>
  );
}
