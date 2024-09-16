import "@/styles/globals.css";

import type { Metadata } from "next";
import { workSans } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import { TailwindIndicator } from "@/components/tailwind-indicator";

export const metadata: Metadata = {
  title: "XRPL EVM Sidechain",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={cn(workSans.className, "dark")}>
        {children}
        <TailwindIndicator />
      </body>
    </html>
  );
}
