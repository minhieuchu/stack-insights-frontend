import { styled } from "@mui/material/styles";

export const TopBarContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
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
