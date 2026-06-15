/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SubQuestion {
  subNumber: string; // "a", "b", "c"
  text: string;
  marks: number;
  level: string; // e.g., "L1", "L2", "L3"
  co: string; // e.g., "CO1", "CO2", "CO3"
}

export interface QuestionGroup {
  number: number; // e.g., 1, 2, 3, etc.
  subQuestions: SubQuestion[];
}

export interface ModuleData {
  moduleNumber: number; // 1, 2, 3, 4, 5
  primary: QuestionGroup;
  alternative: QuestionGroup; // The 'OR' selection
}

export interface ExamPaper {
  id: string; // Unique URL slug
  title: string; // e.g., "Fourth Semester B.E./B.Tech. Degree Examination"
  period: string; // e.g., "June/July 2025"
  subjectCode: string; // "BEC401"
  subjectName: string; // "Electromagnetics Theory"
  scheme: string; // "CBCS Scheme"
  timeStr: string; // "3 hrs."
  maxMarks: number; // 100
  instructions: string[];
  modules: ModuleData[];
}
