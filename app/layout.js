import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "./provider";  // 👈 import your Provider.jsx (check correct path)
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SelectIQ",
  description: "Smart Hiring, Made Simple",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true} 
      >
        {/* 👇 wrap children with Provider */}
        <Provider>
          {children}
          <Toaster />
          <Toaster/>
          
        </Provider>
      </body>
    </html>
  );
}
