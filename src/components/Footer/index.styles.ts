import { styled } from "@mui/material/styles";

export const FooterContainer = styled("div")(({ theme }) => ({
  position: "fixed",
  left: 0,
  bottom: 0,
  width: "100vw",
  height: "2.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "0.875rem",
  fontWeight: 500,
  padding: "0 1.5rem",
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  boxSizing: "border-box",
  borderTop: `1px solid ${theme.palette.divider}`,

  "& > div": {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));
