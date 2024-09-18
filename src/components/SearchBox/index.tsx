import {
  LogoImage,
  SearchBoxContainer,
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
    </SearchBoxContainer>
  );
}
