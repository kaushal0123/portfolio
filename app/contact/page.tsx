"use client";

import { useState } from "react";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaCheck, FaCopy, FaPaperPlane, FaHandshake } from "react-icons/fa6";
import { SiCodeforces } from "react-icons/si";
import { personalInfo } from "@/data";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Full-Stack Web App (React / Node.js)");
  const [budget, setBudget] = useState("Under $1k");
  const [message, setMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=Freelance Project Inquiry: ${encodeURIComponent(
      service
    )} from ${encodeURIComponent(name || "Client")}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject Type: ${service}\nEstimated Budget: ${budget}\n\nProject Details:\n${message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 space-y-12">
      {/* Page Header */}
      <div className="space-y-3 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-mono">
          <span>// START A FREELANCE PROJECT</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Let&apos;s Build Your Next Product
        </h1>
        <p className="text-sm text-white/60 max-w-2xl leading-relaxed">
          Need a fast full-stack MVP in Node.js/React or an enterprise microservices backend in Java Spring Boot? Let&apos;s discuss your requirements, timeline, and deliverables.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct channels */}
        <div className="md:col-span-5 space-y-4">
          {/* Direct Email Card */}
          <div className="p-5 rounded-2xl border border-white/10 bg-[#080a14] space-y-2">
            <span className="text-xs font-mono uppercase text-white/40 block">Direct Email</span>
            <div className="flex items-center justify-between gap-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-xs sm:text-sm font-bold text-white hover:text-purple transition-colors truncate font-mono"
              >
                {personalInfo.email}
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/10 text-white/70 hover:text-white transition-all flex-shrink-0 cursor-pointer"
                title="Copy email"
              >
                {copied ? <FaCheck size={12} className="text-emerald-400" /> : <FaCopy size={12} />}
              </button>
            </div>
            {copied && <span className="text-[11px] text-emerald-400 block">✓ Copied to clipboard!</span>}
          </div>

          {/* Phone */}
          <div className="p-5 rounded-2xl border border-white/10 bg-[#080a14] space-y-2">
            <span className="text-xs font-mono uppercase text-white/40 block">Direct Phone</span>
            <a
              href={`tel:${personalInfo.phone}`}
              className="text-xs sm:text-sm font-bold text-white hover:text-purple transition-colors font-mono block"
            >
              {personalInfo.phone}
            </a>
          </div>

          {/* Availability */}
          <div className="p-5 rounded-2xl border border-white/10 bg-[#080a14] space-y-2">
            <span className="text-xs font-mono uppercase text-white/40 block">Freelance Availability</span>
            <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Contract &amp; Fixed-Price Projects</span>
            </div>
            <p className="text-xs text-white/50 pt-1">Quick turnaround · Direct communication · Production grade</p>
          </div>

          {/* Social Profiles */}
          <div className="p-5 rounded-2xl border border-white/10 bg-[#080a14] space-y-3">
            <span className="text-xs font-mono uppercase text-white/40 block">Online Profiles</span>
            <div className="flex flex-col gap-2 text-xs">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] text-white/80 hover:text-white transition-all"
              >
                <FaGithub size={14} />
                <span>github.com/kaushal0123</span>
              </a>
              <a
                href={personalInfo.codeforces}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 hover:text-cyan-300 transition-all font-mono"
              >
                <SiCodeforces size={14} />
                <span>codeforces.com/profile/kaushal12</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] text-white/80 hover:text-white transition-all"
              >
                <FaLinkedin size={14} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Project Inquiry Form */}
        <div className="md:col-span-7 p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#080a14] space-y-6">
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <FaHandshake className="text-purple" />
              Project Inquiry Form
            </h2>
            <p className="text-xs text-white/50">Send your project scope and get a fast response</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono uppercase text-white/50 block mb-1.5">Your Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Sarah Jenkins"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-purple/50 transition-all"
                />
              </div>

              <div>
                <label className="text-xs font-mono uppercase text-white/50 block mb-1.5">Your Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="sarah@company.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-purple/50 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono uppercase text-white/50 block mb-1.5">Project Type</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-purple/50 transition-all cursor-pointer"
                >
                  <option value="Full-Stack Web App (React / Node.js)">Full-Stack Web App (React / Node.js)</option>
                  <option value="Java Spring Boot Backend">Java Spring Boot Backend</option>
                  <option value="Queue Pipeline (RabbitMQ / Redis)">Queue Pipeline (RabbitMQ / Redis)</option>
                  <option value="AI Integration & Automation">AI Integration &amp; Automation</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-mono uppercase text-white/50 block mb-1.5">Budget Range</label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-purple/50 transition-all cursor-pointer"
                >
                  <option value="Flexible / Hourly">Flexible / Hourly</option>
                  <option value="Under $1,000">Under $1,000</option>
                  <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                  <option value="$3,000+">$3,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-mono uppercase text-white/50 block mb-1.5">Project Scope / Summary</label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your product requirements, deadlines, or tech stack needs..."
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-purple/50 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-purple hover:bg-purple/90 text-black text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple/20 cursor-pointer active:scale-95"
            >
              <FaPaperPlane size={11} />
              Submit Project Inquiry via Email
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
