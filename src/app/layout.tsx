import type { Metadata } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CartDrawer } from "@/components/cart-drawer";
import { AnnouncementBar } from "@/components/announcement-bar";
import { SpecTicker } from "@/components/spec-ticker";

// Body / UI — Manrope carries the heavy uppercase label scale without smearing
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

// Display headings — tall condensed all-caps, stencilled-iron treatment
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MOB FACTORY — Heavy Iron Athletic Co.",
    template: "%s · MOB FACTORY",
  },
  description:
    "Heavyweight luxury gymwear built in the trenches. 260 GSM comb-ring cotton, zero-deform ribbing and limited batch drops — engineered for the heavy sets.",
  keywords: [
    "gymwear",
    "heavyweight tee",
    "260 gsm",
    "mob factory",
    "athletic apparel",
    "streetwear",
  ],
  openGraph: {
    title: "MOB FACTORY — Heavy Iron Athletic Co.",
    description: "Heavyweight luxury gymwear. Engineered for the heavy sets.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${manrope.variable} ${bebas.variable}`}>
      <body suppressHydrationWarning className="min-h-screen bg-bg text-fg antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AnnouncementBar />
          <Header />
          <SpecTicker />
          <main className="min-h-[60vh]">{children}</main>
          <Footer />
          <CartDrawer />
        </ThemeProvider>
      </body>
    </html>
  );
}
