import { styled } from "@mui/material/styles";

export const TopBarContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  width: "100vw",
  height: "3.5rem",
  position: "fixed",
  top: 0,
  left: 0,
  borderTop: "3px solid",
  borderBottom: "1px solid",
  borderTopColor:
    theme.palette.mode === "light"
      ? theme.palette.secondary.light
      : theme.palette.secondary.dark,
  borderBottomColor: theme.palette.divider,
  backgroundColor: theme.palette.background.paper,
}));

export const SearchContainer = styled("input")(({ theme }) => ({
  width: "50%",
  height: "2rem",
  maxWidth: "40rem",
  minWidth: "23rem",
  fontSize: "0.875rem",
  padding: "0 0.75rem",
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "0.25rem",
  backgroundColor: theme.palette.background.paper,
  transition: "0.2s",

  "&:focus-visible": {
    outline: "none",
    boxShadow: `0 0 ${theme.spacing(1)} skyblue`,
  },

  "&:hover": {
    boxShadow: `0 0 ${theme.spacing(1)} skyblue`,
  },
}));
