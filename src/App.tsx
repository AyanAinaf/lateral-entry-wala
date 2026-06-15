/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Search, 
  FileText, 
  Printer, 
  Calculator, 
  Plus, 
  Trash2, 
  Check, 
  Download, 
  Info, 
  ArrowRight, 
  GraduationCap, 
  Filter, 
  BookmarkCheck,
  ChevronRight,
  ClipboardCopy,
  Layers,
  Sparkles,
  Linkedin,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { examPapers } from './data.ts';
import { ExamPaper, SubQuestion, QuestionGroup } from './types.ts';
import { bec402Papers, bec402Formulas } from './data_bec402.ts';
import { bec403Papers, bec403Formulas } from './data_bec403.ts';
import { bec405aPapers, bec405aFormulas } from './data_bec405a.ts';
import { bboc407Papers, bboc407Formulas } from './data_bboc407.ts';
import { SyllabusDiagram } from './components/SyllabusDiagram.tsx';

// Dynamic formulas related to Electromagnetics BEC401
interface ElectromagneticFormula {
  id: string;
  name: string;
  equation: string;
  variables: string;
  description: string;
  module: number;
}

const formulas: ElectromagneticFormula[] = [
  {
    id: "coulomb-law",
    name: "Coulomb's Law (Force vector)",
    equation: "F = (Q₁Q₂) / (4πε₀R²) * a_R",
    variables: "F = Force in Newtons, Q = Charge in Coulombs, R = Distance in meters, ε₀ = 8.854 × 10⁻¹² F/m",
    description: "Calculates the electrostatic force of attraction or repulsion between two point charges in free space.",
    module: 1
  },
  {
    id: "electric-field-intensity",
    name: "Electric Field Intensity (Point Charge)",
    equation: "E = Q / (4πε₀R²) * a_R",
    variables: "E = Electric Field (V/m), Q = Charge, R = Distance from charge, a_R = Unit vector of direction",
    description: "Defines the force exerted per unit charge at a given point in space.",
    module: 1
  },
  {
    id: "line-charge-field",
    name: "Electric Field (Infinite Line Charge)",
    equation: "E = ρ_L / (2πε₀ρ) * a_ρ",
    variables: "ρ_L = Linear charge density (C/m), ρ = Radial distance from line, a_ρ = Radial unit vector",
    description: "Determines the electric field intensity at any radial distance ρ surrounding an infinitely long line charge.",
    module: 1
  },
  {
    id: "sheet-charge-field",
    name: "Electric Field (Infinite Sheet of Charge)",
    equation: "E = ρ_s / (2ε₀) * a_n",
    variables: "ρ_s = Surface charge density (C/m²), a_n = Unit vector normal to the sheet",
    description: "Electric field from an infinite sheet is constant and independent of the distance from the sheet.",
    module: 1
  },
  {
    id: "gauss-law",
    name: "Gauss's Law (Integral Form)",
    equation: "Q_enc = ∮ D • dS = ∮ ε₀E • dS",
    variables: "Q_enc = Enclosed charge, D = Electric flux density (C/m²), dS = Differential area vector",
    description: "The total electric flux passing out of a closed surface is equal to the total net charge enclosed by that surface.",
    module: 2
  },
  {
    id: "flux-density-divergence",
    name: "Gauss's Law in Point Form (Maxwell's 1st Eq)",
    equation: "∇ • D = ρ_v",
    variables: "∇ • D = Divergence of flux density, ρ_v = Volume charge density (C/m³)",
    description: "The divergence of the electric flux density at a point is identical to the volume charge density at that point.",
    module: 2
  },
  {
    id: "divergence-theorem",
    name: "Divergence Theorem",
    equation: "∮ D • dS = ∫ (∇ • D) dV",
    variables: "D = Vector field, dS = Surface element, dV = Volume element, ∇ • D = Divergence",
    description: "Relates the net outward flux of a vector field through a closed boundary surface to the volume integral of its divergence.",
    module: 2
  },
  {
    id: "continuity-equation",
    name: "Current Continuity Equation",
    equation: "∇ • J = -∂ρ_v / ∂t",
    variables: "∇ • J = Divergence of current density (A/m²), ∂ρ_v/∂t = Rate of change of volume charge density",
    description: "Expresses local conservation of charge. In steady states (time-invariant), ∇ • J = 0.",
    module: 2
  },
  {
    id: "poisson-laplace-equation",
    name: "Poisson's and Laplace's Equations",
    equation: "Poisson: ∇²V = -ρ_v/ε  |  Laplace: ∇²V = 0",
    variables: "V = Electrostatic potential (V), ∇² = Laplacian operator, ρ_v = Charge density, ε = Permittivity",
    description: "Second-order partial differential equations governing electrostatic potential in regions with and without source charges respectively.",
    module: 3
  },
  {
    id: "biot-savart-law",
    name: "Biot-Savart's Law",
    equation: "dH = (I dL × a_R) / (4πR²)",
    variables: "H = Magnetic field intensity (A/m), I = Current, dL = Differential length element, R = Distance",
    description: "Calculates the magnetic field intensity contribution from a differential current-carrying element.",
    module: 3
  },
  {
    id: "ampere-circuital-law",
    name: "Ampere's Circuital Law",
    equation: "∮ H • dL = I_enclosed",
    variables: "H = Magnetic field intensity, dL = Line element, I_enclosed = Sum of currents passing through open loop",
    description: "The line integral of H around any closed path equals the direct current enclosed by that path.",
    module: 3
  },
  {
    id: "lorentz-force",
    name: "Lorentz Force Equation",
    equation: "F = Q(E + u × B)",
    variables: "F = Electromagnetic force, Q = Charge, E = Electric field, u = Velocity (m/s), B = Flux density (T)",
    description: "Calculates the total force exerted on a charged particle moving through combined electric and magnetic fields.",
    module: 4
  },
  {
    id: "differential-force",
    name: "Force on Current Element",
    equation: "dF = I dL × B",
    variables: "dF = Force, I = Current, dL = Directional line segment, B = Magnetic flux density vector",
    description: "The force experienced by a differential conductor carrying current I placed inside an external magnetic flux field.",
    module: 4
  },
  {
    id: "poynting-theorem",
    name: "Poynting Statement (Power flow)",
    equation: "S = E × H  |  P_total = ∮ (E × H) • dS",
    variables: "S = Poynting vector (W/m²), E = Electric field, H = Magnetic intensity, dS = Surface flux area",
    description: "Represent the directional energy flow density (power per unit area) of an electromagnetic wave field.",
    module: 5
  },
  {
    id: "skin-depth",
    name: "Skin Depth (Depth of Penetration)",
    equation: "δ = 1 / √(π f μ σ)",
    variables: "δ = Skin depth (m), f = Frequency (Hz), μ = Permeability (H/m), σ = Conductivity (S/m)",
    description: "The depth within a conductor at which the amplitude of an electromagnetic wave decreases to 1/e (approx 37%) of its value at the boundary.",
    module: 5
  }
];

// Modern logo: Letter L with an integrated upward arrow and a floating graduation cap
const Logo: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <div className={`relative ${className} shrink-0`}>
    <svg viewBox="0 0 32 32" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="9" fill="url(#brandGrad)" />
      {/* L Path */}
      <path d="M 11 9 L 11 23 L 21 23" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Upward progression Arrow */}
      <path d="M 16 23 L 16 13.5 M 16 13.5 L 13 16.5 M 16 13.5 L 19 16.5" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Graduation Cap floating */}
      <polygon points="11,4.5 16,6.5 11,8.5 6,6.5" fill="white" />
      <path d="M 8,7.3 L 8,10 L 11,11.2 L 14,10 L 14,7.3" fill="none" stroke="white" strokeWidth="0.8" strokeLinejoin="round" />
      <path d="M 16,6.5 L 17.5,8 L 17.5,10.5" fill="none" stroke="#93c5fd" strokeWidth="0.8" />
      <defs>
        <linearGradient id="brandGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4f46e5" />
          <stop stopColor="#2563eb" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

