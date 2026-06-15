/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ExamPaper } from './types.ts';

export interface BiologyConcept {
  id: string;
  name: string;
  equation: string; // Used for Key Analogy or core structure
  variables: string; // Used for Key Examples
  description: string;
  module: number;
}

export const bboc407Formulas: BiologyConcept[] = [
  {
    id: "plant-vs-animal-cells",
    name: "Cell Structure Analogy",
    equation: "Eukaryotic Cell = Organelles + Nucleus (Enclosed DNA)",
    variables: "Plant: Cell Wall, Chloroplasts, Large Vacuoles | Animal: Centrioles, Lysosomes",
    description: "The fundamental structural comparison containing specific organelle modifications to enable photo-autotrophy vs heterotrophy.",
    module: 1
  },
  {
    id: "enzymes-lock-key",
    name: "Enzyme Catalysis (Michaelis-Menten Model)",
    equation: "E + S ⇌ ES → E + P  |  V = (V_max * [S]) / (K_m + [S])",
    variables: "E = Enzyme, S = Substrate, ES = Complex, P = Product, K_m = Michaelis constant",
    description: "Enzymes accelerate chemical reactions with remarkable specificity by lowering activation energy barriers.",
    module: 1
  },
  {
    id: "dna-double-helix",
    name: "Watson-Crick DNA Base Pairing",
    equation: "[A] = [T] and [G] = [C] (Chargaff's Rule)",
    variables: "DNA: Adenine-Thymine (2 Hydrogen bonds), Guanine-Cytosine (3 Hydrogen bonds)",
    description: "Anti-parallel double helical structure providing high-fidelity template reproduction and forensic fingerprinting utility.",
    module: 2
  },
  {
    id: "biodiesel-transesterification",
    name: "Biodiesel Transesterification Process",
    equation: "Triglyceride + 3 Methanol ⇌ Glycerol + 3 Fatty Acid Methyl Esters (Biodiesel)",
    variables: "Catalysts: NaOH / KOH, Source: Lipids/Vegetable Oils",
    description: "Chemical conversion converting natural highly-viscous lipid esters into low-viscosity liquid biofuels.",
    module: 2
  },
  {
    id: "brain-cpu-analogy",
    name: "Neuromorphic Computing Analogy",
    equation: "Synapse-Neuron Node Array ⇌ Transistor-Logic Gates System",
    variables: "Brain: Parallel multi-path processing (~10 Hz), CPU: Synchronous clock sequence (~GHz)",
    description: "Contrasts the biophysical neural networks featuring high fault tolerance and low power vs digital microprocessors.",
    module: 3
  },
  {
    id: "kidney-filtration-rate",
    name: "Glomerular Filtration Rate (GFR)",
    equation: "GFR = NFP * K_f ≈ 125 mL/min (Average Human)",
    variables: "NFP = Net Filtration Pressure, K_f = Filtration coefficient",
    description: "The clearance rate measuring kidney performance. Dialysis machines mimic this selectively via hollow-fiber semipermeable membranes.",
    module: 3
  },
  {
    id: "shark-skin-hydrodynamics",
    name: "Riblet Mechanism for Drag Reduction",
    equation: "Riblet Spacing (s+) ≈ 10 to 15 Viscous Wall Units",
    variables: "Alters near-wall turbulent vortex sweeps to reduce viscous skin-friction by up to 10%",
    description: "Bio-inspired micro-grooved shark-skin shapes used to design fast racing swimwear and aerodynamic airplane skins.",
    module: 4
  },
  {
    id: "kingfisher-beak-train",
    name: "Biomimetic Bullet Train Aeroacoustics",
    equation: "Acoustic Pressure Pulse dP ∝ Area change rate dS/dt",
    variables: "Nose shape transition based on Kingfisher beak coordinates to prevent tunnel sonic boom",
    description: "Reduces aerodynamic pressure drag and atmospheric noise when Shinkansen trains emerge from narrow tunnels at high-speed.",
    module: 4
  },
  {
    id: "bio-hybrid-computing",
    name: "DNA Origami & Biological Scaffolding",
    equation: "Self-assembled tiles + staple strands ⇌ Nanoscale Logic gates",
    variables: "Direct custom geometric coordinate assemblies via engineered DNA hybridization loops",
    description: "Utilizes synthetic DNA molecules to build highly dense biological computational states or cellular scaffolding arrays.",
    module: 5
  },
  {
    id: "self-healing-concrete",
    name: "Bio-mineralization Concrete Process",
    equation: "Ca(C₃H₅O₃)₂ + O₂ + CO₂ → CaCO₃ (Precipitated Calcite) + Biomaterial residues",
    variables: "Microorganism: Bacillus pseudofirmus, Nutrient: Calcium lactate",
    description: "Microbial spores embedded in dry concrete activate upon moisture seepage, precipitating calcite to seal cracks autonomously.",
    module: 5
  }
];

