/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ExamPaper } from './types.ts';

export interface ControlSystemsFormula {
  id: string;
  name: string;
  equation: string;
  variables: string;
  description: string;
  module: number;
}

export const bec403Formulas: ControlSystemsFormula[] = [
  {
    id: "transfer-function-cls",
    name: "Closed-Loop Transfer Function",
    equation: "T(s) = C(s)/R(s) = G(s) / (1 ∓ G(s)H(s))",
    variables: "G(s) = Forward path gain, H(s) = Feedback path gain, minus (-) is for negative feedback, plus (+) is for positive feedback",
    description: "Evaluates the overall output-to-input ratio of a feedback control loop system.",
    module: 2
  },
  {
    id: "masons-gain-formula",
    name: "Mason's Gain Formula",
    equation: "T = (1/Δ) * Σ(P_k * Δ_k)",
    variables: "P_k = Path gain of k-th forward path, Δ = Graph determinant, Δ_k = Path cofactor for path k",
    description: "Determines the overall transfer function directly from a Signal Flow Graph (SFG) without block-by-block reduction.",
    module: 2
  },
  {
    id: "steady-state-error",
    name: "Steady State Error (General Form)",
    equation: "e_ss = lim_{s -> 0} [s * R(s) / (1 + G(s)H(s))]",
    variables: "R(s) = Laplace of input, G(s)H(s) = Open loop transfer function",
    description: "Determines the tracking error of a system as time approaches infinity for standard inputs.",
    module: 3
  },
  {
    id: "static-error-constants",
    name: "Static Error Constants (Kp, Kv, Ka)",
    equation: "K_p = lim_{s->0} G(H); K_v = lim_{s->0} sG(H); K_a = lim_{s->0} s²G(H)",
    variables: "K_p = Position constant, K_v = Velocity constant, K_a = Acceleration constant",
    description: "Used to determine steady-state error for step, ramp, and parabolic inputs respectively.",
    module: 3
  },
  {
    id: "transient-parameters",
    name: "Second-Order Damping Ratio & Frequency",
    equation: "T.F. = ω_n² / (s² + 2ζω_n s + ω_n²)",
    variables: "ζ = Damping ratio, ω_n = Undamped natural frequency (rad/s)",
    description: "Characterizes the dynamic behavior of a standard second-order rotational or translational system.",
    module: 3
  },
  {
    id: "peak-overshoot",
    name: "Percentage Peak Overshoot (Mp)",
    equation: "M_p = e^(-(ζ * π) / √(1 - ζ²)) * 100%",
    variables: "ζ = Damping ratio (0 < ζ < 1 for underdamped)",
    description: "Measures the maximum peak value of the step response curve compared to its steady-state value.",
    module: 3
  },
  {
    id: "peak-time",
    name: "Peak Time (tp) & Settling Time (ts)",
    equation: "t_p = π / (ω_n√(1 - ζ²))  |  t_s = 4 / (ζω_n) (2%)",
    variables: "t_p = Time to reach 1st peak, t_s = Settling time within 2% band, 4 = Time constant factor",
    description: "Evaluates standard speed-of-response parameters under an applied unit step input.",
    module: 3
  },
  {
    id: "routh-stability",
    name: "Routh's Characteristic Polynomial Stability",
    equation: "1 + G(s)H(s) = a_0 s^n + a_1 s^(n-1) + ... + a_n = 0",
    variables: "a_i = Derived array coefficients. No sign changes in 1st column of Routh array indicates stability.",
    description: "Allows checking absolute system stability in the s-domain without computing exact roots.",
    module: 4
  },
  {
    id: "root-locus-angle",
    name: "Root Locus Centroid & Asymptotes",
    equation: "σ_p = (Σ Real_Poles - Σ Real_Zeros) / (P - Z)  |  θ = 180°(2q + 1)/(P - Z)",
    variables: "σ_p = Centroid coordinate, θ = Asymptote angles in degrees, P = Number of poles, Z = Number of zeros",
    description: "Defines the intersection point on the real axis and directions of asymptotes as loop gain K matches infinity.",
    module: 4
  },
  {
    id: "bode-slope",
    name: "Bode Corner Frequency Slopes",
    equation: "Slope change = ∓20 dB/decade * (Pole/Zero multiplicity)",
    variables: "Minus (-) slope change for poles, plus (+) for zeros, corner freq ω = 1/T",
    description: "Logarithmic frequency plots of loop transfer functions to evaluate margins and absolute stability.",
    module: 5
  }
];

