import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home Page",
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
        <Link href="/" replace={true}>Home </Link>
        <Link href="/about" replace={true}> About</Link>
        <Link href="/dashboard" replace={true}> Dashboard</Link>
        <h1>LV1</h1>
        <hr/>
          {children}
        <hr/>
        <h1>LV1</h1>
      </body>
    </div>
  );
}
