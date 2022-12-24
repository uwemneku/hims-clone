import { MultiStepQuestion } from "../components/QuestionLayout/types";

export const historyQuestion: MultiStepQuestion[] = [
  {
    question:
      "Which of the following best describes why you are seeking service today?",
    details:
      "If you're unsure, pick the ones that feel closest to what you're experiencing",
    options: [
      "Generalized anxiety (e.g persistent, general worry)",
      "Depression (e.g depressed mood or loss of interest in activities)",
      "Panic attacks",
      "Insomnia",
      "Stress 0r burnout",
      "Other",
      "I'm not sure",
    ],
    mode: "options",
  },
  {
    question: "Do you currently have any desire to harm yourself or others",
    details: "",
    options: ["Yes", "No"],
    mode: "options",
  },
  {
    question: "What is your gender?",
    details:
      "We ask this question of all of our patients to ensure that we provide you with safe and effective care. We are inclusive of all people",
    options: [
      "Man",
      "Woman",
      "Transgender man",
      "Transgender woman",
      "Genderqueer/non-binary",
      "Agender",
    ],
    mode: "options",
  },
  {
    question: "What was your sex assigned at birth?",
    details: "For example, on your original birth certificate.",
    options: ["Male", "Female"],
    mode: "options",
  },
  {
    question:
      "Do you have or have you ever had any of the following medical conditions",
    options: [
      "Cancer or history of cancer",
      "Diabetes",
      "Enlarged prostate(benign prostate hyperplasia",
      "Glaucoma or family history of narrow angle glaucoma",
      "Hair loss",
      "Heart condition (e.g. heart failure)",
      "Liver disease",
      "Migraines",
    ],
    mode: "options",
  },
  {
    question:
      "Do you have any allergies to medication, dyes, food, or anything else ?",
    options: ["Yes", "No"],
    mode: "options",
  },
];
