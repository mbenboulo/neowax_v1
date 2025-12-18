import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const orangeSquash = localFont({
  src: "../public/fonts/Orange-Squash-Demo-BF6483cfe8b2bfc.otf",
  variable: "--font-orange-squash",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neowax Incubator",
  description:
    "Neowax Incubator: Affordable innovation for premature infants through accessible, thermally stable incubator design.",
};

function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-black/5 bg-nw-surface/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-9 w-32">
            <Image
              src="/Neowax%20Logo%20dark.png"
              alt="Neowax logo"
              fill
              sizes="128px"
              className="object-contain"
              priority
            />
          </div>
          <span className="hidden text-sm font-semibold tracking-wide text-nw-primary md:inline">
            Neowax Incubator
          </span>
        </Link>
        <div className="hidden items-center gap-6 text-sm font-medium text-nw-primary md:flex">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/#motivation" className="hover:underline">
            Motivation
          </Link>
          <Link href="/#technology" className="hover:underline">
            Technology
          </Link>
          <Link href="/#impact" className="hover:underline">
            Impact
          </Link>
          <Link
            href="/read-more"
            className="rounded-full bg-nw-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-nw-surface shadow-sm transition hover:bg-nw-primary-strong"
          >
            Read More
          </Link>
        </div>
        {/* Simple mobile nav: collapse to a single Read More CTA and keep Home via logo */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/read-more"
            className="rounded-full bg-nw-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-nw-surface shadow-sm transition hover:bg-nw-primary-strong"
          >
            Read More
          </Link>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-12 border-t border-black/5 bg-nw-footer">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-6 text-sm text-nw-primary/80 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="relative h-7 w-28">
            <Image
              src="/Neowax%20Logo%20dark.png"
              alt="Neowax logo small"
              fill
              sizes="112px"
              className="object-contain"
            />
          </div>
          <p className="max-w-xs">
            Affordable innovation for premature infants, bringing safe incubator
            care closer to every community.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/read-more" className="hover:underline">
            Read More
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orangeSquash.variable} ${geistMono.variable} antialiased bg-nw-page text-nw-primary`}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="mx-auto mt-4 flex w-full max-w-5xl flex-1 flex-col px-4 pb-10 pt-4 md:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
