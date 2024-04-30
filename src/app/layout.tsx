import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/lib/Navbar";
import ProviderRedux from "@/lib/ProviderRedux";
import { Suspense } from "react";
import Loading from "./loading";
import { Toaster } from "@/components/ui/toaster";
import Graphqlprovider from "@/lib/graphqlprovider";


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
      <Graphqlprovider>
        <ProviderRedux>
          <body className={inter.className}>
            <Suspense fallback={<Loading />}>{children}</Suspense>
            <Toaster />
          </body>
        </ProviderRedux>
      </Graphqlprovider>
    </html>
  );
}
