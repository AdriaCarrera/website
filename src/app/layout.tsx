import "@/styles/globals.css";

import type { Metadata } from "next";
import { workSans } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import Script from "next/script";

export const metadata: Metadata = {
  title: "XRPL EVM Sidechain",
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
      <body className={cn(workSans.className, "dark")}>
        {children}
        <TailwindIndicator />
      </body>
    </html>
  );
}
