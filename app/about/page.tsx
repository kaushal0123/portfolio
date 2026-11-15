"use client";

import Link from "next/link";
import { FaGraduationCap, FaCode, FaServer, FaArrowRight, FaHandshake } from "react-icons/fa6";
import { SiCodeforces } from "react-icons/si";
import { personalInfo, education } from "@/data";

export default function AboutPage() {
  return (
    <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 space-y-12">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple/10 border border-purple/20 text-xs text-purple font-mono">
          <span>// PERSONAL NARRATIVE &amp; DUAL STACK</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          About Kaushal Kanani
        </h1>
        <p className="text-sm text-white/60 leading-relaxed">
          Freelance Full-Stack &amp; Systems Engineer · Open Source Contributor · Dhirubhai Ambani University.
        </p>
      </div>

      <div className="space-y-8 text-sm text-white/80 leading-relaxed">
        {/* Story */}
        <section className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#080a14] space-y-4">
          <h2 className="text-lg font-bold text-white">Engineering Philosophy</h2>
          <p>
            I specialize in two complementary worlds of software engineering: <strong className="text-white">enterprise-grade Java Spring Boot backends</strong> with high concurrency and transactional reliability on one side, and <strong className="text-white">rapid full-stack web applications with Node.js and React</strong> on the other.
          </p>
          <p>
            My problem-solving speed and edge-case intuition come from competitive programming on <strong className="text-white">Codeforces (Specialist, 1414 peak rating)</strong>. In algorithmic competitions, every millisecond and byte counts. I bring that same discipline to client work: writing lean, well-indexed, zero-leak code that scales under real traffic.
          </p>
          <p>
            As a freelancer and open-source builder, I focus on tangible outcomes: designing scalable microservice architectures, building full-stack MVPs with Next.js and PostgreSQL, and automating developer workflows with AI and message queues.
          </p>
        </section>

        {/* Education Highlight */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {education.map((e) => (
            <div key={e.id} className="p-5 rounded-2xl border border-white/[0.08] bg-white/[0.02] space-y-2">
              <span className="text-xs font-mono text-purple">{e.period}</span>
              <h3 className="text-base font-bold text-white">{e.degree}</h3>
              <p className="text-xs text-white/60">{e.institution} · {e.location}</p>
              <p className="text-xs text-white/50">{e.score}</p>
            </div>
          ))}
        </section>

        {/* Quick Links */}
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple text-black text-xs font-bold hover:bg-purple/90 transition-all"
          >
            Review Projects <FaArrowRight size={10} />
          </Link>
          <Link
            href="/experience"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold hover:bg-cyan-500/20 transition-all"
          >
            Services &amp; Stack <FaArrowRight size={10} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-white text-xs font-medium hover:bg-white/10 transition-all"
          >
            <FaHandshake size={11} />
            Hire Me
          </Link>
        </div>
      </div>
    </main>
  );
}
