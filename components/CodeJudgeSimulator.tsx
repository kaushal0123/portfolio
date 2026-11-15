"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaCheck, FaRotateRight, FaDocker } from "react-icons/fa6";
import { simulationProblems } from "@/data";

type LangKey = "java" | "cpp" | "python";

export default function CodeJudgeSimulator() {
  const [selectedProbId, setSelectedProbId] = useState("two-sum");
  const [selectedLang, setSelectedLang] = useState<LangKey>("java");
  const [status, setStatus] = useState<"idle" | "queueing" | "executing" | "completed">("idle");
  const [stepIndex, setStepIndex] = useState(0);

  const currentProblem = simulationProblems.find((p) => p.id === selectedProbId) || simulationProblems[0];

  const pipelineSteps = [
    { name: "API Gateway", desc: "JWT Auth & Rate Limit Checked" },
    { name: "RabbitMQ Queue", desc: "Enqueued in submission_jobs" },
    { name: "Docker Sandbox", desc: "Isolated Container Spun (cgroups applied)" },
    { name: "Redis Cache & DB", desc: "Testcases verified & result stored" },
  ];

  const handleRun = () => {
    if (status !== "idle" && status !== "completed") return;
    setStatus("queueing");
    setStepIndex(0);

    const stepInterval = setInterval(() => {
      setStepIndex((prev) => {
        if (prev < 3) {
          return prev + 1;
        } else {
          clearInterval(stepInterval);
          setStatus("completed");
          return 3;
        }
      });
    }, 450);
  };

  const handleReset = () => {
    setStatus("idle");
    setStepIndex(0);
  };

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-[#070913] p-5 md:p-7 shadow-2xl backdrop-blur-xl relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              CodePulse Sandbox Simulator
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple/20 text-purple border border-purple/30">
                Interactive
              </span>
            </h3>
          </div>
          <p className="text-xs text-white/50 mt-0.5">
            Simulate asynchronous microservices code execution pipeline built by Kaushal
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Problem selector */}
          <select
            value={selectedProbId}
            onChange={(e) => {
              setSelectedProbId(e.target.value);
              handleReset();
            }}
            className="text-xs bg-white/[0.05] border border-white/10 text-white rounded-lg px-3 py-1.5 focus:outline-none focus:border-purple/50 cursor-pointer"
          >
            {simulationProblems.map((p) => (
              <option key={p.id} value={p.id} className="bg-neutral-900 text-white">
                {p.title}
              </option>
            ))}
          </select>

          {/* Language selector */}
          <div className="flex rounded-lg bg-white/[0.05] border border-white/10 p-0.5">
            {(["java", "cpp", "python"] as LangKey[]).map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  setSelectedLang(lang);
                  handleReset();
                }}
                className={`text-xs px-2.5 py-1 rounded-md transition-all font-mono uppercase ${
                  selectedLang === lang ? "bg-purple text-black font-semibold shadow-sm" : "text-white/60 hover:text-white"
                }`}
              >
                {lang === "cpp" ? "C++" : lang}
              </button>
            ))}
          </div>

          {/* Action button */}
          <button
            onClick={handleRun}
            disabled={status === "queueing"}
            className={`flex items-center gap-1.5 text-xs font-semibold px-4 py-1.5 rounded-lg transition-all ${
              status === "queueing"
                ? "bg-purple/30 text-white/50 cursor-not-allowed"
                : "bg-emerald-500 hover:bg-emerald-400 text-black shadow-lg shadow-emerald-500/20 active:scale-95"
            }`}
          >
            {status === "queueing" ? (
              <>
                <FaRotateRight className="animate-spin" size={11} />
                Executing...
              </>
            ) : (
              <>
                <FaPlay size={10} />
                Run in Docker
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Grid: Code Editor & Execution Pipeline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-5">
        {/* Code preview window */}
        <div className="lg:col-span-7 flex flex-col rounded-xl border border-white/[0.06] bg-black/40 overflow-hidden font-mono text-xs">
          <div className="flex items-center justify-between px-3.5 py-2 bg-white/[0.03] border-b border-white/[0.05]">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
              <span className="text-[11px] text-white/40 ml-2">
                Solution.{selectedLang === "java" ? "java" : selectedLang === "cpp" ? "cpp" : "py"}
              </span>
            </div>
            <span className="text-[10px] text-white/40">Read-only sandbox preview</span>
          </div>

          <div className="p-3.5 overflow-x-auto text-white/80 leading-relaxed max-h-64 scrollbar-thin">
            <pre className="font-mono">
              <code>{currentProblem.languages[selectedLang]}</code>
            </pre>
          </div>
        </div>

        {/* Execution Pipeline & Real-Time Verdict */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-xl border border-white/[0.06] bg-black/30 p-4">
          <div>
            <span className="text-[11px] font-semibold text-white/50 uppercase tracking-wider block mb-3">
              Asynchronous Execution Flow
            </span>

            <div className="space-y-2.5">
              {pipelineSteps.map((step, idx) => {
                const isPassed = status === "completed" || (status === "queueing" && stepIndex >= idx);
                const isCurrent = status === "queueing" && stepIndex === idx;

                return (
                  <div
                    key={step.name}
                    className={`flex items-start gap-2.5 p-2 rounded-lg border transition-all duration-200 ${
                      isCurrent
                        ? "border-purple bg-purple/10 text-white"
                        : isPassed
                        ? "border-emerald-500/30 bg-emerald-500/5 text-emerald-200"
                        : "border-white/[0.04] bg-white/[0.01] text-white/40"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono mt-0.5 flex-shrink-0 ${
                        isCurrent
                          ? "bg-purple text-black animate-pulse font-bold"
                          : isPassed
                          ? "bg-emerald-500 text-black font-bold"
                          : "bg-white/10 text-white/40"
                      }`}
                    >
                      {isPassed ? <FaCheck size={9} /> : idx + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold">{step.name}</span>
                        {isCurrent && (
                          <span className="text-[10px] text-purple animate-pulse font-mono">processing...</span>
                        )}
                      </div>
                      <p className="text-[10px] opacity-70 truncate">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Verdict Box */}
          <div className="mt-4 pt-3 border-t border-white/[0.06]">
            {status === "completed" ? (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Verdict: {currentProblem.verdict}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-300">{currentProblem.testsPassed} Tests</span>
                </div>
                <div className="flex items-center gap-4 text-[11px] text-white/60 font-mono">
                  <span>
                    ⚡ Runtime: <strong className="text-white">{currentProblem.runtime}</strong>
                  </span>
                  <span>
                    💾 Memory: <strong className="text-white">{currentProblem.memory}</strong>
                  </span>
                </div>
              </motion.div>
            ) : (
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] text-center text-[11px] text-white/40">
                {status === "queueing" ? "Evaluating in Docker Sandbox..." : "Click 'Run in Docker' to test pipeline"}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
