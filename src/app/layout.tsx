import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <body className={inter.className}>
        <h1>LV1</h1>
        <hr/>
          {children}
        <hr/>
        <h1>LV1</h1>
      </body>
    </div>
  );
}