// Premium Apple-style Intro Animation
const IntroAnimation: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState<number>(0);
  const [currentLangIdx, setCurrentLangIdx] = useState<number>(0);
  
  const languages = ['Hello', 'Namaste', 'ನಮಸ್ಕಾರ', 'Welcome', 'VTU Students'];

  React.useEffect(() => {
    // Step 0: "Hello" for 800ms
    const timer1 = setTimeout(() => {
      setStep(1);
    }, 800);

    // Step 1: Language cycling (5 languages, 250ms each => 1250ms)
    let langInterval: NodeJS.Timeout;
    const timer2 = setTimeout(() => {
      let idx = 0;
      langInterval = setInterval(() => {
        idx++;
        if (idx < languages.length) {
          setCurrentLangIdx(idx);
        } else {
          clearInterval(langInterval);
          setStep(2); // Next step
        }
      }, 250);
    }, 800);

    // Step 2: Logo scaling & Glow (900ms)
    const timer3 = setTimeout(() => {
      setStep(3);
    }, 2050 + 900);

    // Step 3: Text & Tagline appears (1600ms)
    const timer4 = setTimeout(() => {
      localStorage.setItem('vtu_intro_played', 'true');
      onComplete();
    }, 2050 + 900 + 1600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      if (langInterval) clearInterval(langInterval);
    };
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 bg-slate-950 z-[9999] flex flex-col items-center justify-center text-white select-none overflow-hidden font-sans"
    >
      {/* Background glow accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Elegantly placed Skip button */}
      <button 
        onClick={() => {
          localStorage.setItem('vtu_intro_played', 'true');
          onComplete();
        }}
        className="absolute top-6 right-6 z-[10000] bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1.5"
      >
        <span>Skip Intro</span>
        <ChevronRight className="w-3.5 h-3.5" />
      </button>

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.h1
            key="step0"
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 1.05 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight font-sans text-center"
          >
            Hello
          </motion.h1>
        )}

        {step === 1 && (
          <motion.h1
            key={`lang-${currentLangIdx}`}
            initial={{ opacity: 0, scale: 0.92, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, y: -10 }}
            transition={{ duration: 0.18 }}
            className={`text-5xl md:text-7xl font-extrabold tracking-tight font-sans text-center ${
              languages[currentLangIdx] === 'ನಮಸ್ಕಾರ' ? 'text-indigo-400 font-sans' : 'text-white'
            }`}
          >
            {languages[currentLangIdx]}
          </motion.h1>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ 
              opacity: 1, 
              scale: [0.4, 1.15, 1],
              filter: ["drop-shadow(0 0 0px rgba(99,102,241,0))", "drop-shadow(0 0 30px rgba(99,102,241,0.6))", "drop-shadow(0 0 15px rgba(99,102,241,0.3))"]
            }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative p-6 rounded-3xl"
          >
            <Logo className="w-24 h-24 sm:w-28 sm:h-28" />
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center space-y-6 max-w-lg px-6"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
              className="flex justify-center"
            >
              <Logo className="w-16 h-16 shadow-2xl" />
            </motion.div>

            <div className="space-y-2">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="text-3xl md:text-4xl font-black tracking-tight font-sans"
              >
                Lateral Entry <span className="text-indigo-400 font-semibold">Wala</span>
              </motion.h1>
              
              <motion.p
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="text-xs text-indigo-300 font-semibold tracking-wider font-sans uppercase"
              >
                Smart VTU Preparation Starts Here
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="flex items-center justify-center gap-2.5 text-sm md:text-base font-bold text-slate-300 font-sans"
            >
              <span>Prepare Smarter</span>
              <span className="text-slate-600">•</span>
              <span>Revise Faster</span>
              <span className="text-slate-600">•</span>
              <span>Score Better</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function App() {
  const [showIntro, setShowIntro] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const played = localStorage.getItem('vtu_intro_played');
      return !played;
    }
    return false; // Safely default to false if SSR
  });

  const [showPrintModal, setShowPrintModal] = useState<boolean>(false);
  const [activeSubject, setActiveSubject] = useState<'BEC401' | 'BEC402' | 'BEC403' | 'BEC405A' | 'BBOC407'>('BEC401');
  const [isSubjectLoading, setIsSubjectLoading] = useState<boolean>(false);
  const [subjectLoadingText, setSubjectLoadingText] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'papers' | 'explorer' | 'builder' | 'formulas'>('papers');
  const [selectedPaperId, setSelectedPaperId] = useState<string>(examPapers[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedModuleFilter, setSelectedModuleFilter] = useState<number | 'all'>('all');
  const [formulaSearchQuery, setFormulaSearchQuery] = useState<string>('');
  const [customSheetTitle, setCustomSheetTitle] = useState<string>('Electromagnetics Personal Practice Test');
  const [copiedQuestionId, setCopiedQuestionId] = useState<string | null>(null);
  
  // Custom practice sheet state
  const [customSheetQuestions, setCustomSheetQuestions] = useState<Array<{
    id: string;
    paperPeriod: string;
    moduleNumber: number;
    qNumber: number;
    subNumber: string;
    text: string;
    marks: number;
    level: string;
    co: string;
    subjectCode?: string;
  }>>([]);

  const activePapers = useMemo(() => {
    switch (activeSubject) {
      case 'BEC401':
        return examPapers;
      case 'BEC402':
        return bec402Papers;
      case 'BEC403':
        return bec403Papers;
      case 'BEC405A':
        return bec405aPapers;
      case 'BBOC407':
        return bboc407Papers;
      default:
        return examPapers;
    }
  }, [activeSubject]);

  const activePaper = useMemo(() => {
    return activePapers.find(p => p.id === selectedPaperId) || activePapers[0];
  }, [selectedPaperId, activePapers]);

  // Handle loading state when changing subject
  const changeSubjectWithLoading = (subject: 'BEC401' | 'BEC402' | 'BEC403' | 'BEC405A' | 'BBOC407') => {
    if (subject === activeSubject) return;
    setIsSubjectLoading(true);
    
    const messages = [
      'Analyzing Previous Papers...',
      'Preparing Revision Data...',
      'Loading Formula Sheets...'
    ];
    
    setSubjectLoadingText(messages[0]);
    
    let msgIdx = 0;
    const interval = setInterval(() => {
      msgIdx = (msgIdx + 1) % messages.length;
      setSubjectLoadingText(messages[msgIdx]);
    }, 350);
    
    setTimeout(() => {
      clearInterval(interval);
      setActiveSubject(subject);
      setIsSubjectLoading(false);
    }, 1100);
  };

  // Synchronize paper selection and default custom sheet title when subject or papers change
  React.useEffect(() => {
    let papers = examPapers;
    let fallbackTitle = 'Electromagnetics Personal Practice Test';
    if (activeSubject === 'BEC401') {
      papers = examPapers;
      fallbackTitle = 'Electromagnetics Personal Practice Test';
    } else if (activeSubject === 'BEC402') {
      papers = bec402Papers;
      fallbackTitle = 'Principles of Communication Systems Personal Practice Test';
    } else if (activeSubject === 'BEC403') {
      papers = bec403Papers;
      fallbackTitle = 'Control Systems Personal Practice Test';
    } else if (activeSubject === 'BEC405A') {
      papers = bec405aPapers;
      fallbackTitle = 'Microcontrollers Personal Practice Test';
    } else if (activeSubject === 'BBOC407') {
      papers = bboc407Papers;
      fallbackTitle = 'Biology for Engineers Personal Practice Test';
    }
    
    if (papers && papers.length > 0) {
      setSelectedPaperId(papers[0].id);
    }
    setCustomSheetTitle(fallbackTitle);
  }, [activeSubject]);

  // Copy helper
  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedQuestionId(id);
    setTimeout(() => setCopiedQuestionId(null), 2000);
  };

  // Add question to custom practice builder
  const handleAddToCustomSheet = (
    paperPeriod: string,
    moduleNumber: number,
    qNumber: number,
    sub: SubQuestion,
    subjectCode: string
  ) => {
    const qId = `${subjectCode}-${paperPeriod}-${moduleNumber}-${qNumber}-${sub.subNumber}`;
    if (customSheetQuestions.some(q => q.id === qId)) {
      // Already added
      return;
    }
    setCustomSheetQuestions(prev => [
      ...prev,
      {
        id: qId,
        paperPeriod,
        moduleNumber,
        qNumber,
        subNumber: sub.subNumber,
        text: sub.text,
        marks: sub.marks,
        level: sub.level,
        co: sub.co,
        subjectCode
      }
    ]);
  };

  // Remove question from custom practice builder
  const handleRemoveFromCustomSheet = (qId: string) => {
    setCustomSheetQuestions(prev => prev.filter(q => q.id !== qId));
  };

  // Clear builder
  const handleClearBuilder = () => {
    if (window.confirm("Are you sure you want to clear your custom practice sheet?")) {
      setCustomSheetQuestions([]);
    }
  };

  // Gather ALL individual subquestions with metadata for search & flat display
  const allSubQuestions = useMemo(() => {
    const list: Array<{
      id: string;
      paperTitle: string;
      paperPeriod: string;
      paperId: string;
      moduleNumber: number;
      isPrimary: boolean;
      qNumber: number;
      subNumber: string;
      text: string;
      marks: number;
      level: string;
      co: string;
      subjectCode: string;
    }> = [];

    activePapers.forEach(paper => {
      paper.modules.forEach(mod => {
        // Primary
        mod.primary.subQuestions.forEach(sub => {
          list.push({
            id: `${paper.id}-mod${mod.moduleNumber}-q${mod.primary.number}-${sub.subNumber}`,
            paperTitle: paper.title,
            paperPeriod: paper.period,
            paperId: paper.id,
            moduleNumber: mod.moduleNumber,
            isPrimary: true,
            qNumber: mod.primary.number,
            subNumber: sub.subNumber,
            text: sub.text,
            marks: sub.marks,
            level: sub.level,
            co: sub.co,
            subjectCode: paper.subjectCode
          });
        });
        // Alternative (OR)
        mod.alternative.subQuestions.forEach(sub => {
          list.push({
            id: `${paper.id}-mod${mod.moduleNumber}-q${mod.alternative.number}-${sub.subNumber}`,
            paperTitle: paper.title,
            paperPeriod: paper.period,
            paperId: paper.id,
            moduleNumber: mod.moduleNumber,
            isPrimary: false,
            qNumber: mod.alternative.number,
            subNumber: sub.subNumber,
            text: sub.text,
            marks: sub.marks,
            level: sub.level,
            co: sub.co,
            subjectCode: paper.subjectCode
          });
        });
      });
    });
    return list;
  }, [activePapers]);

  // Filtered subquestions based on user query
  const filteredQuestions = useMemo(() => {
    return allSubQuestions.filter(q => {
      const matchesSearch = searchQuery === '' || 
        q.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.level.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.co.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.paperPeriod.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesModule = selectedModuleFilter === 'all' || q.moduleNumber === selectedModuleFilter;

      return matchesSearch && matchesModule;
    });
  }, [allSubQuestions, searchQuery, selectedModuleFilter]);

  // Filtered formulas
  const filteredFormulas = useMemo(() => {
    const rawFormulas = (() => {
      switch (activeSubject) {
        case 'BEC401':
          return formulas;
        case 'BEC402':
          return bec402Formulas;
        case 'BEC403':
          return bec403Formulas;
        case 'BEC405A':
          return bec405aFormulas;
        case 'BBOC407':
          return bboc407Formulas;
        default:
          return formulas;
      }
    })();
    if (formulaSearchQuery === '') return rawFormulas;
    return rawFormulas.filter(f => 
      f.name.toLowerCase().includes(formulaSearchQuery.toLowerCase()) ||
      f.equation.toLowerCase().includes(formulaSearchQuery.toLowerCase()) ||
      f.description.toLowerCase().includes(formulaSearchQuery.toLowerCase())
    );
  }, [formulaSearchQuery, activeSubject]);

  // Trigger browser printing function
  const handlePrint = () => {
    setShowPrintModal(true);
  };

  const downloadPrintableHTML = () => {
    // Find the currently visible content or print-target
    let printTarget = document.querySelector('.print-target');
    let titleStr = "VTU_Preparation_Sheet";
    let isSyllabusOrFormula = false;
    
    if (activeTab === 'papers') {
      titleStr = `VTU-${activeSubject}-Solved-Paper`;
    } else if (activeTab === 'builder') {
      titleStr = `VTU-Practice-Builder-${activeSubject}`;
    } else if (activeTab === 'formulas') {
      titleStr = `VTU-Formulas-Sheet-${activeSubject}`;
      printTarget = document.querySelector('main');
      isSyllabusOrFormula = true;
    } else {
      titleStr = `VTU-Syllabus-Explorer-${activeSubject}`;
      printTarget = document.querySelector('main');
      isSyllabusOrFormula = true;
    }

    if (!printTarget) {
      alert("No printable content found on this viewport.");
      return;
    }
    
    // Clean interactive elements if downloading syllabus or formula sheets
    let cleanHTML = printTarget.innerHTML;
    if (isSyllabusOrFormula) {
      // Create a temporary element to clean inputs or tabs
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = cleanHTML;
      // Remove interactive parts like input search boxes, navigation buttons, etc.
      const interactiveItems = tempDiv.querySelectorAll('.no-print, button, input, select, textarea, nav');
      interactiveItems.forEach(item => item.remove());
      cleanHTML = tempDiv.innerHTML;
    }

    // Wrap in a pristine, beautiful printable A4 simulation package with embedded CDN Tailwind
    const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lateral Entry Wala - ${titleStr.replace(/_/g, " ")}</title>
  <!-- Load Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Load JetBrains Mono and Inter fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
      background-color: #f1f5f9;
      color: #1e293b;
      padding: 3rem 1.5rem;
    }
    
    .paper-sheet {
      background: white;
      max-width: 850px;
      margin: 0 auto;
      padding: 3rem;
      border-radius: 1.5rem;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
      border: 1px solid #e2e8f0;
      position: relative;
    }
    
    @media print {
      @page {
        size: A4 portrait;
        margin: 15mm 15mm 15mm 15mm;
      }
      body {
        background-color: white !important;
        color: black !important;
        padding: 0 !important;
      }
      .paper-sheet {
        box-shadow: none !important;
        border: none !important;
        padding: 0 !important;
        max-width: 100% !important;
      }
      .no-print {
        display: none !important;
      }
      
      /* Diagonal watermark on every printed page */
      body::after {
        content: "Lateral Entry Wala - Exam Prep" !important;
        position: fixed !important;
        top: 50% !important;
        left: 50% !important;
        transform: translate(-50%, -50%) rotate(-35deg) !important;
        font-size: 46pt !important;
        font-weight: 800 !important;
        color: rgba(220, 220, 220, 0.16) !important;
        z-index: -1000 !important;
        pointer-events: none !important;
        white-space: nowrap !important;
        text-transform: uppercase !important;
        letter-spacing: 5px !important;
      }
    }
  </style>
