/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ExamPaper } from './types.ts';

export const examPapers: ExamPaper[] = [
  {
    id: "june-july-2025",
    title: "Fourth Semester B.E./B.Tech. Degree Examination",
    period: "June/July 2025",
    subjectCode: "BEC401",
    subjectName: "Electromagnetics Theory",
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
              text: "Derive an expression for electric field intensity due to infinite line charge.",
              marks: 8,
              level: "L2",
              co: "CO1"
            },
            {
              subNumber: "b",
              text: "Define Coulomb's law in the vector form and explain.",
              marks: 5,
              level: "L1",
              co: "CO1"
            },
            {
              subNumber: "c",
              text: "Transform the vector field W = 10a_x - 8a_y + 6a_z to cylindrical co-ordinate system at point P(10, -8, 6).",
              marks: 7,
              level: "L3",
              co: "CO1"
            }
          ]
        },
        alternative: {
          number: 2,
          subQuestions: [
            {
              subNumber: "a",
              text: "Define position vector and distance vector with an illustration in Cartesian system.",
              marks: 5,
              level: "L1",
              co: "CO1"
            },
            {
              subNumber: "b",
              text: "A charge of 1 μC is at A(2, 0, 0), what charge must be placed at point B(-2, 0, 0), which will make 'y' component of total force per unit charge zero at point C(0, 2, 2). Assume that the media is free space.",
              marks: 7,
              level: "L3",
              co: "CO1"
            },
            {
              subNumber: "c",
              text: "Electric charge lies in the plane at z = -2m in the form of a square sheet described by -2 ≤ x ≤ +2m and -2 ≤ y ≤ +2m with charge density ρ_s of 2(x^2 + y^2 + 4)^(3/2) nC/m². Determine electric field intensity E at the origin.",
              marks: 8,
              level: "L3",
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
              text: "If E = -8xy a_x - 4x² a_y + a_z V/m, the charge of 6C is to be moved from B(1, 8, 5) to A(2, 18, 6). Find the work done. Selected path is y = 3x² + z and z = x + 4.",
              marks: 9,
              level: "L3",
              co: "CO2"
            },
            {
              subNumber: "b",
              text: "State and prove Gauss law.",
              marks: 5,
              level: "L2",
              co: "CO2"
            },
            {
              subNumber: "c",
              text: "Derive the expression for current continuity equation.",
              marks: 6,
              level: "L2",
              co: "CO2"
            }
          ]
        },
        alternative: {
          number: 4,
          subQuestions: [
            {
              subNumber: "a",
              text: "Obtain E and D for infinite sheet of charge using Gauss' law.",
              marks: 8,
              level: "L2",
              co: "CO2"
            },
            {
              subNumber: "b",
              text: "Let D = 5 r² a_r mC/m² for r < 0.08m and D = 0.1/r² a_r mC/m² for r > 0.1m, find : i) Volume charge density for r = 0.06m, ii) Volume charge density for r = 0.1m. Assume that D is in spherical system.",
              marks: 6,
              level: "L3",
              co: "CO2"
            },
            {
              subNumber: "c",
              text: "The current density vector is given by J = (2/r) cos(θ) a_r + 20e^(-2r) sin(θ) a_θ A/m², find: i) J at (r=3m, θ=0°, φ=π), ii) Total current passing through the sphere with r = 3m, 0 ≤ θ ≤ 20° and 0 ≤ φ ≤ 2π in a_r direction.",
              marks: 6,
              level: "L3",
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
              text: "Find E at P(3, 1, 2) for the field of two co-axial conducting cylinders with V = 50V at r = 2m and V = 20V at r = 3m using Laplace's equation.",
              marks: 9,
              level: "L3",
              co: "CO3"
            },
            {
              subNumber: "b",
              text: "Calculate the value of J if H = (1 / sin(θ)) a_θ at P(2, 30°, 20°).",
              marks: 5,
              level: "L3",
              co: "CO3"
            },
            {
              subNumber: "c",
              text: "Deduced Poisson's and Laplace's equation using Gauss law in point form. Write Laplacian operation on 'V' for different co-ordinate system.",
              marks: 6,
              level: "L2",
              co: "CO3"
            }
          ]
        },
        alternative: {
          number: 6,
          subQuestions: [
            {
              subNumber: "a",
              text: "Derive the expression for magnetic field H due to infinite long straight line using Biot-Savart law.",
              marks: 10,
              level: "L2",
              co: "CO3"
            },
            {
              subNumber: "b",
              text: "A Co-axial cable with radius of inner conductor 'a', inner radius of outer conductor 'b' and its outer radius 'c'. The outer conductor carries current -I and inner conductor carries current I. Determine and sketch variation of H against 'r' for: i) r < a, ii) a < r < b, iii) b < r < c and iv) r > c.",
              marks: 10,
              level: "L3",
              co: "CO3"
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
              text: "In a certain region, the magnetic flux density in a magnetic material with χ_m = 6 is given as B = 0.005y² a_x T at y = 0.4m, find J, J_b and J_T.",
              marks: 8,
              level: "L3",
              co: "CO4"
            },
            {
              subNumber: "b",
              text: "Derive Lorentz force equation and explain.",
              marks: 5,
              level: "L2",
              co: "CO4"
            },
            {
              subNumber: "c",
              text: "Derive an equation for the force between the two differential current elements.",
              marks: 7,
              level: "L2",
              co: "CO4"
            }
          ]
        },
        alternative: {
          number: 8,
          subQuestions: [
            {
              subNumber: "a",
              text: "A square loop of wire in z = 0 plane carrying 2mA in the field of an infinite filament on the y-axis as shown in Fig.Q8(a). Find the total force on the loop. [Loop coordinates: vertices at (1,0,0), (1,2,0), (3,2,0) and (3,0,0)]",
              marks: 7,
              level: "L3",
              co: "CO4"
            },
            {
              subNumber: "b",
              text: "Obtain the Tangential component of B and H at the boundary of two medium having the permeability of μ_1 and μ_2.",
              marks: 8,
              level: "L2",
              co: "CO4"
            },
            {
              subNumber: "c",
              text: "Compare electric and magnetic circuits.",
              marks: 5,
              level: "L2",
              co: "CO4"
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
              text: "Explain inconsistency of current continuity equation in detail.",
              marks: 7,
              level: "L2",
              co: "CO5"
            },
            {
              subNumber: "b",
              text: "Derive general wave equation of E and H for the media with parameters μ, ε and σ.",
              marks: 8,
              level: "L2",
              co: "CO5"
            },
            {
              subNumber: "c",
              text: "A circular loop conductor lies in z = 0 plane and has a radius of 0.1 m and resistance of 5Ω. Given B = 0.2 sin(10³ t) Tesla, determine the current in the loop.",
              marks: 5,
              level: "L3",
              co: "CO5"
            }
          ]
        },
        alternative: {
          number: 10,
          subQuestions: [
            {
              subNumber: "a",
              text: "Derive Maxwell's equations in integral and point form for static electric and magnetic fields using Faraday's law, Ampere's circuital law and Coulomb's law.",
              marks: 8,
              level: "L2",
              co: "CO5"
            },
            {
              subNumber: "b",
              text: "A 9375MHz uniform plane wave is propagating in polystyrene. If the amplitude of electric field intensity is 20 V/m and the material is assumed to be lossless, find Attenuation Constant (α), phase constant (β), Wavelength (λ), Velocity of propagation (ν), intrinsic impedance (η), propagation constant (γ) and amplitude of the magnetic field. For polystyrene μ_r = 1 and ε_r = 2.56.",
              marks: 6,
              level: "L3",
              co: "CO5"
            },
            {
              subNumber: "c",
              text: "State and explain Poynting theorem.",
              marks: 6,
              level: "L2",
              co: "CO5"
            }
          ]
        }
      }
    ]
  },
  {
    id: "june-july-2025-makeup",
    title: "Fourth Semester B.E./B.Tech. Degree Examination (Make-Up Exam)",
    period: "June/July 2025",
    subjectCode: "BEC401",
    subjectName: "Electromagnetics Theory",
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
              text: "State vector form of Coulomb's law of force between two point charges and indicate the units of quantities in the equation.",
              marks: 6,
              level: "L2",
              co: "CO1"
            },
            {
              subNumber: "b",
              text: "Q_1 and Q_2 are the point charges located at (0, -4, 3) and (0, 1, 1). If Q_1 is 2nC, find Q_2 such that the force on a test charge at (0, 3, 4) has no Z-component.",
              marks: 8,
              level: "L3",
              co: "CO1"
            },
            {
              subNumber: "c",
              text: "Calculate the electric field intensity at a point (3, 4, 5) due to a charge of 5 nC placed at (1, 2, 3).",
              marks: 6,
              level: "L3",
              co: "CO1"
            }
          ]
        },
        alternative: {
          number: 2,
          subQuestions: [
            {
              subNumber: "a",
              text: "Derive an expression for the electric field intensity due to infinite line charge.",
              marks: 8,
              level: "L2",
              co: "CO1"
            },
            {
              subNumber: "b",
              text: "Find D in Cartesian co-ordinate system at point P(6, 8, -10) due to: i) a point charge of 40 mC at the origin, ii) a uniform line charge of ρ_L = 40 μC/m on the Z-axis.",
              marks: 8,
              level: "L3",
              co: "CO1"
            },
            {
              subNumber: "c",
              text: "Define electric flux and flux density.",
              marks: 4,
              level: "L1",
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
              text: "State and prove Gauss law as applied to an electric field.",
              marks: 8,
              level: "L3",
              co: "CO2"
            },
            {
              subNumber: "b",
              text: "The flux density D = (r/3) a_r nC/m² is in the free space. i) Find E at r = 0.2m, ii) Find the total electric flux leaving the sphere of r = 0.2m, iii) Find the total charge within the sphere of r = 0.3m.",
              marks: 8,
              level: "L3",
              co: "CO2"
            },
            {
              subNumber: "c",
              text: "Find the divergence of A at P(5, π/2, 1) where A = r sin(φ) a_r + 3r Z² cos(φ) a_φ.",
              marks: 4,
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
              text: "State and prove Gauss divergence theorem.",
              marks: 8,
              level: "L3",
              co: "CO2"
            },
            {
              subNumber: "b",
              text: "If the potential field V is V = 100(x² - y²). Find E, D at a point (2, -1, 3) and the equation representing the locus of all points having a potential of 300 V.",
              marks: 4,
              level: "L3",
              co: "CO2"
            },
            {
              subNumber: "c",
              text: "Derive continuity of current equation.",
              marks: 8,
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
              text: "Using Biot-Savart's law, determine the magnetic field intensity at a point due to infinite long straight conductor.",
              marks: 7,
              level: "L3",
              co: "CO3"
            },
            {
              subNumber: "b",
              text: "Verify the potential field given below satisfies the Laplace's equation: V = 2x² - 3y² + z².",
              marks: 5,
              level: "L3",
              co: "CO3"
            },
            {
              subNumber: "c",
              text: "Derive Laplace and Poisson's equations and write Laplace equation in all 3 co-ordinate systems.",
              marks: 8,
              level: "L2",
              co: "CO3"
            }
          ]
        },
        alternative: {
          number: 6,
          subQuestions: [
            {
              subNumber: "a",
              text: "State and explain Ampere's circuital law.",
              marks: 8,
              level: "L2",
              co: "CO3"
            },
            {
              subNumber: "b",
              text: "Given that the general vector H = 2.5 a_r + 4 a_θ in spherical co-ordinates. Find curl of H at (2, π/6, 0).",
              marks: 6,
              level: "L3",
              co: "CO3"
            },
            {
              subNumber: "c",
              text: "Given that the vector magnetic potential A = x² a_x + 2yz a_y + (-x)² a_z. Find the magnetic flux density B.",
              marks: 6,
              level: "L3",
              co: "CO3"
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
              text: "Derive the expression for the force between two differential current elements.",
              marks: 6,
              level: "L2",
              co: "CO4"
            },
            {
              subNumber: "b",
              text: "A point charge of Q = -1.2C has velocity V = (5 a_x + 2 a_y - 3 a_z) m/sec. Find the magnitude of the force exerted on the charge if: i) E = -18 a_x + 5 a_y - 10 a_z V/m, ii) B = -4 a_x + 4 a_y + 3 a_z T, iii) Both are present simultaneously.",
              marks: 9,
              level: "L3",
              co: "CO4"
            },
            {
              subNumber: "c",
              text: "A conductor 6 m long lies along Z-direction with a current of 2A in a_z direction. Find the force experienced by conductor if B = 0.08 a_x T.",
              marks: 5,
              level: "L3",
              co: "CO4"
            }
          ]
        },
        alternative: {
          number: 8,
          subQuestions: [
            {
              subNumber: "a",
              text: "Write a note on: i) Magnetization, ii) Permeability, iii) Forces on magnetic materials.",
              marks: 6,
              level: "L1",
              co: "CO4"
            },
            {
              subNumber: "b",
              text: "If B = 0.05x a_y T in a material for which χ_m = 2.5. Find: i) μ_r, ii) μ, iii) H, iv) M.",
              marks: 8,
              level: "L3",
              co: "CO4"
            },
            {
              subNumber: "c",
              text: "Discuss on magnetic boundary conditions.",
              marks: 6,
              level: "L2",
              co: "CO4"
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
              text: "List Maxwell's equations for steady and time varying fields in: i) Point form, ii) Integral form.",
              marks: 6,
              level: "L2",
              co: "CO5"
            },
            {
              subNumber: "b",
              text: "State and explain Faraday's law of electromagnetic induction.",
              marks: 6,
              level: "L2",
              co: "CO5"
            },
            {
              subNumber: "c",
              text: "If the magnetic field H = [3x cos(β) + 6y sin(α)] a_z. Find current density J if fields are invariant with time.",
              marks: 8,
              level: "L3",
              co: "CO5"
            }
          ]
        },
        alternative: {
          number: 10,
          subQuestions: [
            {
              subNumber: "a",
              text: "Obtain solution of the wave equation for a uniform plane wave in free space.",
              marks: 8,
              level: "L1",
              co: "CO5"
            },
            {
              subNumber: "b",
              text: "State and prove Poynting theorem.",
              marks: 8,
              level: "L3",
              co: "CO5"
            },
            {
              subNumber: "c",
              text: "Wet marshy soil is characterized by σ = 10⁻² s/m, ε_r = 15 and μ_r = 1. Show that at 60 Hz, it can be considered as a good conductor. Hence at 60 Hz calculate: i) Skin depth, ii) Intrinsic impedance, iii) Propagation constant.",
              marks: 4,
              level: "L3",
              co: "CO5"
            }
          ]
        }
      }
    ]
  },
  {
    id: "dec-2024-jan-2025",
    title: "Fourth Semester B.E./B.Tech. Degree Examination",
    period: "Dec.2024/Jan.2025",
    subjectCode: "BEC401",
    subjectName: "Electromagnetics Theory",
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
              text: "State and explain Coulomb's law of force between two point charges in vector form.",
              marks: 8,
              level: "L1",
              co: "CO1"
            },
            {
              subNumber: "b",
              text: "Define Electric field intensity. Derive the expression for the electric field intensity at a point due to infinite line charges (Uniformly charged wire).",
              marks: 8,
              level: "L2",
              co: "CO1"
            },
            {
              subNumber: "c",
              text: "Two very small conducting spheres, each of mass 1 × 10⁻⁴ kg are suspended at a common point by very thin filaments of length 0.2m. A charge Q Coulomb is placed on each sphere. The electric force of repulsion separates the spheres and an equilibrium is reached when the suspending filaments make an angle of 10°. Assuming ε_r = 1, g = 9.8 N/kg and negligible mass for the filaments, find Q.",
              marks: 4,
              level: "L3",
              co: "CO1"
            }
          ]
        },
        alternative: {
          number: 2,
          subQuestions: [
            {
              subNumber: "a",
              text: "Define Point charge and using Coulomb's Law, derive expression for electric field intensity due to a point charge.",
              marks: 8,
              level: "L2",
              co: "CO1"
            },
            {
              subNumber: "b",
              text: "Let a point Q_1 = 25nC be located at A(4, -2, 7) and a charge Q_2 = 60nC be at B(-3, 4, -2). Find E at C(1, 2, 3). Also find the direction of the electric field. Given ε_0 = 8.854 × 10⁻¹² F/m.",
              marks: 8,
              level: "L3",
              co: "CO1"
            },
            {
              subNumber: "c",
              text: "Two point charges of +3 × 10⁻⁹ C and -2 × 10⁻⁹ C are spaced two meters apart. Determine the electric field at a point which is one meter from each of the two point charges.",
              marks: 4,
              level: "L3",
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
              text: "State and prove Gauss Divergence theorem or divergence theorem.",
              marks: 8,
              level: "L2",
              co: "CO2"
            },
            {
              subNumber: "b",
              text: "A point charge Q = 30 nC is located at the origin in Cartesian coordinates. Find the electric flux density and electric field intensity at (1, 3, -4)m.",
              marks: 8,
              level: "L3",
              co: "CO2"
            },
            {
              subNumber: "c",
              text: "Derive an equation for equation of continuity (continuity of current).",
              marks: 4,
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
              text: "State and prove Gauss law.",
              marks: 8,
              level: "L2",
              co: "CO2"
            },
            {
              subNumber: "b",
              text: "Given that the potential field is V = 2x²y - 5z. Find the potential, electric field intensity and volume charge density at point P(-4, 3, 6).",
              marks: 8,
              level: "L3",
              co: "CO2"
            },
            {
              subNumber: "c",
              text: "State Gauss law in point form. Hence derive Maxwell's first equation.",
              marks: 4,
              level: "L3",
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
              text: "Starting from gauss law, derive Poisson's and Laplace equation. Hence define Laplace equation in all three coordinate systems.",
              marks: 8,
              level: "L2",
              co: "CO3"
            },
            {
              subNumber: "b",
              text: "State and prove Stoke's theorem.",
              marks: 8,
              level: "L2",
              co: "CO3"
            },
            {
              subNumber: "c",
              text: "Find the potential and volume charge density at P(0.5, 1.5, 1)m in free space. Given the potential field as under: i) V = 2x² - y² - z² volt, ii) V = 6 r φ z volt.",
              marks: 8,
              level: "L3",
              co: "CO3"
            }
          ]
        },
        alternative: {
          number: 6,
          subQuestions: [
            {
              subNumber: "a",
              text: "State and prove Biot - Savart's law.",
              marks: 4,
              level: "L1",
              co: "CO3"
            },
            {
              subNumber: "b",
              text: "State and prove Ampere's circuital law.",
              marks: 8,
              level: "L1",
              co: "CO3"
            },
            {
              subNumber: "c",
              text: "The magnetic field intensity is given in a certain region of space as: H = ((x + 2y)/z²) a_y + (2/z) a_z A/m. i) Find curl of H, ii) Find J, iii) Use J to find total current passing through the surface Z = 4, 1 < x < 2, 3 < y < 5 in the a_z direction.",
              marks: 8,
              level: "L3",
              co: "CO3"
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
              text: "Define current element. Derive an equation for force on a differential current element in a magnetic field.",
              marks: 8,
              level: "L2",
              co: "CO4"
            },
            {
              subNumber: "b",
              text: "A point charge Q = 18nC has a velocity of 5 × 10⁶ m/s in the direction a_v = 0.6a_x + 0.75a_y + 0.3a_z. Calculate the magnitude of the force exerted on the charge by the field: i) B = -3a_x + 4a_y + 6a_z mT, ii) E = -3a_x + 4a_y + 6a_z kV/m.",
              marks: 8,
              level: "L3",
              co: "CO4"
            },
            {
              subNumber: "c",
              text: "Calculate the force on a straight conductor of length 0.3m carrying a current 5A in the Z-direction where the magnetic field is B = 3.5 × 10⁻³ (a_x - a_y) Tesla.",
              marks: 4,
              level: "L3",
              co: "CO4"
            }
          ]
        },
        alternative: {
          number: 8,
          subQuestions: [
            {
              subNumber: "a",
              text: "Derive magnetic boundary condition for: i) Tangential component of magnetic field, ii) Normal component of magnetic field.",
              marks: 8,
              level: "L2",
              co: "CO4"
            },
            {
              subNumber: "b",
              text: "A conductor 4m long lies along the Y-axis with a current of 10A in the a_y direction. Find the force on the conductor if the field in the region is B = 0.05 a_x Tesla.",
              marks: 8,
              level: "L3",
              co: "CO4"
            },
            {
              subNumber: "c",
              text: "Find the magnetic field intensity inside a magnetic material for the following conditions: M = 100 A/m, μ = 1.5 × 10⁻⁵ H/m, B = 200 μT, χ_m = 15.",
              marks: 4,
              level: "L3",
              co: "CO4"
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
              text: "Derive Integral and point form of Faraday's law.",
              marks: 8,
              level: "L2",
              co: "CO5"
            },
            {
              subNumber: "b",
              text: "Given E = E_m sin(ωt - βz) a_y in free space. Calculate D, B and H.",
              marks: 8,
              level: "L3",
              co: "CO5"
            },
            {
              subNumber: "c",
              text: "A copper disc of 40cm diameter is rotated at 3000 r.p.m on a horizontal axis perpendicular to and through the centre of disc axis, lying in magnetic meridian. Two brushes make contact with the disc at diametrically opposite points on the edge. If the horizontal component of earth's field is 0.02 mT, find the induced e.m.f between the brushes.",
              marks: 4,
              level: "L3",
              co: "CO5"
            }
          ]
        },
        alternative: {
          number: 10,
          subQuestions: [
            {
              subNumber: "a",
              text: "State and derive Poynting's theorem for uniform plane waves.",
              marks: 8,
              level: "L2",
              co: "CO5"
            },
            {
              subNumber: "b",
              text: "Derive general wave equation in electric and magnetic fields.",
              marks: 8,
              level: "L2",
              co: "CO5"
            },
            {
              subNumber: "c",
              text: "For silver, the conductivity is σ = 3.0 × 10⁶ s/m. At what frequency will the depth of penetration be 1mm?",
              marks: 4,
              level: "L3",
              co: "CO5"
            }
          ]
        }
      }
    ]
  },
  {
    id: "june-july-2024",
    title: "Fourth Semester B.E./B.Tech. Degree Examination",
    period: "June/July 2024",
    subjectCode: "BEC401",
    subjectName: "Electromagnetics Theory",
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
              text: "State and explain spherical coordinate system in detail.",
              marks: 5,
              level: "L2",
              co: "CO1"
            },
            {
              subNumber: "b",
              text: "Four point charges each of 10 μC are placed in free space at the points (1, 0, 0), (-1, 0, 0), (0, 1, 0) and (0, -1, 0) m respectively. Determine the force on a point charge of 30 μC located at a point (0, 0, 1) m.",
              marks: 8,
              level: "L3",
              co: "CO1"
            },
            {
              subNumber: "c",
              text: "Show that electric field intensity at a point, due to 'n' number of point charges, is given by E = 1/(4πε₀) ∑ [Q_i / R_i²] a_R_i V/m.",
              marks: 7,
              level: "L3",
              co: "CO1"
            }
          ]
        },
        alternative: {
          number: 2,
          subQuestions: [
            {
              subNumber: "a",
              text: "Define electric field intensity. Derive the expression for electric field intensity due to infinite line charge.",
              marks: 9,
              level: "L1",
              co: "CO1"
            },
            {
              subNumber: "b",
              text: "Given the two points A(ρ = 4.4, φ = -115°, Z = 2) and B(x = -3.1, y = 2.6, z = -3), find: (i) Rectangular coordinate of point A, (ii) Cylindrical coordinate of point B, (iii) The distance between A and B.",
              marks: 5,
              level: "L3",
              co: "CO1"
            },
            {
              subNumber: "c",
              text: "Find E at P(1, 5, 2) m in free space if a point charge of 6 μC is located at (0, 0, 1) and a uniform line charge density ρ_L = 180 nC/m lies along the X-axis.",
              marks: 6,
              level: "L3",
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
              text: "State and prove Gauss's law for point charge.",
              marks: 6,
              level: "L3",
              co: "CO2"
            },
            {
              subNumber: "b",
              text: "Calculate the divergence of D at the point specified if: (i) D = (2xyz - y²)a_x + (x²z - 2xy)a_y + x²y a_z C/m² at P_A(2, 3, -1); (ii) D = 2ρ z² sin²(φ) a_ρ + ρ z² sin(2φ) a_φ + 2ρ² z sin²(φ) a_z C/m² at P_B(ρ=2, φ=110°, z=-1); (iii) D = 2r sin(θ) cos(φ) a_r + r cos(θ) cos(φ) a_θ - r sin(φ) a_φ C/m² at P_C(r=1.5, θ=30°, φ=50°).",
              marks: 9,
              level: "L3",
              co: "CO2"
            },
            {
              subNumber: "c",
              text: "Find electric field intensity E at the point A(1, 2, -1) given the potential V = 3x²y + 2y²z + 3xyz Volt.",
              marks: 5,
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
              text: "Evaluate both sides of divergence theorem if D = (5r²/4) a_r C/m² in spherical co-ordinate for the volume enclosed by r = 4 m and θ = π/4 radians.",
              marks: 8,
              level: "L3",
              co: "CO2"
            },
            {
              subNumber: "b",
              text: "Calculate the work done in moving a charge 4C from B(1, 0, 0) to A(0, 2, 0) along the path y = 2 - zx, z = 0 in the field: (i) E = 5a_x V/m, (ii) E = 5x a_x V/m, (iii) E = 5x a_x + 5y a_y V/m.",
              marks: 6,
              level: "L3",
              co: "CO2"
            },
            {
              subNumber: "c",
              text: "Electrical potential at an arbitrary point in free space is given as, V = 2(x + 1)²(y + 2)²(z + 3)² Volt. At a point P(2, -1, 4), find: (i) V, (ii) E, (iii) |E|, (iv) D, (v) ρ_v.",
              marks: 6,
              level: "L3",
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
              text: "Evaluate the expression for capacitance of two uniformly charged parallel planes of infinite extent.",
              marks: 8,
              level: "L2",
              co: "CO3"
            },
            {
              subNumber: "b",
              text: "Determine whether or not the potential equations satisfies Laplace's equation: (i) V = 2x² - 4y² + z², (ii) V = φ cos(φ) + z, (iii) V = r² cos(φ) + θ.",
              marks: 5,
              level: "L3",
              co: "CO3"
            },
            {
              subNumber: "c",
              text: "An assembly of two concentric spherical shells is considered. The inner spherical shell is of radius r = 0.1m and is at a potential of 0 Volts. The outer spherical shell is of radius r = 0.2m and is at a potential of 100V. The medium between them is free space. Find E and D using spherical co-ordinate system.",
              marks: 7,
              level: "L3",
              co: "CO3"
            }
          ]
        },
        alternative: {
          number: 6,
          subQuestions: [
            {
              subNumber: "a",
              text: "State and explain Biot-Savart's law applicable to magnetic field.",
              marks: 6,
              level: "L2",
              co: "CO3"
            },
            {
              subNumber: "b",
              text: "Evaluate both sides of the stokes theorem for the field, H = 6xy a_x - 3y² a_y A/m and the rectangular path around the region, 2 ≤ x ≤ 5, -1 ≤ y ≤ 1, Z = 0. Let positive direction of dS be a_z.",
              marks: 8,
              level: "L3",
              co: "CO3"
            },
            {
              subNumber: "c",
              text: "Let A = (3y - z)a_x + 2xz a_z Wb/m in a certain region of free space. (i) Show that ∇ · A = 0, (ii) At P(2, -1, 3) find A, B, H and J.",
              marks: 6,
              level: "L3",
              co: "CO3"
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
              text: "Obtain the expression for magnetic force between differential current elements.",
              marks: 6,
              level: "L1",
              co: "CO4"
            },
            {
              subNumber: "b",
              text: "The point charge Q = 18nC has a velocity of 5 × 10⁶ m/s in the direction a_v = 0.60a_x + 0.75a_y + 0.30a_z. Calculate the magnitude of force exerted on the charge by fields: (i) B = -3a_x + 4a_y + 6a_z mT, (ii) E = -3a_x + 4a_y + 6a_z kV/m.",
              marks: 6,
              level: "L3",
              co: "CO4"
            },
            {
              subNumber: "c",
              text: "The magnetization in a magnetic material for which χ_m = 8 is given in a certain region as M = 150 Z² a_x A/m. At Z = 4cm, find the magnitude of: (i) J_t, (ii) J, (iii) J_b.",
              marks: 8,
              level: "L3",
              co: "CO4"
            }
          ]
        },
        alternative: {
          number: 8,
          subQuestions: [
            {
              subNumber: "a",
              text: "Obtain the magnetic boundary conditions at interface between two different magnetic materials.",
              marks: 8,
              level: "L2",
              co: "CO4"
            },
            {
              subNumber: "b",
              text: "Two differential current elements I_1 dl_1 = 10⁻⁴ a_z A·m at P_1(1, 0, 0) and I_2 dl_2 = 3 × 10⁻⁶(-0.5a_x + 0.4a_y + 0.3a_z) A·m at P_2(2, 2, 2) are located in free space. Find the vector force exerted on: (i) I_2 dl_2 by I_1 dl_1, (ii) I_1 dl_1 by I_2 dl_2.",
              marks: 6,
              level: "L3",
              co: "CO4"
            },
            {
              subNumber: "c",
              text: "The interface between two different regions is normal to one of three Cartesian axes. If B_1 = μ₀(43.5a_x + 24.0a_z) and B_2 = μ₀(22a_x + 24.0a_z). What is the ratio tan(θ_1) / tan(θ_2)?",
              marks: 6,
              level: "L3",
              co: "CO4"
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
              text: "For the given medium ε = 4 × 10⁻⁹ F/m and σ = 0. Find K so that the following pair of fields satisfies Maxwell's equation: E = (20y - Kt)a_x V/m, H = (y + 2 × 10⁶ t)a_z A/m.",
              marks: 6,
              level: "L3",
              co: "CO5"
            },
            {
              subNumber: "b",
              text: "Within a certain region ε = 10⁻¹¹ F/m and μ = 10⁻⁵ H/m. If B = 2 × 10⁻⁴ cos(10⁵ t) sin(10⁻³ y) a_z T: (i) Find E, (ii) Find total magnetic flux passing through the surface x = 0, 0 < y < 40m, 0 < z < 2m at t = 1 μsec.",
              marks: 8,
              level: "L3",
              co: "CO5"
            },
            {
              subNumber: "c",
              text: "State and explain Poynting theorem.",
              marks: 6,
              level: "L2",
              co: "CO5"
            }
          ]
        },
        alternative: {
          number: 10,
          subQuestions: [
            {
              subNumber: "a",
              text: "Derive the modified Ampere's law by Maxwells for time varying fields.",
              marks: 5,
              level: "L2",
              co: "CO5"
            },
            {
              subNumber: "b",
              text: "Show that the intrinsic impedance of the perfect dielectric η = √(μ/ε) and show that its value in free space is 377 Ω.",
              marks: 7,
              level: "L2",
              co: "CO5"
            },
            {
              subNumber: "c",
              text: "A plane electromagnetic wave having a frequency of 10 MHz has an average Poynting vector of 1 W/m². If the medium is lossless with relative permeability μ_r = 2 and relative permittivity ε_r = 3 find: (i) Velocity of propagation, (ii) Wavelength, (iii) Impedance of the medium, (iv) rms electric field.",
              marks: 8,
              level: "L3",
              co: "CO5"
            }
          ]
        }
      }
    ]
  },
  {
    id: "model-question-paper-1",
    title: "Fourth Semester B.E. Degree Examination (Model Paper-1)",
    period: "CBCS Scheme (with effect from 2022-23)",
    subjectCode: "BEC401",
    subjectName: "Electromagnetic Theory",
    scheme: "CBCS Scheme",
    timeStr: "3 hours.",
    maxMarks: 100,
    instructions: [
      "Answer any FIVE full questions, choosing choosing ONE full question from each MODULE.",
      "M : Marks, L : Bloom's Level."
    ],
    modules: [
      {
        moduleNumber: 1,
        primary: {
          number: 1,
          subQuestions: [
            {
              subNumber: "a",
              text: "State and explain the Cylindrical coordinate systems in detail.",
              marks: 5,
              level: "L1",
              co: "CO1"
            },
            {
              subNumber: "b",
              text: "Show that electric field intensity at a point, due to 'n' number of point charges, is given by E = 1/(4πε₀) ∑ [Q_i / R_i²] a_R_i V/m.",
              marks: 7,
              level: "L3",
              co: "CO1"
            },
            {
              subNumber: "c",
              text: "Two point charges, Q_1 = 30 μC and Q_2 = -100 μC, are located at (2,0,5) and (-1,0,-2)m respectively. Find: (i) force on Q_1, (ii) force on Q_2, (iii) the magnitude of forces, (iv) directions of forces.",
              marks: 8,
              level: "L3",
              co: "CO1"
            }
          ]
        },
        alternative: {
          number: 2,
          subQuestions: [
            {
              subNumber: "a",
              text: "State Coulomb's law of force between any two point charges and indicate the units of the quantities involved.",
              marks: 6,
              level: "L1",
              co: "CO1"
            },
            {
              subNumber: "b",
              text: "Show that the electric field intensity at any point due to an infinite sheet of charge is independent of the distance to the point from the sheet.",
              marks: 8,
              level: "L3",
              co: "CO1"
            },
            {
              subNumber: "c",
              text: "Two point charges, Q_1 and Q_2 are located at (1, 2, 0)m and (2, 0, 0)m respectively. Find the relation between the charges, Q_1 and Q_2 such that the total force on a unit positive charge at (-1, 1, 0) has: (i) no x-component, (ii) no y-component.",
              marks: 8,
              level: "L3",
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
              text: "State and prove Gauss's law for point charge.",
              marks: 6,
              level: "L1",
              co: "CO2"
            },
            {
              subNumber: "b",
              text: "A point charge, Q = 90 μC is located at the origin and there are surface charge distributions -8 μC/m² at r = 1 m and 4.5 μC/m² at r = 2 m. Find D everywhere.",
              marks: 8,
              level: "L3",
              co: "CO2"
            },
            {
              subNumber: "c",
              text: "Calculate the divergence of D at the point specified if: (i) D = (1/z²) [10xyz a_x + 5x²z a_y + (2z³ - 5x²y)a_z] at P(-2, 3, 5); (ii) D = 5z² a_r + 10 r z a_z at P(3, -45°, 5); (iii) D = 2 r sin(θ) sin(φ) a_r + r cos(θ) sin(φ) a_θ + r cos(φ) a_φ at P(3, 45°, 45°).",
              marks: 8,
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
              text: "State & prove Divergence theorem.",
              marks: 7,
              level: "L1",
              co: "CO2"
            },
            {
              subNumber: "b",
              text: "Obtain an expression for electric field intensity due to an infinite line charge along z-axis having a uniform charge of ρ_L C/m using Gauss's law.",
              marks: 6,
              level: "L3",
              co: "CO2"
            },
            {
              subNumber: "c",
              text: "Given D = 0.3 r² a_r nC/m² in free space, (a) find E at P(2, 25°, 90°), (b) find the total charge within the sphere, r = 3, (c) Find the total electric flux leaving the sphere, r = 4 m.",
              marks: 7,
              level: "L3",
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
              text: "Derive expression for potential and capacitance between the planes at z = 0 and z = d if the potential v = V_1 and v = V_2 respectively using Laplace's equation.",
              marks: 8,
              level: "L3",
              co: "CO3"
            },
            {
              subNumber: "b",
              text: "(i) If potential V = x²yz + Ay³z Volts, find A so that the Laplace's equation is satisfied. (ii) With that value A, determine the electric field at a point P whose coordinates are (2, 1, -1).",
              marks: 8,
              level: "L3",
              co: "CO3"
            },
            {
              subNumber: "c",
              text: "There exists a potential of V = -2.5 Volts on a conductor at r = 0.02 m and V = 15 Volts at r = 0.35 m. Determine E and D by solving the Laplace's equation in spherical coordinates representing the potential system.",
              marks: 8,
              level: "L3",
              co: "CO3"
            }
          ]
        },
        alternative: {
          number: 6,
          subQuestions: [
            {
              subNumber: "a",
              text: "Derivation of Ampere's Circuital Law in point form using Stokes theorem.",
              marks: 6,
              level: "L3",
              co: "CO3"
            },
            {
              subNumber: "b",
              text: "Derive Poisson's and Laplace equations and write Laplace equation in cylindrical and spherical coordinates.",
              marks: 8,
              level: "L3",
              co: "CO3"
            },
            {
              subNumber: "c",
              text: "Long concentric and right conducting cylinders in free space, at r = 5 mm and r = 25 mm in cylindrical coordinates have voltages of zero and V_0 respectively. If the electric field intensity, E = -8.28 × 10³ a_r at r = 15 mm, find V_0 and the charge density on the outer conductor by using Laplace's equation.",
              marks: 8,
              level: "L3",
              co: "CO3"
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
              text: "State and Explain the force between differential Current Elements.",
              marks: 5,
              level: "L1",
              co: "CO4"
            },
            {
              subNumber: "b",
              text: "Find the force per meter length between two long parallel wires separated by 10cm in air and carrying current of 100A in opposite direction. State the nature of force between wires.",
              marks: 7,
              level: "L3",
              co: "CO4"
            },
            {
              subNumber: "c",
              text: "Find magnetization in a magnetic material where: (i) μ = 1.8 × 10⁻⁵ H/m and M = 120 A/m, (ii) μ_r = 22, there are 8.3 × 10²⁸ atoms/m³ and each atom has a dipole moment of 4.5 × 10⁻²⁷ A·m², (iii) B = 300 μT and χ_m = 15.",
              marks: 8,
              level: "L3",
              co: "CO4"
            }
          ]
        },
        alternative: {
          number: 8,
          subQuestions: [
            {
              subNumber: "a",
              text: "Write short notes on Magnetic Boundary Conditions.",
              marks: 5,
              level: "L1",
              co: "CO4"
            },
            {
              subNumber: "b",
              text: "Derive the equations for Magnetic circuits with suitable diagram.",
              marks: 7,
              level: "L3",
              co: "CO4"
            },
            {
              subNumber: "c",
              text: "A conductor 4m long lies along the y-axis with a current of 10A in the a_y direction. Find the force on the conductor if the field in the region is B = 0.005 a_x Tesla.",
              marks: 8,
              level: "L3",
              co: "CO4"
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
              text: "What is a uniform wave? Explain its propagation in free space with necessary equations.",
              marks: 5,
              level: "L1",
              co: "CO5"
            },
            {
              subNumber: "b",
              text: "Starting from Maxwell's equations, derive the wave equation for sinusoidal waves in a good dielectric medium.",
              marks: 7,
              level: "L3",
              co: "CO5"
            },
            {
              subNumber: "c",
              text: "A 9.375 GHz uniform plane wave is propagating in polyethylene (ε_r = 2.26). If the amplitude of the electric field is 500 V/m and the material is assumed to be lossless, find (i) Phase constant, (ii) Wavelength, (iii) Velocity of propagation, (iv) Intrinsic impedance, (v) magnetic field intensity.",
              marks: 8,
              level: "L3",
              co: "CO5"
            }
          ]
        },
        alternative: {
          number: 10,
          subQuestions: [
            {
              subNumber: "a",
              text: "Show that the uniform plane wave is transverse in nature.",
              marks: 7,
              level: "L3",
              co: "CO5"
            },
            {
              subNumber: "b",
              text: "I. Write a short note on: Skin effect in conductors. II. What do you mean by depth of penetration?",
              marks: 5,
              level: "L1",
              co: "CO5"
            },
            {
              subNumber: "c",
              text: "With respect to wave propagation in good conductors, describe what the skin effect is and derive an expression for the depth of penetration. If σ = 58 × 10⁶ mhos/m at frequency 10 MHz, determine the depth of penetration.",
              marks: 8,
              level: "L3",
              co: "CO5"
            }
          ]
        }
      }
    ]
  }
];
