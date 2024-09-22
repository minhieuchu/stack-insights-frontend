import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { Post } from "@/interfaces/Post";

type StackInsightsState = {
  posts: Post[];
};

type StackInsightsActions = {
  setPosts: (posts: Post[]) => void;
};

type StackInsightsStoreType = StackInsightsState & StackInsightsActions;

export const useStackInsightsStore = create<StackInsightsStoreType>()(
  immer((set) => ({
    // State
    posts: [],

    // Actions
    setPosts: (posts: Post[]) =>
      set((state) => {
        state.posts = posts;
      }),
  })),
);

export const selectPosts = (state: StackInsightsStoreType): Post[] =>
  state.posts;

export const { setPosts } = useStackInsightsStore.getState();