</head>
<body>

  <!-- Floating Print Helper Banner -->
  <div class="no-print" style="max-width: 850px; margin: 0 auto 2rem auto; background-color: #0f172a; color: #f8fafc; padding: 1.25rem; border-radius: 1rem; border: 1px solid #1e293b; display: flex; flex-direction: row; align-items: center; justify-content: space-between; gap: 1rem;">
    <div style="flex: 1;">
      <h3 style="margin: 0; font-size: 0.875rem; font-weight: 700; color: #ffffff;">Offline Print-Ready Worksheet</h3>
      <p style="margin: 0.25rem 0 0 0; font-size: 0.75rem; color: #94a3b8; line-height: 1.4;">Direct print triggers may be blocked inside sandbox frames. Double-click any element to edit details before final printing.</p>
    </div>
    <button onclick="window.print()" style="background-color: #4f46e5; border: none; outline: none; border-radius: 0.5rem; padding: 0.5rem 1rem; color: #ffffff; font-weight: 700; font-size: 0.75rem; cursor: pointer; white-space: nowrap; transition: all 0.2s;">
      🖨️ Direct Print
    </button>
  </div>

  <div class="paper-sheet" contenteditable="true">
    ${cleanHTML}
  </div>

  <footer class="no-print" style="margin-top: 3rem; text-align: center; font-size: 0.75rem; color: #94a3b8;">
    <p>© 2026 <strong>Lateral Entry Wala</strong>. Developed for intelligent offline revision.</p>
  </footer>

