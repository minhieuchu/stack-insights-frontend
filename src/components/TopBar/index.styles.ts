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
  color: "#000000",
  borderTop: "3px solid",
  borderBottom: "1px solid",
  borderTopColor: theme.palette.secondary.light,
  borderBottomColor: theme.palette.divider,
}));

export const SearchContainer = styled("input")(({ theme }) => ({
  width: "25rem",
  height: "2.25rem",
  fontSize: "1rem",
  padding: "0 0.75rem",
  color: theme.palette.grey[700],
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "0.25rem",
  backgroundColor: theme.palette.common.white,
}))