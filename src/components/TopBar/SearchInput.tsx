import axios from 'axios';
import React, { useCallback } from 'react';

import { SearchContainer } from '@/components/TopBar/index.styles';
import { Post } from '@/interfaces/Post';

export function SearchInput() {
  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key !== "Enter" || !event.currentTarget.value) {
        return;
      }
      axios.get<Post[]>(import.meta.env.VITE_BACKEND_URL, {
        params: { q: event.currentTarget.value },
      });
    },
    []
  );
  return <SearchContainer name="top-search-input" onKeyDown={onKeyDown} />;
}
