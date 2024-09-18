import { TopBarContainer } from "./index.styles";
import { SearchInput } from "./SearchInput";

export function TopBar() {
  return (
    <TopBarContainer>
      <img
        alt="Stackoverflow"
        src="/stackoverflow.png"
        width={40}
        style={{ borderRadius: "50%" }}
      />
      <SearchInput />
    </TopBarContainer>
  );
}
