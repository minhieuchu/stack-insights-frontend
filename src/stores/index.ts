import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { Question } from "@/interfaces/Post";

type StackInsightsState = {
  questions: Question[];
};

type StackInsightsActions = {
  setQuestions: (questions: Question[]) => void;
};

type StackInsightsStoreType = StackInsightsState & StackInsightsActions;

export const useStackInsightsStore = create<StackInsightsStoreType>()(
  immer((set) => ({
    // State
    questions: [],

    // Actions
    setQuestions: (questions: Question[]) =>
      set((state) => {
        state.questions = questions;
      }),
  })),
);

export const selectQuestions = (state: StackInsightsStoreType): Question[] =>
  state.questions;

export const { setQuestions } = useStackInsightsStore.getState();