</body>
</html>`;

    // Download flow
    const blob = new Blob([fullHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${titleStr.replace(/[^a-zA-Z0-9_-]/g, "_")}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      
      <AnimatePresence>
        {showIntro && (
          <IntroAnimation onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSubjectLoading && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[9990] flex items-center justify-center text-white font-sans"
          >
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-sm w-full mx-4 shadow-2xl flex flex-col items-center text-center space-y-6">
              <div className="relative">
                {/* Outer spinning ring */}
                <div className="absolute inset-0 rounded-full border-2 border-indigo-500/15 border-t-indigo-500 animate-spin" />
                {/* Subtle rotating inner logo */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="p-3"
                >
                  <Logo className="w-12 h-12" />
                </motion.div>
              </div>
              
              <div className="space-y-1.5">
                <h3 className="text-xs font-bold tracking-wider uppercase text-slate-400 font-mono">
                  Loading Syllabus Workspace
                </h3>
                <p className="text-white text-base font-semibold font-sans min-h-[1.5rem]">
                  {subjectLoadingText}
                </p>
              </div>
              
              <div className="flex gap-1 justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce" style={{ animationDelay: '0s' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce" style={{ animationDelay: '0.15s' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce" style={{ animationDelay: '0.3s' }} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Upper Navigation bar - hidden on print */}
      <nav id="top-navbar" className="no-print sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            
            {/* Logo / Brand Title */}
            <div className="flex items-center space-x-3">
              <Logo className="w-9 h-9 sm:w-10 sm:h-10" />
              <div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-extrabold text-sm sm:text-base tracking-tight text-white font-sans">
                    Lateral Entry <span className="text-indigo-400 font-semibold">Wala</span>
                  </span>
                  
                  {/* Beta Badge & Tooltip */}
                  <span className="group relative cursor-help select-none bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-semibold font-sans px-1.5 py-0.5 rounded text-[9px] tracking-wide inline-flex items-center gap-0.5 transition-all hover:bg-indigo-500/30">
                    <span>🚀</span> Beta v1.0
                    <span className="absolute left-0 top-full mt-2 w-56 p-2.5 bg-slate-800 text-slate-100 rounded-lg text-[10px] font-sans font-normal leading-relaxed shadow-xl border border-slate-700 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                      New features and additional branches will be released in upcoming updates.
                    </span>
                  </span>
                </div>
                <div className="text-[10px] text-slate-400 font-sans tracking-tight mt-0.5 font-medium leading-none">
                  Smart VTU Preparation Starts Here
                </div>
                <span className="text-[9px] text-indigo-400 font-mono tracking-wider font-bold block mt-0.5 uppercase">
                  {activeSubject === 'BEC401' && 'BEC401 • Electromagnetics'}
                  {activeSubject === 'BEC402' && 'BEC402 • Communication Systems'}
                  {activeSubject === 'BEC403' && 'BEC403 • Control Systems'}
                  {activeSubject === 'BEC405A' && 'BEC405A • Microcontrollers'}
                  {activeSubject === 'BBOC407' && 'BBOC407 • Biology for Engineers'}
                </span>
              </div>
            </div>

            {/* Practical Quick Stats */}
            <div className="hidden lg:flex items-center space-x-6 text-xs text-slate-300 font-mono border-l border-slate-800 pl-6">
              <div>
                <span className="text-slate-500 block">TOTAL PAPERS</span>
                <span className="text-white text-sm font-semibold">{activePapers.length} Papers</span>
              </div>
              <div>
                <span className="text-slate-500 block">EXTRACTED QUESTIONS</span>
                <span className="text-white text-sm font-semibold">{allSubQuestions.length} Items</span>
              </div>
              <div>
                <span className="text-slate-500 block">PRACTICE BUILDER</span>
                <span className="text-emerald-400 text-sm font-semibold">{customSheetQuestions.length} selected</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center space-x-2">
              <button 
                onClick={handlePrint}
                className="bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium shadow flex items-center gap-1.5"
                title="Print current tab layout directly to PDF"
              >
                <Printer className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Save <span className="hidden sm:inline">as PDF</span></span>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Main Tabs Segment - hidden on print */}
      <header id="tabs-header" className="no-print bg-slate-900 text-white pb-1 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex border-b border-slate-800 space-x-1 sm:space-x-4 overflow-x-auto scrollbar-none">
            
            <button
              id="tab-papers"
              onClick={() => setActiveTab('papers')}
              className={`flex items-center gap-2 py-4 px-4 text-sm font-medium border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'papers' 
                  ? 'border-indigo-500 text-indigo-400' 
                  : 'border-transparent text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Year-Wise Papers</span>
            </button>

            <button
              id="tab-explorer"
              onClick={() => setActiveTab('explorer')}
              className={`flex items-center gap-2 py-4 px-4 text-sm font-medium border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'explorer' 
                  ? 'border-indigo-500 text-indigo-400' 
                  : 'border-transparent text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              <Search className="w-4 h-4" />
              <span>Module Search Engine</span>
            </button>

            <button
              id="tab-builder"
              onClick={() => setActiveTab('builder')}
              className={`flex items-center gap-2 py-4 px-4 text-sm font-medium border-b-2 transition-all cursor-pointer whitespace-nowrap relative ${
                activeTab === 'builder' 
                  ? 'border-indigo-500 text-indigo-400' 
                  : 'border-transparent text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Practice Test Builder</span>
              {customSheetQuestions.length > 0 && (
                <span className="absolute top-2 right-0 bg-indigo-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {customSheetQuestions.length}
                </span>
              )}
            </button>

            <button
              id="tab-formulas"
              onClick={() => setActiveTab('formulas')}
              className={`flex items-center gap-2 py-4 px-4 text-sm font-medium border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'formulas' 
                  ? 'border-indigo-500 text-indigo-400' 
                  : 'border-transparent text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Formula Reference Desk</span>
            </button>

          </div>
        </div>
      </header>

      {/* Main Container Workspace */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Subject Switcher Pill Bar - hidden on print */}
        <div className="no-print mb-6 bg-slate-900/5 p-2 rounded-2xl border border-slate-250 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-2 pl-2">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">Active Syllabus Subject:</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-row flex-wrap bg-slate-200/50 p-1.5 rounded-xl border border-slate-200 w-full sm:w-auto gap-1">
            <button
              onClick={() => changeSubjectWithLoading('BEC401')}
              className={`text-xs font-semibold px-3 py-2 rounded-lg transition-all duration-150 cursor-pointer text-center ${
                activeSubject === 'BEC401'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-300/30'
              }`}
            >
              Electromagnetics (BEC401)
            </button>
            <button
              onClick={() => changeSubjectWithLoading('BEC402')}
              className={`text-xs font-semibold px-3 py-2 rounded-lg transition-all duration-150 cursor-pointer text-center ${
                activeSubject === 'BEC402'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-300/30'
              }`}
            >
              Communication (BEC402)
            </button>
            <button
              onClick={() => changeSubjectWithLoading('BEC403')}
              className={`text-xs font-semibold px-3 py-2 rounded-lg transition-all duration-150 cursor-pointer text-center ${
                activeSubject === 'BEC403'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-300/30'
              }`}
            >
              Control Systems (BEC403)
            </button>
            <button
              onClick={() => changeSubjectWithLoading('BEC405A')}
              className={`text-xs font-semibold px-3 py-2 rounded-lg transition-all duration-150 cursor-pointer text-center ${
                activeSubject === 'BEC405A'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-300/30'
              }`}
            >
              Microcontrollers (BEC405A)
            </button>
            <button
              onClick={() => changeSubjectWithLoading('BBOC407')}
              className={`text-xs font-semibold px-3 py-2 rounded-lg transition-all duration-150 cursor-pointer text-center ${
                activeSubject === 'BBOC407'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-300/30'
              }`}
            >
              Biology / Eng (BBOC407)
            </button>
          </div>
        </div>

        {/* Dynamic Instructional Banner - hidden on print */}
        <div className="no-print mb-6 bg-blue-50 border-l-4 border-indigo-500 p-4 rounded-r-xl shadow-xs flex items-start gap-3">
          <Info className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-slate-700">
            <span className="font-semibold block text-indigo-900">How to print or export as PDF:</span>
            <p className="mt-1 leading-relaxed">
              Click the <span className="font-bold text-indigo-700">Save as PDF</span> button at the top-right to capture the active view. In the print dialog, we suggest setting the destination to <span className="font-semibold">"Save as PDF"</span>, paper size of <span className="font-semibold">"A4"</span>, and checking <span className="font-semibold">"Background graphics"</span> to preserve full layout, colors, and stamps!
            </p>
          </div>
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          
          {/* TAB 1: YEAR-WISE OFFICIAL PAPERS */}
          {activeTab === 'papers' && (
            <motion.div
              key="papers-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
            >
              
              {/* Homepage Hero and Features Grid - hidden on print */}
              <div className="no-print mb-8 space-y-12">
                
                {/* Hero Welcome banner */}
                <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-blue-950 rounded-3xl p-6 md:p-10 text-white relative overflow-hidden border border-slate-800 shadow-xl">
                  {/* Subtle decorative glowing background layers */}
                  <div className="absolute right-0 top-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute left-1/3 bottom-0 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
                  
                  {/* Floating micro-particles */}
                  <div className="absolute top-1/4 left-[8%] w-1.5 h-1.5 bg-indigo-400/40 rounded-full animate-pulse pointer-events-none" />
                  <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-bounce pointer-events-none" style={{ animationDuration: '4s' }} />
                  <div className="absolute top-2/3 right-[10%] w-1 h-1 bg-white/40 rounded-full animate-pulse pointer-events-none" style={{ animationDuration: '3s' }} />
                  
                  <div className="relative space-y-4 max-w-3xl">
                    <div className="inline-flex items-center gap-2 bg-indigo-600/35 text-indigo-200 border border-indigo-500/40 px-3 py-1 rounded-full text-xs font-semibold font-sans tracking-wide">
                      <span>🎯</span> Exam Preparation Zone
                    </div>
                    <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-sans leading-tight">
                      Prepare Smarter, Score Higher on <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">Lateral Entry Wala</span>
                    </h1>
                    <p className="text-slate-300 text-xs sm:text-xs md:text-sm leading-relaxed normal-case font-sans">
                      Helping VTU students prepare smarter through previous year paper analysis, formula sheets, important questions, and revision resources. Designed for all VTU students, regardless of branch or admission type.
                    </p>
                    <div className="pt-2 flex flex-wrap gap-3">
                      <a 
                        href="#paper-selector" 
                        className="bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all text-white px-5 py-2.5 rounded-xl text-xs font-semibold shadow-lg inline-flex items-center gap-2"
                      >
                        <span>Start Paper Analysis</span>
                        <ChevronRight className="w-4 h-4" />
                      </a>
                      <button 
                        onClick={() => setActiveTab('formulas')}
                        className="bg-slate-800/80 hover:bg-slate-700/80 hover:text-white border border-slate-700 transition-all text-slate-200 px-5 py-2.5 rounded-xl text-xs font-semibold inline-flex items-center gap-2"
                      >
                        <span>View Revision Formulas</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Current & Upcoming Coverage Section with Glassmorphism */}
                <div className="bg-gradient-to-br from-indigo-50/50 via-white to-sky-50/50 rounded-3xl p-6 md:p-8 border border-white/80 shadow-md backdrop-blur-md relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200/20 rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute bottom-0 left-1/3 w-40 h-40 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />
                  
                  <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    
                    {/* Left block: Current Coverage */}
                    <div className="md:col-span-5 space-y-4">
                      <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-bold font-sans tracking-wide">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span>Active Coverage</span>
                      </div>
                      <h3 className="text-lg font-extrabold text-slate-900 tracking-tight font-sans">
                        Current Coverage
                      </h3>
                      <div className="bg-white/80 border border-slate-200/40 rounded-2xl p-4 shadow-2xs hover:shadow-xs transition-all duration-350 hover:scale-[1.01] flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-emerald-55 flex items-center justify-center text-emerald-600 font-bold shrink-0 text-lg">
                          ✅
                        </div>
                        <div>
                          <p className="font-extrabold text-slate-800 text-sm font-sans">ECE 4th Semester Available</p>
                           <p className="text-[11px] text-slate-500 font-sans mt-0.5 leading-tight">Full subject papers, searchable syllabus, numerical formulas and builders are live.</p>
                        </div>
                      </div>
                    </div>

                    {/* Divider for MD+ screens */}
                    <div className="hidden md:block md:col-span-1 h-3/4 border-r border-slate-200/80 mx-auto" />

                    {/* Right block: Upcoming Coverage */}
                    <div className="md:col-span-6 space-y-3">
                      <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest font-sans">
                        Upcoming Coverage Description
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {['ECE Other Semesters', 'CSE', 'ISE', 'AIML', 'EEE', 'Mechanical', 'Civil', 'All VTU Branches'].map((branch, idx) => (
                          <span 
                            key={idx} 
                            className="bg-white hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-100 border border-slate-200/60 text-slate-600 font-semibold font-sans px-2.5 py-1 rounded-lg text-[11px] tracking-tight transition-colors duration-200 cursor-default shadow-3xs"
                          >
                            ⏳ {branch}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed font-sans pt-1">
                        More branches and semesters will be added progressively based on student demand and available data.
                      </p>
                    </div>

                  </div>
                </div>

                {/* 9. Why Use Lateral Entry Wala? Section */}
                <div className="space-y-4">
                  <div className="text-center md:text-left space-y-1">
                    <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight font-sans">
                      Why Use Lateral Entry Wala?
                    </h2>
                    <p className="text-slate-500 text-xs sm:text-sm font-sans">
                      Helping VTU students prepare smarter through previous year paper analysis, formula sheets, important questions, and revision resources.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {/* Card 1 */}
                    <div className="bg-white p-5 rounded-2xl border border-slate-150 shadow-2xs hover:shadow-xs transition-all duration-200 hover:-translate-y-0.5 group">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-extrabold group-hover:bg-indigo-600 group-hover:text-white transition-all">
                        📊
                      </div>
                      <h3 className="font-bold text-slate-800 text-sm mt-3 group-hover:text-indigo-600 transition-all font-sans">Previous Paper Analysis</h3>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed font-sans font-sans">Identify frequently asked questions and frequently tested areas.</p>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white p-5 rounded-2xl border border-slate-150 shadow-2xs hover:shadow-xs transition-all duration-200 hover:-translate-y-0.5 group">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-extrabold group-hover:bg-indigo-600 group-hover:text-white transition-all">
                        📘
                      </div>
                      <h3 className="font-bold text-slate-800 text-sm mt-3 group-hover:text-indigo-600 transition-all font-sans font-sans">Formula Revision</h3>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed font-sans font-sans">Quick revision sheets for exams, accessible on demand.</p>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white p-5 rounded-2xl border border-slate-150 shadow-2xs hover:shadow-xs transition-all duration-200 hover:-translate-y-0.5 group">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-extrabold group-hover:bg-indigo-600 group-hover:text-white transition-all">
                        🎯
                      </div>
                      <h3 className="font-bold text-slate-800 text-sm mt-3 group-hover:text-indigo-600 transition-all font-sans">Important Questions</h3>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed font-sans font-sans font-sans">Focus and drill on questions with highest exam probability.</p>
                    </div>
                    {/* Card 4 */}
                    <div className="bg-white p-5 rounded-2xl border border-slate-150 shadow-2xs hover:shadow-xs transition-all duration-200 hover:-translate-y-0.5 group">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-extrabold group-hover:bg-indigo-600 group-hover:text-white transition-all">
                        📄
                      </div>
                      <h3 className="font-bold text-slate-800 text-sm mt-3 group-hover:text-indigo-600 transition-all font-sans">Original PDFs</h3>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed font-sans font-sans">Verify diagrams and statements directly from scanned copies.</p>
                    </div>
                    {/* Card 5 */}
                    <div className="bg-white p-5 rounded-2xl border border-slate-150 shadow-2xs hover:shadow-xs transition-all duration-200 hover:-translate-y-0.5 group">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-extrabold group-hover:bg-indigo-600 group-hover:text-white transition-all">
                        ⚡
                      </div>
                      <h3 className="font-bold text-slate-800 text-sm mt-3 group-hover:text-indigo-600 transition-all font-sans">Fast Access</h3>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed font-sans font-sans">No annoying logs, passwords, or unnecessary educational clutter.</p>
                    </div>
                  </div>
                </div>

                {/* 2. Official Question Paper PDF Section */}
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight font-sans">
                      Official Question Paper PDF
                    </h2>
                    <p className="text-slate-500 text-xs sm:text-sm font-sans font-sans">
                      Verify diagrams, equations, symbols and question wording directly from the original VTU paper.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {/* Card BEC401 */}
                    <div className="bg-white p-5 rounded-2xl border border-slate-150 shadow-2xs hover:shadow-xs transition-all duration-200 flex flex-col justify-between group hover:border-indigo-200">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-mono text-xs font-extrabold text-slate-400">BEC401</span>
                          <span className="text-xl">📄</span>
                        </div>
                        <h3 className="font-bold text-slate-800 text-xs sm:text-sm leading-tight group-hover:text-indigo-600 transition-colors font-sans">Electromagnetics PDF</h3>
                        <p className="text-[11px] text-slate-400 mt-1 font-mono">2022 Scheme</p>
                      </div>
                      <div className="mt-4">
                        <a 
                          href="https://drive.google.com/file/d/113-Gb-FvONH955wpngJRgfrdEhrLh2lM/view?usp=sharing" 
                          target="_blank" 
                          rel="noreferrer"
                          className="w-full text-center bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white transition-all duration-150 py-2 rounded-xl text-xs font-semibold block border border-indigo-100"
                        >
                          View PDF
                        </a>
                      </div>
                    </div>

                    {/* Card BEC402 */}
                    <div className="bg-white p-5 rounded-2xl border border-slate-150 shadow-2xs hover:shadow-xs transition-all duration-200 flex flex-col justify-between group hover:border-indigo-200">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-mono text-xs font-extrabold text-slate-400">BEC402</span>
                          <span className="text-xl">📄</span>
                        </div>
                        <h3 className="font-bold text-slate-800 text-xs sm:text-sm leading-tight group-hover:text-indigo-600 transition-colors font-sans font-sans">Principles of Comm PDF</h3>
                        <p className="text-[11px] text-slate-400 mt-1 font-mono">2022 Scheme</p>
                      </div>
                      <div className="mt-4">
                        <a 
                          href="https://drive.google.com/file/d/1wmvG9C6Hmvef93THqhTqqb-nxCGjRnry/view?usp=sharing" 
                          target="_blank" 
                          rel="noreferrer"
                          className="w-full text-center bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white transition-all duration-150 py-2 rounded-xl text-xs font-semibold block border border-indigo-100"
                        >
                          View PDF
                        </a>
                      </div>
                    </div>

                    {/* Card BEC403 */}
                    <div className="bg-white p-5 rounded-2xl border border-slate-150 shadow-2xs hover:shadow-xs transition-all duration-200 flex flex-col justify-between group hover:border-indigo-200">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-mono text-xs font-extrabold text-slate-400 font-sans">BEC403</span>
                          <span className="text-xl">📄</span>
                        </div>
                        <h3 className="font-bold text-slate-800 text-xs sm:text-sm leading-tight group-hover:text-indigo-600 transition-colors font-sans font-sans">Control Systems PDF</h3>
                        <p className="text-[11px] text-slate-400 mt-1 font-mono">2022 Scheme</p>
                      </div>
                      <div className="mt-4">
                        <a 
                          href="https://drive.google.com/file/d/1Cm-2_16GvuzlX2d7YyrqQ3VytGLyLTja/view?usp=sharing" 
                          target="_blank" 
                          rel="noreferrer"
                          className="w-full text-center bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white transition-all duration-150 py-2 rounded-xl text-xs font-semibold block border border-indigo-100"
                        >
                          View PDF
                        </a>
                      </div>
                    </div>

                    {/* Card BEC405A */}
                    <div className="bg-white p-5 rounded-2xl border border-slate-150 shadow-2xs hover:shadow-xs transition-all duration-200 flex flex-col justify-between group hover:border-indigo-200">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-mono text-xs font-extrabold text-slate-400">BEC405A</span>
                          <span className="text-xl">📄</span>
                        </div>
                        <h3 className="font-bold text-slate-800 text-xs sm:text-sm leading-tight group-hover:text-indigo-600 transition-colors font-sans font-sans font-sans">Microcontrollers PDF</h3>
                        <p className="text-[11px] text-slate-400 mt-1 font-mono">2022 Scheme</p>
                      </div>
                      <div className="mt-4">
                        <a 
                          href="https://drive.google.com/file/d/1vImaINYAO8Z_Zs87Th42JgKdEK5GxfyQ/view?usp=sharing" 
                          target="_blank" 
                          rel="noreferrer"
                          className="w-full text-center bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white transition-all duration-150 py-2 rounded-xl text-xs font-semibold block border border-indigo-100"
                        >
                          View PDF
                        </a>
                      </div>
                    </div>

                    {/* Card BBOC407 */}
                    <div className="bg-white p-5 rounded-2xl border border-slate-150 shadow-2xs hover:shadow-xs transition-all duration-200 flex flex-col justify-between group hover:border-indigo-200">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-mono text-xs font-extrabold text-slate-400">BBOC407</span>
                          <span className="text-xl">📄</span>
                        </div>
                        <h3 className="font-bold text-slate-800 text-xs sm:text-sm leading-tight group-hover:text-indigo-600 transition-colors font-sans font-sans">Biology for Engineers PDF</h3>
                        <p className="text-[11px] text-slate-400 mt-1 font-mono">2022 Scheme</p>
                      </div>
                      <div className="mt-4">
                        <a 
                          href="https://drive.google.com/file/d/1TMkuaY4xHOa-Fq2RoxfODEerNvjDue4J/view?usp=sharing" 
                          target="_blank" 
                          rel="noreferrer"
                          className="w-full text-center bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white transition-all duration-150 py-2 rounded-xl text-xs font-semibold block border border-indigo-100"
                        >
                          View PDF
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 12. Future Features Placeholder Section */}
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-1 bg-indigo-100/70 text-indigo-700 px-2.5 py-0.5 rounded-full text-[10px] font-bold font-sans tracking-wide uppercase">
                      🚀 Coming Soon
                    </div>
                    <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight font-sans">
                      Future Modules & Systems
                    </h2>
                    <p className="text-slate-500 text-xs sm:text-sm font-sans">
                      Our engineering design team is actively coding robust secondary modules to raise your aggregate grades.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {/* Box 1 */}
                    <div className="bg-slate-100/70 hover:bg-white p-5 rounded-2xl border border-dashed border-slate-350 hover:border-indigo-300 hover:shadow-xs transition-all duration-300 hover:scale-[1.02] transform relative group overflow-hidden">
                      <div className="text-lg">🔮</div>
                      <h3 className="font-bold text-slate-800 text-sm mt-3 font-sans">AI Question Trend Analysis</h3>
                      <p className="text-xs text-slate-500 mt-1.5 leading-relaxed font-sans">
                        Advanced mathematical modeling scanning recurring terms inside historic VTU question banks to verify major exam patterns.
                      </p>
                    </div>

                    {/* Box 2 */}
                    <div className="bg-slate-100/70 hover:bg-white p-5 rounded-2xl border border-dashed border-slate-350 hover:border-indigo-300 hover:shadow-xs transition-all duration-300 hover:scale-[1.02] transform relative group overflow-hidden">
                      <div className="text-lg">📊</div>
                      <h3 className="font-bold text-slate-800 text-sm mt-3 font-sans">Subject-wise Formula Companion</h3>
                      <p className="text-xs text-slate-500 mt-1.5 leading-relaxed font-sans">
                        Interactive, searchable quick reference guides for core mathematical, physical, and general equations categorized per module.
                      </p>
                    </div>

                    {/* Box 3 */}
                    <div className="bg-slate-100/70 hover:bg-white p-5 rounded-2xl border border-dashed border-slate-350 hover:border-indigo-300 hover:shadow-xs transition-all duration-300 hover:scale-[1.02] transform relative group overflow-hidden">
                      <div className="text-lg">🔍</div>
                      <h3 className="font-bold text-slate-800 text-sm mt-3 font-sans">Smart Search</h3>
                      <p className="text-xs text-slate-500 mt-1.5 leading-relaxed font-sans">
                        Query equations, question numbers, or syllabus keywords with precise fuzzy search matching for rapid workspace navigation.
                      </p>
                    </div>

                    {/* Box 4 */}
                    <div className="bg-slate-100/70 hover:bg-white p-5 rounded-2xl border border-dashed border-slate-350 hover:border-indigo-300 hover:shadow-xs transition-all duration-300 hover:scale-[1.02] transform relative group overflow-hidden">
                      <div className="text-lg">📋</div>
                      <h3 className="font-bold text-slate-800 text-sm mt-3 font-sans">Revision Dashboard</h3>
                      <p className="text-xs text-slate-500 mt-1.5 leading-relaxed font-sans">
                        A dedicated central user page to track completed papers, rate card difficulties, and manage personalized study analytics.
                      </p>
                    </div>

                    {/* Box 5 */}
                    <div className="bg-slate-100/70 hover:bg-white p-5 rounded-2xl border border-dashed border-slate-350 hover:border-indigo-300 hover:shadow-xs transition-all duration-300 hover:scale-[1.02] transform relative group overflow-hidden">
                      <div className="text-lg">❓</div>
                      <h3 className="font-bold text-slate-800 text-sm mt-3 font-sans">Important Question Detection</h3>
                      <p className="text-xs text-slate-500 mt-1.5 leading-relaxed font-sans">
                        Identify and spotlight repeat topics that have appeared across multiple previous years with structural weight ratings.
                      </p>
                    </div>

                    {/* Box 6 */}
                    <div className="bg-slate-100/70 hover:bg-white p-5 rounded-2xl border border-dashed border-slate-350 hover:border-indigo-300 hover:shadow-xs transition-all duration-300 hover:scale-[1.02] transform relative group overflow-hidden">
                      <div className="text-lg">🤖</div>
                      <h3 className="font-bold text-slate-800 text-sm mt-3 font-sans">Personalized Study Assistant</h3>
                      <p className="text-xs text-slate-500 mt-1.5 leading-relaxed font-sans">
                        Generate specific study and revision blocks structured precisely according to active VTU exam calendars.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Paper Select Dropbar - hidden on print */}
              <div id="paper-selector" className="no-print bg-white p-6 rounded-2xl shadow-xs border border-slate-100 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <label htmlFor="paper-selector" className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">Select Examination Paper</label>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5 text-indigo-600" />
                    <select
                      id="paper-selector"
                      value={selectedPaperId}
                      onChange={(e) => setSelectedPaperId(e.target.value)}
                      className="bg-slate-100 hover:bg-slate-200 border-none rounded-lg px-3 py-2 font-semibold text-slate-800 focus:ring-2 focus:ring-indigo-500 transition-all text-base focus:outline-none cursor-pointer"
                    >
                      {activePapers.map((paper) => (
                        <option key={paper.id} value={paper.id}>
                          {paper.period} ({paper.subjectCode}) - {paper.title.replace("Fourth Semester ", "")}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                {/* Paper Info Tags */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="px-3 py-1.5 bg-slate-100 border border-slate-200 text-slate-600 text-xs font-mono font-medium rounded-lg">
                    Subject: {activePaper.subjectName}
                  </div>
                  <div className="px-3 py-1.5 bg-slate-100 border border-slate-200 text-slate-600 text-xs font-mono font-medium rounded-lg">
                    Code: {activePaper.subjectCode}
                  </div>
                  <div className="px-3 py-1.5 bg-slate-100 border border-slate-200 text-slate-600 text-xs font-mono font-medium rounded-lg">
                    Scheme: {activePaper.scheme}
                  </div>
                </div>
              </div>

              {/* The Exam Sheet Sandbox - This gets targeted for print and mimics VTU CBCS Exam forms exactly */}
              <div className="print-target bg-white rounded-3xl shadow-md border border-slate-100 p-6 md:p-12 relative overflow-hidden">
                
                {/* Decorative VTU-style upper borders (stamps look) */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-indigo-600 no-print" />
                
                {/* PDF Header Block: Mimics standard VTU layout */}
                <div className="print-header border-b-2 border-slate-900 pb-6 mb-8 relative">
                  
                  {/* Schemes indicator */}
                  <div className="absolute right-0 top-0 text-right no-print">
                    <span className="inline-block border-2 border-dashed border-indigo-600 text-indigo-600 font-bold px-3 py-1 text-sm rounded-lg tracking-widest uppercase font-mono transform rotate-2">
                      {activePaper.scheme}
                    </span>
                  </div>

                  {/* Course Code Block */}
                  <div className="flex justify-between items-center gap-4 mb-6">
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                      VTU CURRICULUM PREPARATION
                    </span>
                    <div className="font-mono text-sm bg-slate-900 text-white font-bold px-3 py-1.5 rounded uppercase tracking-wider">
                      {activePaper.subjectCode}
                    </div>
                  </div>

                  {/* Main Title of the Paper */}
                  <div className="text-center space-y-2 py-4">
                    <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 font-sans">
                      {activePaper.title}
                    </h1>
                    <p className="text-lg font-bold text-slate-700 tracking-wide uppercase font-mono">
                      {activePaper.subjectName}
                    </p>
                  </div>

                  {/* Meta Stats Row */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm font-mono text-slate-600 border-t border-b border-slate-200 py-3 mt-4">
                    <div>
                      <span className="text-slate-400 text-xs block font-sans">TIME DURATION</span>
                      <strong className="text-slate-800">{activePaper.timeStr}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 text-xs block font-sans">MAXIMUM MARKS</span>
                      <strong className="text-slate-800">{activePaper.maxMarks} Marks</strong>
                    </div>
                    <div className="col-span-2">
                      <span className="text-slate-400 text-xs block font-sans">EXAM SCHEME / SYSTEM</span>
                      <strong className="text-indigo-600 uppercase font-bold">{activePaper.scheme}</strong>
                    </div>
                  </div>

                  {/* Instructions Area */}
                  <div className="mt-4 p-4.5 bg-amber-50/50 border border-amber-100 rounded-xl text-xs text-slate-700 space-y-1">
                    <span className="font-bold uppercase text-amber-900 flex items-center gap-1">
                      <Info className="w-3.5 h-3.5" /> Note / Instructions
                    </span>
                    <ol className="list-decimal list-inside space-y-1 pl-1">
                      {activePaper.instructions.map((ins, idx) => (
                        <li key={idx}>{ins}</li>
                      ))}
                    </ol>
                  </div>

                </div>

                {/* Modules Segment: 1 to 5 */}
                <div className="space-y-12">
                  {activePaper.modules.map((mod) => (
                    <div key={mod.moduleNumber} className="print-module border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
                      
                      {/* Module Title bar */}
                      <div className="bg-slate-100 border-b border-slate-200 px-6 py-3 flex justify-between items-center">
                        <span className="font-bold text-slate-900 font-sans tracking-wide text-sm uppercase">
                          Module - {mod.moduleNumber}
                        </span>
                        <span className="text-[10px] font-mono font-bold bg-indigo-50 border border-indigo-200 text-indigo-700 px-2 py-0.5 rounded-full uppercase no-print">
                          UNIT CO{mod.moduleNumber}
                        </span>
                      </div>

                      {/* Unified Questions Table */}
                      <div className="overflow-x-auto w-full">
                        <table className="w-full text-left border-collapse min-w-[700px] md:min-w-0">
                          <thead>
                            <tr className="bg-slate-50 border-b border-slate-200 font-mono text-[10px] uppercase font-bold text-slate-500">
                              <th className="py-2.5 px-4 text-center w-12 border-r border-slate-200">Q.No</th>
                              <th className="py-2.5 px-3 text-center w-8 border-r border-slate-200">Sub</th>
                              <th className="py-2.5 px-4 md:px-6">Question Description</th>
                              <th className="py-2.5 px-3 text-center w-12 border-l border-slate-200">M</th>
                              <th className="py-2.5 px-3 text-center w-12 border-l border-slate-200">L</th>
                              <th className="py-2.5 px-3 text-center w-12 border-l border-slate-200">CO</th>
                              <th className="py-2.5 px-3 text-center w-16 border-l border-slate-200 no-print">Actions</th>
                            </tr>
                          </thead>
                        <tbody>
                          
                          {/* PRIMARY OPTION Q-ROW */}
                          {mod.primary.subQuestions.map((sub, idx) => (
                            <tr 
                              key={`${mod.primary.number}-${sub.subNumber}`} 
                              className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors group"
                            >
                              {idx === 0 && (
                                <td 
                                  rowSpan={mod.primary.subQuestions.length} 
                                  className="py-3 px-4 text-center font-bold text-slate-900 font-mono align-middle border-r border-slate-200 bg-white"
                                >
                                  {mod.primary.number}
                                </td>
                              )}
                              
                              <td className="py-3 px-3 text-center font-mono font-medium text-slate-800 border-r border-slate-200 bg-slate-50/20">
                                {sub.subNumber}.
                              </td>
                              
                              <td className="py-3 px-3 md:px-6 text-slate-800 font-sans text-sm leading-relaxed whitespace-pre-line font-normal">
                                <div>{sub.text}</div>
                                <SyllabusDiagram questionText={sub.text} subjectCode={activePaper.subjectCode} />
                              </td>
                              
                              <td className="py-3 px-3 text-center font-mono text-slate-900 font-medium border-l border-slate-200">
                                {sub.marks}
                              </td>
                              
                              <td className="py-3 px-3 text-center font-mono text-slate-500 text-xs border-l border-slate-200">
                                {sub.level}
                              </td>
                              
                              <td className="py-3 px-3 text-center font-mono text-slate-500 text-xs border-l border-slate-200">
                                {sub.co}
                              </td>

                              <td className="py-3 px-3 text-center border-l border-slate-200 no-print">
                                <div className="flex items-center justify-center space-x-1">
                                  <button
                                    onClick={() => handleCopyText(sub.text, `${mod.primary.number}-${sub.subNumber}`)}
                                    className="p-1.5 rounded text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all cursor-pointer"
                                    title="Copy question text"
                                  >
                                    {copiedQuestionId === `${mod.primary.number}-${sub.subNumber}` ? (
                                      <Check className="w-3.5 h-3.5 text-green-500" />
                                    ) : (
                                      <ClipboardCopy className="w-3.5 h-3.5" />
                                    )}
                                  </button>
                                  <button
                                    onClick={() => handleAddToCustomSheet(activePaper.period, mod.moduleNumber, mod.primary.number, sub, activePaper.subjectCode)}
                                    className="p-1.5 rounded text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all cursor-pointer"
                                    title="Add to Custom Practice Sheet"
                                  >
                                    <Plus className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}

                          {/* "OR" DIVIDER ROW */}
                          <tr className="bg-amber-50/20 border-b border-dashed border-slate-200 font-bold">
                            <td colSpan={7} className="py-2.5 text-center text-xs uppercase font-mono tracking-widest text-slate-500 relative">
                              <span className="relative z-10 px-4 bg-amber-50/90 text-amber-800 rounded">OR</span>
                              <div className="absolute inset-y-1/2 left-0 right-0 border-t border-dashed border-slate-200 -z-0"></div>
                            </td>
                          </tr>

                          {/* ALTERNATIVE OPTION Q-ROW */}
                          {mod.alternative.subQuestions.map((sub, idx) => (
                            <tr 
                              key={`${mod.alternative.number}-${sub.subNumber}`} 
                              className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors group"
                            >
                              {idx === 0 && (
                                <td 
                                  rowSpan={mod.alternative.subQuestions.length} 
                                  className="py-3 px-4 text-center font-bold text-slate-900 font-mono align-middle border-r border-slate-200 bg-white"
                                >
                                  {mod.alternative.number}
                                </td>
                              )}
                              
                              <td className="py-3 px-3 text-center font-mono font-medium text-slate-800 border-r border-slate-200 bg-slate-50/20">
                                {sub.subNumber}.
                              </td>
                              
                              <td className="py-3 px-3 md:px-6 text-slate-800 font-sans text-sm leading-relaxed whitespace-pre-line font-normal">
                                <div>{sub.text}</div>
                                <SyllabusDiagram questionText={sub.text} subjectCode={activePaper.subjectCode} />
                              </td>
                              
                              <td className="py-3 px-3 text-center font-mono text-slate-900 font-medium border-l border-slate-200">
                                {sub.marks}
                              </td>
                              
                              <td className="py-3 px-3 text-center font-mono text-slate-500 text-xs border-l border-slate-200">
                                {sub.level}
                              </td>
                              
                              <td className="py-3 px-3 text-center font-mono text-slate-500 text-xs border-l border-slate-200">
                                {sub.co}
                              </td>

                              <td className="py-3 px-3 text-center border-l border-slate-200 no-print">
                                <div className="flex items-center justify-center space-x-1">
                                  <button
                                    onClick={() => handleCopyText(sub.text, `${mod.alternative.number}-${sub.subNumber}`)}
                                    className="p-1.5 rounded text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all cursor-pointer"
                                    title="Copy question text"
                                  >
                                    {copiedQuestionId === `${mod.alternative.number}-${sub.subNumber}` ? (
                                      <Check className="w-3.5 h-3.5 text-green-500" />
                                    ) : (
                                      <ClipboardCopy className="w-3.5 h-3.5" />
                                    )}
                                  </button>
                                  <button
                                    onClick={() => handleAddToCustomSheet(activePaper.period, mod.moduleNumber, mod.alternative.number, sub, activePaper.subjectCode)}
                                    className="p-1.5 rounded text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all cursor-pointer"
                                    title="Add to Custom Practice Sheet"
                                  >
                                    <Plus className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}

                        </tbody>
                      </table>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer seal of the VTU Paper - Hidden in print */}
                <div className="border-t border-slate-100 mt-12 pt-8 text-slate-400 no-print">
                  <div className="max-w-xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left shadow-xs">
                    <span className="text-sm font-extrabold text-slate-800 flex items-center gap-1.5 mb-2 font-sans">
                      🎯 Exam Preparation Zone
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      Success in VTU examinations comes from consistency, smart revision and solving previous year papers.
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans mt-2">
                      Analyze trends, focus on frequently asked questions, revise formulas regularly and verify important concepts using the original VTU question papers.
                    </p>
                    <div className="mt-3 text-xs font-bold text-indigo-650 font-sans">
                      Wishing you all the best for your examinations.
                    </div>
                    <div className="mt-1 text-[11px] font-extrabold text-indigo-500 uppercase font-mono tracking-wide">
                      Study smart. Stay consistent. Score higher.
                    </div>
                  </div>
                </div>

              </div>

            </motion.div>
          )}

          {/* TAB 2: SPECIFIC MODULE SEARCH ENGINE */}
          {activeTab === 'explorer' && (
            <motion.div
              key="explorer-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="space-y-6"
            >
              
              {/* Comprehensive search box */}
              <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-100 space-y-4">
                <h2 className="text-lg font-bold text-slate-900 font-sans">Module & Sub-topic Search Engine</h2>
                <p className="text-slate-500 text-sm">
                  {activeSubject === 'BEC401' ? (
                    <>
                      Filter questions by their specified syllabus module, or query exact key terms like <code className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-indigo-600 text-xs">Poynting</code>, <code className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-indigo-600 text-xs">co-axial</code>, <code className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-indigo-600 text-xs">Laplace</code>, or <code className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-indigo-600 text-xs">Coulomb</code>.
                    </>
                  ) : (
                    <>
                      Filter questions by their specified syllabus module, or query exact key terms like <code className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-indigo-600 text-xs">Superheterodyne</code>, <code className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-indigo-600 text-xs">PLL</code>, <code className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-indigo-600 text-xs">AM Diode</code>, or <code className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-indigo-600 text-xs">Delta Modulation</code>.
                    </>
                  )}
                </p>

                <div className="flex flex-col md:flex-row gap-4">
                  {/* Text search */}
                  <div className="relative flex-1">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search questions by formulas, objects, or levels (e.g. skin depth, lossless, L3)..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-slate-800 text-sm"
                    />
                  </div>

                  {/* Module buttons */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-semibold font-mono text-slate-400 uppercase tracking-wider mr-2">Module:</span>
                    <button
                      onClick={() => setSelectedModuleFilter('all')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                        selectedModuleFilter === 'all' 
                          ? 'bg-slate-900 text-white' 
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      All Modules
                    </button>
                    {[1, 2, 3, 4, 5].map((index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedModuleFilter(index)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                          selectedModuleFilter === index 
                            ? 'bg-indigo-600 text-white' 
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        Module {index}
                      </button>
                    ))}
                  </div>

                </div>
              </div>

              {/* Listing result container */}
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm font-semibold font-mono text-slate-500 pl-1">
                  <span>SEARCH RESULTS ({filteredQuestions.length} Questions found)</span>
                  {selectedModuleFilter !== 'all' && (
                    <span className="text-indigo-600">Unit CO{selectedModuleFilter} Scope</span>
                  )}
                </div>

                {filteredQuestions.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredQuestions.map((q) => (
                      <div 
                        key={q.id}
                        className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-indigo-400 hover:shadow-xs transition-all flex flex-col justify-between"
                      >
                        <div className="space-y-3">
                          
                          {/* Year / Module Tag header */}
                          <div className="flex justify-between items-center text-xs font-mono">
                            <span className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded font-bold">
                              {q.paperPeriod}
                            </span>
                            <span className="text-slate-400">
                              Module {q.moduleNumber} • Q{q.qNumber}{q.subNumber}
                            </span>
                          </div>

                          <p className="text-slate-800 text-sm leading-relaxed whitespace-pre-line font-normal font-sans">
                            {q.text}
                          </p>
                          <SyllabusDiagram questionText={q.text} subjectCode={q.subjectCode} />

                        </div>

                        {/* Card metadata and actions row */}
                        <div className="border-t border-slate-100 mt-4 pt-3.5 flex justify-between items-center text-xs font-mono">
                          <div className="flex items-center space-x-2">
                            <span className="text-slate-600 font-semibold bg-slate-100 px-2 py-0.5 rounded">
                              {q.marks} Marks
                            </span>
                            <span className="text-slate-400">
                              {q.level} • {q.co}
                            </span>
                          </div>

                          <div className="flex items-center space-x-1">
                            <button
                              onClick={() => handleCopyText(q.text, q.id)}
                              className="p-1 rounded text-slate-400 hover:text-slate-600 transition-all cursor-pointer"
                              title="Copy prompt text"
                            >
                              {copiedQuestionId === q.id ? (
                                <Check className="w-4 h-4 text-green-500" />
                              ) : (
                                <ClipboardCopy className="w-4 h-4" />
                              )}
                            </button>
                            <button
                              onClick={() => handleAddToCustomSheet(q.paperPeriod, q.moduleNumber, q.qNumber, { subNumber: q.subNumber, text: q.text, marks: q.marks, level: q.level, co: q.co }, q.subjectCode)}
                              className="p-1 rounded text-slate-400 hover:text-indigo-600 transition-all cursor-pointer"
                              title="Add to Custom practice sheet"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center space-y-3">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
                      <Search className="w-6 h-6" />
                    </div>
                    <div className="font-semibold text-slate-800">No matching questions located</div>
                    <p className="text-slate-400 text-xs max-w-md mx-auto">
                      Try updating your filters or expanding your keywords. Standard terms like "electric", "potential", "divergence", or "magnetic" yield the best matches.
                    </p>
                  </div>
                )}
              </div>

            </motion.div>
          )}

          {/* TAB 3: CUSTOM PRACTICE TEST BUILDER */}
          {activeTab === 'builder' && (
            <motion.div
              key="builder-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="space-y-6"
            >
              
              {/* Controls bar */}
              <div className="no-print bg-white p-4 sm:p-6 rounded-2xl shadow-xs border border-slate-100 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                <div className="space-y-1 w-full lg:flex-1">
                  <h2 className="text-lg font-bold text-slate-900 font-sans">Practice Paper Customizer</h2>
                  <p className="text-slate-500 text-xs sm:text-sm">
                    Customize the exam title, review your curated question list, and hit "Save as PDF" to generate a vectorized student study plan.
                  </p>
                  <input
                    type="text"
                    value={customSheetTitle}
                    onChange={(e) => setCustomSheetTitle(e.target.value)}
                    placeholder="Enter Custom practice title here..."
                    className="w-full max-w-xl px-3 py-2 border border-slate-200 bg-slate-50 rounded-lg text-sm text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all mt-2"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
                  <button
                    onClick={handleClearBuilder}
                    disabled={customSheetQuestions.length === 0}
                    className="flex-1 lg:flex-none justify-center px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold border border-slate-200 hover:border-slate-300 hover:bg-slate-100 disabled:opacity-50 disabled:pointer-events-none rounded-lg text-slate-600 transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Reset List</span>
                  </button>
                  <button
                    onClick={handlePrint}
                    disabled={customSheetQuestions.length === 0}
                    className="flex-1 lg:flex-none justify-center px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none rounded-lg text-white shadow transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print PDF Sheet</span>
                  </button>
                </div>
              </div>

              {/* Curated list */}
              {customSheetQuestions.length > 0 ? (
                <div className="print-target bg-white rounded-3xl border border-slate-150 p-6 md:p-12 relative">
                  
                  {/* Practice sheet header */}
                  <div className="print-header border-b-2 border-slate-900 pb-6 mb-8">
                    <div className="flex justify-between items-center mb-6">
                      <div className="font-mono text-xs font-semibold text-slate-500 bg-slate-100 border border-slate-200 rounded px-3 py-1 uppercase tracking-wider">
                        Syllabus Prep Sheet
                      </div>
                      <div className="font-mono text-sm font-semibold text-slate-400 uppercase">
                        BEC401 Electromagnetics
                      </div>
                    </div>

                    <div className="text-center space-y-2 py-4">
                      <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
                        {customSheetTitle}
                      </h1>
                      <p className="text-sm font-mono font-bold text-indigo-600 uppercase tracking-widest">
                        Electromagnetics Theory (BEC401)
                      </p>
                    </div>

                    <div className="flex justify-between items-center text-xs font-mono text-slate-500 mt-4 border-t border-slate-100 pt-3">
                      <span>Curated Practice Paper</span>
                      <span>Total Questions: {customSheetQuestions.length}</span>
                      <span>Selected Max Marks: {customSheetQuestions.reduce((sum, q) => sum + q.marks, 0)} Pts</span>
                    </div>
                  </div>

                  {/* Printable curriculum listing */}
                  <div className="overflow-x-auto w-full">
                    <table className="w-full text-left border-collapse min-w-[700px] md:min-w-0">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 font-mono text-[10px] uppercase font-bold text-slate-500">
                          <th className="py-2.5 px-4 text-center w-12 border-r border-slate-200">Index</th>
                          <th className="py-2.5 px-4 md:px-6">Selected Exam Query Content</th>
                          <th className="py-2.5 px-3 text-center w-12 border-l border-slate-200">M</th>
                          <th className="py-2.5 px-3 text-center w-12 border-l border-slate-200">L</th>
                          <th className="py-2.5 px-3 text-center w-12 border-l border-slate-200">CO</th>
                          <th className="py-2.5 px-4 text-center w-16 border-l border-slate-200 no-print">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {customSheetQuestions.map((q, index) => (
                          <tr key={q.id} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                            <td className="py-3.5 px-4 text-center font-bold text-slate-900 font-mono border-r border-slate-200 align-middle bg-slate-50/20">
                              {index + 1}
                            </td>
                            <td className="py-3.5 px-4 md:px-6 font-sans text-sm leading-relaxed text-slate-800">
                              <div className="text-xs font-semibold text-indigo-500 font-mono mb-1 uppercase no-print">
                                From: {q.paperPeriod} (Module {q.moduleNumber})
                              </div>
                              <p className="whitespace-pre-line">{q.text}</p>
                              <SyllabusDiagram questionText={q.text} subjectCode={q.subjectCode || 'BEC401'} />
                            </td>
                          <td className="py-3.5 px-3 text-center font-mono font-medium text-slate-900 border-l border-slate-200">
                            {q.marks}
                          </td>
                          <td className="py-3.5 px-3 text-center font-mono text-slate-500 text-xs border-l border-slate-200">
                            {q.level}
                          </td>
                          <td className="py-3.5 px-3 text-center font-mono text-slate-500 text-xs border-l border-slate-200">
                            {q.co}
                          </td>
                          <td className="py-3.5 px-4 text-center border-l border-slate-200 no-print">
                            <button
                              onClick={() => handleRemoveFromCustomSheet(q.id)}
                              className="p-1 px-2 rounded bg-red-50 text-red-500 hover:bg-red-100 transition-all duration-150 cursor-pointer text-xs font-semibold flex items-center gap-1 mx-auto"
                              title="Delete from list"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                              <span>Remove</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  </div>

                  {/* Seal */}
                  <div className="border-t border-slate-150 mt-12 pt-8 text-center text-slate-400 font-mono text-xs">
                    <div>* * * * * ENTRANCE TO STUDY PREPARATION * * * * *</div>
                    <div className="mt-1 text-[10px] text-slate-300">Generated using {activeSubject} previous examination portal</div>
                  </div>

                </div>
              ) : (
                <div className="bg-white border border-slate-200 rounded-3xl p-16 text-center space-y-4">
                  <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <Layers className="w-8 h-8" />
                  </div>
                  <div className="space-y-1 block">
                    <h3 className="font-semibold text-slate-800 text-lg">Your practice sheet is empty</h3>
                    <p className="text-slate-400 text-xs max-w-md mx-auto">
                      Navigate to the <span className="font-semibold text-indigo-500">Year-Wise Papers</span> or <span className="font-semibold text-indigo-500">Module Search Engine</span> tab, find questions you want to work on, and click the plus <span className="font-bold font-mono">(+)</span> buttons to assemble a custom printable PDF sheet!
                    </p>
                  </div>
                </div>
              )}

            </motion.div>
          )}

          {/* TAB 4: ADVANCED FORMULA REFERENCE SHEET */}
          {activeTab === 'formulas' && (
            <motion.div
              key="formulas-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="space-y-6"
            >
              
              {/* Formula Search Header */}
              <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="space-y-1 flex-1">
                  <h2 className="text-lg font-bold font-sans flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-indigo-400" />
                    {activeSubject === 'BBOC407' 
                      ? 'BBOC407: Important Concepts & Quick Revision Sheet' 
                      : `${activeSubject}: Important Formulas & Quick Revision Sheet`}
                  </h2>
                  <p className="text-slate-400 text-xs">
                    {activeSubject === 'BBOC407'
                      ? 'Frequently used biological definitions, concepts and exam-oriented expressions extracted for quick revision.'
                      : 'Frequently used equations, formulas and exam-oriented expressions extracted for quick revision.'}
                  </p>
                </div>
                <div className="relative w-full md:w-80">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Filter formulas (e.g. divergence, skin depth)..."
                    value={formulaSearchQuery}
                    onChange={(e) => setFormulaSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs placeholder-slate-500"
                  />
                </div>
              </div>

              {/* Grid Layout of formulas */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFormulas.map((f, idx) => (
                  <div 
                    key={f.id}
                    className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-xs hover:border-indigo-300 transition-all"
                  >
                    <div className="space-y-4">
                      {/* Name of formula and Module indication */}
                      <div className="flex justify-between items-start">
                        <span className="font-bold text-slate-800 text-sm tracking-tight leading-tight">{f.name}</span>
                        <span className="bg-slate-100 text-slate-500 font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">
                          Module {f.module}
                        </span>
                      </div>

                      {/* Display Box for Equation */}
                      <div className="bg-indigo-900/5 hover:bg-indigo-900/10 transition-colors p-4 rounded-xl text-center border border-indigo-100">
                        <code className="text-indigo-900 font-mono font-bold text-sm tracking-wider break-words block">
                          {f.equation}
                        </code>
                      </div>

                      {/* Desription of variables */}
                      <div className="space-y-1 text-xs">
                        <span className="text-slate-400 block font-mono">VARIABLES DEFINED:</span>
                        <p className="text-slate-600 leading-relaxed font-mono text-[11px] bg-slate-50 border border-slate-100 p-2 rounded">
                          {f.variables}
                        </p>
                      </div>

                      {/* General explanation */}
                      <p className="text-slate-500 text-xs leading-relaxed">
                        {f.description}
                      </p>
                    </div>

                    {/* Quick navigation anchor */}
                    <div className="border-t border-slate-100 mt-5 pt-3 flex justify-between items-center text-xs">
                      <span className="text-slate-400 font-medium">Tested in exams</span>
                      <button
                        onClick={() => {
                          setSearchQuery(f.name.split(" ")[0]);
                          setSelectedModuleFilter(f.module);
                          setActiveTab('explorer');
                        }}
                        className="text-indigo-600 hover:text-indigo-800 font-bold transition-all cursor-pointer flex items-center gap-1 hover:translate-x-0.5"
                      >
                        <span>Find Question</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                  </div>
                ))}
              </div>

            </motion.div>
          )}

        </AnimatePresence>

      </main>

      {/* Persistent printable page break helper - custom professional EdTech footer */}
      <footer className="bg-slate-950 text-slate-400 text-xs py-16 mt-20 no-print border-t border-slate-800 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
            {/* Column 1: Branding Logo & Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Logo className="w-8 h-8" />
                <span className="font-extrabold text-base tracking-tight text-white">
                  Lateral Entry <span className="text-indigo-400 font-semibold">Wala</span>
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed text-xs">
                Helping VTU students prepare smarter through previous year paper analysis, formula sheets, important questions, and revision resources. Designed for all VTU branches and semesters.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-4">
              <h3 className="text-white font-bold tracking-wider text-xs uppercase">Platform Tools</h3>
              <ul className="space-y-2.5">
                <li>
                  <button 
                    onClick={() => {
                      const top = document.getElementById('top-navbar');
                      top?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-indigo-400 transition-colors cursor-pointer text-left focus:outline-none"
                  >
                    Home / Back to Top
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      setActiveTab('papers');
                      const el = document.getElementById('paper-selector');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-indigo-400 transition-colors cursor-pointer text-left focus:outline-none"
                  >
                    Previous Year Papers
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('explorer')}
                    className="hover:text-indigo-400 transition-colors cursor-pointer text-left focus:outline-none"
                  >
                    Syllabus Explorer
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('formulas')}
                    className="hover:text-indigo-400 transition-colors cursor-pointer text-left focus:outline-none"
                  >
                    Quick Revision Sheets
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('builder')}
                    className="hover:text-indigo-400 transition-colors cursor-pointer text-left focus:outline-none"
                  >
                    Custom Sandbox Practice
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Community / Contributions */}
            <div className="space-y-4 flex flex-col items-start justify-start">
              <h3 className="text-white font-bold tracking-wider text-xs uppercase">Contribute</h3>
              <p className="text-slate-450 text-[11px] leading-relaxed">
                Want to help fellow VTU students? Contribute papers, handwritten notes, quick sheets, bug coordinates, or general UI suggestions.
              </p>
              <a 
                href="https://forms.gle/EjQ4WasLvYWVrBb99" 
                target="_blank" 
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all text-white font-bold font-sans px-4 py-2.5 rounded-xl text-[11px] shadow-sm w-full sm:w-auto text-center justify-center cursor-pointer hover:shadow-md"
              >
                <span>Join Our Team</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Column 4: Disclaimer */}
            <div className="space-y-4">
              <h3 className="text-white font-bold tracking-wider text-xs uppercase font-sans">Educational Disclaimer</h3>
              <p className="text-slate-500 leading-normal text-[11px] font-sans">
                Lateral Entry Wala is an independent educational platform created for academic assistance and exam preparation. This platform is not affiliated with Visvesvaraya Technological University (VTU). Students should verify diagrams, equations, and examination content using official VTU resources and original question papers.
              </p>
            </div>

          </div>

          {/* Bottom Footer Bar */}
          <div className="border-t border-slate-900 mt-12 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-slate-500 text-[11px] font-sans">
            <div className="space-y-1 max-w-xl">
              <p className="text-slate-500 leading-relaxed text-[11px]">
                © 2026 <span className="text-slate-400 font-semibold">Lateral Entry Wala</span>. All Rights Reserved. Built for VTU Students across all branches.
              </p>
            </div>
            <div className="flex items-center gap-3 bg-slate-900/40 border border-slate-800/80 px-3.5 py-2 rounded-2xl shrink-0">
              <span className="text-slate-400 font-sans">Designed & Developed with ❤️ by <span className="text-indigo-400 font-semibold">Ayan Ainaf</span></span>
              <span className="text-slate-700">|</span>
              <a 
                href="https://linkedin.com/in/ayan-ainaf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-indigo-400 font-semibold font-sans transition-all duration-300 hover:scale-[1.03] group cursor-pointer"
                id="developer-linkedin-link"
              >
                <Linkedin className="w-4 h-4 text-sky-500 group-hover:scale-110 group-hover:rotate-3 transition-transform" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

        </div>
      </footer>

      {/* Print/Save Workspace Modal */}
      <AnimatePresence>
        {showPrintModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[9995] flex items-center justify-center p-4 print:hidden"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 max-w-xl w-full shadow-2xl relative overflow-hidden"
            >
              {/* Decorative Header Glow */}
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-indigo-600/20 rounded-full blur-2xl pointer-events-none animate-pulse" />
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-emerald-600/20 rounded-full blur-2xl pointer-events-none" />

              <div className="flex justify-between items-start mb-6 relative">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-indigo-400 tracking-widest uppercase">
                    Revision Hub Export
                  </span>
                  <h3 className="text-white text-xl font-extrabold tracking-tight font-sans">
                    Save or Print Workspace
                  </h3>
                </div>
                <button
                  onClick={() => setShowPrintModal(false)}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white p-2 rounded-xl transition-all cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4 mb-6 relative text-slate-300 text-xs sm:text-sm font-sans">
                <p className="leading-relaxed text-slate-400 font-sans">
                  Select how you would like to render and download your revision sheet. Standard browser print triggers are often restricted by embedded developer sandboxes.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  
                  {/* Option 1: Standalone HTML Download */}
                  <button
                    onClick={() => {
                      downloadPrintableHTML();
                      setShowPrintModal(false);
                    }}
                    className="flex flex-col items-start p-5 rounded-2xl bg-slate-800/50 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/40 text-left transition-all duration-200 group cursor-pointer hover:shadow-lg"
                  >
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 mb-4 group-hover:scale-105 transition-transform">
                      <Download className="w-5 h-5" />
                    </div>
                    <span className="text-white font-bold text-sm tracking-tight font-sans">Download Clean HTML</span>
                    <span className="text-slate-400 text-[11px] leading-relaxed mt-1 font-sans">
                      Generates a premium auto-formatted, self-contained file with the diagonal watermark. Best for editing and reliable offline printing.
                    </span>
                  </button>

                  {/* Option 2: Browser Print Trigger */}
                  <button
                    onClick={() => {
                      setShowPrintModal(false);
                      setTimeout(() => {
                        window.print();
                      }, 300);
                    }}
                    className="flex flex-col items-start p-5 rounded-2xl bg-slate-800/50 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/40 text-left transition-all duration-200 group cursor-pointer hover:shadow-lg"
                  >
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 mb-4 group-hover:scale-105 transition-transform">
                      <Printer className="w-5 h-5" />
                    </div>
                    <span className="text-white font-bold text-sm tracking-tight font-sans">Direct Browser Print</span>
                    <span className="text-slate-400 text-[11px] leading-relaxed mt-1 font-sans">
                      Opens the default browser print window directly. Note: If this fails to open in the embedded preview, click <b>Open in New Tab</b> at top-right first!
                    </span>
                  </button>

                </div>

                {/* Helpful Tip */}
                <div className="bg-slate-950/40 rounded-2xl p-4 border border-slate-800">
                  <div className="flex gap-2">
                    <span className="text-base leading-none">💡</span>
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-bold text-slate-300 font-sans">Watermark Added</h4>
                      <p className="text-[11px] text-slate-500 leading-normal font-sans">
                        Both methods automatically append our subtle, light grey <b>'Lateral Entry Wala - Exam Prep'</b> diagonal print watermark across every page.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="flex justify-end gap-2 relative border-t border-slate-800/80 pt-4">
                <button
                  onClick={() => setShowPrintModal(false)}
                  className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs cursor-pointer transition-all active:scale-95 font-sans"
                >
                  Close
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
