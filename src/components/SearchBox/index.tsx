import {
  LogoImage,
  SearchBoxContainer,
  SearchIconStyled,
  SearchInput,
} from "./index.styles";
import LogoSvg from "./logo.svg";

export function SearchBox() {
  return (
    <SearchBoxContainer>
      <LogoImage alt="Logo" src={LogoSvg} />
      <SearchIconStyled />
      <SearchInput name="main-search-input" />
    </SearchBoxContainer>
  );
}
