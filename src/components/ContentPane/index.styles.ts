import { styled } from "@mui/material/styles";

export const PaneContainer = styled("div")(({ theme }) => ({
  position: "fixed",
  top: "3.75rem",
  left: "28vw",
  padding: "2rem",
  color: theme.palette.text.primary,
  width: "calc(100vw - 28vw)",
  minHeight: "calc(100vh - 3.75rem)",
  borderLeft: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.default,
  boxSizing: "border-box",
  transition: "0.2s",

  "@media screen and (max-width: 768px)": {
    left: 0,
    width: "100vw",
    borderLeft: "none",
  },
}));

export const HeaderContainer = styled("div")({
  maxWidth: "64rem",
  width: "100%",

  h2: {
    marginTop: 0,
  },
});

export const ButtonGroupContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "fit-content",
  padding: "0.25rem",
  fontSize: "0.875rem",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "0.5rem",
  "& > div": {
    padding: "0.25rem 0.75rem",
    borderRadius: "0.5rem",
    transition: "background-color 0.2s",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: theme.palette.divider,
    },
  },
}));
