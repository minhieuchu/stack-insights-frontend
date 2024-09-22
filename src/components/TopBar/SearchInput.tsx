import axios from "axios";
import React, { useCallback } from "react";

import { SearchContainer } from "@/components/TopBar/index.styles";
import { Question } from "@/interfaces/Post";
import { setQuestions } from "@/stores";

export function SearchInput() {
  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key !== "Enter" || !event.currentTarget.value) {
        return;
      }
      axios
        .get<Question[]>(import.meta.env.VITE_BACKEND_URL, {
          params: { q: event.currentTarget.value },
        })
        .then(({ data }) => {
          setQuestions(data);
        });
    },
    [],
  );
  return <SearchContainer name="top-search-input" onKeyDown={onKeyDown} />;
}
