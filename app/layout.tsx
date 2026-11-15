import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "./provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kaushal Kanani | Freelance Full-Stack & Java Spring Boot Engineer",
  description:
    "Portfolio of Kaushal Kanani – Freelance Full-Stack & Backend Systems Engineer with dual expertise in Java Spring Boot microservices and Node.js/React modern web apps. Active open-source contributor and Codeforces Specialist (1414 peak).",
  keywords: [
    "Kaushal Kanani",
    "Freelance Full Stack Developer",
    "Java Spring Boot Freelancer",
    "Node.js React Developer",
    "Backend Systems Engineer",
    "Microservices Architect",
    "Open Source Contributor",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-sans bg-black-100 text-white min-h-screen flex flex-col antialiased selection:bg-purple/30 selection:text-white">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Navbar />
          <div className="flex-1 pt-20 sm:pt-24">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