export const bboc407Papers: ExamPaper[] = [
  {
    id: "bboc407-dec-2024-jan-2025",
    title: "Fourth Semester B.E./B.Tech. Degree Examination",
    period: "Dec.24 / Jan.2025",
    subjectCode: "BBOC407",
    subjectName: "Biology for Engineers",
    scheme: "CBCS Scheme",
    timeStr: "3 hrs.",
    maxMarks: 100,
    instructions: [
      "Answer any FIVE full questions, choosing ONE full question from each module.",
      "M : Marks, L : Bloom's level, C : Course outcomes.",
      "Support all questions with clear descriptions and structural diagrams where appropriate."
    ],
    modules: [
      {
        moduleNumber: 1,
        primary: {
          number: 1,
          subQuestions: [
            {
              subNumber: "a",
              text: "Define cell. Explain the structure and function of plant cell with a neat schematic representation of cell organelles.",
              marks: 8,
              level: "L2",
              co: "CO1"
            },
            {
              subNumber: "b",
              text: "Define Stem Cell. Discuss the various types (embryonic, adult, pluripotency) and high-impact therapeutic applications of stem cells.",
              marks: 6,
              level: "L2",
              co: "CO1"
            },
            {
              subNumber: "c",
              text: "Describe the physiological properties and coordinate endocrine functions of hormones in human metabolism regulation.",
              marks: 6,
              level: "L2",
              co: "CO1"
            }
          ]
        },
        alternative: {
          number: 2,
          subQuestions: [
            {
              subNumber: "a",
              text: "Discuss the biochemical properties and roles of nucleic acids (DNA and RNA) inside primary cellular processes.",
              marks: 7,
              level: "L2",
              co: "CO1"
            },
            {
              subNumber: "b",
              text: "Discuss the kinetic properties and functional roles of enzymes as active biochemical catalysts lowering activation energy.",
              marks: 7,
              level: "L2",
              co: "CO1"
            },
            {
              subNumber: "c",
              text: "Discuss the dietary properties of biological vitamins and check the impacts of their systemic deficiency vs supply sources.",
              marks: 6,
              level: "L2",
              co: "CO1"
            }
          ]
        }
      },
      {
        moduleNumber: 2,
        primary: {
          number: 3,
          subQuestions: [
            {
              subNumber: "a",
              text: "Apply the knowledge of nucleic acid structure to demonstrate how DNA fingerprinting is conducted in forensic analysis and paternity verification.",
              marks: 8,
              level: "L3",
              co: "CO1"
            },
            {
              subNumber: "b",
              text: "Discuss the structural differences and nutritional advantages of whey protein compared to plant-based proteins in protein engineering.",
              marks: 6,
              level: "L2",
              co: "CO1"
            },
            {
              subNumber: "c",
              text: "Write a technical note on Polylactic Acid (PLA) as a major bioplastic, focusing on its synthesis and biological degradation cycles.",
              marks: 6,
              level: "L1",
              co: "CO1"
            }
          ]
        },
        alternative: {
          number: 4,
          subQuestions: [
            {
              subNumber: "a",
              text: "Apply your chemical knowledge of lipid compounds to outline the transesterification process used to convert lipids into biodiesel.",
              marks: 7,
              level: "L3",
              co: "CO1"
            },
            {
              subNumber: "b",
              text: "Define vaccine. Discuss the biophysical mechanisms and lipid nanoparticle delivery vectors of mRNA vaccines for COVID-19.",
              marks: 7,
              level: "L2",
              co: "CO1"
            },
            {
              subNumber: "c",
              text: "Write a high-level note on enzyme-based biosensors, explaining transducer conversion mechanisms and typical clinical uses.",
              marks: 6,
              level: "L1",
              co: "CO1"
            }
          ]
        }
      },
      {
        moduleNumber: 3,
        primary: {
          number: 5,
          subQuestions: [
            {
              subNumber: "a",
              text: "Conduct a systematic architectural comparison between the human brain and a computer's central processing unit (CPU) regarding processing speeds, power requirements, and neural networks vs transistor circuits.",
              marks: 7,
              level: "L3",
              co: "CO2"
            },
            {
              subNumber: "b",
              text: "Explain the biophysics of human lungs acting as a blood gas purification system via diffusion boundaries across thin alveoli membranes.",
              marks: 7,
              level: "L2",
              co: "CO2"
            },
            {
              subNumber: "c",
              text: "Write a note on artificial kidney dialysis systems, comparing hemodialysis flow configurations to organic filtration processes.",
              marks: 6,
              level: "L1",
              co: "CO2"
            }
          ]
        },
        alternative: {
          number: 6,
          subQuestions: [
            {
              subNumber: "a",
              text: "Illustrate the modern neuroengineering and deep-brain stimulation solutions available for Parkinson's disease treatment.",
              marks: 7,
              level: "L3",
              co: "CO2"
            },
            {
              subNumber: "b",
              text: "Explain the anatomical structure and biophysical hydraulic performance of the human heart acting as a continuous mechanical pumping system.",
              marks: 7,
              level: "L2",
              co: "CO2"
            },
            {
              subNumber: "c",
              text: "Write a concise note on optical refractions inside human vision, optical correction, and state modern prosthetic lens material parameters.",
              marks: 6,
              level: "L1",
              co: "CO2"
            }
          ]
        }
      },
      {
        moduleNumber: 4,
        primary: {
          number: 7,
          subQuestions: [
            {
              subNumber: "a",
              text: "Illustrate the formulation, composition, and relative therapeutic effectiveness of Hemoglobin-Based Oxygen Carriers (HBOCs) and Perfluorocarbons (PFCs) as modern blood substitutes.",
              marks: 7,
              level: "L3",
              co: "CO3"
            },
            {
              subNumber: "b",
              text: "Explain how the microscopic riblet structure of shark skin reduces hydrodynamic drag forces. Discuss how this biomechanical logic has been applied to high-performance swimsuit textures.",
              marks: 7,
              level: "L2",
              co: "CO3"
            },
            {
              subNumber: "c",
              text: "Explain how GPS navigation and bird flight mechanics inspired aerodynamic wings and target control algorithms inside aircraft design.",
              marks: 6,
              level: "L2",
              co: "CO3"
            }
          ]
        },
        alternative: {
          number: 8,
          subQuestions: [
            {
              subNumber: "a",
              text: "Compare of acoustic frequency ranges and transceiver requirements between medical ultrasonography diagnostics and marine sonars.",
              marks: 7,
              level: "L3",
              co: "CO3"
            },
            {
              subNumber: "b",
              text: "Discuss the aerodynamic optimization of the Shinkansen bullet train nose design inspired by the Kingfisher bird's beak, noting tunnel boom noise reduction.",
              marks: 6,
              level: "L2",
              co: "CO3"
            },
            {
              subNumber: "c",
              text: "Explain the microscopic chemical structures that trigger the physical superhydrophobic self-cleaning qualities observed in the lotus leaf effect.",
              marks: 7,
              level: "L2",
              co: "CO3"
            }
          ]
        }
      },
      {
        moduleNumber: 5,
        primary: {
          number: 9,
          subQuestions: [
            {
              subNumber: "a",
              text: "Explain how bioimaging is coupled with artificial intelligence convolutional neural networks for automated tumor diagnosis and tissue screening.",
              marks: 8,
              level: "L2",
              co: "CO4"
            },
            {
              subNumber: "b",
              text: "Explain the working principles and multi-receptor transduction of an electronic tongue and electronic nose utilized in automated food industry safety tests.",
              marks: 6,
              level: "L2",
              co: "CO4"
            },
            {
              subNumber: "c",
              text: "Write an engineering note on bioengineering muscular scaffold designs developed for treating muscular dystrophy and osteoporosis mineral decay.",
              marks: 6,
              level: "L1",
              co: "CO4"
            }
          ]
        },
        alternative: {
          number: 10,
          subQuestions: [
            {
              subNumber: "a",
              text: "Explain the biochemical operations of biomining, noting how specific microbes utilize cellular surface adsorption to selectively extract rare earth metals from low-grade ores.",
              marks: 7,
              level: "L2",
              co: "CO4"
            },
            {
              subNumber: "b",
              text: "Describe the structural coordinates of DNA Origami. How is DNA folding deployed to create logic states within nanoscale bio-computing?",
              marks: 6,
              level: "L2",
              co: "CO4"
            },
            {
              subNumber: "c",
              text: "Write a high-impact note detailing self-healing bioconcrete. Explain the enzymatic pathways of Bacillus spores precipitating calcium carbonate in microcracks.",
              marks: 7,
              level: "L1",
              co: "CO4"
            }
          ]
        }
      }
    ]
  },
  {
    id: "bboc407-june-july-2024",
    title: "Fourth Semester B.E./B.Tech. Degree Examination",
    period: "June / July 2024",
    subjectCode: "BBOC407",
    subjectName: "Biology for Engineers",
    scheme: "CBCS Scheme",
    timeStr: "3 hrs.",
    maxMarks: 100,
    instructions: [
      "Answer any FIVE full questions, choosing ONE full question from each module.",
      "M : Marks, L : Bloom's level, C : Course outcomes."
    ],
    modules: [
      {
        moduleNumber: 1,
        primary: {
          number: 1,
          subQuestions: [
            {
              subNumber: "a",
              text: "What is a cell? Explain the key cytological differences between Prokaryotic cells and Eukaryotic cells in brief.",
              marks: 10,
              level: "L2",
              co: "CO1"
            },
            {
              subNumber: "b",
              text: "With a neat labelled schematic drawing, explain the layout and specific roles of plant cell and animal cell organelles.",
              marks: 10,
              level: "L2",
              co: "CO1"
            }
          ]
        },
        alternative: {
          number: 2,
          subQuestions: [
            {
              subNumber: "a",
              text: "What is a biomolecule? Classify and explain biomolecules (proteins, carbohydrates, lipids, and nucleic acids) with structures.",
              marks: 10,
              level: "L1",
              co: "CO1"
            },
            {
              subNumber: "b",
              text: "Explain enzyme lock-and-key and induced-fit models. Detail the thermodynamic mechanism of activation energy suppression.",
              marks: 10,
              level: "L2",
              co: "CO1"
            }
          ]
        }
      },
      {
        moduleNumber: 2,
        primary: {
          number: 3,
          subQuestions: [
            {
              subNumber: "a",
              text: "What are bioplastics? Conduct a comparative evaluation of synthesis, tensile properties, and bio-recycling between PHA and PLA.",
              marks: 10,
              level: "L1",
              co: "CO1"
            },
            {
              subNumber: "b",
              text: "With a precise molecular flow, explain the design, cellular uptake, and antigen-expression stages of DNA-based vaccines.",
              marks: 10,
              level: "L3",
              co: "CO2"
            }
          ]
        },
        alternative: {
          number: 4,
          subQuestions: [
            {
              subNumber: "a",
              text: "Explain the hydrophobic and hydrophilic orientations of lipid molecules. Describe how their chemical structure is utilized to make soaps and commercial cleaning agents.",
              marks: 10,
              level: "L2",
              co: "CO2"
            },
            {
              subNumber: "b",
              text: "Discuss the global biosecurity R&D efforts and cellular platforms deployed in the speedy development of recombinant vaccine platforms for COVID-19.",
              marks: 10,
              level: "L2",
              co: "CO2"
            }
          ]
        }
      },
      {
        moduleNumber: 3,
        primary: {
          number: 5,
          subQuestions: [
            {
              subNumber: "a",
              text: "Discuss the structural organization of the human brain as an adaptive CPU. Contrast synaptic neuro-plasticity with static silicon logic.",
              marks: 10,
              level: "L3",
              co: "CO2"
            },
            {
              subNumber: "b",
              text: "What is Electrocardiography (ECG)? Explain polarization waveforms and label the physiological events of absolute P-Q-R-S-T waves.",
              marks: 10,
              level: "L2",
              co: "CO2"
            }
          ]
        },
        alternative: {
          number: 6,
          subQuestions: [
            {
              subNumber: "a",
              text: "Describe the human kidney as a selective physical filtration network. Explain the biochemical filtering done in the nephrons.",
              marks: 10,
              level: "L3",
              co: "CO2"
            },
            {
              subNumber: "b",
              text: "What are cardiac pacemakers? Discuss the differences between asynchronous, demand, and bio-compatible rate-responsive pacemakers.",
              marks: 10,
              level: "L2",
              co: "CO2"
            }
          ]
        }
      },
      {
        moduleNumber: 4,
        primary: {
          number: 7,
          subQuestions: [
            {
              subNumber: "a",
              text: "Define biological echolocation. Discuss how the ultrasonic echoes used by bats are mimicked in clinical Ultrasonography scanner systems.",
              marks: 10,
              level: "L1",
              co: "CO1"
            },
            {
              subNumber: "b",
              text: "Explain the streamline profiles of Kingfisher beaks. Discuss the aerodynamic simulations used to solve drag and sonic booms in Bullet Trains.",
              marks: 10,
              level: "L2",
              co: "CO2"
            }
          ]
        },
        alternative: {
          number: 8,
          subQuestions: [
            {
              subNumber: "a",
              text: "Discuss synthetic blood substitutes. Note structural oxygen transportation limits inside modern hemoglobin alternative vectors.",
              marks: 10,
              level: "L1",
              co: "CO1"
            },
            {
              subNumber: "b",
              text: "What is the lotus effect? Detail the microscopic waxes and pocket air structures that yield highly hydrophobic self-cleaning surfaces.",
              marks: 10,
              level: "L4",
              co: "CO2"
            }
          ]
        }
      },
      {
        moduleNumber: 5,
        primary: {
          number: 9,
          subQuestions: [
            {
              subNumber: "a",
              text: "Detail how fibrous protein polymers and synthetic matrix networks act as physical skeletal scaffolds in tissue engineering.",
              marks: 10,
              level: "L3",
              co: "CO4"
            },
            {
              subNumber: "b",
              text: "Discuss the mathematical deployment of deep machine learning and automated object detection models in early-stage oncology diagnostics.",
              marks: 10,
              level: "L4",
              co: "CO4"
            }
          ]
        },
        alternative: {
          number: 10,
          subQuestions: [
            {
              subNumber: "a",
              text: "What is 3D Bioprinting? Outline cellular encapsulation, hydrogel scaffold requirements, and major bio-printing applications.",
              marks: 10,
              level: "L4",
              co: "CO4"
            },
            {
              subNumber: "b",
              text: "Write critical technical assessments of:\n(i) Electronic Tongue transduction mechanisms\n(ii) Bio-mineralization processes in dry crack sealants.",
              marks: 10,
              level: "L3",
              co: "CO4"
            }
          ]
        }
      }
    ]
  }
];
