import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "./Components/TopBar";

// تحميل الخطوط
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EnG : Ahmed Mohamed Attia",
  description: "Portfolio of (EnG : Ahmed Mohamed Attia)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head />
      <body >
        <div>
          <TopBar /> {/* تأكد أن TopBar يحتوي على "use client" */}
          {children}
        </div>
      </body>
    </html>
  );
}
