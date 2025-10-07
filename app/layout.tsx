import PHProvider from "@/app/_components/PHProvider";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { Toaster } from "sonner";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Zsófi & Andris házasodik",
    description: "2026. június 13., Alsópetény",
    metadataBase: new URL(`https://${(await headers()).get("host")}`),
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PHProvider>
        <body className="font-playfair text-kombu-green selection:bg-[#566235]/40 caret-kombu-green antialiased mx-auto max-w-screen overflow-x-hidden overscroll-none sm:bg-[#BFCFBB]/60 bg-[#BFCFBB]/30">
          <main>{children}</main>
          <Toaster />
        </body>
      </PHProvider>
    </html>
  );
}
