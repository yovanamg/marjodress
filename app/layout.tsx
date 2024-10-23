import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react";
import { ChakraProvider } from '@chakra-ui/react';

export const metadata: Metadata = {
  title: "Inicio",
  description: "Pagína principal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ChakraProvider>
        <body>
          {children}
        </body>
      </ChakraProvider>
      
      <SpeedInsights />
      <Analytics />
    </html>
  );
}
