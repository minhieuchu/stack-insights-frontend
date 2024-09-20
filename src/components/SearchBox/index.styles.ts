import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBoxContainer = styled("div")({
  position: "absolute",
  top: "66%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  "@media screen and (min-height: 768px)": {
    top: "32rem",
  },

  "@media screen and (max-height: 480px)": {
    top: "20rem",
  },
});

export const SearchInput = styled("input")(({ theme }) => ({
  width: "90vw",
  maxWidth: "36rem",
  minWidth: "28rem",
  height: "2.75rem",
  padding: "0 2.5rem",
  paddingRight: "1.25rem",
  fontSize: "1rem",
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.grey[500]}`,
  borderRadius: "1.5rem",
  backgroundColor: theme.palette.background.paper,
  boxSizing: "border-box",
  transition: "0.2s",

  "&:focus-visible": {
    outline: "none",
    boxShadow: `0 0 ${theme.spacing(1)} skyblue`,
  },

  "&:hover": {
    boxShadow: `0 0 ${theme.spacing(1)} skyblue`,
  },
}));

export const SearchIconStyled = styled(SearchIcon)(({ theme }) => ({
  position: "absolute",
  top: "0.75rem",
  left: "0.65rem",
  color: theme.palette.grey[400],
  fontSize: "1.45rem",
}));

export const LogoImage = styled("img")({
  position: "absolute",
  top: "-7.25rem",
  left: "1.35rem",
});

export const SearchButton = styled("div")(({ theme }) => ({
  position: "relative",
  left: "50%",
  width: "6.75rem",
  height: "2.25rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "0.875rem",
  fontWeight: 500,
  color: theme.palette.text.primary,
  transform: "translate(-50%, 1rem)",
  backgroundColor: theme.palette.background.paper,
  borderRadius: "0.5rem",
  boxSizing: "border-box",
  opacity: 0.9,
  cursor: "pointer",
  transition: "0.2s",

  "&:hover": {
    border: `1px solid ${theme.palette.grey[700]}`,
  },
}));
