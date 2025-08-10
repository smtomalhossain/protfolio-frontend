import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";


export const metadata: Metadata = {
  title: "Tomal Hossain | Expert in React, Next.js & Tailwind CSS Development",
  description: "Full-Stack Developer Tomal Hossain specializes in React, Next.js, and Tailwind CSS. Building fast, responsive, and user-friendly web applications with clean code and great UX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="scroll-smooth" >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
