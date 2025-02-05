import PHProvider from "@/app/_components/PHProvider";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eszter & István házasodik",
  description:
    "Eszter és István esküvőjével kapcsolatos információk összegző weboldala",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PHProvider>
        <body className="font-playfair antialiased mx-auto max-w-screen overflow-x-hidden overscroll-none bg-dark-vanilla">
          <main>{children}</main>
          <Toaster />
        </body>
      </PHProvider>
    </html>
  );
}
