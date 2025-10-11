import PHProvider from "@/app/_components/PHProvider";
import type { Metadata } from "next";
import { Libre_Baskerville, Playfair_Display } from "next/font/google";
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

const playfair = Playfair_Display({
  display: "swap",
  preload: true,
  subsets: ["latin"],
  variable: "--font-playfair",
});

const libre = Libre_Baskerville({
  display: "swap",
  style: ["italic", "normal"],
  preload: true,
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${libre.variable}`}>
      <PHProvider>
        <body className="font-playfair text-kombu-green selection:bg-[#566235]/40 caret-kombu-green antialiased mx-auto max-w-screen overflow-x-hidden overscroll-none sm:bg-[#FEFEFD]/60 bg-[##FEFEFD]/30">
          <main>{children}</main>
          <Toaster />
        </body>
      </PHProvider>
    </html>
  );
}
