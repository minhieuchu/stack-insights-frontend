import { create } from "zustand";

import { Post } from "@/interfaces/Post";

type StackInsightsState = {
  posts: Post[];
};

type StackInsightsActions = {
  setPosts: (posts: Post[]) => void;
};

type StackInsightsStoreType = StackInsightsState & StackInsightsActions;

export const useStackInsightsStore = create<StackInsightsStoreType>((set) => ({
  posts: [],
  setPosts: (posts: Post[]) => set((state) => ({ ...state, posts })),
}));

export const selectPosts = (state: StackInsightsStoreType): Post[] =>
  state.posts;

export const { setPosts } = useStackInsightsStore.getState();
