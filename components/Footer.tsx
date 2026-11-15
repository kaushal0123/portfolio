"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { SiCodeforces } from "react-icons/si";
import { personalInfo, navItems } from "@/data";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-black-100/90 pt-12 pb-8 mt-20 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-36 bg-purple/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/[0.06]">
          {/* Column 1: Info */}
          <div className="md:col-span-6 space-y-3">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple to-cyan-400 flex items-center justify-center text-black font-black text-[10px]">
                K
              </div>
              <span className="text-base font-bold text-white tracking-tight">Kaushal Kanani</span>
            </Link>
            <p className="text-xs text-white/60 max-w-sm leading-relaxed">
              Final-year B.Tech ICT student at Dhirubhai Ambani University. Backend &amp; systems specialist building
              distributed microservices, online judges, and AI developer tooling.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-purple/50 transition-all"
                aria-label="GitHub"
              >
                <FaGithub size={15} />
              </a>
              <a
                href={personalInfo.codeforces}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all"
                aria-label="Codeforces"
              >
                <SiCodeforces size={13} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-purple/50 transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={14} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-purple/50 transition-all"
                aria-label="Email"
              >
                <FaEnvelope size={13} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Nav */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/40 block mb-2">Navigation</span>
            <div className="flex flex-col gap-1.5 text-xs text-white/70">
              {navItems.map((item) => (
                <Link key={item.name} href={item.link} className="hover:text-purple transition-colors">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Quick Status */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/40 block mb-2">Status</span>
            <div className="p-3 rounded-xl border border-white/[0.08] bg-white/[0.02] space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{personalInfo.status}</span>
              </div>
              <p className="text-[11px] text-white/50">Open for Freelance Projects, Fixed-Price MVPs &amp; Contracts</p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/40">
          <p>© {new Date().getFullYear()} Kaushal Kanani. Crafted for high performance &amp; clean systems.</p>
          <p className="font-mono text-[10px] text-white/30">Next.js 14 · Tailwind CSS · TypeScript</p>
        </div>
      </div>
    </footer>
  );
}
