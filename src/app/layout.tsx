import type { Metadata } from "next";
import { Albert_Sans, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CartDrawer } from "@/components/cart-drawer";
import { AnnouncementBar } from "@/components/announcement-bar";

// Body / UI — clean geometric sans (à la gymkha's Albert Sans)
const albert = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert",
  display: "swap",
});

// Display headings — tall condensed all-caps (à la gymkha's Bebas Neue)
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MOBFACTORY — Menswear, Redefined",
    template: "%s · MOBFACTORY",
  },
  description:
    "MOBFACTORY is a premium menswear label. Elevated essentials, seasonal drops and collector series — engineered for the modern man.",
  keywords: ["menswear", "men's clothing", "premium fashion", "mobfactory", "streetwear"],
  openGraph: {
    title: "MOBFACTORY — Menswear, Redefined",
    description: "Premium menswear. Elevated essentials & collector drops.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${albert.variable} ${bebas.variable}`}>
      <body suppressHydrationWarning className="min-h-screen bg-bg text-fg antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AnnouncementBar />
          <Header />
          <main className="min-h-[60vh]">{children}</main>
          <Footer />
          <CartDrawer />
        </ThemeProvider>
      </body>
    </html>
  );
}
