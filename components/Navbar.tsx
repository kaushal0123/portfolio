"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, personalInfo } from "@/data";
import { cn } from "@/lib/utils";
import { FaBars, FaXmark, FaBriefcase } from "react-icons/fa6";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-3 sm:py-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between gap-4 w-full max-w-5xl px-4 py-2.5 rounded-full bg-black-100/75 backdrop-blur-md border border-white/[0.08] shadow-lg shadow-black/50">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group pl-1">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple via-orange-400 to-cyan-400 flex items-center justify-center text-black font-extrabold text-xs shadow-md">
            K
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white tracking-tight group-hover:text-purple transition-colors">
              Kaushal Kanani
            </span>
            <span className="hidden sm:inline-block text-[10px] text-white/40 -mt-0.5">
              Freelance Engineer · Dual Stack
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.link;
            return (
              <Link
                key={item.name}
                href={item.link}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative",
                  isActive
                    ? "bg-purple/20 text-purple border border-purple/30 font-semibold shadow-sm"
                    : "text-white/70 hover:text-white hover:bg-white/[0.05]"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Right Status Badge & Contact / Mobile Toggle */}
        <div className="flex items-center gap-2">
          {/* Freelance Availability Badge */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Hire</span>
          </div>

          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold px-4 py-1.5 rounded-full bg-purple text-black hover:bg-purple/90 transition-all active:scale-95 shadow-md shadow-purple/20"
          >
            <FaBriefcase size={10} />
            Hire Me
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 rounded-full bg-white/[0.05] border border-white/10 text-white hover:bg-white/10"
          >
            {mobileOpen ? <FaXmark size={14} /> : <FaBars size={14} />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-down Menu */}
      {mobileOpen && (
        <div className="pointer-events-auto absolute top-16 left-4 right-4 max-w-lg mx-auto rounded-2xl bg-black-100/95 backdrop-blur-xl border border-white/10 p-4 shadow-2xl flex flex-col gap-1 lg:hidden">
          {navItems.map((item) => {
            const isActive = pathname === item.link;
            return (
              <Link
                key={item.name}
                href={item.link}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "px-4 py-2.5 rounded-xl text-sm font-medium transition-all",
                  isActive
                    ? "bg-purple/20 text-purple font-semibold border border-purple/30"
                    : "text-white/80 hover:bg-white/[0.05] hover:text-white"
                )}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="pt-2 mt-2 border-t border-white/10 flex justify-between items-center px-2">
            <div className="flex items-center gap-1.5 text-xs text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Freelance</span>
            </div>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="text-xs text-purple underline font-semibold"
            >
              Start a Project →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
