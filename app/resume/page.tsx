"use client";

import { useState } from "react";
import { FaFilePdf, FaDownload, FaArrowUpRightFromSquare, FaPrint, FaEye } from "react-icons/fa6";
import { personalInfo } from "@/data";

export default function ResumePage() {
  const [zoomLevel, setZoomLevel] = useState("FitH");

  return (
    <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 space-y-6">
      {/* Header and Download Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl border border-white/10 bg-[#080a14] shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <FaFilePdf size={18} className="text-red-400" />
            <h1 className="text-xl font-bold text-white tracking-tight">Official Resume</h1>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Verified PDF
            </span>
          </div>
          <p className="text-xs text-white/60">
            Original curriculum vitae of {personalInfo.name} · B.Tech ICT, Dhirubhai Ambani University
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <a
            href="/Kaushal_Kanani_Resume.pdf"
            download="Kaushal_Kanani_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple hover:bg-purple/90 text-black text-xs font-bold transition-all shadow-lg shadow-purple/20 active:scale-95"
          >
            <FaDownload size={12} />
            Download PDF
          </a>

          <a
            href="/Kaushal_Kanani_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-white hover:bg-white/10 text-xs font-medium transition-all"
          >
            <FaArrowUpRightFromSquare size={11} />
            Open Fullscreen
          </a>
        </div>
      </div>

      {/* PDF Document Viewer Container */}
      <div className="w-full rounded-3xl border border-white/10 bg-neutral-900 shadow-2xl overflow-hidden min-h-[750px] relative flex flex-col">
        {/* PDF Top Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-950 border-b border-white/[0.08] text-xs text-white/60">
          <div className="flex items-center gap-2 font-mono text-[11px]">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="ml-2 text-white/70">Kaushal_Kanani_Resume.pdf</span>
          </div>
          <span className="text-[11px] text-white/40">Page 1 of 1 · High Resolution</span>
        </div>

        {/* Embedded PDF View */}
        <div className="flex-1 w-full bg-[#1e1e1e]">
          <object
            data={`/Kaushal_Kanani_Resume.pdf#view=${zoomLevel}`}
            type="application/pdf"
            className="w-full h-[780px] sm:h-[900px] border-none"
          >
            <iframe
              src={`/Kaushal_Kanani_Resume.pdf#view=${zoomLevel}`}
              className="w-full h-[780px] sm:h-[900px] border-none"
              title="Kaushal Kanani Resume"
            >
              <div className="p-8 text-center text-white/70 space-y-4">
                <p>Your browser doesn&apos;t support direct PDF embedding.</p>
                <a
                  href="/Kaushal_Kanani_Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple text-black font-bold text-xs"
                >
                  <FaDownload /> Download Original PDF
                </a>
              </div>
            </iframe>
          </object>
        </div>
      </div>
    </main>
  );
}
