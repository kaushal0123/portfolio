"use client";

import { useState } from "react";
import { FaBookOpen, FaLightbulb, FaCheck } from "react-icons/fa6";
import { technicalNotes } from "@/data";

export default function NotesPage() {
  const [selectedSlug, setSelectedSlug] = useState(technicalNotes[0].slug);

  const activeNote = technicalNotes.find((n) => n.slug === selectedSlug) || technicalNotes[0];

  return (
    <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple/10 border border-purple/20 text-xs text-purple font-mono">
          <span>// ENGINEERING NOTES &amp; ARCHITECTURE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Technical Writing &amp; System Deep Dives
        </h1>
        <p className="text-sm text-white/60 max-w-2xl leading-relaxed">
          Detailed thoughts on distributed systems, asynchronous message queues, AI developer tooling, and constant-factor optimizations in competitive programming.
        </p>
      </div>

      {/* Grid: Article Selector & Active Reader */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Article List */}
        <div className="lg:col-span-5 space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-white/40 block mb-1">Select Note:</span>
          {technicalNotes.map((note) => {
            const isSelected = note.slug === selectedSlug;
            return (
              <button
                key={note.slug}
                onClick={() => setSelectedSlug(note.slug)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 block ${
                  isSelected
                    ? "bg-purple/10 border-purple text-white shadow-md shadow-purple/10"
                    : "bg-white/[0.02] border-white/[0.06] text-white/70 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                <div className="flex items-center justify-between text-[11px] mb-1.5">
                  <span className="font-mono text-purple uppercase font-semibold">{note.category}</span>
                  <span className="text-white/40">{note.readingTime}</span>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-white leading-snug">{note.title}</h3>
                <p className="text-[11px] text-white/50 line-clamp-2 mt-1">{note.summary}</p>
              </button>
            );
          })}
        </div>

        {/* Note Reader Window */}
        <article className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#080a14] space-y-6">
          <div className="space-y-2 pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-2 text-xs font-mono text-purple">
              <span className="px-2 py-0.5 rounded bg-purple/10 border border-purple/20">{activeNote.category}</span>
              <span>· {activeNote.date}</span>
              <span>· {activeNote.readingTime}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">{activeNote.title}</h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-white/80 leading-relaxed">
            <p className="font-medium text-white/90">{activeNote.summary}</p>

            <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] space-y-2.5">
              <span className="text-xs font-mono uppercase text-emerald-400 font-bold flex items-center gap-1.5">
                <FaLightbulb size={12} />
                Key Architectural Takeaways:
              </span>
              <ul className="space-y-2">
                {activeNote.takeaways.map((t, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-white/70">
                    <FaCheck size={11} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs text-white/60 pt-2">
              Written from firsthand engineering experience building CodePulse, PULL-PANDA, and competing on Codeforces.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
