/* eslint-disable */
"use client";

import { MetaMaskInpageProvider } from "@metamask/providers";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

export function MetamaskButton({ className }: { className?: string }) {
  async function connect() {
    try {
      if (!window.ethereum) {
        return;
      }

      const hexadecimalChainId = "0x" + Number(1449000).toString(16);

      const networkDetails = {
        chainId: hexadecimalChainId,
        chainName: "XRPL EVM Sidechain Testnet",
        nativeCurrency: {
          name: "XRP",
          symbol: "XRP",
          decimals: 18,
        },
        rpcUrls: ["https://rpc.testnet.xrplevm.org/"],
        blockExplorerUrls: ["https://explorer.testnet.xrplevm.org"],
      };

      // Request to add the network to MetaMask
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [networkDetails],
      });
      toast.success("XRPL EVM Sidechain Testnet added successfully!");
    } catch (error: any) {
      // If the network is already added, show success message
      if (error.code === 4001) {
        toast.success("Already connected to XRPL EVM Sidechain Testnet!");
      }
    }
  }

  return (
    <Button onClick={connect} variant="outline" className={cn("cursor-pointer gap-2", className)} size="lg">
      <Icons.Metamask className="size-6" />
      <span className="font-bold">Add XRPL EVM Sidechain Testnet</span>
    </Button>
  );
}

export function MetamaskHeaderButton({ className }: { className?: string }) {
  async function connect() {
    try {
      if (!window.ethereum) {
        return;
      }

      const hexadecimalChainId = "0x" + Number(1449000).toString(16);

      const networkDetails = {
        chainId: hexadecimalChainId,
        chainName: "XRPL EVM Sidechain Testnet",
        nativeCurrency: {
          name: "XRP",
          symbol: "XRP",
          decimals: 18,
        },
        rpcUrls: ["https://rpc.testnet.xrplevm.org/"],
        blockExplorerUrls: ["https://explorer.testnet.xrplevm.org"],
      };

      // Request to add the network to MetaMask
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [networkDetails],
      });
      toast.success("XRPL EVM Sidechain Testnet added successfully!");
    } catch (error: any) {
      // If the network is already added, show success message
      if (error.code === 4001) {
        toast.success("Already connected to XRPL EVM Sidechain Testnet!");
      }
    }
  }
  return (
    <Button
      onClick={connect}
      variant="outline"
      className={cn("cursor-pointer gap-2 bg-white/[0.04] border-white/[0.08]", className)}
      size="lg"
    >
      <Icons.Metamask className="size-6" />
    </Button>
  );
}
