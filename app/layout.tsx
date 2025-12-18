import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const erstoria = localFont({
  src: "../public/fonts/Erstoria.ttf",
  variable: "--font-erstoria",
  display: "swap",
});

const poppins = localFont({
  src: "../public/fonts/Poppins-Regular.ttf",
  variable: "--font-poppins",
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
    <header className="sticky top-0 z-30 border-b border-black/30 bg-nw-primary/95 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 text-nw-accent md:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-9 w-32">
            <Image
              src="/Neowax%20Logo%20light.png"
              alt="Neowax logo"
              fill
              sizes="128px"
              className="object-contain"
              priority
            />
          </div>
        </Link>
        <div className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="/" className="text-white hover:underline">
            Home
          </Link>
          <Link href="/#motivation" className="text-white hover:underline">
            Motivation
          </Link>
          <Link href="/#technology" className="text-white hover:underline">
            Technology
          </Link>
          <Link href="/#impact" className="text-white hover:underline">
            Impact
          </Link>
          <Link
            href="/read-more"
            className="rounded-full bg-nw-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-nw-primary shadow-sm transition hover:bg-nw-surface/90"
          >
            Read More
          </Link>
        </div>
        {/* Simple mobile nav: collapse to a single Read More CTA and keep Home via logo */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/read-more"
            className="rounded-full bg-nw-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-nw-primary shadow-sm transition hover:bg-nw-surface/90"
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
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-6 text-sm text-nw-primary/80 md:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
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
              Affordable innovation for premature infants, bringing safe
              incubator care closer to every community.
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

        <div className="h-px bg-black/10" />

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nw-primary/70">
            Supported by
          </p>
          <div className="flex flex-wrap items-center gap-6 md:justify-end">
            <div className="relative h-8 w-32 md:h-9 md:w-40">
              <Image
                src="/british-council.png"
                alt="British Council logo"
                fill
                sizes="160px"
                className="object-contain"
              />
            </div>
            <a
              href="https://www.knust.edu.gh"
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-9 w-40 md:h-10 md:w-48"
            >
              <Image
                src="/knustlogo.png"
                alt="KNUST logo"
                fill
                sizes="192px"
                className="object-contain"
              />
            </a>
            <a
              href="https://dipperlab.knust.edu.gh"
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-8 w-40 md:h-9 md:w-48"
            >
              <Image
                src="/Original%20logo-08-01.png"
                alt="Dipper Lab logo"
                fill
                sizes="192px"
                className="object-contain"
              />
            </a>
          </div>
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
        className={`${erstoria.variable} ${poppins.variable} ${geistMono.variable} antialiased bg-nw-page text-nw-primary`}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="mx-auto mt-4 flex w-full max-w-5xl flex-1 flex-col px-4 pb-10 pt-4 md:px-6 lg:px-8">
            {children}
          </main>
          <Analytics />
          <SpeedInsights />
          <Footer />
        </div>
      </body>
    </html>
  );
}