export const bec403Papers: ExamPaper[] = [
  {
    id: "bec403-june-july-2025",
    title: "Fourth Semester B.E./B.Tech. Degree Examination",
    period: "June/July 2025",
    subjectCode: "BEC403",
    subjectName: "Control Systems",
    scheme: "CBCS Scheme",
    timeStr: "3 hrs.",
    maxMarks: 100,
    instructions: [
      "Answer any FIVE full questions, choosing ONE full question from each module.",
      "M : Marks, L : Bloom's level, C : Course outcomes.",
      "Draw neat diagrams where required."
    ],
    modules: [
      {
        moduleNumber: 1,
        primary: {
          number: 1,
          subQuestions: [
            {
              subNumber: "a",
              text: "Define control system with examples. Compare closed loop and open loop control systems based on feedback, accuracy, complexity, stability, cost, and output tracking.",
              marks: 6,
              level: "L1",
              co: "CO1"
            },
            {
              subNumber: "b",
              text: "For the translational mechanical system shown in Fig.Q1(b), write the mechanical networks, formulate the differential equations at force nodes, and obtain its analogous electrical network based on Force-Voltage (F-V) Analogy.",
              marks: 8,
              level: "L3",
              co: "CO1"
            },
            {
              subNumber: "c",
              text: "The force-voltage analogy of a mechanical system is shown in Fig.Q1(c). Formulate loop equations and obtain its corresponding analogous translational mechanical network.",
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
              text: "Explain the effect of feedback on parameter variation, overall gain, stability, and system bandwidth.",
              marks: 6,
              level: "L2",
              co: "CO1"
            },
            {
              subNumber: "b",
              text: "Find the force-voltage analogous electrical network for the dual-mass mechanical system shown in Fig.Q2(b). Show all loop and parameter definitions clearly.",
              marks: 6,
              level: "L3",
              co: "CO1"
            },
            {
              subNumber: "c",
              text: "Recall the differential equation governing the mechanical rotational system with inertia J_1, J_2 shown in Fig.Q2(c). Draw the equivalent electrical circuits under both torque-voltage and torque-current analogies.",
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
              text: "Determine the closed-loop transfer function C(s)/R(s) for the multiple-loop feedback system shown in Fig.Q3(a) by applying block diagram reduction rules step-by-step.",
              marks: 10,
              level: "L3",
              co: "CO2"
            },
            {
              subNumber: "b",
              text: "Determine the overall transfer function C(s)/R(s) by applying Mason's gain formula on the signal flow graph shown in Fig.Q3(b). List all forward paths, individual loops, and non-touching loops.",
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
              text: "Find the overall transfer function by simplifying the complex block diagram shown in Fig.Q4(a) with forward path modifications.",
              marks: 10,
              level: "L3",
              co: "CO2"
            },
            {
              subNumber: "b",
              text: "Determine the transfer function C(s)/R(s) by applying Mason's gain formula on the asymmetric signal flow graph shown in Fig.Q4(b).",
              marks: 10,
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
              text: "For the unity-feedback system G(s) = 5 / [s(s+1)(s+2)], determine:\n(i) System type\n(ii) Static error constants K_p, K_v, K_a\n(iii) The steady-state error when subjected to an input r(t) = 3 + 2t.",
              marks: 8,
              level: "L3",
              co: "CO3"
            },
            {
              subNumber: "b",
              text: "Evaluate the unit step response c(t) of a system with control ratio C(s)/R(s) = 4 / [(s+1)(s+4)]. Also compute the time constant, rise time (tr), and settling time (ts) for a 2% tolerance band.",
              marks: 5,
              level: "L3",
              co: "CO3"
            },
            {
              subNumber: "c",
              text: "Derive general mathematical expressions for the steady state error e_ss of a standard closed-loop negative feedback system.",
              marks: 7,
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
              text: "Given a unity feedback system with open-loop response G(s) = 20(s+1) / [s²(s+2)(s+4)], determine:\n(i) What is the type of the system?\n(ii) Calculate all static error coefficients.\n(iii) Find the steady-state tracking error if the input is r(t) = 40 + 2t + 5t².",
              marks: 6,
              level: "L3",
              co: "CO3"
            },
            {
              subNumber: "b",
              text: "Draw the functional block schemes and explain the operational principles of:\n(i) Proportional-Derivative (PD) controller\n(ii) Proportional-Integral (PI) controller.",
              marks: 6,
              level: "L2",
              co: "CO3"
            },
            {
              subNumber: "c",
              text: "Derive the mathematical time-domain response equation c(t) of an underdamped second-order control system excited by a standard unit step input, starting from its s-domain transfer function.",
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
              text: "Formulate the limitations of using the Routh-Hurwitz stability criterion for checking systems with time delays or non-linear functions.",
              marks: 4,
              level: "L2",
              co: "CO4"
            },
            {
              subNumber: "b",
              text: "Evaluate the stable bounds of gain K for a negative feedback loop system with parameters G(s) = K(s+13) / [s(s+3)(s+7)] using the Routh-Hurwitz technique. Also find the frequency of sustained oscillations and determine if there are poles more negative than -1.",
              marks: 8,
              level: "L3",
              co: "CO4"
            },
            {
              subNumber: "c",
              text: "Verify the stability of a system whose characteristic equation is defined by:\ns⁶ + 2s⁵ + 8s⁴ + 12s³ + 20s² + 16s + 16 = 0\nby setting up its complete Routh array. State if any roots lie on the jω axis.",
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
              text: "Sketch the root locus plot as loop gain K varies from 0 to infinity for a system with loop transfer function G(s)H(s) = K / [s(s+5)(s+10)]. Compute its centroid, asymptote angles, breakaway point, and jω crossing point.",
              marks: 8,
              level: "L3",
              co: "CO4"
            },
            {
              subNumber: "b",
              text: "Construct the root locus scheme on the complexes s-plane for a system having G(s)H(s) = K / [s(s+1)(s+2)(s+3)]. Find critical gain value K for marginal oscillations.",
              marks: 12,
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
              text: "Formulate and sketch the Bode asymptotic magnitude and phase diagrams for a system with open-loop frequency function:\nG(s) = K(1 + 0.2s)(1 + 0.025s) / [s³(1 + 0.001s)(1 + 0.005s)]\nAssess the conditionally stable features of this system and evaluate the range of K for loop stability.",
              marks: 10,
              level: "L3",
              co: "CO5"
            },
            {
              subNumber: "b",
              text: "Evaluate stability of a loop system having G(s)H(s) = K / [s(s+2)(s+10)] by drafting its Polar Nyquist contour path. Estimate the range of parameter K using the Nyquist enclosure criterion.",
              marks: 10,
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
              text: "Evaluate the state space matrix entities (matrix A, B, C, D) for the filter electrical circuit network shown in Fig.Q10(a) assuming passive values: R_1 = R_2 = 1 Ω, C_1 = C_2 = 1 F, and L = 1 H.",
              marks: 10,
              level: "L3",
              co: "CO5"
            },
            {
              subNumber: "b",
              text: "Evaluate the exact State Transition Matrix Φ(t) corresponding to a state model whose system matrix A is defined as:\nA = [[0, 1], [-2, -3]]\nRecall the Laplace inverse technique e^(At) = L⁻¹{[sI - A]⁻¹}.",
              marks: 10,
              level: "L3",
              co: "CO5"
            }
          ]
        }
      }
    ]
  },
  {
    id: "bec403-june-july-2024",
    title: "Fourth Semester B.E./B.Tech. Degree Examination",
    period: "June/July 2024",
    subjectCode: "BEC403",
    subjectName: "Control Systems",
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
              text: "Define Control system. Write down any four differences between Open Loop Control System and Closed Loop Control System.",
              marks: 4,
              level: "L2",
              co: "CO1"
            },
            {
              subNumber: "b",
              text: "For the mechanical translation system shown in Fig.Q1(b), find the differential equations of performance at individual mass nodes and construct the analogous force-voltage electrical circuit diagram.",
              marks: 8,
              level: "L2",
              co: "CO1"
            },
            {
              subNumber: "c",
              text: "For the mechanical network shown in Fig.Q1(c), write mechanical network, differential equations, and formulate its force-current (F-I) analogous system.",
              marks: 8,
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
              text: "For the dual-mass mechanical translation setup of Fig.Q2(a), check safety performance, write differential equation system, and sketch the analogous force-voltage circuit.",
              marks: 7,
              level: "L2",
              co: "CO1"
            },
            {
              subNumber: "b",
              text: "Find the force-voltage electrical diagram modeling the mechanical system shown in Fig.Q2(b) with masses M_1 and M_2 under direct translation force F(t).",
              marks: 7,
              level: "L2",
              co: "CO1"
            },
            {
              subNumber: "c",
              text: "Draw the electrical network based on torque-current analogy and write performance equations for the compound rotating mechanical machinery shown in Fig.Q2(c).",
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
              text: "Evaluate C(s)/R(s) by applying Mason's gain formula on the flow graph depicted in Fig.Q3(a). Define path factors clearly.",
              marks: 6,
              level: "L3",
              co: "CO3"
            },
            {
              subNumber: "b",
              text: "Simplify the dual feedback summing point block layout of Fig.Q3(b) to discover the system closed loop transfer matrix C(s)/R(s).",
              marks: 6,
              level: "L3",
              co: "CO3"
            },
            {
              subNumber: "c",
              text: "For the single flow graph structure in Fig.Q3(c), determine the transfer function using Mason's gain formula.",
              marks: 8,
              level: "L3",
              co: "CO3"
            }
          ]
        },
        alternative: {
          number: 4,
          subQuestions: [
            {
              subNumber: "a",
              text: "Reduce the multiple feedback block diagram of Fig.Q4(a) to its basic canonical form and determine the transfer function C(s)/R(s).",
              marks: 6,
              level: "L3",
              co: "CO3"
            },
            {
              subNumber: "b",
              text: "Formulate the Mason's Gain equations for tracking parameters on the signal flow graph shown in Fig.Q4(b) to find overall transmission C(s)/R(s).",
              marks: 6,
              level: "L3",
              co: "CO3"
            },
            {
              subNumber: "c",
              text: "Apply block modifications on Fig.Q4(c) to compress parallel forward channels and feedback layers to determine C(s)/R(s).",
              marks: 8,
              level: "L3",
              co: "CO3"
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
              text: "Explain standard control inputs with sketches and mathematical equations:\n(i) Step input\n(ii) Ramp input\n(iii) Impulse input\n(iv) Parabolic input.",
              marks: 8,
              level: "L3",
              co: "CO2"
            },
            {
              subNumber: "b",
              text: "Evaluate error constants K_p, K_v, K_a and steady-state offset for a control loop with forward gain G(s)H(s) = 10(s+2)(s+3) / [s(s+1)(s+4)(s+5)], where reference excitation holds r(t) = 3 + t + t².",
              marks: 6,
              level: "L3",
              co: "CO2"
            },
            {
              subNumber: "c",
              text: "A unity-feedback loop system features open-loop response G(s) = 10 / [s(0.1s + 1)]. Evaluate the static error coefficients and compute the steady state offset when a reference signal r(t) = A_0 + A_1*t + (A_2/2)*t² is applied.",
              marks: 6,
              level: "L3",
              co: "CO2"
            }
          ]
        },
        alternative: {
          number: 6,
          subQuestions: [
            {
              subNumber: "a",
              text: "A unity feedback loop features forward function G(s) = 64 / [s(s + 9.6)]. Formulate its transient step response equations. Calculate:\n1) Output response at time t = 0.1s\n2) Value and timing of maximum peak overshoot (Mp, tp)\n3) Underdamped settling time factor ts (2% limit).",
              marks: 10,
              level: "L2",
              co: "CO3"
            },
            {
              subNumber: "b",
              text: "The feedback loop layout of Fig.Q6(b) displays feedback damping path. Find constant gain parameter K so that damping ratio ζ matches 0.8. Also identify system type and error factor.",
              marks: 10,
              level: "L2",
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
              text: "For the polynomial expression s⁶ + 4s⁵ + 3s⁴ - 16s² - 64s - 48 = 0, find poles on right hand side of s-plane using RH stable table.",
              marks: 6,
              level: "L2",
              co: "CO4"
            },
            {
              subNumber: "b",
              text: "Check stability boundaries for a unity-feedback scheme carrying forwarding parameters G(s) = K / [s(1 + 0.4s)(1 + 0.25s)]. Compute critical gain values and frequency of oscillations.",
              marks: 6,
              level: "L2",
              co: "CO4"
            },
            {
              subNumber: "c",
              text: "Define and explain the Root Locus Angle and Magnitude conditions. Apply these conditions to test if point s = -0.75 and s = -1 + j4 lie on the Root Locus of a system with loop G(s)H(s) = K / [s(s+2)(s+4)].",
              marks: 8,
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
              text: "Sketch root-locus trails on the complex s-plane for a loop carrying open parameters G(s)H(s) = K / [s(s+1)(s+2)(s+3)]. Determine its breakaway positions and state if any path wanders into unstable space.",
              marks: 12,
              level: "L2",
              co: "CO4"
            },
            {
              subNumber: "b",
              text: "Determine gain K value to secure marginal stability for a feedback control carrying G(s)H(s) = K(s+4) / [s(s+1)(s+2)]. Explain stability behavior using root locus features.",
              marks: 8,
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
              text: "A loop control carries forward components G(s)H(s) = K / [s(s+2)(s+10)]. Draw corresponding polar Nyquist plots and specify how enclosing origins checks loop margins.",
              marks: 10,
              level: "L2",
              co: "CO5"
            },
            {
              subNumber: "b",
              text: "Write brief technical descriptions on Phase-Lag and Phase-Lead compensators. State how compensators modify pole-zero patterns, and draw their electrical networks with corresponding transfer functions.",
              marks: 10,
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
              text: "A three-order system holds differential parameter description:\nd³y/dt³ + 4*d²y/dt² + 7*dy/dt + 2y = 5u(t)\nConstruct its corresponding state-space variable models using phase variables and draw the state-variable diagram.",
              marks: 6,
              level: "L2",
              co: "CO5"
            },
            {
              subNumber: "b",
              text: "The transfer function of a control system is given by Y(s)/U(s) = (s² + 3s + 4) / [s³ + 2s² + 3s + 2]. Obtain its corresponding state-space model by formulating a signal flow graph.",
              marks: 7,
              level: "L2",
              co: "CO5"
            },
            {
              subNumber: "c",
              text: "Evaluate the state transition matrix Φ(t) of the dynamical system whose system matrix description holds:\nA = [[0, -1], [2, -3]]",
              marks: 7,
              level: "L1",
              co: "CO5"
            }
          ]
        }
      }
    ]
  }
];
