import type { Metadata } from 'next';
import './globals.css';
import { Geist, Geist_Mono } from "next/font/google";
import { cn } from '@/lib/utils';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Corrected: Separate viewport export
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

// ✅ Metadata (excluding viewport)
export const metadata: Metadata = {
  title: "Green Spoon E-Menu",
  description: "Green Spoon is a delightful vegetarian restaurant that brings a rich variety of vegetarian dishes to the table, catering to diverse palates with offerings like soups, Chinese starters, tandoor specialties, biryanis, and dosas. Located in a welcoming ambiance, it provides a wholesome dining experience with a focus on fresh, flavorful, and sustainable vegetarian cuisine.",
  metadataBase: new URL("https://green-spoon-e-menu.vercel.app/"), // ✅ Replace with your actual domain
  icons: "/logo.jpg",
  keywords: ["menu management", "restaurant operations", "team coordination", "E-MenuFlow", "order tracking", "greenspoon"],
  authors: [{ name: "Green Spoon", url: "https://green-spoon-e-menu.vercel.app//" }],
  openGraph: {
    title: "Green Spoon E-Menu",
    description: "Green Spoon is a delightful vegetarian restaurant that brings a rich variety of vegetarian dishes to the table, catering to diverse palates with offerings like soups, Chinese starters, tandoor specialties, biryanis, and dosas. Located in a welcoming ambiance, it provides a wholesome dining experience with a focus on fresh, flavorful, and sustainable vegetarian cuisine.",
    url: "https://green-spoon-e-menu.vercel.app/",
    siteName: "Green Spoon E-Menu",
    images: [
      {
        url: "/logo.jpg", // ✅ Ensure this image exists in public/
        width: 1200,
        height: 630,
        alt: "Green Spoon E Menu Preview",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Spoon E-Menu",
    description: "Green Spoon is a delightful vegetarian restaurant that brings a rich variety of vegetarian dishes to the table, catering to diverse palates with offerings like soups, Chinese starters, tandoor specialties, biryanis, and dosas. Located in a welcoming ambiance, it provides a wholesome dining experience with a focus on fresh, flavorful, and sustainable vegetarian cuisine.",
    images: ["/logo.jpg"], // ✅ Ensure this image exists in public/
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased flex flex-col min-h-screen')}>
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
