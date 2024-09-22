import { Header } from "@/components/ContentPane/Header";
import { PaneContainer } from "@/components/ContentPane/index.styles";
import { selectPosts, useStackInsightsStore } from "@/stores";

export function ContentPane() {
  const posts = useStackInsightsStore(selectPosts);
  return (
    <PaneContainer>
      <Header />
      {posts.map((post) => (
        <div>{post.title ?? ""}</div>
      ))}
    </PaneContainer>
  );
}
