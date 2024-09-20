import { TopBarContainer } from "@/components/TopBar/index.styles";
import { SearchInput } from "@/components/TopBar/SearchInput";
import { ThemeSwitch } from "@/components/TopBar/ThemeSwitch";

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
      <ThemeSwitch />
    </TopBarContainer>
  );
}
