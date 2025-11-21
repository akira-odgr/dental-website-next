import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ReactLenis } from "lenis/react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const dmSans = DM_Sans({
    variable: "--font-dmSans-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Dentora | Expert Dental Care & Cosmetic Dentistry",
    description:
        "Experience exceptional dental care with modern cosmetic treatments and advanced procedures designed for your comfort and confidence.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body className={`${dmSans.className} antialiased`}>
                <ReactLenis root />
                <Header />
                <main className="min-h-screen">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
