import { TopBarContainer } from "./index.styles";
import { Search } from "./Search";

export function TopBar() {
  return (
    <TopBarContainer>
      <img
        alt="Stackoverflow"
        src="/stackoverflow.png"
        width={45}
        style={{ borderRadius: "50%" }}
      />
      <Search />
    </TopBarContainer>
  );
}
