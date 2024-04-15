import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/lib/Navbar";
import ProviderRedux from "@/lib/ProviderRedux";
import { Suspense } from "react";
import Loading from "./loading";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "That's Vigor",
  description: "That's Vigor APP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ProviderRedux>
        <body className={inter.className}>
          <Navbar></Navbar>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </body>
      </ProviderRedux>
    </html>
  );
}
