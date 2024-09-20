import {
  LogoImage,
  SearchBoxContainer,
  SearchButton,
  SearchIconStyled,
  SearchInput,
} from "@/components/SearchBox/index.styles";
import LogoSvg from "@/components/SearchBox/logo.svg";

export function SearchBox() {
  return (
    <SearchBoxContainer>
      <LogoImage alt="Logo" src={LogoSvg} />
      <SearchIconStyled />
      <SearchInput name="main-search-input" />
      <SearchButton>{"Let's search"}</SearchButton>
    </SearchBoxContainer>
  );
}
