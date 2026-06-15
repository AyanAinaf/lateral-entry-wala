/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface SyllabusDiagramProps {
  questionText: string;
  subjectCode: string;
}

export const SyllabusDiagram: React.FC<SyllabusDiagramProps> = ({ questionText, subjectCode }) => {
  const textLower = questionText.toLowerCase();

  const renderDiagramContent = () => {

  // 1) BEC401: Fig.Q8(a) Current loop and filament
  if (subjectCode === 'BEC401' && (textLower.includes('fig.q8(a)') || textLower.includes('square loop') || textLower.includes('vertices at'))) {
    return (
      <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
        <span className="text-xs font-mono font-bold text-indigo-600 block mb-2 uppercase tracking-wide">
          Syllabus Study Aid: Fig.Q8(a) Coordinate Representation
        </span>
        <div className="max-w-md mx-auto">
          <svg viewBox="0 0 400 300" className="w-full h-auto bg-white border border-slate-150 rounded-lg shadow-xs">
            {/* Grid & Axes */}
            <line x1="50" y1="230" x2="350" y2="230" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3" /> {/* X axis helper */}
            <line x1="100" y1="50" x2="100" y2="270" stroke="#64748b" strokeWidth="2" /> {/* Y axis: Infinite Line */}
            <line x1="50" y1="200" x2="350" y2="200" stroke="#94a3b8" strokeWidth="1.5" /> {/* X-axis */}
            
            {/* Infinite Line Info */}
            <text x="115" y="65" className="text-xs font-mono font-bold fill-indigo-600">Y-Axis (Infinite Filament)</text>
            <path d="M 100 80 L 100 240" stroke="#4f46e5" strokeWidth="3" />
            {/* Filament Current Arrow */}
            <path d="M 100 130 L 100 110" stroke="#4f46e5" strokeWidth="3" markerEnd="url(#arrow-blue)" />
            <text x="75" y="125" className="text-xs font-mono font-bold fill-indigo-600">I₁ = 15 A</text>

            {/* Loop Coordinates */}
            {/* Vertices in Cartesian plane mapped to 2D view:
                Vertices: A(1,0,0) -> mapped to (150, 200), B(1,2,0) -> mapped to (150, 100)
                C(3,2,0) -> mapped to (270, 100), D(3,0,0) -> mapped to (270, 200)
            */}
            {/* Draw Loop */}
            <rect x="150" y="100" width="120" height="100" fill="none" stroke="#f43f5e" strokeWidth="2.5" rx="3" />
            
            {/* Loop Current Arrows */}
            {/* Clockwise or Counter-Clockwise */}
            {/* Let's show clockwise circulating loop current */}
            <path d="M 210 100 L 220 100" stroke="#f43f5e" strokeWidth="2" />
            <path d="M 270 150 L 270 160" stroke="#f43f5e" strokeWidth="2" />
            <path d="M 210 200 L 200 200" stroke="#f43f5e" strokeWidth="2" />
            <path d="M 150 150 L 150 140" stroke="#f43f5e" strokeWidth="2" />
            
            {/* Markers */}
            <polygon points="220,97 225,100 220,103" fill="#f43f5e" />
            <polygon points="267,160 270,165 273,160" fill="#f43f5e" />
            <polygon points="200,197 195,200 200,203" fill="#f43f5e" />
            <polygon points="147,140 150,135 153,140" fill="#f43f5e" />

            <text x="210" y="145" className="text-xs font-mono font-bold fill-rose-600">I₂ = 2 mA</text>

            {/* Coordinate labels */}
            <circle cx="150" cy="200" r="4" fill="#1e293b" />
            <text x="145" y="218" className="text-[10px] font-mono fill-slate-800 font-bold">A(1,0,0)</text>

            <circle cx="150" cy="100" r="4" fill="#1e293b" />
            <text x="145" y="90" className="text-[10px] font-mono fill-slate-800 font-bold">B(1,2,0)</text>

            <circle cx="270" cy="100" r="4" fill="#1e293b" />
            <text x="260" y="90" className="text-[10px] font-mono fill-slate-800 font-bold">C(3,2,0)</text>

            <circle cx="270" cy="200" r="4" fill="#1e293b" />
            <text x="260" y="218" className="text-[10px] font-mono fill-slate-800 font-bold">D(3,0,0)</text>

            {/* Distance annotations */}
            <line x1="100" y1="210" x2="150" y2="210" stroke="#475569" strokeWidth="1" strokeDasharray="2" />
            <text x="120" y="222" className="text-[10px] font-mono fill-slate-600 font-semibold" textAnchor="middle">x=1</text>

            <line x1="100" y1="235" x2="270" y2="235" stroke="#475569" strokeWidth="1" strokeDasharray="2" />
            <text x="185" y="247" className="text-[10px] font-mono fill-slate-600 font-semibold" textAnchor="middle">x=3</text>

            <line x1="290" y1="100" x2="290" y2="200" stroke="#475569" strokeWidth="1" strokeDasharray="2" />
            <text x="310" y="155" className="text-[10px] font-mono fill-slate-600 font-semibold">y=2</text>
          </svg>
          <p className="text-[11px] text-slate-500 mt-2 text-center">
            Coordinate layout for calculating total electromagnetic force on the loop using static magnetic formula.
          </p>
        </div>
      </div>
    );
  }

  // 2) BEC402: Superheterodyne Receiver
  if (subjectCode === 'BEC402' && (textLower.includes('superheterodyne') || textLower.includes('super heterodyne') || textLower.includes('receiver'))) {
    return (
      <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
        <span className="text-xs font-mono font-bold text-indigo-600 block mb-2 uppercase tracking-wide">
          Syllabus Block Diagram: Superheterodyne Receiver
        </span>
        <div className="overflow-x-auto w-full">
          <div className="min-w-[640px] p-2 bg-white border border-slate-150 rounded-lg shadow-xs">
            <svg viewBox="0 0 740 200" className="w-full h-auto">
              {/* Antenna */}
              <path d="M 30 110 L 30 70 L 20 50 M 30 70 L 40 50 M 30 60 L 20 60 M 30 60 L 40 60" stroke="#475569" strokeWidth="2" />
              <line x1="30" y1="110" x2="60" y2="110" stroke="#475569" strokeWidth="1.5" />
              <polygon points="60,110 54,107 54,113" fill="#475569" />

              {/* RF Stage */}
              <rect x="60" y="85" width="80" height="50" fill="#f8fafc" stroke="#64748b" strokeWidth="2" rx="4" />
              <text x="100" y="110" className="text-xs font-sans font-bold fill-slate-800" textAnchor="middle">RF Amp</text>
              <text x="100" y="123" className="text-[10px] font-mono fill-indigo-600" textAnchor="middle">f_RF</text>

              <line x1="140" y1="110" x2="175" y2="110" stroke="#64748b" strokeWidth="1.5" />
              <polygon points="175,110 169,107 169,113" fill="#64748b" />

              {/* Mixer */}
              <circle cx="200" cy="110" r="25" fill="#f1f5f9" stroke="#4f46e5" strokeWidth="2.5" />
              <text x="200" y="114" className="text-sm font-sans font-extrabold fill-indigo-700" textAnchor="middle">X</text>
              <text x="200" y="75" className="text-[10px] font-sans font-semibold fill-indigo-600" textAnchor="middle">Mixer</text>

              <line x1="225" y1="110" x2="260" y2="110" stroke="#64748b" strokeWidth="1.5" />
              <polygon points="260,110 254,107 254,113" fill="#64748b" />

              {/* Local Oscillator (LO) */}
              <rect x="160" y="150" width="80" height="40" fill="#f8fafc" stroke="#4f46e5" strokeWidth="1.5" rx="4" strokeDasharray="3,3" />
              <text x="200" y="170" className="text-[10px] font-sans font-bold fill-indigo-800" textAnchor="middle">Local Osc</text>
              <text x="200" y="182" className="text-[9px] font-mono fill-indigo-500" textAnchor="middle">f_LO (f_RF+f_IF)</text>
              <line x1="200" y1="150" x2="200" y2="135" stroke="#4f46e5" strokeWidth="1.5" />
              <polygon points="200,135 197,141 203,141" fill="#4f46e5" />

              {/* IF Amplifier */}
              <rect x="260" y="85" width="90" height="50" fill="#f8fafc" stroke="#64748b" strokeWidth="2" rx="4" />
              <text x="305" y="108" className="text-xs font-sans font-bold fill-slate-800" textAnchor="middle">IF Amp</text>
              <text x="305" y="122" className="text-[9px] font-mono fill-slate-500" textAnchor="middle">Fine Selectivity</text>
              <text x="305" y="131" className="text-[9px] font-mono fill-indigo-600" textAnchor="middle">455 kHz / 10.7MHz</text>

              <line x1="350" y1="110" x2="385" y2="110" stroke="#64748b" strokeWidth="1.5" />
              <polygon points="385,110 379,107 379,113" fill="#64748b" />

              {/* Detector / Demodulator */}
              <rect x="385" y="85" width="90" height="50" fill="#f8fafc" stroke="#64748b" strokeWidth="2" rx="4" />
              <text x="430" y="110" className="text-xs font-sans font-bold fill-slate-800" textAnchor="middle">Detector</text>
              <text x="430" y="123" className="text-[9px] font-mono fill-slate-500" textAnchor="middle">Demodulator</text>

              <line x1="475" y1="110" x2="510" y2="110" stroke="#64748b" strokeWidth="1.5" />
              <polygon points="510,110 504,107 504,113" fill="#64748b" />

              {/* Audio Amplifier */}
              <rect x="510" y="85" width="90" height="50" fill="#f8fafc" stroke="#64748b" strokeWidth="2" rx="4" />
              <text x="555" y="110" className="text-xs font-sans font-bold fill-slate-800" textAnchor="middle">Audio Amp</text>
              <text x="555" y="123" className="text-[9px] font-mono fill-slate-500" textAnchor="middle">Power Boost</text>

              <line x1="600" y1="110" x2="635" y2="110" stroke="#64748b" strokeWidth="1.5" />
              <polygon points="635,110 629,107 629,113" fill="#64748b" />

              {/* Speaker */}
              <path d="M 635 110 L 650 110 M 650 95 L 655 95 L 670 80 L 670 140 L 655 125 L 650 125 Z" fill="#64748b" stroke="#334155" strokeWidth="2" />
              {/* Sound waves icon */}
              <path d="M 680 95 A 15 15 0 0 1 680 125 M 687 90 A 25 25 0 0 1 687 130" stroke="#64748b" strokeWidth="1.5" fill="none" />
              <text x="660" y="165" className="text-[10px] font-sans font-semibold fill-slate-500" textAnchor="middle">Speaker</text>
            </svg>
          </div>
          <p className="text-[11px] text-slate-500 mt-2 text-center">
            The intermediate step to a fixed IF frequency (typically 455 kHz for AM, 10.7 MHz for FM) makes tuning much simpler and amplification very stable.
          </p>
        </div>
      </div>
    );
  }

  // 3) BEC402: Phase-Locked Loop (PLL)
  if (subjectCode === 'BEC402' && (textLower.includes('pll') || textLower.includes('phase locked loop') || textLower.includes('phase-locked loop'))) {
    return (
      <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
        <span className="text-xs font-mono font-bold text-indigo-600 block mb-2 uppercase tracking-wide">
          Syllabus Block Diagram: Phase-Locked Loop (PLL)
        </span>
        <div className="max-w-xl mx-auto">
          <svg viewBox="0 0 500 220" className="w-full h-auto bg-white border border-slate-150 rounded-lg shadow-xs">
            {/* Input Signal */}
            <text x="15" y="75" className="text-[10px] font-mono fill-slate-500 font-bold">f_in(t)</text>
            <text x="15" y="87" className="text-[9px] font-mono fill-indigo-600">Input Wave</text>
            <line x1="15" y1="100" x2="65" y2="100" stroke="#64748b" strokeWidth="1.5" />
            <polygon points="65,100 59,97 59,103" fill="#64748b" />

            {/* Phase Detector */}
            <rect x="65" y="75" width="90" height="50" fill="#f8fafc" stroke="#4f46e5" strokeWidth="2" rx="4" />
            <text x="110" y="98" className="text-xs font-sans font-bold fill-slate-800" textAnchor="middle">Phase Det.</text>
            <text x="110" y="112" className="text-[9px] font-mono fill-slate-500" textAnchor="middle">(Multiplier)</text>

            <line x1="155" y1="100" x2="205" y2="100" stroke="#64748b" strokeWidth="1.5" />
            <polygon points="205,100 199,97 199,103" fill="#64748b" />

            {/* Error signal label */}
            <text x="180" y="90" className="text-[8px] font-mono fill-rose-500">v_e(t)</text>

            {/* Loop Filter (LPF) */}
            <rect x="205" y="75" width="100" height="50" fill="#f8fafc" stroke="#64748b" strokeWidth="2" rx="4" />
            <text x="255" y="98" className="text-xs font-sans font-bold fill-slate-800" textAnchor="middle">Low-Pass Filter</text>
            <text x="255" y="112" className="text-[9px] font-sans fill-slate-500" textAnchor="middle">Loop Filter</text>

            {/* Path to outputs */}
            <line x1="305" y1="100" x2="355" y2="100" stroke="#64748b" strokeWidth="1.5" />
            <polygon points="355,100 349,97 349,103" fill="#64748b" />

            {/* Feedback branching node */}
            <circle cx="340" cy="100" r="3" fill="#475569" />
            <line x1="340" y1="100" x2="340" y2="170" stroke="#4f46e5" strokeWidth="1.5" />
            <line x1="340" y1="170" x2="295" y2="170" stroke="#4f46e5" strokeWidth="1.5" />
            <polygon points="295,170 301,167 301,173" fill="#4f46e5" />

            {/* Demodulated raw output */}
            <text x="390" y="88" className="text-[10px] font-mono fill-slate-800 font-bold">Demod_Out</text>
            <text x="390" y="100" className="text-[8px] text-indigo-600 font-mono">FM Output / v_vco(t)</text>

            {/* VCO block */}
            <rect x="185" y="145" width="110" height="50" fill="#f8fafc" stroke="#4f46e5" strokeWidth="2" rx="4" />
            <text x="240" y="168" className="text-xs font-sans font-bold fill-slate-800" textAnchor="middle">VCO</text>
            <text x="240" y="182" className="text-[9px] font-sans fill-indigo-600" textAnchor="middle">Voltage Ctrl. Osc</text>

            {/* VCO to Phase Detector loop */}
            <line x1="185" y1="170" x2="110" y2="170" stroke="#4f46e5" strokeWidth="1.5" />
            <line x1="110" y1="170" x2="110" y2="125" stroke="#4f46e5" strokeWidth="1.5" />
            <polygon points="110,125 107,131 113,131" fill="#4f46e5" />
            <text x="115" y="152" className="text-[8px] font-mono fill-indigo-500">f_vco(t)</text>
          </svg>
          <p className="text-[11px] text-slate-500 mt-2 text-center">
            A basic closed loop negative feedback controller tracking incoming phase. Widely used for noise-immune FM demodulation.
          </p>
        </div>
      </div>
    );
  }

  // 4) BEC402: AM Diode Detector
  if (subjectCode === 'BEC402' && (textLower.includes('diode detector') || textLower.includes('envelope detector') || textLower.includes('demodulator using the diode'))) {
    return (
      <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
        <span className="text-xs font-mono font-bold text-indigo-600 block mb-2 uppercase tracking-wide">
          Syllabus Schematic: Diode Envelope Detector
        </span>
        <div className="max-w-xl mx-auto">
          <svg viewBox="0 0 450 200" className="w-full h-auto bg-white border border-slate-150 rounded-lg shadow-xs">
            {/* Input terminal */}
            <circle cx="50" cy="50" r="3" fill="#1e293b" />
            <text x="20" y="35" className="text-[10px] font-mono fill-slate-600 font-bold">AM Input</text>
            <line x1="50" y1="50" x2="100" y2="50" stroke="#475569" strokeWidth="1.5" />

            {/* Diode Symbol */}
            {/* Horizontal line at y=50 */}
            <line x1="100" y1="50" x2="120" y2="50" stroke="#4f46e5" strokeWidth="2" />
            {/* Triangle for anode */}
            <polygon points="120,40 120,60 140,50" fill="#4f46e5" stroke="#4f46e5" strokeWidth="2" />
            {/* Vertical cathode line */}
            <line x1="140" y1="38" x2="140" y2="62" stroke="#4f46e5" strokeWidth="2.5" />
            <line x1="140" y1="50" x2="200" y2="50" stroke="#4f46e5" strokeWidth="2" />
            <text x="130" y="30" className="text-xs font-bold fill-indigo-600 font-mono">D_1 (Diode)</text>

            <circle cx="200" cy="50" r="4" fill="#475569" />

            {/* Parallel Resistor */}
            <line x1="200" y1="50" x2="200" y2="70" stroke="#334155" strokeWidth="1.5" />
            {/* Resistor zigzag */}
            <path d="M 200 70 L 193 75 L 207 82 L 193 89 L 207 96 L 193 103 L 207 110 L 200 115" fill="none" stroke="#334155" strokeWidth="1.5" />
            <line x1="200" y1="115" x2="200" y2="150" stroke="#334155" strokeWidth="1.5" />
            <text x="215" y="95" className="text-xs font-mono font-bold fill-slate-800">R</text>

            <line x1="200" y1="50" x2="300" y2="50" stroke="#475569" strokeWidth="1.5" />
            <circle cx="300" cy="50" r="4" fill="#475569" />

            {/* Parallel Capacitor */}
            <line x1="300" y1="50" x2="300" y2="85" stroke="#334155" strokeWidth="1.5" />
            {/* Capacitor plates */}
            <line x1="285" y1="85" x2="315" y2="85" stroke="#334155" strokeWidth="2" />
            <line x1="285" y1="93" x2="315" y2="93" stroke="#334155" strokeWidth="2" />
            <line x1="300" y1="93" x2="300" y2="150" stroke="#334155" strokeWidth="1.5" />
            <text x="315" y="93" className="text-xs font-mono font-bold fill-slate-800">C</text>

            {/* Ground Line */}
            <line x1="50" y1="150" x2="380" y2="150" stroke="#475569" strokeWidth="1.5" />
            {/* Ground symbol hash marks */}
            <line x1="50" y1="150" x2="50" y2="160" stroke="#475569" strokeWidth="1.5" />
            <line x1="45" y1="160" x2="55" y2="160" stroke="#475569" strokeWidth="1.5" />
            <line x1="48" y1="163" x2="52" y2="163" stroke="#475569" strokeWidth="1.5" />

            {/* Output terminal */}
            <line x1="300" y1="50" x2="380" y2="50" stroke="#475569" strokeWidth="1.5" />
            <circle cx="380" cy="50" r="3" fill="#1e293b" />
            <text x="365" y="35" className="text-[10px] font-mono fill-indigo-600 font-bold">Audio Output</text>
            <text x="375" y="110" className="text-[9px] font-sans fill-slate-500">RC Time Constant:{"\n"}1/f_c &lt;&lt; RC &lt;&lt; 1/f_m</text>
          </svg>
          <p className="text-[11px] text-slate-500 mt-2 text-center">
            An AM envelope detector rectifies the High Frequency RF wave, leaving the RC low-pass filter to extract the original audio.
          </p>
        </div>
      </div>
    );
  }

  // 5) BEC402: TDM (Time Division Multiplexing)
  if (subjectCode === 'BEC402' && (textLower.includes('tdm') || textLower.includes('multiplexing') || textLower.includes('time division'))) {
    return (
      <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
        <span className="text-xs font-mono font-bold text-indigo-600 block mb-2 uppercase tracking-wide">
          Syllabus Study Aid: Time Division Multiplexing (TDM)
        </span>
        <div className="max-w-xl mx-auto">
          <svg viewBox="0 0 540 220" className="w-full h-auto bg-white border border-slate-150 rounded-lg shadow-xs">
            {/* Incoming Channels */}
            <text x="20" y="45" className="text-[9px] font-mono fill-slate-600">CH 1</text>
            <line x1="50" y1="40" x2="110" y2="40" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="110" cy="40" r="4" fill="#38bdf8" />

            <text x="20" y="95" className="text-[9px] font-mono fill-slate-600">CH 2</text>
            <line x1="50" y1="90" x2="110" y2="90" stroke="#f43f5e" strokeWidth="2" />
            <circle cx="110" cy="90" r="4" fill="#f43f5e" />

            <text x="20" y="145" className="text-[9px] font-mono fill-slate-600">CH 3</text>
            <line x1="50" y1="140" x2="110" y2="140" stroke="#10b981" strokeWidth="2" />
            <circle cx="110" cy="140" r="4" fill="#10b981" />

            {/* Commutator rotating contact arm */}
            <circle cx="140" cy="90" r="5" fill="#475569" />
            {/* Rotating pointer pointing to active channel */}
            <line x1="140" y1="90" x2="110" y2="40" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 160 55 A 40 40 0 0 1 160 125" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3" fill="none" />
            <text x="130" y="175" className="text-[9px] font-sans font-bold fill-indigo-600">Commutator (Switching)</text>

            <line x1="145" y1="90" x2="250" y2="90" stroke="#475569" strokeWidth="2" />
            <text x="180" y="80" className="text-[9px] font-mono fill-slate-500">Shared Channel</text>

            {/* De-commutator contact arm */}
            <circle cx="280" cy="90" r="5" fill="#475569" stroke="#1e293b" />
            <line x1="280" y1="90" x2="310" y2="40" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 260 55 A 40 40 0 0 1 260 125" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3" fill="none" />
            <text x="280" y="175" className="text-[9px] font-sans font-bold fill-indigo-600">De-Commutator (Receiver)</text>

            {/* Filtered Demultiplexed Outputs */}
            <circle cx="310" cy="40" r="4" fill="#38bdf8" />
            <line x1="310" y1="40" x2="380" y2="40" stroke="#38bdf8" strokeWidth="2" />
            <text x="390" y="45" className="text-[9px] font-mono fill-slate-600">OUT 1</text>

            <circle cx="310" cy="90" r="4" fill="#f43f5e" />
            <line x1="310" y1="90" x2="380" y2="90" stroke="#f43f5e" strokeWidth="2" />
            <text x="390" y="95" className="text-[9px] font-mono fill-slate-600">OUT 2</text>

            <circle cx="310" cy="140" r="4" fill="#10b981" />
            <line x1="310" y1="140" x2="380" y2="140" stroke="#10b981" strokeWidth="2" />
            <text x="390" y="145" className="text-[9px] font-mono fill-slate-600">OUT 3</text>

            {/* Clock synch block */}
            <rect x="180" y="125" width="70" height="30" fill="#f8fafc" stroke="#4f46e5" strokeWidth="1" strokeDasharray="2" rx="3" />
            <text x="215" y="143" className="text-[8px] font-sans font-bold fill-indigo-700" textAnchor="middle">Sync clock</text>
            <path d="M 140 95 L 140 135 L 180 135" stroke="#4f46e5" strokeWidth="1" strokeDasharray="1" fill="none" />
            <path d="M 280 95 L 280 135 L 250 135" stroke="#4f46e5" strokeWidth="1" strokeDasharray="1" fill="none" />
          </svg>
          <p className="text-[11px] text-slate-500 mt-2 text-center">
            Multiple signals are sampled sequentially at the Nyquist rate and multiplexed into a single digital link by synchronized mechanical or solid-state switches.
          </p>
        </div>
      </div>
    );
  }

  // 6) BEC402: PCM (Pulse Code Modulation)
  if (subjectCode === 'BEC402' && (textLower.includes('pcm') || textLower.includes('pulse code modulation') || textLower.includes('quantize'))) {
    return (
      <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
        <span className="text-xs font-mono font-bold text-indigo-600 block mb-2 uppercase tracking-wide">
          Syllabus Block Diagram: PCM Transmitter
        </span>
        <div className="overflow-x-auto w-full">
          <div className="min-w-[580px] p-2 bg-white border border-slate-150 rounded-lg shadow-xs">
            <svg viewBox="0 0 620 160" className="w-full h-auto">
              {/* Analog Input */}
              <text x="15" y="65" className="text-[9px] font-mono fill-slate-500 font-bold">Analog Input</text>
              <line x1="15" y1="80" x2="65" y2="80" stroke="#64748b" strokeWidth="1.5" />
              <polygon points="65,80 59,77 59,83" fill="#64748b" />

              {/* LPF */}
              <rect x="65" y="55" width="90" height="50" fill="#f8fafc" stroke="#64748b" strokeWidth="2" rx="4" />
              <text x="110" y="78" className="text-xs font-sans font-bold fill-slate-800" textAnchor="middle">Anti-Alias LPF</text>
              <text x="110" y="92" className="text-[9px] font-sans fill-slate-500" textAnchor="middle">Bandlimits f_m</text>

              <line x1="155" y1="80" x2="200" y2="80" stroke="#64748b" strokeWidth="1.5" />
              <polygon points="200,80 194,77 194,83" fill="#64748b" />

              {/* Sampler */}
              <rect x="200" y="55" width="90" height="50" fill="#f8fafc" stroke="#4f46e5" strokeWidth="2" rx="4" />
              <text x="245" y="78" className="text-xs font-sans font-bold fill-slate-800" textAnchor="middle">Sampler</text>
              <text x="245" y="92" className="text-[9px] font-sans fill-indigo-600" textAnchor="middle">f_s ≥ 2f_max (PAM)</text>

              <line x1="290" y1="80" x2="335" y2="80" stroke="#64748b" strokeWidth="1.5" />
              <polygon points="335,80 329,77 329,83" fill="#64748b" />

              {/* Quantizer */}
              <rect x="335" y="55" width="95" height="50" fill="#f8fafc" stroke="#64748b" strokeWidth="2" rx="4" />
              <text x="382" y="78" className="text-xs font-sans font-bold fill-slate-800" textAnchor="middle">Quantizer</text>
              <text x="382" y="92" className="text-[9px] font-sans fill-slate-500" textAnchor="middle">R-bit levels (L=2^R)</text>

              <line x1="430" y1="80" x2="475" y2="80" stroke="#64748b" strokeWidth="1.5" />
              <polygon points="475,80 469,77 469,83" fill="#64748b" />

              {/* Encoder */}
              <rect x="475" y="55" width="90" height="50" fill="#f8fafc" stroke="#4f46e5" strokeWidth="2" rx="4" />
              <text x="520" y="78" className="text-xs font-sans font-bold fill-slate-800" textAnchor="middle">Encoder</text>
              <text x="520" y="92" className="text-[9px] font-sans fill-indigo-600" textAnchor="middle">Converts to Binary</text>

              {/* Outputs */}
              <line x1="565" y1="80" x2="610" y2="80" stroke="#4f46e5" strokeWidth="2" />
              <polygon points="610,80 604,77 604,83" fill="#4f46e5" />
              <text x="600" y="65" className="text-[9px] font-mono fill-indigo-600 font-bold" textAnchor="end">Digital Bitstream</text>
            </svg>
          </div>
          <p className="text-[11px] text-slate-500 mt-2 text-center">
            PCM converts a continuous analog voltage into a digital representation via three fundamental steps: sampling, quantization (levels mapping), and binary encoding.
          </p>
        </div>
      </div>
    );
  }

  // 7) BEC402: Gaussian PDF curve
  if (subjectCode === 'BEC402' && (textLower.includes('gaussian distribution') || textLower.includes('gaussian pdf') || textLower.includes('probability density function of gaussian'))) {
    return (
      <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
        <span className="text-xs font-mono font-bold text-indigo-600 block mb-2 uppercase tracking-wide">
          Syllabus Visual Aid: Gaussian PDF Bell Curve
        </span>
        <div className="max-w-md mx-auto">
          <svg viewBox="0 0 400 240" className="w-full h-auto bg-white border border-slate-150 rounded-lg shadow-xs">
            {/* Grid helper */}
            <line x1="50" y1="180" x2="350" y2="180" stroke="#cbd5e1" strokeWidth="1.5" /> {/* X Axis */}
            <line x1="200" y1="40" x2="200" y2="190" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="2" /> {/* Center line mean */}

            {/* Bell shape curve */}
            {/* Symmetrical path representing Gaussian normal curve centered at x=200, peak at y=50 */}
            <path d="M 50 180 C 120 180, 140 50, 200 50 C 260 50, 280 180, 350 180" fill="none" stroke="#4f46e5" strokeWidth="3" />
            <path d="M 50 180 C 120 180, 140 50, 200 50 C 260 50, 280 180, 350 180 Z" fill="#e0e7ff" opacity="0.3" />

            {/* Mean marker */}
            <circle cx="200" cy="50" r="4" fill="#4f46e5" />
            <text x="200" y="35" className="text-xs font-mono font-bold fill-indigo-700" textAnchor="middle">Peak at Mean (μ)</text>

            {/* Annotate variance / standard dev */}
            <line x1="160" y1="110" x2="240" y2="110" stroke="#f43f5e" strokeWidth="1.5" markerStart="url(#double)" markerEnd="url(#double)" />
            <line x1="160" y1="105" x2="160" y2="180" stroke="#f43f5e" strokeWidth="1" strokeDasharray="2" />
            <line x1="240" y1="105" x2="240" y2="180" stroke="#f43f5e" strokeWidth="1" strokeDasharray="2" />
            <text x="200" y="103" className="text-[10px] font-mono font-bold fill-rose-600" textAnchor="middle">±1 Standard Dev (σ)</text>

            <text x="200" y="195" className="text-xs font-bold fill-slate-800" textAnchor="middle">Mean μ</text>
            <text x="160" y="195" className="text-[10px] font-mono fill-slate-500" textAnchor="middle">μ - σ</text>
            <text x="240" y="195" className="text-[10px] font-mono fill-slate-500" textAnchor="middle">μ + σ</text>

            {/* General Formula */}
            <rect x="250" y="55" width="120" height="40" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" rx="3" />
            <text x="310" y="70" className="text-[8px] font-mono fill-slate-700 font-bold" textAnchor="middle">f(x) = [1/√(2πσ²)] * e^...</text>
            <text x="310" y="85" className="text-[8px] font-mono fill-slate-500" textAnchor="middle">Total Area under Curve = 1</text>
          </svg>
          <p className="text-[11px] text-slate-500 mt-2 text-center">
            Mathematical representation of Gaussian Probability Density Function (PDF) curve used to model random noise.
          </p>
        </div>
      </div>
    );
  }

  // 8) BEC402: Line Coding Waveforms
  if (subjectCode === 'BEC402' && (textLower.includes('01101001') || textLower.includes('line code waveforms') || textLower.includes('unipolar nrz'))) {
    return (
      <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
        <span className="text-xs font-mono font-bold text-indigo-600 block mb-2 uppercase tracking-wide">
          Syllabus Plotted Waveform: Line Coding for data stream [0, 1, 1, 0, 1, 0, 0, 1]
        </span>
        <div className="overflow-x-auto w-full">
          <div className="min-w-[600px] p-2 bg-white border border-slate-150 rounded-lg shadow-xs">
            <svg viewBox="0 0 540 300" className="w-full h-auto">
              {/* Bit Headers */}
              {/* 8 slots of width 50, starting at x=100.
                  Bits: 0, 1, 1, 0, 1, 0, 0, 1
              */}
              {['0', '1', '1', '0', '1', '0', '0', '1'].map((bit, idx) => (
                <g key={idx}>
                  <rect x={100 + idx * 50} y="10" width="50" height="20" fill="#f8fafc" stroke="#f1f5f9" />
                  <text x={125 + idx * 50} y="24" className="text-xs font-mono font-bold fill-slate-800" textAnchor="middle">{bit}</text>
                  {/* Grid divisions */}
                  <line x1={100 + idx * 50} y1="30" x2={100 + idx * 50} y2="290" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2" />
                </g>
              ))}
              <line x1="500" y1="30" x2="500" y2="290" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2" />

              {/* 1. Unipolar NRZ */}
              {/* Bits: 0, 1, 1, 0, 1, 0, 0, 1 -> 0=0V, 1=+V */}
              <text x="10" y="65" className="text-[10px] font-mono font-bold fill-indigo-600">Unipolar NRZ</text>
              <line x1="100" y1="80" x2="500" y2="80" stroke="#cbd5e1" strokeWidth="1" /> {/* Base line */}
              <path d="M 100 80 L 150 80 L 150 50 L 250 50 L 250 80 L 300 80 L 300 50 L 350 50 L 350 80 L 450 80 L 450 50 L 500 50" fill="none" stroke="#4f46e5" strokeWidth="2.5" />

              {/* 2. Polar NRZ */}
              {/* Bits: 0, 1, 1, 0, 1, 0, 0, 1 -> 0=-V, 1=+V */}
              <text x="10" y="125" className="text-[10px] font-mono font-bold fill-indigo-600">Polar NRZ</text>
              <line x1="100" y1="140" x2="500" y2="140" stroke="#cbd5e1" strokeWidth="1" /> {/* Base line */}
              <path d="M 100 155 L 149 155 L 149 125 L 249 125 L 249 155 L 299 155 L 299 125 L 349 125 L 349 155 L 449 155 L 449 125 L 500 125" fill="none" stroke="#0891b2" strokeWidth="2.5" />

              {/* 3. Unipolar RZ */}
              {/* Returns to zero halfway through bit period for high '1's */}
              <text x="10" y="185" className="text-[10px] font-mono font-bold fill-indigo-600">Unipolar RZ</text>
              <line x1="100" y1="200" x2="500" y2="200" stroke="#cbd5e1" strokeWidth="1" /> {/* Base line */}
              <path d="M 100 200 L 150 200 L 150 175 L 175 175 L 175 200 L 200 200 L 200 175 L 225 175 L 225 200 L 300 200 L 300 175 L 325 175 L 325 200 L 450 200 L 450 175 L 475 175 L 475 200 L 500 200" fill="none" stroke="#10b981" strokeWidth="2.5" />

              {/* 4. Manchester */}
              {/* 0 = positive-to-negative transition, 1 = negative-to-positive transition */}
              <text x="10" y="245" className="text-[10px] font-mono font-bold fill-indigo-600">Manchester</text>
              <line x1="100" y1="260" x2="500" y2="260" stroke="#cbd5e1" strokeWidth="1" /> {/* Base line */}
              <path d="M 100 245 L 125 245 L 125 275 L 150 275 L 150 275 L 150 275 L 150 275 L 150 275 L 150 275 L 150 275 L 150 275 L 150 275 L 150 275 L 150 275 M 150 275 L 175 275 L 175 245 L 200 245 M 200 275 L 225 275 L 225 245 L 250 245 M 250 245 L 275 245 L 275 275 L 300 275 M 300 275 L 325 275 L 325 245 L 350 245 M 350 245 L 375 245 L 375 275 L 400 275 M 400 245 L 425 245 L 425 275 L 450 275 M 450 275 L 475 275 L 475 245 L 500 245" fill="none" stroke="#f43f5e" strokeWidth="2.5" />
            </svg>
          </div>
          <p className="text-[11px] text-slate-500 mt-2 text-center">
            Standard electrical representations for digital waveforms. Base line (0V) is shown in light gray.
          </p>
        </div>
      </div>
    );
  }

  // 9) BEC402: Eye Diagram
  if (subjectCode === 'BEC402' && (textLower.includes('eye diagram') || textLower.includes('eye-diagram'))) {
    return (
      <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
        <span className="text-xs font-mono font-bold text-indigo-600 block mb-2 uppercase tracking-wide">
          Syllabus Study Aid: Oscilloscope Eye Diagram Measurement
        </span>
        <div className="max-w-md mx-auto">
          <svg viewBox="0 0 400 240" className="w-full h-auto bg-white border border-slate-150 rounded-lg shadow-xs">
            {/* Horizontal timeline */}
            <line x1="50" y1="120" x2="350" y2="120" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3" />

            {/* Eye Shape Waves overlay (Outer bounding) */}
            <path d="M 80 120 C 130 120, 150 40, 200 40 C 250 40, 270 120, 320 120" fill="none" stroke="#cbd5e1" strokeWidth="2" />
            <path d="M 80 120 C 130 120, 150 200, 200 200 C 250 200, 270 120, 320 120" fill="none" stroke="#cbd5e1" strokeWidth="2" />

            {/* Inner bounding (creates the actual 'eye') */}
            <path d="M 80 120 C 130 120, 160 70, 200 70 C 240 70, 270 120, 320 120" fill="none" stroke="#4f46e5" strokeWidth="2.5" />
            <path d="M 80 120 C 130 120, 160 170, 200 170 C 240 170, 270 120, 320 120" fill="none" stroke="#4f46e5" strokeWidth="2.5" />

            {/* Measurement lines */}
            {/* 1. Eye Height (measure of noise margin) */}
            <line x1="200" y1="70" x2="200" y2="170" stroke="#f43f5e" strokeWidth="1.5" />
            <polygon points="200,70 196,75 204,75" fill="#f43f5e" />
            <polygon points="200,170 196,165 204,165" fill="#f43f5e" />
            <text x="210" y="125" className="text-[10px] font-sans font-extrabold fill-rose-600">Eye Height (Noise Margin)</text>

            {/* 2. Timing Jitter (horizontal crossings) */}
            <line x1="65" y1="120" x2="95" y2="120" stroke="#10b981" strokeWidth="2" />
            <line x1="305" y1="120" x2="335" y2="120" stroke="#10b981" strokeWidth="2" />
            <text x="80" y="137" className="text-[8px] font-mono font-bold fill-emerald-600 text-center" textAnchor="middle">Jitter</text>
            <text x="320" y="137" className="text-[8px] font-mono font-bold fill-emerald-600 text-center" textAnchor="middle">Jitter</text>

            {/* Labels */}
            <text x="200" y="30" className="text-[10px] font-mono font-bold fill-slate-800" textAnchor="middle">Overmodulation / Peak Distortion limit</text>
            <text x="200" y="222" className="text-[10px] font-mono font-bold fill-slate-800" textAnchor="middle">Best Sampling Time (Center of Eye)</text>
          </svg>
          <p className="text-[11px] text-slate-500 mt-2 text-center">
            Overlapping digital signal traces form an "eye" pattern. A wide open eye indicates low noise distortion and high channel capacity.
          </p>
        </div>
      </div>
    );
  }

  // ==========================================
  // BEC403: CONTROL SYSTEMS DRAWING ENGINES
  // ==========================================

  // 10) BEC403: Translational Mechanical Network (Mass-Spring-Damper)
  if (subjectCode === 'BEC403' && (textLower.includes('mechanical network') || textLower.includes('translational') || textLower.includes('mechanical system') || textLower.includes('fig.q1(b)') || textLower.includes('fig.q2(b)'))) {
    return (
      <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
        <span className="text-xs font-mono font-bold text-indigo-600 block mb-2 uppercase tracking-wide">
          Syllabus Schematic: Dual-Mass Translational Mechanical System
        </span>
        <div className="max-w-md mx-auto">
          <svg viewBox="0 0 380 200" className="w-full h-auto bg-white border border-slate-150 rounded-lg shadow-xs">
            {/* Ground / Reference Walls */}
            <line x1="20" y1="20" x2="20" y2="180" stroke="#475569" strokeWidth="4" />
            <line x1="10" y1="20" x2="20" y2="30" stroke="#94a3b8" strokeWidth="1" />
            <line x1="10" y1="50" x2="20" y2="60" stroke="#94a3b8" strokeWidth="1" />
            <line x1="10" y1="80" x2="20" y2="90" stroke="#94a3b8" strokeWidth="1" />
            <line x1="10" y1="110" x2="20" y2="120" stroke="#94a3b8" strokeWidth="1" />
            <line x1="10" y1="140" x2="20" y2="150" stroke="#94a3b8" strokeWidth="1" />
            <line x1="10" y1="170" x2="20" y2="180" stroke="#94a3b8" strokeWidth="1" />

            {/* Mass Block 1 */}
            <rect x="80" y="40" width="70" height="80" fill="#f8fafc" stroke="#1e293b" strokeWidth="2.5" rx="4" />
            <text x="115" y="85" className="text-sm font-sans font-extrabold fill-slate-800" textAnchor="middle">M₁</text>
            <text x="115" y="100" className="text-[10px] font-mono fill-indigo-600" textAnchor="middle">Node x₁(t)</text>

            {/* Mass Block 2 */}
            <rect x="230" y="40" width="70" height="80" fill="#f8fafc" stroke="#1e293b" strokeWidth="2.5" rx="4" />
            <text x="265" y="85" className="text-sm font-sans font-extrabold fill-slate-800" textAnchor="middle">M₂</text>
            <text x="265" y="100" className="text-[10px] font-mono fill-indigo-600" textAnchor="middle">Node x₂(t)</text>

            {/* Spring K1 between Wall and Mass 1 */}
            <path d="M 20 60 L 35 60 L 40 50 L 48 70 L 56 50 L 64 70 L 72 50 L 80 60" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" />
            <text x="50" y="42" className="text-xs font-bold fill-red-600" textAnchor="middle">K₁</text>

            {/* Damper B1 between Wall and Mass 1 */}
            <line x1="20" y1="100" x2="45" y2="100" stroke="#0891b2" strokeWidth="1.5" />
            <line x1="45" y1="90" x2="45" y2="110" stroke="#0891b2" strokeWidth="2" />
            <rect x="42" y="93" width="16" height="14" fill="none" stroke="#0891b2" strokeWidth="1.5" />
            <line x1="50" y1="100" x2="80" y2="100" stroke="#0891b2" strokeWidth="1.5" />
            <text x="50" y="123" className="text-xs font-bold fill-cyan-600" textAnchor="middle">B₁</text>

            {/* Spring K12 (coupling mass 1 and mass 2) */}
            <path d="M 150 60 L 165 60 L 172 50 L 180 70 L 188 50 L 196 70 L 204 50 L 212 70 L 220 60 L 230 60" fill="none" stroke="#22c55e" strokeWidth="1.5" />
            <text x="190" y="42" className="text-xs font-bold fill-green-600" textAnchor="middle">K₁₂</text>

            {/* Damper B12 (coupling mass 1 and mass 2) */}
            <line x1="150" y1="100" x2="175" y2="100" stroke="#0891b2" strokeWidth="1.5" />
            <rect x="175" y="92" width="18" height="16" fill="none" stroke="#0891b2" strokeWidth="1.5" />
            <line x1="184" y1="92" x2="184" y2="108" stroke="#0891b2" strokeWidth="2.5" />
            <line x1="184" y1="100" x2="230" y2="100" stroke="#0891b2" strokeWidth="1.5" />
            <text x="190" y="123" className="text-xs font-bold fill-cyan-600" textAnchor="middle">B₁₂</text>

            {/* Applied Force F(t) entering Mass 1 */}
            <line x1="115" y1="150" x2="115" y2="125" stroke="#4f46e5" strokeWidth="2.5" />
            <polygon points="115,123 111,130 119,130" fill="#4f46e5" />
            <text x="115" y="168" className="text-xs font-mono font-bold fill-indigo-600" textAnchor="middle">Input Force F(t)</text>

            {/* Displacement arrows */}
            <line x1="135" y1="28" x2="155" y2="28" stroke="#475569" strokeWidth="1.5" />
            <polygon points="155,28 149,25 149,31" fill="#475569" />
            <text x="145" y="24" className="text-[10px] font-mono fill-slate-500">x₁(t)</text>

            <line x1="285" y1="28" x2="305" y2="28" stroke="#475569" strokeWidth="1.5" />
            <polygon points="305,28 299,25 299,31" fill="#475569" />
            <text x="295" y="24" className="text-[10px] font-mono fill-slate-500">x₂(t)</text>
          </svg>
          <p className="text-[11px] text-slate-500 mt-2 text-center">
            Dual-mass mechanical layout. Differential nodal analysis formulates equations of motion used in Force-Voltage (series) or Force-Current (parallel) electrical analogies.
          </p>
        </div>
      </div>
    );
  }

  // 11) BEC403: Block Diagram / Signal Flow Graph representations
  if (subjectCode === 'BEC403' && (textLower.includes('block diagram') || textLower.includes('mason\'s gain') || textLower.includes('signal flow graph') || textLower.includes('fig.q3(a)') || textLower.includes('fig.q4(a)'))) {
    return (
      <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
        <span className="text-xs font-mono font-bold text-indigo-600 block mb-2 uppercase tracking-wide">
          Syllabus Study Aid: Standard Feedback Control System Block Layout
        </span>
        <div className="overflow-x-auto w-full">
          <div className="min-w-[480px] p-2 bg-white border border-slate-150 rounded-lg shadow-xs">
            <svg viewBox="0 0 500 180" className="w-full h-auto">
              {/* Input R(s) */}
              <text x="20" y="65" className="text-xs font-sans font-bold fill-slate-800">R(s) Reference Input</text>
              <line x1="20" y1="80" x2="90" y2="80" stroke="#64748b" strokeWidth="1.5" />
              <polygon points="90,80 84,77 84,83" fill="#64748b" />

              {/* Summing Point Circle */}
              <circle cx="110" cy="80" r="15" fill="#f8fafc" stroke="#4f46e5" strokeWidth="2.5" />
              <text x="110" y="84" className="text-xs font-mono font-extrabold fill-indigo-700" textAnchor="middle">+</text>
              <text x="100" y="105" className="text-xs font-mono font-extrabold fill-rose-600" textAnchor="middle">-</text>

              {/* Path to G1(s) block */}
              <line x1="125" y1="80" x2="165" y2="80" stroke="#64748b" strokeWidth="1.5" />
              <polygon points="165,80 159,77 159,83" fill="#64748b" />
              <text x="145" y="70" className="text-[10px] font-mono fill-rose-500" textAnchor="middle">E(s)</text>

              {/* Forward Path Block G(s) */}
              <rect x="165" y="55" width="90" height="50" fill="#f8fafc" stroke="#4f46e5" strokeWidth="2" rx="4" />
              <text x="210" y="78" className="text-sm font-sans font-extrabold fill-slate-800" textAnchor="middle">G(s)</text>
              <text x="210" y="93" className="text-[9px] font-mono fill-indigo-600" textAnchor="middle">Forward Gain</text>

              {/* Output C(s) node and branching */}
              <line x1="255" y1="80" x2="380" y2="80" stroke="#64748b" strokeWidth="1.5" />
              <polygon points="380,80 374,77 374,83" fill="#64748b" />
              <circle cx="310" cy="80" r="3.5" fill="#475569" />
              <text x="375" y="65" className="text-xs font-sans font-bold fill-slate-800" textAnchor="end">C(s) System Output</text>

              {/* Feedback path down to H(s) */}
              <line x1="310" y1="80" x2="310" y2="135" stroke="#4f46e5" strokeWidth="1.5" />
              <line x1="310" y1="135" x2="255" y2="135" stroke="#4f46e5" strokeWidth="1.5" />
              <polygon points="255,135 261,132 261,138" fill="#4f46e5" />

              {/* Feedback Block H(s) */}
              <rect x="165" y="110" width="90" height="50" fill="#f8fafc" stroke="#64748b" strokeWidth="2" rx="4" />
              <text x="210" y="133" className="text-sm font-sans font-extrabold fill-slate-800" textAnchor="middle">H(s)</text>
              <text x="210" y="148" className="text-[9px] font-mono fill-slate-500" textAnchor="middle">Feedback Gain</text>

              {/* Return to Summer comparator */}
              <line x1="165" y1="135" x2="110" y2="135" stroke="#4f46e5" strokeWidth="1.5" />
              <line x1="110" y1="135" x2="110" y2="95" stroke="#4f46e5" strokeWidth="1.5" />
              <polygon points="110,95 107,101 113,101" fill="#4f46e5" />
              <text x="125" y="125" className="text-[9px] font-mono fill-slate-500">B(s) Feedback</text>
            </svg>
          </div>
          <p className="text-[11px] text-slate-500 mt-2 text-center">
            Standard closed-loop loop with negative feedback. The system transfer function yields T(s) = C(s)/R(s) = G(s)/[1 + G(s)H(s)].
          </p>
        </div>
      </div>
    );
  }

  // 12) BEC403: Transient Step Response plots
  if (subjectCode === 'BEC403' && (textLower.includes('damping factor') || textLower.includes('transient response') || textLower.includes('seconds order') || textLower.includes('step response') || textLower.includes('underdamped') || textLower.includes('under damped') || textLower.includes('fig.q5(b)') || textLower.includes('fig.q6(a)'))) {
    return (
      <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
        <span className="text-xs font-mono font-bold text-indigo-600 block mb-2 uppercase tracking-wide">
          Syllabus Visual Aid: Underdamped Second-Order Step Response Specs
        </span>
        <div className="max-w-md mx-auto">
          <svg viewBox="0 0 400 240" className="w-full h-auto bg-white border border-slate-150 rounded-lg shadow-xs">
            {/* Axis Grid */}
            <line x1="50" y1="190" x2="370" y2="190" stroke="#475569" strokeWidth="1.5" /> {/* X axis (t) */}
            <line x1="50" y1="30" x2="50" y2="200" stroke="#475569" strokeWidth="1.5" /> {/* Y axis (c(t)) */}
            <text x="360" y="205" className="text-[9px] font-mono fill-slate-600 font-bold text-end">Time (seconds)</text>
            <text x="35" y="45" className="text-[9px] font-mono fill-slate-600 font-bold" transform="rotate(-90 35 45)" textAnchor="end">Output c(t)</text>

            {/* Steady State Value Line c(t) = 1 */}
            <line x1="50" y1="120" x2="370" y2="120" stroke="#0284c7" strokeWidth="1" strokeDasharray="3,3" />
            <text x="360" y="115" className="text-[9px] font-sans font-bold fill-sky-700 text-end">Steady State Level = 1.0</text>

            {/* Underdamped Response Curve Graph */}
            {/* Starts (50, 190), overshoot peaking at (130, 60), trough at (200, 140), settling around y=120 */}
            <path d="M 50 190 C 80 180, 100 60, 130 65 C 160 70, 180 145, 200 135 C 220 125, 240 110, 260 122 C 280 124, 300 118, 320 120 C 340 120, 360 120, 370 120" fill="none" stroke="#4f46e5" strokeWidth="2.5" />

            {/* Peak Overshoot Mp indicator */}
            <line x1="130" y1="65" x2="130" y2="120" stroke="#f43f5e" strokeWidth="1" strokeDasharray="1" />
            <line x1="130" y1="65" x2="170" y2="65" stroke="#f43f5e" strokeWidth="1.5" />
            <line x1="170" y1="120" x2="130" y2="120" stroke="#e2e8f0" strokeWidth="1" />
            <line x1="160" y1="65" x2="160" y2="120" stroke="#f43f5e" strokeWidth="1.5" />
            <polygon points="160,65 157,71 163,71" fill="#f43f5e" />
            <polygon points="160,120 157,114 163,114" fill="#f43f5e" />
            <text x="168" y="95" className="text-[9px] font-bold fill-rose-600 font-sans">Max Overshoot Mp</text>

            {/* Peak Time tp indicator */}
            <circle cx="130" cy="65" r="3.5" fill="#f43f5e" />
            <line x1="130" y1="120" x2="130" y2="190" stroke="#64748b" strokeWidth="1" strokeDasharray="2" />
            <text x="130" y="202" className="text-[8px] font-mono font-bold fill-slate-700" textAnchor="middle">Peak Time tp</text>

            {/* Delay Time / Rise Time tr indicator */}
            <line x1="95" y1="120" x2="95" y2="190" stroke="#64748b" strokeWidth="1" strokeDasharray="2" />
            <text x="95" y="202" className="text-[8px] font-mono font-bold fill-slate-700" textAnchor="middle">Rise tr</text>

            {/* Tolerance Band 2% or 5% */}
            <rect x="280" y="115" width="90" height="10" fill="#22c55e" opacity="0.15" />
            <line x1="280" y1="190" x2="280" y2="115" stroke="#22c55e" strokeWidth="1" strokeDasharray="2" />
            <text x="280" y="202" className="text-[8px] font-mono font-bold fill-emerald-600" textAnchor="middle">Settling ts</text>
          </svg>
          <p className="text-[11px] text-slate-500 mt-2 text-center">
            Standard step input response. Damping ratios ζ between 0 and 1 exhibit decayed oscillations before reaching steady-state.
          </p>
        </div>
      </div>
    );
  }

  // 13) BEC403: Root Locus Plot Sketch Representation
  if (subjectCode === 'BEC403' && (textLower.includes('root locus') || textLower.includes('root-locus') || textLower.includes('fig.q8(a)') || textLower.includes('sketch the complete root'))) {
    return (
      <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
        <span className="text-xs font-mono font-bold text-indigo-600 block mb-2 uppercase tracking-wide">
          Syllabus Study Aid: 3rd Order s-Plane Root Locus Demonstration
        </span>
        <div className="max-w-md mx-auto">
          <svg viewBox="0 0 380 240" className="w-full h-auto bg-white border border-slate-150 rounded-lg shadow-xs">
            {/* Axes */}
            <line x1="40" y1="120" x2="340" y2="120" stroke="#64748b" strokeWidth="1.5" /> {/* Real axis σ */}
            <line x1="240" y1="20" x2="240" y2="220" stroke="#64748b" strokeWidth="1.5" /> {/* Imag axis jω */}
            <text x="330" y="132" className="text-[9px] font-mono font-bold fill-slate-600">σ (Real)</text>
            <text x="248" y="32" className="text-[9px] font-mono font-bold fill-slate-600">jω (Imag)</text>

            {/* Poles x symbols on real axis */}
            {/* Pole 1 at origin (240, 120) */}
            <path d="M 236 116 L 244 124 M 244 116 L 236 124" stroke="#dc2626" strokeWidth="1.5" />
            <text x="240" y="112" className="text-[8px] font-bold fill-red-600 font-mono" textAnchor="middle">s=0</text>

            {/* Pole 2 at s = -2 (180, 120) */}
            <path d="M 176 116 L 184 124 M 184 116 L 176 124" stroke="#dc2626" strokeWidth="1.5" />
            <text x="180" y="112" className="text-[8px] font-bold fill-red-600 font-mono" textAnchor="middle">s=-2</text>

            {/* Pole 3 at s = -4 (120, 120) */}
            <path d="M 116 116 L 124 124 M 124 116 L 116 124" stroke="#dc2626" strokeWidth="1.5" />
            <text x="120" y="112" className="text-[8px] font-bold fill-red-600 font-mono" textAnchor="middle">s=-4</text>

            {/* Root locus real axis branches */}
            {/* Real axis segments on locus are [0, -2] and [-4, -infinity] */}
            <line x1="180" y1="120" x2="240" y2="120" stroke="#4f46e5" strokeWidth="3" />
            <line x1="40" y1="120" x2="120" y2="120" stroke="#4f46e5" strokeWidth="3" />

            {/* Centroid coordinate calculation (0 + -2 + -4)/3 = -2 */}
            <circle cx="180" cy="120" r="4" fill="#22c55e" />
            <text x="180" y="135" className="text-[8px] font-mono font-bold fill-green-600" textAnchor="middle">Centroid σ_p = -2</text>

            {/* Asymptotic lines from centroid: 60, 180, 300 degrees */}
            <line x1="180" y1="120" x2="280" y2="40" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3" />
            <line x1="180" y1="120" x2="280" y2="200" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3" />
            <text x="270" y="55" className="text-[8px] font-mono fill-slate-500">θ = 60°</text>
            <text x="270" y="180" className="text-[8px] font-mono fill-slate-500">θ = 300°</text>

            {/* Breakaway paths: poles from 0 and -2 meet at some point (approx -0.8) and break away into curves to infinity */}
            <path d="M 180 120 Q 210 120 210 120 C 210 120, 210 80, 240 50" fill="none" stroke="#4f46e5" strokeWidth="3" />
            <path d="M 180 120 Q 210 120 210 120 C 210 120, 210 160, 240 190" fill="none" stroke="#4f46e5" strokeWidth="3" />
            <circle cx="210" cy="120" r="3.5" fill="#eab308" stroke="#1e293b" />
            <text x="210" y="108" className="text-[8px] font-mono font-bold fill-yellow-600" textAnchor="middle">Breakaway s ≈ -0.84</text>
          </svg>
          <p className="text-[11px] text-slate-500 mt-2 text-center">
            Root locus trajectory showing s-plane loops moving into unstable half of complex plane as parameters K escalates.
          </p>
        </div>
      </div>
    );
  }

  // ==========================================
  // BEC405A: MICROCONTROLLERS DRAWING ENGINES
  // ==========================================

  // 14) BEC405A: Internal RAM Memory Map of 8051
  if (subjectCode === 'BEC405A' && (textLower.includes('ram configuration') || textLower.includes('internal ram') || textLower.includes('ram memory') || textLower.includes('bit-addressable'))) {
    return (
      <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
        <span className="text-xs font-mono font-bold text-indigo-600 block mb-2 uppercase tracking-wide">
          Syllabus Layout: 128-Byte Internal RAM Address Mapping
        </span>
        <div className="max-w-md mx-auto">
          <svg viewBox="0 0 320 280" className="w-full h-auto bg-white border border-slate-150 rounded-lg shadow-xs">
            {/* 128 Byte RAM Box */}
            <rect x="80" y="20" width="160" height="240" fill="#f8fafc" stroke="#1e293b" strokeWidth="2.5" rx="4" />

            {/* General Purpose RAM block */}
            <rect x="85" y="25" width="150" height="80" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="1.5" rx="2" />
            <text x="160" y="60" className="text-xs font-sans font-extrabold fill-sky-900" textAnchor="middle">General Purpose RAM</text>
            <text x="160" y="75" className="text-[10px] font-mono fill-sky-600" textAnchor="middle">80 Bytes: 0x30 to 0x7F</text>

            {/* Bit-addressable Space block */}
            <rect x="85" y="115" width="150" height="50" fill="#fee2e2" stroke="#f87171" strokeWidth="1.5" rx="2" />
            <text x="160" y="140" className="text-xs font-sans font-extrabold fill-red-950" textAnchor="middle">Bit-Addressable Space</text>
            <text x="160" y="153" className="text-[10px] font-mono fill-red-600" textAnchor="middle">16 Bytes: 0x20 to 0x2F</text>

            {/* Working Register Banks blocks */}
            <rect x="85" y="175" width="150" height="80" fill="#f0fdf4" stroke="#4ade80" strokeWidth="1.5" rx="2" />
            <text x="160" y="195" className="text-xs font-sans font-extrabold fill-emerald-950" textAnchor="middle">Working Register Banks</text>
            <text x="160" y="210" className="text-[9px] font-mono fill-emerald-600" textAnchor="middle">Bank 0-3 (R0 to R7 each)</text>
            <text x="160" y="224" className="text-[10px] font-mono fill-emerald-600" textAnchor="middle">32 Bytes: 0x00 to 0x1F</text>

            {/* Address Pointers indicators */}
            <text x="70" y="35" className="text-[10px] font-mono fill-slate-500 font-bold" textAnchor="end">0x7F</text>
            <text x="70" y="105" className="text-[10px] font-mono fill-slate-500 font-bold" textAnchor="end">0x30</text>
            <text x="70" y="125" className="text-[10px] font-mono fill-slate-500 font-bold" textAnchor="end">0x2F</text>
            <text x="70" y="165" className="text-[10px] font-mono fill-slate-500 font-bold" textAnchor="end">0x20</text>
            <text x="70" y="185" className="text-[10px] font-mono fill-slate-500 font-bold" textAnchor="end">0x1F</text>
            <text x="70" y="255" className="text-[10px] font-mono fill-slate-500 font-bold" textAnchor="end">0x00</text>
          </svg>
          <p className="text-[11px] text-slate-500 mt-2 text-center">
            Structural division of 8051 128-byte Scratchpad internal block RAM. (Upper 128 bytes are maps for Special Function Registers, SFRs).
          </p>
        </div>
      </div>
    );
  }

  // 15) BEC405A: RS232 Connectors and DB-9 layout
  if (subjectCode === 'BEC405A' && (textLower.includes('rs232') || textLower.includes('db-9') || textLower.includes('db9') || textLower.includes('connector') || textLower.includes('serial communication'))) {
    return (
      <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
        <span className="text-xs font-mono font-bold text-indigo-600 block mb-2 uppercase tracking-wide">
          Syllabus Diagram: Standard Serial DB-9 Serial Pin Layout
        </span>
        <div className="max-w-md mx-auto">
          <svg viewBox="0 0 320 180" className="w-full h-auto bg-white border border-slate-150 rounded-lg shadow-xs">
            {/* DB-9 Connector Outline */}
            <polygon points="40,40 280,40 250,140 70,140" fill="#f1f5f9" stroke="#64748b" strokeWidth="2.5" />

            {/* Pins Grid Row 1 (Pins 1 - 5) */}
            <g>
              <circle cx="80" cy="65" r="7" fill="#f8fafc" stroke="#4f46e5" strokeWidth="2" />
              <text x="80" y="68" className="text-[8px] font-mono font-extrabold fill-indigo-700" textAnchor="middle">1</text>
              <text x="80" y="52" className="text-[7px] font-mono fill-slate-500" textAnchor="middle">DCD</text>

              <circle cx="120" cy="65" r="7" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
              <text x="120" y="68" className="text-[8px] font-mono font-extrabold fill-red-700" textAnchor="middle">2</text>
              <text x="120" y="52" className="text-[7px] font-mono font-extrabold fill-rose-600" textAnchor="middle">RXD</text>

              <circle cx="160" cy="65" r="7" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
              <text x="160" y="68" className="text-[8px] font-mono font-extrabold fill-red-700" textAnchor="middle">3</text>
              <text x="160" y="52" className="text-[7px] font-mono font-extrabold fill-rose-600" textAnchor="middle">TXD</text>

              <circle cx="200" cy="65" r="7" fill="#f8fafc" stroke="#4f46e5" strokeWidth="2" />
              <text x="200" y="68" className="text-[8px] font-mono font-extrabold fill-indigo-700" textAnchor="middle">4</text>
              <text x="200" y="52" className="text-[7px] font-mono fill-slate-500" textAnchor="middle">DTR</text>

              <circle cx="240" cy="65" r="7" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
              <text x="240" y="68" className="text-[8px] font-mono font-extrabold fill-emerald-700" textAnchor="middle">5</text>
              <text x="240" y="52" className="text-[7px] font-mono font-extrabold fill-emerald-600" textAnchor="middle">GND</text>
            </g>

            {/* Pins Grid Row 2 (Pins 6 - 9) */}
            <g>
              <circle cx="100" cy="110" r="7" fill="#f8fafc" stroke="#4f46e5" strokeWidth="2" />
              <text x="100" y="113" className="text-[8px] font-mono font-extrabold fill-indigo-700" textAnchor="middle">6</text>
              <text x="100" y="126" className="text-[7px] font-mono fill-slate-500" textAnchor="middle">DSR</text>

              <circle cx="140" cy="110" r="7" fill="#f8fafc" stroke="#4f46e5" strokeWidth="2" />
              <text x="140" y="113" className="text-[8px] font-mono font-extrabold fill-indigo-700" textAnchor="middle">7</text>
              <text x="140" y="126" className="text-[7px] font-mono fill-slate-500" textAnchor="middle">RTS</text>

              <circle cx="180" cy="110" r="7" fill="#f8fafc" stroke="#4f46e5" strokeWidth="2" />
              <text x="180" y="113" className="text-[8px] font-mono font-extrabold fill-indigo-700" textAnchor="middle">8</text>
              <text x="180" y="126" className="text-[7px] font-mono fill-slate-500" textAnchor="middle">CTS</text>

              <circle cx="220" cy="110" r="7" fill="#f8fafc" stroke="#4f46e5" strokeWidth="2" />
              <text x="220" y="113" className="text-[8px] font-mono font-extrabold fill-indigo-700" textAnchor="middle">9</text>
              <text x="220" y="126" className="text-[7px] font-mono fill-slate-500" textAnchor="middle">RI</text>
            </g>
          </svg>
          <p className="text-[11px] text-slate-500 mt-2 text-center">
            View of DB-9 Male Connector pins showing RXD (Receive, Pin 2), TXD (Transmit, Pin 3), and GND (Common Ground, Pin 5) used in 8051 serial wiring loops.
          </p>
        </div>
      </div>
    );
  }

  // 16) BEC405A: Staircase Waveform / R-2R Ladder interfacing DAC
  if (subjectCode === 'BEC405A' && (textLower.includes('dac') || textLower.includes('staircase') || textLower.includes('digital-to-analog') || textLower.includes('analog converter'))) {
    return (
      <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
        <span className="text-xs font-mono font-bold text-indigo-600 block mb-2 uppercase tracking-wide">
          Syllabus Waveform Model: DAC 20-Step Staircase Output Wave
        </span>
        <div className="max-w-md mx-auto">
          <svg viewBox="0 0 320 180" className="w-full h-auto bg-white border border-slate-150 rounded-lg shadow-xs">
            {/* Axis Grid */}
            <line x1="40" y1="140" x2="300" y2="140" stroke="#475569" strokeWidth="1.5" /> {/* X axis (t) */}
            <line x1="40" y1="20" x2="40" y2="150" stroke="#475569" strokeWidth="1.5" /> {/* Y axis (V_out) */}
            <text x="290" y="152" className="text-[8px] font-mono fill-slate-500 font-bold text-end">t (msec)</text>
            <text x="30" y="32" className="text-[8px] font-mono fill-slate-500 font-bold" transform="rotate(-90 30 32)" textAnchor="end">V_out</text>

            {/* Stepped Waves: staircase step counts 1 to 10 (each width 25, height 12) */}
            {/* Iterative step render simulating 8051 loop increments */}
            <path d="M 40 140
                     L 60 140 L 60 128
                     L 80 128 L 80 116
                     L 100 116 L 100 104
                     L 120 104 L 120 92
                     L 140 92 L 140 80
                     L 160 80 L 160 68
                     L 180 68 L 180 56
                     L 200 56 L 200 44
                     L 220 44 L 220 32
                     L 240 32 L 240 20
                     L 245 20 L 245 140
                     L 265 140 L 265 128
                     L 285 128 L 285 116" fill="none" stroke="#4f46e5" strokeWidth="2" />

            {/* Reference Limits */}
            <line x1="40" y1="20" x2="240" y2="20" stroke="#f43f5e" strokeWidth="1" strokeDasharray="2" />
            <text x="235" y="15" className="text-[8px] font-mono fill-rose-600 font-bold text-end">V_max = +5V (Byte 0xFF)</text>
            <text x="45" y="150" className="text-[8px] font-mono fill-indigo-600">Start (0x00)</text>
            <text x="230" y="150" className="text-[8px] font-mono fill-indigo-600">Reset</text>
          </svg>
          <p className="text-[11px] text-slate-500 mt-2 text-center">
            DAC output waveform generated by a continuous memory register counter loop, climbing sequentially then snapping back.
          </p>
        </div>
      </div>
    );
  }

  // ==========================================
  // BBOC407: BIOLOGY FOR ENGINEERS DRAWING ENGINES
  // ==========================================

  // 17) BBOC407: Eukaryotic Plant Cell Organelle Diagram
  if (subjectCode === 'BBOC407' && (textLower.includes('plant cell') || textLower.includes('animal cell') || textLower.includes('define cell') || textLower.includes('structure of cell'))) {
    return (
      <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
        <span className="text-xs font-mono font-bold text-indigo-600 block mb-2 uppercase tracking-wide">
          Syllabus Schematic: Eukaryotic Plant Cell & Primary Organelles
        </span>
        <div className="max-w-md mx-auto">
          <svg viewBox="0 0 380 260" className="w-full h-auto bg-white border border-slate-150 rounded-lg shadow-xs">
            {/* Outer Protective Cell Wall (Thick Green Polygon) */}
            <polygon points="40,30 340,30 320,230 60,230" fill="#f0fdf4" stroke="#16a34a" strokeWidth="4" strokeLinejoin="round" />
            {/* Inner Plasma Membrane (Thin Emerald line) */}
            <polygon points="45,35 333,35 315,223 65,223" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinejoin="round" />

            {/* Large Central Vacuole (Blue filled vesicle handling pressure) */}
            <rect x="110" y="70" width="130" height="110" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="1.5" rx="30" />
            <text x="175" y="125" className="text-[10px] font-sans font-bold fill-sky-700" textAnchor="middle">Large Central Vacuole</text>
            <text x="175" y="137" className="text-[8px] font-mono fill-sky-600" textAnchor="middle">Turgor Pressure</text>

            {/* Nucleus (Purple boundary with dense Nucleolus) */}
            <circle cx="280" cy="160" r="32" fill="#faf5ff" stroke="#a855f7" strokeWidth="2" />
            <circle cx="285" cy="165" r="12" fill="#d8b4fe" stroke="#7e22ce" strokeWidth="1" />
            <text x="280" y="142" className="text-[9px] font-sans font-bold fill-purple-950" textAnchor="middle">Nucleus</text>
            <text x="285" y="170" className="text-[8px] font-mono fill-purple-700" textAnchor="middle">DNA</text>

            {/* Chloroplast (Green leaf-bound light-trappers) */}
            <g transform="translate(65, 60)">
              <ellipse cx="20" cy="15" rx="18" ry="10" fill="#dcfce7" stroke="#15803d" strokeWidth="1.5" />
              <line x1="10" y1="15" x2="30" y2="15" stroke="#15803d" strokeWidth="1" />
              <line x1="12" y1="12" x2="28" y2="12" stroke="#15803d" strokeWidth="1" />
              <line x1="12" y1="18" x2="28" y2="18" stroke="#15803d" strokeWidth="1" />
              <text x="20" y="-3" className="text-[8px] font-mono fill-green-700 font-bold" textAnchor="middle">Chloroplast</text>
            </g>

            <g transform="translate(75, 160)">
              <ellipse cx="20" cy="15" rx="18" ry="10" fill="#dcfce7" stroke="#15803d" strokeWidth="1.5" />
              <line x1="10" y1="15" x2="30" y2="15" stroke="#15803d" strokeWidth="1" />
              <line x1="12" y1="12" x2="28" y2="12" stroke="#15803d" strokeWidth="1" />
              <line x1="12" y1="18" x2="28" y2="18" stroke="#15803d" strokeWidth="1" />
              <text x="20" y="32" className="text-[8px] font-mono fill-green-700 font-bold" textAnchor="middle">Photosynthesis</text>
            </g>

            {/* Mitochondria (Orange cellular respiratory furnace) */}
            <g transform="translate(290, 70)">
              <ellipse cx="15" cy="15" rx="14" ry="8" fill="#ffedd5" stroke="#ea580c" strokeWidth="1.5" />
              <path d="M 5 15 C 10 10, 12 20, 15 15 C 18 10, 20 20, 25 15" fill="none" stroke="#ea580c" strokeWidth="1" />
              <text x="15" y="-3" className="text-[8px] font-mono fill-orange-700 font-bold" textAnchor="middle">Mito</text>
            </g>

            {/* Cytoplasm labels and pointers */}
            <text x="55" y="245" className="text-[9px] font-mono fill-green-700 font-bold">Cell Wall (Cellulose)</text>
            <text x="240" y="245" className="text-[9px] font-mono fill-emerald-600 font-bold">Plasma Membrane</text>
          </svg>
          <p className="text-[11px] text-slate-500 mt-2 text-center">
            Cellular architecture highlighting biological differences: cellulose wall, rigid shape, and chloroplast arrays driving photo-autotrophic biochemistry.
          </p>
        </div>
      </div>
    );
  }

  // 18) BBOC407: Electrocardiogram (ECG) P-Q-R-S-T Pulse Label Screen
  if (subjectCode === 'BBOC407' && (textLower.includes('ecg') || textLower.includes('electrocardiogram') || textLower.includes('polarization') || textLower.includes('p-q-r-s-t'))) {
    return (
      <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
        <span className="text-xs font-mono font-bold text-indigo-600 block mb-2 uppercase tracking-wide">
          Syllabus Waveform Model: Idealized ECG Cycle Wave & Critical Intervals
        </span>
        <div className="max-w-md mx-auto">
          <svg viewBox="0 0 380 200" className="w-full h-auto bg-slate-900 border border-slate-950 rounded-lg shadow-sm">
            {/* Fine Red Grid lines to look like standard millimetric ECG chart papers */}
            <g opacity="0.15">
              {[...Array(38)].map((_, i) => (
                <line key={`x-${i}`} x1={i * 10} y1="0" x2={i * 10} y2="200" stroke="#ef4444" strokeWidth="0.5" />
              ))}
              {[...Array(20)].map((_, i) => (
                <line key={`y-${i}`} x1="0" y1={i * 10} x2="380" y2={i * 10} stroke="#ef4444" strokeWidth="0.5" />
              ))}
            </g>

            {/* Isoelectric zero voltage line */}
            <line x1="10" y1="120" x2="370" y2="120" stroke="#475569" strokeWidth="1" strokeDasharray="4,2" />

            {/* ECG continuous signal path: P -> Q -> R -> S -> T */}
            {/* Horizontal 10-60, P curve 60-90, segment 90-110, Q dip 110-120, R spike 120-135, S dip 135-150, segment 150-180, T wave 180-220, rest */}
            <path d="M 10 120 
                     L 60 120 
                     C 70 120, 75 105, 80 105 C 85 105, 90 120, 100 120 
                     L 120 120
                     L 125 128 
                     L 135 30 
                     L 145 155 
                     L 150 120 
                     L 180 120
                     C 195 120, 205 92, 215 92 C 225 92, 235 120, 250 120
                     L 370 120" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

            {/* Physiological Label nodes */}
            {/* P wave */}
            <circle cx="80" cy="105" r="3.5" fill="#ef4444" />
            <text x="80" y="93" className="text-[10px] font-mono font-bold fill-red-400" textAnchor="middle">P Wave</text>
            <text x="80" y="142" className="text-[7px] font-sans fill-slate-400" textAnchor="middle">(Atrial Depol)</text>

            {/* Q-R-S complex */}
            <circle cx="125" cy="128" r="3" fill="#3b82f6" />
            <text x="115" y="138" className="text-[10px] font-mono font-bold fill-blue-400" textAnchor="middle">Q</text>

            <circle cx="135" cy="30" r="3.5" fill="#3b82f6" />
            <text x="135" y="20" className="text-[11px] font-mono font-bold fill-blue-400" textAnchor="middle">R Spike</text>

            <circle cx="145" cy="155" r="3" fill="#3b82f6" />
            <text x="155" y="165" className="text-[10px] font-mono font-bold fill-blue-400" textAnchor="middle">S</text>

            {/* T wave */}
            <circle cx="215" cy="92" r="3.5" fill="#fbbf24" />
            <text x="215" y="80" className="text-[10px] font-mono font-bold fill-amber-400" textAnchor="middle">T Wave</text>
            <text x="215" y="142" className="text-[7px] font-sans fill-slate-400" textAnchor="middle">(Ventricular Repol)</text>

            {/* Duration brackets visual markers */}
            <line x1="120" y1="180" x2="155" y2="180" stroke="#3b82f6" strokeWidth="1" />
            <line x1="120" y1="176" x2="120" y2="184" stroke="#3b82f6" strokeWidth="1" />
            <line x1="155" y1="176" x2="155" y2="184" stroke="#3b82f6" strokeWidth="1" />
            <text x="137" y="191" className="text-[8px] font-mono fill-blue-400" textAnchor="middle">QRS Complex Duration</text>
          </svg>
          <p className="text-[11px] text-slate-400 mt-2 text-center font-mono">
            Standard 1-cycle polar electric vector tracking: P wave (atrial activation), QRS complex (ventricular squeeze), and T wave (ventricular recovery).
          </p>
        </div>
      </div>
    );
  }

  // 19) BBOC407: Double Helix DNA Strand Representation
  if (subjectCode === 'BBOC407' && (textLower.includes('dna') || textLower.includes('nucleic acid') || textLower.includes('base pairing') || textLower.includes('double helix'))) {
    return (
      <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
        <span className="text-xs font-mono font-bold text-indigo-600 block mb-2 uppercase tracking-wide">
          Syllabus Visual: DNA Hydrogen-Bonded Double Helix
        </span>
        <div className="max-w-md mx-auto">
          <svg viewBox="0 0 360 180" className="w-full h-auto bg-white border border-slate-150 rounded-lg shadow-xs">
            {/* Sugar Phosphate Backbone Strand 1 */}
            <path d="M 30 50 C 70 20, 110 160, 150 130 C 190 100, 230 20, 270 50 C 310 80, 330 140, 350 130" fill="none" stroke="#4f46e5" strokeWidth="3" />
            {/* Sugar Phosphate Backbone Strand 2 */}
            <path d="M 30 130 C 70 160, 110 20, 150 50 C 190 80, 230 160, 270 130 C 310 100, 330 20, 350 50" fill="none" stroke="#0891b2" strokeWidth="3" />

            {/* Base pairs linking bars */}
            {/* Point 1: x = 50. Strand 1: y ≈ 45, Strand 2: y ≈ 135 */}
            <line x1="60" y1="38" x2="60" y2="142" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="3,2" />
            <text x="65" y="90" className="text-[8px] font-mono font-bold fill-red-600">A = T</text>

            {/* Point 2: x = 110. Strand 1: y ≈ 138, Strand 2: y ≈ 42 */}
            <line x1="110" y1="138" x2="110" y2="42" stroke="#16a34a" strokeWidth="2.5" strokeDasharray="3,2" />
            <text x="115" y="90" className="text-[8px] font-mono font-bold fill-green-600">G ≡ C</text>

            {/* Point 3: x = 170. Strand 1: y ≈ 112, Strand 2: y ≈ 68 */}
            <line x1="170" y1="112" x2="170" y2="68" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="3,2" />

            {/* Point 4: x = 220. Strand 1: y ≈ 32, Strand 2: y ≈ 148 */}
            <line x1="220" y1="32" x2="220" y2="148" stroke="#16a34a" strokeWidth="2.5" strokeDasharray="3,2" />
            <text x="225" y="90" className="text-[8px] font-mono font-bold fill-green-600">C ≡ G</text>

            {/* Point 5: x = 280. Strand 1: y ≈ 62, Strand 2: y ≈ 118 */}
            <line x1="280" y1="62" x2="280" y2="118" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="3,2" />
            <text x="285" y="90" className="text-[8px] font-mono font-bold fill-red-600">T = A</text>

            {/* Annotations */}
            <text x="40" y="24" className="text-[9px] font-sans font-bold fill-indigo-600">Primary Strand (5' → 3')</text>
            <text x="40" y="166" className="text-[9px] font-sans font-bold fill-cyan-600">Complementary Strand (3' → 5')</text>
          </svg>
          <p className="text-[11px] text-slate-500 mt-2 text-center">
            Double-helix polynucleotide configuration linked via self-assembling hydrogen bonds. Purine adenine (A) always pairs with pyrimidine thymine (T), and guanine (G) pairs with cytosine (C).
          </p>
        </div>
      </div>
    );
  }

    return null;
  };

  const diagramEl = renderDiagramContent();

  if (!diagramEl) return null;

  return (
    <div className="flex flex-col gap-3 mt-3">
      {diagramEl}
      
      {/* Professional Diagram Accuracy Notice */}
      <div className="p-3.5 bg-amber-50/70 rounded-xl border border-amber-200 text-amber-900 flex items-start gap-3 shadow-2xs">
        <span className="text-lg leading-none shrink-0 select-none text-amber-500">⚠️</span>
        <div className="flex-1">
          <span className="text-xs font-bold text-amber-800 block tracking-wide uppercase font-sans mb-0.5">
            Diagram Accuracy Notice
          </span>
          <p className="text-[11px] leading-relaxed text-amber-700 font-sans">
            The diagrams shown on this page are AI-assisted educational representations and may not perfectly match the original VTU examination paper.
          </p>
          <p className="text-[11px] leading-relaxed text-amber-700 mt-1 font-sans">
            Students are strongly advised to verify all diagrams, circuit figures, mathematical notations, and labels using the official Question Paper PDF provided below.
          </p>
          <p className="text-[11px] leading-relaxed text-amber-700 mt-0.5 font-sans font-semibold">
            For examination preparation, always treat the PDF as the final and authoritative reference.
          </p>
        </div>
      </div>
    </div>
  );
};

